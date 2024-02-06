let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const againButton = document.getElementById('again-btn');
const scoreElement = document.getElementById('score');


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    scoreElement.hidden=true;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }

    const totalQuestions = questions.length;

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }

    
}

function updateScore() {
    scoreElement.innerText = `Score: ${score}`;
}

function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsContainer.innerHTML = "";
    nextButton.hidden = true;
    scoreElement.hidden=false;
    updateScore();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
   
    
}
function restart() {
    currentQuestionIndex = 0;
     score = 0;
     loadQuestion();
     nextButton.hidden = false;
}

loadQuestion();
 