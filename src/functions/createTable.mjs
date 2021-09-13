import {createCard} from "./createCard.mjs";

export const createTable = (playersArr, deck) => {
    const players = document.querySelectorAll(".player")
    const playersCards = document.querySelectorAll(".player__cards");

    for (let i = 0; i < playersArr.length; i++) {
        players[i].style.display = "block";

        const currPlayerScore = players[i].querySelector(".player__score");
        const currPlayerName = players[i].querySelector(".player__name");
        let score = 0;

        for (let j = 0; j < 2; j++) {
            deck.splice(0, 1);
            playersCards[i].append(createCard(deck[0].icon, deck[0].src));
            score += deck[0].nominal;

            currPlayerName.textContent = `${playersArr[i].name}`
        }

        currPlayerScore.textContent = score;
        playersArr[i].score = score;
        currPlayerScore.dataset.name = playersArr[i].name;
    }
}