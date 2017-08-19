import Cell from "./cell"

export default class Board {
    constructor(gameSettings) {
        const { width, height } = gameSettings;
        this.height = height;
        this.width = width;
        this.cells = [];
    }

    drawBoard(cellInitialLifeChance) {
        var result = "<table>";
        for (let i = 0; i < this.height; i++) {
            result += "<tr>";
            for (let j = 0; j < this.width; j++) {
                let isAlive = Math.random() <= cellInitialLifeChance;
                this.cells.push(new Cell({ col: i, row: j, isAlive }));

                let lifeStatus = isAlive ? 'alive' : '';
                result += `<td class='${lifeStatus}' col=${i} row=${j} />`;
            }
            result += "</tr>";
        }
        result += "</table>";

        $("#game-of-life").append(result);
    }

    playTurn() {
        this.cells.forEach(cell => cell.IsAliveOldTurn = cell.IsAliveNewTurn);
        for (var cell of this.cells) {
            let isCellAlive = this.isCellAliveNextTurn(cell);
            cell.IsAliveNewTurn = isCellAlive;

            isCellAlive ? $(`td[col="${cell.Col}"][row="${cell.Row}"]`).addClass('alive') :
                $(`td[col="${cell.Col}"][row="${cell.Row}"]`).removeClass('alive');
        }
    }

    isCellAliveNextTurn(cell) {
        const count = this.getNeighboursCount(cell);
        return count === 3 || count === 2 && cell.IsAliveOldTurn;
    }

    getNeighboursCount(cell) {
        const row = cell.Row;
        const col = cell.Col;

        const neighboursCoordinates = this.getValidNeighbours(col, row);

        const neighBours = neighboursCoordinates.map(
            item => this.cells.find(cell => cell.Col === col + item.y &&
                cell.Row === row + item.x));

        return neighBours.filter(cell => cell.IsAliveOldTurn === true).length;
    }

    getValidNeighbours(col, row) {
        const deltas = [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 },
        { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }]

        return deltas.filter(item =>
            col + item.y >= 0 && col + item.y < this.height &&
            row + item.x >= 0 && row + item.x < this.width
        );
    }

    isGameOver() {
        if (this.cells.every(cell => cell.IsAliveNewTurn === false)) {
            $("#message").text("Game Over - all the cells are dead!");
            return true;
        }

        const repeatedTurn = this.cells.every(cell => cell.IsAliveNewTurn === cell.IsAliveOldTurn);
        if (repeatedTurn) {
            $("#message").text("Game Over - turn is repeated!");
            return true;
        }

        return false;
    }
}

