import {Player} from "./src/structures/Player.mjs";
import {Game} from "./src/structures/Game.mjs";
import prompt from 'prompt';
import {getWinner} from "./src/functions/getWinner.mjs";

prompt.start();

const newGame = new Game([new Player("Danil"), new Player("Yan"), new Player("Sergei")]);

const properties = [
    {
        name: 'res',
        validator: /^[y,n\s\-]+$/,
        warning: 'Only (y/n)!',
        description: "Do you need more? (y/n): "
    }
];

(async () => {
    for (let i = 0; i < newGame.playersArr.length; i++) {
        for (let j = 0; j < 2; j++) {
            newGame.playersArr[i].score += newGame.playersArr[i].takeCard(newGame.deck).nominal;
        }
    }
    for (let i = 0; i < newGame.playersArr.length; i++) {

        console.log(newGame.playersArr[i].name + " | " + newGame.playersArr[i].score);

        let response = await prompt.get(properties);

        while (response["res"] !== "n") {
            if (response["res"] === "y") {
                newGame.playersArr[i].score += newGame.playersArr[i].takeCard(newGame.deck).nominal;
            }

            console.log(newGame.playersArr[i].name + " | " + newGame.playersArr[i].score);

            if (newGame.playersArr[i].score > 21) {
                break;
            }

            response = await prompt.get(properties);
        }
        console.log("________")
    }

    console.log("The winner is : " + newGame.playersArr[getWinner(newGame.playersArr)].name);
})();