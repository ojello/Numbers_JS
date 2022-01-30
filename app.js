'use strict';

// // manipulated the class message
// document.querySelector('.message').textContent = '🥳 Correct Number'

// // selecting the class number and score
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;


// // Input element - to get the value we use the value property
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;


// function - eventHandler will handle the click
// passing in function value as an argument
// defining function here, it will not be called immediately. only will be called as soon as the event happens

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    // when user does not input anything
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number! 🚫'


        // guess is equal to secretNumber
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥳 Correct Number 🦄';

        // display secret number if player guesses right
        document.querySelector('.number').textContent = secretNumber;


        // // changing the background with CSS style
        document.querySelector('body').style.backgroundColor = '#dda0dd';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // guess is greater than secretNumber
    } else if (guess > secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = 'Number is too HIGH, guess again! ⤴️'
            // decrease score
            score--;
            // select score 
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You LOST The Game! 💩'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = 'Number is too LOW, guess again! ⤵️'
            // decrease score
            score--;
            // select score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You LOST The Game! 💩'
            document.querySelector('.score').textContent = 0;
        } 
    }
});

document.querySelector('.again').addEventListener('click', function(){
    // reset score to 20
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    // to add absence of any value
    document.querySelector('.guess').value = '';

// restore bg color
    document.querySelector('body').style.backgroundColor = 'lightblue';
    // restore box size
    document.querySelector('.number').style.width = '15rem';

});

