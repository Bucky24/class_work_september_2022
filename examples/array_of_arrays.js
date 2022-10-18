var questions = [
    'question1',
    'question2',
    'question3',
];

var answers = [
    [
        'answer1-1',
        'answer1-2',
        'answer1-3',
    ],
    [
        'answer2-1',
        'answer2-2',
        'answer2-3',
    ],
    [
        'answer3-1',
        'answer3-2',
        'answer3-3',
    ],
];

function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);

    var activeQuestion = questions[randomIndex];
    var activeAnswers = answers[randomIndex];

    return {
        question: activeQuestion,
        answers: activeAnswers,
    }
}

function renderQuestion() {
    var questionData = getRandomQuestion();

    // do html stuff
}

button.addEventListener("click", renderQuestion);
