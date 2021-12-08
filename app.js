// import functions and grab DOM elements
const form = document.querySelector('form');

const questionEl = document.getElementById('create-question');
const question1Title = document.getElementById('current-option-1');
const question1Votes = document.getElementById('current-option-1-votes');
const question2Title = document.getElementById('current-option-2');
const question2Votes = document.getElementById('current-option-2-votes');

const createPollButton = document.getElementById('create-poll');
const Vote1Button = document.getElementById('vote-1');
const Vote2Button = document.getElementById('vote-2');
const Undo1Button = document.getElementById('undo-1');
const Undo2Button = document.getElementById('undo-2');
const closePollButton = document.getElementById('close-poll-button');

const pastPollsEl = document.getElementById('past-polls');


console.log(
    form,
    questionEl,
    question1Title,
    question1Votes,
    question2Title,
    question2Votes,
    createPollButton,
    Vote1Button,
    Vote2Button,
    Undo1Button,
    Undo2Button,
    closePollButton,
    pastPollsEl
);

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
