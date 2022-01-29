'use strict';

// // manipulated the class message
// document.querySelector('.message').textContent = '🥳 Correct Number'

// // selecting the class number and score
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;


// // Input element - to get the value we use the value property
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;



const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;




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

        // // changing the background with CSS style
        document.querySelector('body').style.backgroundColor = '#dda0dd';

        document.querySelector('.number').style.width = '30rem';

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

