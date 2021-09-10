export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    takeCard(deck, currPlayer) {

        const currPlayerScore = currPlayer.querySelector(".player__score");
        const currPlayerCards = currPlayer.querySelector(".player__cards");

        const card = document.createElement("div")
        card.classList.add("player__card");

        card.textContent = `${deck[0].nominal} | ${deck[0].icon} | ${deck[0].suit}`;

        let score = +(currPlayerScore.dataset.score)

        score += deck[0].nominal;

        currPlayerScore.textContent = score;

        deck.splice(0, 1);

        currPlayerCards.append(card);
        currPlayerScore.dataset.score = score
    }
}