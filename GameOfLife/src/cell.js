export default class Cell {
    constructor(cellSettings) {
        const { col, row, isAlive } = cellSettings;
        this.col = col;
        this.row = row;
        this.isAliveOldTurn = false;
        this.isAliveNewTurn = isAlive;
    }

    get IsAliveNewTurn() {
        return this.isAliveNewTurn;
    }

    set IsAliveNewTurn(isAlive) {
        this.isAliveNewTurn = isAlive;
    }

    get IsAliveOldTurn() {
        return this.isAliveOldTurn;
    }

    set IsAliveOldTurn(isAlive) {
        this.isAliveOldTurn = isAlive;
    }

    get Col() {
        return this.col;
    }

    get Row() {
        return this.row;
    }

}