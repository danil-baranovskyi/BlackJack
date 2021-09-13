import {getWinner} from "./getWinner.mjs";
import {createCard} from "./createCard.mjs";

export const gameStart = (playersArr, deck) => {
    const players = document.querySelectorAll(".player");

    const newCard = document.querySelector(".manipulation__deck");
    const stopBtn = document.querySelector(".manipulation__btn");

    let isEnough = false;
    let index = 0;

    players[index].classList.add("player--active");

    newCard.addEventListener('click', () => {
        isEnough = false;

        if (playersArr[index].score < 21) {

            const currPlayerScore = players[index].querySelector(".player__score");
            const currPlayerCards = players[index].querySelector(".player__cards");

            const tookCard = playersArr[index].takeCard(deck);

            playersArr[index].score += tookCard.nominal;

            currPlayerScore.textContent = playersArr[index].score;

            currPlayerCards.append(createCard(tookCard.icon, tookCard.src));

        }

        if (playersArr[index].score > 21 && index < playersArr.length) {

            players[index].classList.remove("player--active");
            index++;
            if (index >= playersArr.length) {

                const winnerId = getWinner(playersArr);

                stopBtn.disabled = true;
                newCard.disabled = true;

                if (winnerId === null) {
                    alert("Nobody win");
                    return;
                }
                players[winnerId].classList.add("player--active");

                alert(playersArr[winnerId].name);
                return;
            }

            players[index].classList.add("player--active");
        }
    })

    stopBtn.addEventListener('click', (e) => {
        isEnough = true;

        players[index].classList.remove("player--active");

        index++;

        if (index === playersArr.length) {
            stopBtn.disabled = true;
            newCard.disabled = true;
            const winnerId = getWinner(playersArr);

            players[winnerId].classList.add("player--active");

            alert(playersArr[winnerId].name);
            return;
        }

        players[index].classList.add("player--active");
    })


}