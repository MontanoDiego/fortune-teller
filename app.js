// This is an array of answers for Fortune Teller to reference
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// Get DOM Elements

//elements
const submitButton = document.getElementById('submit');
const question = document.getElementById('question');
const resetBtn = document.getElementById('resetBtn');
const questionDisplay = document.getElementById('questionDisplay');
const answer = document.getElementById('answer');

//sections
const askingSection = document.getElementById('askingSec');
const questionSection = document.getElementById('questionSection');
const answeringSection = document.getElementById('answeringSec');

// Events

// sets submit button functionality
submitButton.addEventListener('click', () => {
    const savedQuestion = question.value;
    questionDisplay.textContent = savedQuestion;
    document.getElementById('question').value = '';
    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];
    answer.textContent = randomChoice;
    toggleHide();
});
// sets consult again button functionality
resetBtn.addEventListener('click', () => {
    toggleHide();
});
// defines hiding toggling function
function toggleHide() {
    askingSection.classList.toggle('hide');
    questionSection.classList.toggle('hide');
    answeringSection.classList.toggle('hide');
}