// Russian vocabulary - feel free to add more words here!
const vocabulary = [
    { word: "Hello", translation: "Привет (Privet)" },
    { word: "Goodbye", translation: "Пока (Poka)" },
    { word: "Thank you", translation: "Спасибо (Spasibo)" },
    { word: "Please", translation: "Пожалуйста (Pozhaluysta)" },
    { word: "Yes", translation: "Да (Da)" },
    { word: "No", translation: "Нет (Net)" },
    { word: "Good morning", translation: "Доброе утро (Dobroye utro)" },
    { word: "Good night", translation: "Спокойной ночи (Spokoynoy nochi)" },
    { word: "How are you?", translation: "Как дела? (Kak dela?)" },
    { word: "I don't understand", translation: "Я не понимаю (Ya ne ponimayu)" },
    { word: "Water", translation: "Вода (Voda)" },
    { word: "Food", translation: "Еда (Yeda)" },
    { word: "Help", translation: "Помощь (Pomoshch)" },
    { word: "Excuse me", translation: "Извините (Izvinite)" },
    { word: "One", translation: "Один (Odin)" },
    { word: "Two", translation: "Два (Dva)" },
    { word: "Three", translation: "Три (Tri)" }
];

let currentIndex = -1;
let showingAnswer = false;

const wordDisplay = document.getElementById('wordDisplay');
const showAnswerBtn = document.getElementById('showAnswer');
const nextWordBtn = document.getElementById('nextWord');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let shuffledVocab = shuffleArray(vocabulary);

function updateStats() {
    currentCardSpan.textContent = currentIndex + 1;
    totalCardsSpan.textContent = vocabulary.length;
}

function showNextWord() {
    currentIndex++;

    if (currentIndex >= shuffledVocab.length) {
        // Reshuffle when we've gone through all cards
        shuffledVocab = shuffleArray(vocabulary);
        currentIndex = 0;
    }

    const current = shuffledVocab[currentIndex];
    wordDisplay.textContent = current.word;
    wordDisplay.classList.remove('showing-answer');
    showingAnswer = false;
    showAnswerBtn.disabled = false;

    updateStats();
}

function toggleAnswer() {
    const current = shuffledVocab[currentIndex];

    if (!showingAnswer) {
        wordDisplay.textContent = current.translation;
        wordDisplay.classList.add('showing-answer');
        showingAnswer = true;
        showAnswerBtn.disabled = true;
    }
}

showAnswerBtn.addEventListener('click', toggleAnswer);
nextWordBtn.addEventListener('click', showNextWord);

// Initialize
totalCardsSpan.textContent = vocabulary.length;

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker registration failed, but app still works
    });
}
