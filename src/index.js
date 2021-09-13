import "./styles/main.scss";
import {Game} from "./structures/Game.mjs";
import {Player} from "./structures/Player.mjs";
import {createTable} from "./functions/createTable.mjs";
import {gameStart} from "./functions/gameStart.mjs";

const newGame = new Game([new Player("Danil"), new Player("Yan"), new Player("Sergei"), new Player("fsdfds")]);

createTable(newGame.playersArr, newGame.deck);
gameStart(newGame.playersArr, newGame.deck);
