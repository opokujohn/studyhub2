// Quiz System
const quizData = {
    math: {
        title: "Mathematics Quiz",
        questions: [
            {
                question: "What is 15 + 27?",
                options: ["40", "42", "45", "48"],
                correct: 1
            },
            {
                question: "What is the square root of 64?",
                options: ["6", "7", "8", "9"],
                correct: 2
            },
            {
                question: "If x + 5 = 12, what is x?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is 8 × 7?",
                options: ["54", "56", "58", "60"],
                correct: 1
            },
            {
                question: "What is the area of a rectangle with length 6 and width 4?",
                options: ["20", "22", "24", "26"],
                correct: 2
            },
            {
                question: "What is 144 ÷ 12?",
                options: ["10", "11", "12", "13"],
                correct: 2
            },
            {
                question: "What is 2³ (2 to the power of 3)?",
                options: ["6", "8", "9", "12"],
                correct: 1
            },
            {
                question: "What is the perimeter of a square with side length 5?",
                options: ["15", "20", "25", "30"],
                correct: 1
            },
            {
                question: "What is 0.5 as a fraction?",
                options: ["1/3", "1/2", "2/3", "3/4"],
                correct: 1
            },
            {
                question: "What is 25% of 80?",
                options: ["15", "20", "25", "30"],
                correct: 1
            }
        ]
    },
    science: {
        title: "Science Quiz",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correct: 0
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Mercury", "Earth", "Mars"],
                correct: 1
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
                correct: 2
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                correct: 0
            },
            {
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the hardest natural substance?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Brain", "Liver", "Lungs", "Skin"],
                correct: 3
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            }
        ]
    },
    history: {
        title: "History Quiz",
        questions: [
            {
                question: "In which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correct: 1
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "Which ancient wonder was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Statue of Zeus"],
                correct: 1
            },
            {
                question: "The Berlin Wall fell in which year?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
                correct: 1
            },
            {
                question: "The Declaration of Independence was signed in which year?",
                options: ["1774", "1775", "1776", "1777"],
                correct: 2
            },
            {
                question: "Who painted the ceiling of the Sistine Chapel?",
                options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
                correct: 2
            },
            {
                question: "Which war was fought between the North and South in America?",
                options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
                correct: 1
            },
            {
                question: "The Great Wall of China was built to keep out which people?",
                options: ["Mongols", "Japanese", "Koreans", "Russians"],
                correct: 0
            },
            {
                question: "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?",
                options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
                correct: 2
            }
        ]
    },
    english: {
        title: "English Quiz",
        questions: [
            {
                question: "What is the plural of 'child'?",
                options: ["childs", "children", "childes", "child"],
                correct: 1
            },
            {
                question: "Which word is a synonym for 'happy'?",
                options: ["sad", "angry", "joyful", "tired"],
                correct: 2
            },
            {
                question: "What type of word is 'quickly'?",
                options: ["noun", "verb", "adjective", "adverb"],
                correct: 3
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the past tense of 'run'?",
                options: ["runned", "ran", "running", "runs"],
                correct: 1
            },
            {
                question: "Which sentence is grammatically correct?",
                options: ["Me and him went to the store", "Him and I went to the store", "He and I went to the store", "I and he went to the store"],
                correct: 2
            },
            {
                question: "What is a metaphor?",
                options: ["A direct comparison using 'like' or 'as'", "A comparison without using 'like' or 'as'", "An exaggeration", "A sound effect"],
                correct: 1
            },
            {
                question: "Which word is spelled correctly?",
                options: ["recieve", "receive", "receve", "receeve"],
                correct: 1
            },
            {
                question: "What is the main character in a story called?",
                options: ["antagonist", "protagonist", "narrator", "author"],
                correct: 1
            },
            {
                question: "Which punctuation mark ends a question?",
                options: [".", "!", "?", ";"],
                correct: 2
            }
        ]
    }
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// Make functions globally accessible
window.startQuiz = function(subject) {
    currentQuiz = quizData[subject];
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = new Date();
    
    document.getElementById('quiz-selection').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    document.getElementById('quiz-title').textContent = currentQuiz.title;
    
    showQuestion();
};

window.nextQuestion = function() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
};

window.previousQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
};

window.retakeQuiz = function() {
    const subject = Object.keys(quizData).find(key => quizData[key] === currentQuiz);
    startQuiz(subject);
};

window.backToQuizzes = function() {
    document.getElementById('quiz-selection').classList.remove('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    currentQuiz = null;
    currentQuestionIndex = 0;
    userAnswers = [];
};

function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const questionCounter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    const nextBtn = document.getElementById('next-btn');
    
    // Update progress
    questionCounter.textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`;
    
    // Show question
    questionText.textContent = question.question;
    
    // Show answers
    answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = option;
        answerDiv.onclick = () => selectAnswer(index);
        
        // Restore previous selection
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Update next button
    nextBtn.textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next';
    
    // Update previous button visibility
    const prevBtn = document.querySelector('.quiz-controls .btn-secondary');
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
}

function selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = answerIndex;
}

function finishQuiz() {
    // Calculate score
    let correctAnswers = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctAnswers++;
        }
    });
    
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Save score if user is logged in
    if (window.authSystem && window.authSystem.currentUser) {
        const subject = Object.keys(quizData).find(key => quizData[key] === currentQuiz);
        window.authSystem.saveQuizScore(subject, correctAnswers, totalQuestions);
    }
    
    // Show results
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('total-questions').textContent = totalQuestions;
    
    // Show feedback message
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent work! 🎉';
    } else if (percentage >= 70) {
        message = 'Good job! 👍';
    } else if (percentage >= 50) {
        message = 'Not bad, keep studying! 📚';
    } else {
        message = 'Keep practicing! 💪';
    }
    
    // Show message in console for now
    console.log(message);
}

