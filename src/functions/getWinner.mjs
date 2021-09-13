export const getWinner = (playersArr) => {
    let max = 0;
    let winner;
    let index = null;
    for (let i = 0; i < playersArr.length; i++) {
        if (playersArr[i].score > 21) {
            continue;
        }

        if (playersArr[i].score > max) {
            max = playersArr[i].score;
            winner = playersArr[i];
            index = i;
        }
    }

    return index;
}