// Sample questions data
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        answer: "Da Vinci"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// DOM elements
const quizCard = document.querySelector('.quiz-card');
const resultCard = document.querySelector('.result-card');
const questionCount = document.querySelector('.question-count');
const scoreDisplay = document.querySelector('.score-display');
const questionText = document.querySelector('.question-text');
const answersContainer = document.querySelector('.answers-container');
const progressFill = document.querySelector('.progress-fill');

// Initialize quiz
function initQuiz() {
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = questions[currentQuestion];
    questionCount.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    questionText.textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Clear and create answer buttons
    answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            ${option}
        `;
        button.addEventListener('click', () => handleAnswer(option, button));
        answersContainer.appendChild(button);
    });
}

// Handle answer click
function handleAnswer(option, button) {
    if (selectedAnswer) return;
    
    const question = questions[currentQuestion];
    selectedAnswer = option;
    
    // Check if answer is correct
    const isCorrect = option === question.answer;
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    
    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML.includes(question.answer)) {
            btn.classList.add('correct');
        }
    });
    
    // Update score display
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Move to next question or show result
    setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            currentQuestion = nextQuestion;
            selectedAnswer = null;
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// Show result
function showResult() {
    quizCard.style.display = 'none';
    resultCard.style.display = 'block';
    
    const percentage = (score / questions.length) * 100;
    
    // Update result elements
    document.querySelector('.score-number').textContent = score;
    document.querySelector('.score-total').textContent = `/${questions.length}`;
    document.querySelector('.result-details p:first-child strong').textContent = `${percentage.toFixed(1)}%`;
    document.querySelector('.result-details p:nth-child(2) strong').textContent = score;
    document.querySelector('.result-details p:nth-child(3) strong').textContent = questions.length - score;
    
    // Set message based on score
    let message = '';
    if (percentage >= 80) message = "Excellent! 🎉";
    else if (percentage >= 60) message = "Good Job! 👍";
    else if (percentage >= 40) message = "Fair Effort! 💪";
    else message = "Keep Practicing! 📚";
    
    document.querySelector('.result-message').textContent = message;
}

// Restart quiz
document.querySelector('.restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    quizCard.style.display = 'block';
    resultCard.style.display = 'none';
    showQuestion();
});

// Start the quiz
initQuiz();