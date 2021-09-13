export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    takeCard(deck) {
        const newCard = deck[0];
        deck.splice(0, 1);
        return newCard;
    }
}