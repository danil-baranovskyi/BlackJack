import {Card} from "../structures/Card.js";

let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(new Card(values[x], suits[i]));
        }
    }

    return deck;
}