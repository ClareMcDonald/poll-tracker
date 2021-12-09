// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const form = document.querySelector('form');

const questionEl = document.getElementById('create-question');
const option1TitleEl = document.getElementById('current-option-1');
const option1VotesEl = document.getElementById('current-option-1-votes');
const option2TitleEl = document.getElementById('current-option-2');
const option2VotesEl = document.getElementById('current-option-2-votes');

const createPollButton = document.getElementById('create-poll');
const vote1Button = document.getElementById('vote-1');
const vote2Button = document.getElementById('vote-2');
const undo1Button = document.getElementById('undo-1');
const undo2Button = document.getElementById('undo-2');
const closePollButton = document.getElementById('close-poll-button');

const pastPollsEl = document.getElementById('past-polls');


/* console.log(
    form,
    questionEl,
    question1TitleEl,
    question1VotesEl,
    question2TitleEl,
    question2VotesEl,
    createPollButton,
    vote1Button,
    vote2Button,
    undo1Button,
    undo2Button,
    closePollButton,
    pastPollsEl
); */

// let state
let question = '';
let option1Title = '';
let option2Title = '';
let option1Votes = 0;
let option2Votes = 0;

let allPolls = [];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
  
    question = data.get('create-question');
    option1Title = data.get('create-option-1');
    option2Title = data.get('create-option-2');


    //renderPoll(poll);
    displayCurrentPoll();
});

vote1Button.addEventListener('click', () => {
    option1Votes++;

    option1VotesEl.textContent = option1Votes;
});

vote2Button.addEventListener('click', () => {
    option2Votes++;

    option2VotesEl.textContent = option2Votes;
});

undo1Button.addEventListener('click', () => {
    option1Votes--;

    option1VotesEl.textContent = option1Votes;
});

undo2Button.addEventListener('click', () => {
    option2Votes--;
  
    option2VotesEl.textContent = option2Votes;
});

closePollButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();
  
    resetState();

    allPolls.push(poll);
    displayAllPolls();
});


function makePoll() {
  
    return {
        question: question,
        option1Title: option1Title,
        option2Title: option2Title,
        option1Votes: option1Votes,
        option2Votes: option2Votes
    };
  
}

function displayCurrentPoll() {
    questionEl.textContent = question;
    option1TitleEl.textContent = option1Title;
    option2TitleEl.textContent = option2Title;
    option1VotesEl.textContnet = option1Votes;
    option2VotesEl.textConent = option2Votes;
}

function displayAllPolls() {
    pastPollsEl.textContent = '';
  
    for (let poll of allPolls) {
        const pollDisplay = renderPoll(poll);
        pastPollsEl.append(pollDisplay);
    }
}

function resetState() {
    question = '';
    option1Title = '';
    option2Title = '';
    option1Votes = 0;
    option2Votes = 0;
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
