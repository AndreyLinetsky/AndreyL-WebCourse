import GameOfLife from "./gameOfLife"

const init = (initialLifeChance) => {
    game.init(initialLifeChance);
}

$("button").click(() => {
    $("#message").text("Game of life is on!");
    $("button").hide();
    game.startGame();
})

const game = new GameOfLife({ width: 20, height: 20 });
const initialLifeChance = 0.3;
init(initialLifeChance);





