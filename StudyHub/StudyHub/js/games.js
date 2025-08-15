// Educational Games System

// Memory Match Game
const memoryGameData = [
    { id: 1, text: 'H2O', pair: 'Water' },
    { id: 2, text: 'Water', pair: 'H2O' },
    { id: 3, text: 'CO2', pair: 'Carbon Dioxide' },
    { id: 4, text: 'Carbon Dioxide', pair: 'CO2' },
    { id: 5, text: 'NaCl', pair: 'Salt' },
    { id: 6, text: 'Salt', pair: 'NaCl' },
    { id: 7, text: 'O2', pair: 'Oxygen' },
    { id: 8, text: 'Oxygen', pair: 'O2' },
    { id: 9, text: 'DNA', pair: 'Genetic Code' },
    { id: 10, text: 'Genetic Code', pair: 'DNA' },
    { id: 11, text: 'Photosynthesis', pair: 'Plant Energy' },
    { id: 12, text: 'Plant Energy', pair: 'Photosynthesis' }
];

// Word Builder Game
const wordGameData = [
    { word: 'SCIENCE', hint: 'Study of the natural world', scrambled: 'CEISENC' },
    { word: 'HISTORY', hint: 'Study of past events', scrambled: 'YROTSIH' },
    { word: 'MATHEMATICS', hint: 'Study of numbers and shapes', scrambled: 'SCITAMEHTAM' },
    { word: 'LITERATURE', hint: 'Written works of art', scrambled: 'ERUTARETIL' },
    { word: 'GEOGRAPHY', hint: 'Study of Earth and its features', scrambled: 'YHPARGOGE' },
    { word: 'BIOLOGY', hint: 'Study of living organisms', scrambled: 'YGOLOIB' },
    { word: 'CHEMISTRY', hint: 'Study of matter and its properties', scrambled: 'YRTSIMEHC' },
    { word: 'PHYSICS', hint: 'Study of matter and energy', scrambled: 'SCISYHP' },
    { word: 'EDUCATION', hint: 'Process of learning and teaching', scrambled: 'NOITACUDE' },
    { word: 'KNOWLEDGE', hint: 'Information and understanding', scrambled: 'EGDELWONK' }
];

let memoryGame = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    timer: null,
    startTime: null
};

let wordGame = {
    currentWord: null,
    score: 0,
    level: 1,
    wordsCompleted: 0
};

// Make functions globally accessible
window.startGame = function(gameType) {
    document.getElementById('games-selection').classList.add('hidden');
    
    if (gameType === 'memory') {
        document.getElementById('memory-game').classList.remove('hidden');
        initMemoryGame();
    } else if (gameType === 'word') {
        document.getElementById('word-game').classList.remove('hidden');
        initWordGame();
    }
};

window.backToGames = function() {
    document.getElementById('games-selection').classList.remove('hidden');
    document.getElementById('memory-game').classList.add('hidden');
    document.getElementById('word-game').classList.add('hidden');
    
    // Reset games
    resetMemoryGame();
    resetWordGame();
};

window.checkWord = function() {
    const userAnswer = document.getElementById('word-answer').value.toUpperCase().trim();
    const feedback = document.getElementById('word-feedback');
    
    if (userAnswer === wordGame.currentWord.word) {
        // Correct answer
        feedback.textContent = 'Correct! Well done! 🎉';
        feedback.className = 'word-feedback correct';
        
        wordGame.score += wordGame.level * 10;
        wordGame.wordsCompleted++;
        
        // Level up every 3 words
        if (wordGame.wordsCompleted % 3 === 0) {
            wordGame.level++;
            document.getElementById('word-level').textContent = wordGame.level;
        }
        
        document.getElementById('word-score').textContent = wordGame.score;
        
        // Save progress if user is logged in
        if (window.authSystem && window.authSystem.currentUser) {
            window.authSystem.saveGameProgress('word', {
                score: wordGame.score,
                level: wordGame.level,
                wordsCompleted: wordGame.wordsCompleted,
                lastPlayed: new Date().toISOString()
            });
        }
        
        // Next word after delay
        setTimeout(nextWord, 2000);
    } else {
        // Incorrect answer
        feedback.textContent = 'Try again! 🤔';
        feedback.className = 'word-feedback incorrect';
        
        // Clear input after delay
        setTimeout(() => {
            document.getElementById('word-answer').value = '';
            feedback.textContent = '';
            feedback.className = 'word-feedback';
        }, 1500);
    }
};

// Memory Match Game Functions
function initMemoryGame() {
    resetMemoryGame();
    
    // Shuffle cards
    memoryGame.cards = [...memoryGameData].sort(() => Math.random() - 0.5);
    
    // Create game grid
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    
    memoryGame.cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.index = index;
        cardElement.textContent = '?';
        cardElement.onclick = () => flipCard(index);
        grid.appendChild(cardElement);
    });
    
    // Start timer
    memoryGame.startTime = new Date();
    memoryGame.timer = setInterval(updateMemoryTimer, 1000);
}

function flipCard(index) {
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    const card = memoryGame.cards[index];
    
    // Don't flip if already flipped or matched
    if (cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) {
        return;
    }
    
    // Don't flip if two cards are already flipped
    if (memoryGame.flippedCards.length >= 2) {
        return;
    }
    
    // Flip the card
    cardElement.classList.add('flipped');
    cardElement.textContent = card.text;
    memoryGame.flippedCards.push({ index, card, element: cardElement });
    
    // Check for match if two cards are flipped
    if (memoryGame.flippedCards.length === 2) {
        memoryGame.moves++;
        document.getElementById('moves').textContent = memoryGame.moves;
        
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const [card1, card2] = memoryGame.flippedCards;
    
    if (card1.card.pair === card2.card.text || card2.card.pair === card1.card.text) {
        // Match found
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        memoryGame.matchedPairs++;
        
        // Check if game is complete
        if (memoryGame.matchedPairs === memoryGameData.length / 2) {
            clearInterval(memoryGame.timer);
            setTimeout(() => {
                alert(`Congratulations! You completed the game in ${memoryGame.moves} moves!`);
                
                // Save progress if user is logged in
                if (window.authSystem && window.authSystem.currentUser) {
                    window.authSystem.saveGameProgress('memory', {
                        bestMoves: memoryGame.moves,
                        completedAt: new Date().toISOString()
                    });
                }
            }, 500);
        }
    } else {
        // No match - flip cards back
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
        card1.element.textContent = '?';
        card2.element.textContent = '?';
    }
    
    memoryGame.flippedCards = [];
}

function updateMemoryTimer() {
    const elapsed = Math.floor((new Date() - memoryGame.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetMemoryGame() {
    memoryGame.cards = [];
    memoryGame.flippedCards = [];
    memoryGame.matchedPairs = 0;
    memoryGame.moves = 0;
    
    if (memoryGame.timer) {
        clearInterval(memoryGame.timer);
    }
    
    document.getElementById('moves').textContent = '0';
    document.getElementById('timer').textContent = '00:00';
}

// Word Builder Game Functions
function initWordGame() {
    resetWordGame();
    nextWord();
}

function nextWord() {
    // Select random word
    const availableWords = wordGameData.filter(w => w !== wordGame.currentWord);
    wordGame.currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    // Display word
    document.getElementById('word-hint').textContent = wordGame.currentWord.hint;
    document.getElementById('scrambled-word').textContent = wordGame.currentWord.scrambled;
    document.getElementById('word-answer').value = '';
    document.getElementById('word-feedback').textContent = '';
    document.getElementById('word-feedback').className = 'word-feedback';
    
    // Focus on input
    document.getElementById('word-answer').focus();
}



function resetWordGame() {
    wordGame.currentWord = null;
    wordGame.score = 0;
    wordGame.level = 1;
    wordGame.wordsCompleted = 0;
    
    document.getElementById('word-score').textContent = '0';
    document.getElementById('word-level').textContent = '1';
}

// Allow Enter key to submit word
document.addEventListener('DOMContentLoaded', function() {
    const wordInput = document.getElementById('word-answer');
    if (wordInput) {
        wordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkWord();
            }
        });
    }
});