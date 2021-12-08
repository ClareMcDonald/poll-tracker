export function renderPoll(poll) {
    const pollContainer = document.createElement('div');
    const pollQuestionSpot = document.createElement('div');
    const option1Spot = document.createElement('p');
    const option2Spot = document.createElement('p');
    const option1VotesSpot = document.createElement('p');
    const option2VotesSpot = document.createElement('p');

    pollContainer.classList.add('poll');
    pollQuestionSpot.textContent = poll.question;
    option1Spot.textContent = poll.option1Title;
    option2Spot.textContent = poll.option2Title;
    option1VotesSpot.textConent = poll.option1Votes;
    option2VotesSpot.textContent = poll.option2Votes;

    pollContainer.append(pollQuestionSpot, option1Spot, option2Spot, option1VotesSpot, option2VotesSpot);

    return pollContainer;
}

export function renderOption(name, score) {

}
