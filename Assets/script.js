const questions = [
    {
        question: "Commonly used data types DO NOT INCLUDE",
        options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3. Alerts"
    },
    {
        question: "The conditions of an if / else statement is enclosed within ____.",
        options: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        answer: "3. Parentheses"
    },
    {
        question: "Arrays in javascript can be used to store ____.",
        options: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4.  All of the above"],
        answer: "4. All of the above"
    },
    {
        question: "String values must be enclosed within ____ when beginning to assign variables.",
        options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        answer: "3. Quotes"
    },
    {
        question: "A very useful tool for debugging during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript", "2. Terminal / Bash", "3. For Loops", "4. Console Log"],
        answer: "4. Console Log"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const startButton = document.getElementById("start-btn");
const quizDirection = document.getElementById("quiz-start");
const viewHighscore = document.getElementById("highscore");
var timerElement = document.getElementById("timer-count");

var timer;
var timerCount;
var highscore;

let currentQuestion = 0;

function init () {
    getHighscore();
}

function startQuiz () {
    timerCount = 75;
    startButton.style.display = "none";
    quizDirection.style.display = "none";
    startTimer();
    showQuestion();
}

function startTimer () {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount < 1) {
            showEnd();
        }
    }, 1000);
}

function showQuestion () {
    const question = questions[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = questions[currentQuestion].answer;

    if (selectedButton.innerText !== answer) {
        timerCount - 10;
    }

    currentQuestion ++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showEnd();
    }
}

const quizForm = document.getElementById("app");
const quizScore = document.getElementById("score-card");

function showEnd() {
    quizForm.setAttribute("hidden");
    quizScore.removeAttribute("hidden");
}

function setHighscore() {
    highscore.textContent = timerCount;
    localStorage.setItem("highscore", highscore);
}

startButton.addEventListener("click", startQuiz);

viewHighscore.addEventListener("click", viewHighscore);