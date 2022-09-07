let number = [1, 2, 3, 4, J, 6, 7, 8, 9, K];
let cards = ['♦', '♥', '♠ ', ' ♣'];

function displayCard(){
    let singlenumber = numbers[Math.floor(Math.random() * numbers.length)];
    let singcard = cards[Math.floor(Math.random() * cards.length)];
    let showCard = singleCard + "    " + singleNumber;

    let elemento = document.querySelector(".container");


    elemento.innerHTML = numbers

}


