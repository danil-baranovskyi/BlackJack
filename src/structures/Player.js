export class Player {
    constructor(name, cardsArr) {
        this.name = name;
        this.cardsArr = cardsArr;
    }

    takeCard (card) {
        this.cardsArr.push(card);
    }
}