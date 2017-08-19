import Board from "./board"

export default class GameOfLife {
    constructor(gameSettings) {
        this.board = new Board(gameSettings);
    }

    init(cellInitialLifeChance) {
        this.board.drawBoard(cellInitialLifeChance);
    }

    startGame() {
        const interval = setInterval(() => {
            if(!this.board.isGameOver()) {
                this.board.playTurn();
            }
            else{
                clearInterval(interval);
            }
        }, 2000)
    }
}

