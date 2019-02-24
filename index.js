//change dice1 images as page refreshes
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var dice1 = document.querySelector(".img1");
var attribute1 = dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");


//change dice2 images as page refreshes
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var dice2 = document.querySelector(".img2");
var attribute2 = dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");



//Change text on h1 if dice1 or dice2 is higher to set the winner
var title = document.querySelector('h1');
if(randomNumber1>randomNumber2) {
    title.innerText = "🚩Player 1 Wins";
} else if (randomNumber1<randomNumber2) {
    title.innerText = "Player 2 Wins🚩";
} else {
    title.innerText = "Draw!";
}