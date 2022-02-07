const { objDisplay } = require("chai/lib/chai/utils")

// Code your solutions in this file
function writeCards(arrayNames, event) {
    let thankYouCards = []
    for (let i = 0; i < arrayNames.length; i++) {
        thankYouCards.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}
function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber)
}