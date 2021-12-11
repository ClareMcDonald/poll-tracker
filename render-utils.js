export function renderPoll(poll) {
    const pollContainer = document.createElement('div');
    const pollQuestionSpot = document.createElement('div');
    const option1Div = renderOption(poll.option1Title, poll.option1Votes);
    const option2Div = renderOption(poll.option2Title, poll.option2Votes);
    //const option1Spot = document.createElement('p');
    //const option2Spot = document.createElement('p');
    //const option1VotesSpot = document.createElement('p');
    //const option2VotesSpot = document.createElement('p');

    pollContainer.classList.add('poll');
    pollQuestionSpot.textContent = poll.question;
    //option1Spot.textContent = poll.option1Title;
    //option2Spot.textContent = poll.option2Title;
    //option1VotesSpot.textConent = poll.option1Votes;
    //option2VotesSpot.textContent = poll.option2Votes;

    //pollContainer.append(pollQuestionSpot, option1Spot, option2Spot, option1VotesSpot, option2VotesSpot);

    pollContainer.append(pollQuestionSpot, option1Div, option2Div);
    console.log(pollContainer, 'pollContainer')
    return pollContainer;
}

export function renderOption(option, votes) {
    const optionDiv = document.createElement('div');
    const optionSpot = document.createElement('p');
    const optionVotesSpot = document.createElement('p');

    optionSpot.textContent = option;
    optionVotesSpot.textContent = votes;
    
    optionDiv.append(optionSpot, optionVotesSpot);

    return optionDiv;
}
