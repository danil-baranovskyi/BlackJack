import {getDeck} from "../functions/getDeck.mjs";
import {shuffle} from "../functions/deckShuffle.mjs";

export class Game {
    constructor(playersArr) {
        this.playersArr = playersArr;
        this.deck = shuffle(getDeck());
    }
}