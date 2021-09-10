import {getDeck} from "../functions/getDeck.js";
import {shuffle} from "../functions/deckShuffle.js";

export class Game {
    constructor(playersArr) {
        this.playersArr = playersArr;
        this.currentPlayersCount = 0;
        this.deck = shuffle(getDeck());
        this.createTable();
        this.gameStart();
    }

    createTable() {
        const players = document.querySelectorAll(".player")
        const card = document.createElement("div")

        card.classList.add("player__card");

        const playersCards = document.querySelectorAll(".player__cards");
        for (let i = 0; i < this.playersArr.length; i++) {

            this.currentPlayersCount++;

            if (i > 4) {
                return;
            }

            players[i].style.display = "block";

            const currPlayerScore = players[i].querySelector(".player__score");
            const currPlayerName = players[i].querySelector(".player__name");
            let score = 0;

            for (let j = 0; j < 2; j++) {
                const card = document.createElement("div")
                card.classList.add("player__card");
                card.textContent = `${this.deck[0].nominal} | ${this.deck[0].icon} | ${this.deck[0].suit}`
                score += this.deck[0].nominal;
                this.deck.splice(0, 1);
                playersCards[i].append(card);

                currPlayerName.textContent = `${this.playersArr[i].name}`
            }

            currPlayerScore.textContent = score;
            currPlayerScore.dataset.score = score;

            currPlayerScore.dataset.name = this.playersArr[i].name;
        }
    }

    gameStart() {
        const players = document.querySelectorAll(".player");
        const newCard = document.querySelector(".manipulation__deck");
        const stopBtn = document.querySelector(".manipulation__btn");

        let isEnough = false;
        let index = 0;
        console.log(players)


        players[index].classList.add("player--active");
        let currPlayerScore = players[index].querySelector(".player__score");

        newCard.addEventListener('click', () => {
            isEnough = false;
            if (currPlayerScore.dataset.score < 21) {
                this.playersArr[index].takeCard(this.deck, players[index]);
            }
            if (currPlayerScore.dataset.score > 21) {
                players[index].classList.remove("player--active");
                index++;
                players[index].classList.add("player--active");
                currPlayerScore = players[index].querySelector(".player__score")

            }
            if (isEnough) {
                players[index].classList.remove("player--active")
                console.log("is true")
            }

            if (index === this.currentPlayersCount){
                stopBtn.disabled = true;
                this.getWinner()
            }

        })

        stopBtn.addEventListener('click', (e) => {
            isEnough = true;
            players[index].classList.remove("player--active");
            index++;
            players[index].classList.add("player--active");
            if (index === this.currentPlayersCount){
                stopBtn.disabled = true;
                this.getWinner()
            }
            currPlayerScore = players[index].querySelector(".player__score");
        })
    }

    getWinner(){
        const scores = document.querySelectorAll(".player__score");

        const scoresArr = [];

        scores.forEach(el => scoresArr.push(+(el.dataset.score)));

        let max = 0;
        let winnerName = '';
        for (let i = 0; i < this.playersArr.length; i++) {
            this.playersArr[i].score = scoresArr[i];

            if (this.playersArr[i].score > 21){
                continue;
            }
            if (+(this.playersArr[i].score) > max) {
                max = +(this.playersArr[i].score);
                winnerName = this.playersArr[i].name;
            }
        }
        if (winnerName === '') {
            alert("The last player is not attentive!!")
        }
        if (winnerName !== ""){
            alert("CONGRATULATIONS!!! " + winnerName + " is winner!")
        }

    }

}