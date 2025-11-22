// Multi-language vocabulary quiz app
let questions = [];
let currentIndex = -1;
let score = 0;
let totalAnswered = 0;
let currentQuestion = null;
let answered = false;
let isReversed = false; // true = TargetLang->English, false = English->TargetLang

// Settings
let currentLanguage = 'russian';
let selectedTopics = [];
let filteredQuestions = [];

// DOM Elements
const appTitle = document.getElementById('appTitle');
const languageSelect = document.getElementById('languageSelect');
const filterList = document.getElementById('filterList');
const toggleFiltersBtn = document.getElementById('toggleFilters');
const questionCard = document.getElementById('questionCard');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const exitBtn = document.getElementById('exitBtn');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');

// Language display names
const languageNames = {
    russian: 'Russian',
    ukrainian: 'Ukrainian',
    portuguese: 'Portuguese'
};

// Load questions from JSON
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        questions = await response.json();
        console.log('Loaded', questions.length, 'questions');
        initializeTopics();
        loadPreferences();
        updateAppTitle();
        startNewSession();
    } catch (error) {
        console.error('Failed to load questions:', error);
        questionEl.textContent = 'Error loading questions. Please use a local server (e.g., python -m http.server) or deploy to GitHub Pages.';
        // Show error in topic area too
        filterList.innerHTML = '<div style="color: #f44336; padding: 10px;">Failed to load questions. See console for details.</div>';
    }
}

// Get unique topics from questions
function getAvailableTopics() {
    const topicsSet = new Set();
    questions.forEach(q => {
        q.topics.forEach(topic => topicsSet.add(topic));
    });
    return Array.from(topicsSet).sort();
}

// Topic display names
const topicNames = {
    'basic-phrases': 'Basic Phrases',
    'everyday-expressions': 'Everyday Expressions',
    'numbers': 'Numbers',
    'modal-verbs': 'Modal Verbs',
    'subordinate-clauses': 'Subordinate Clauses'
};

// Generate topic filter checkboxes
function initializeTopics() {
    const topics = getAvailableTopics();
    console.log('Available topics:', topics);
    filterList.innerHTML = '';

    topics.forEach(topic => {
        const label = document.createElement('label');
        label.className = 'topic-checkbox';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = topic;
        checkbox.checked = true;
        checkbox.addEventListener('change', onTopicChange);

        const span = document.createElement('span');
        span.textContent = topicNames[topic] || topic;

        label.appendChild(checkbox);
        label.appendChild(span);
        filterList.appendChild(label);
    });

    // Initialize selected topics (all checked by default)
    selectedTopics = topics;
    console.log('Initialized with topics:', selectedTopics);
    console.log('Filter list children:', filterList.children.length);
}

// Handle topic checkbox changes
function onTopicChange(e) {
    const topic = e.target.value;
    if (e.target.checked) {
        if (!selectedTopics.includes(topic)) {
            selectedTopics.push(topic);
        }
    } else {
        selectedTopics = selectedTopics.filter(t => t !== topic);
    }

    savePreferences();
    startNewSession();
}

// Toggle filter visibility
toggleFiltersBtn.addEventListener('click', () => {
    filterList.classList.toggle('collapsed');
    toggleFiltersBtn.textContent = filterList.classList.contains('collapsed') ? '▶' : '▼';
});

// Language selector change
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateAppTitle();
    savePreferences();
    resetScore();
    startNewSession();
});

// Update app title based on selected language
function updateAppTitle() {
    appTitle.textContent = `Learn ${languageNames[currentLanguage]}`;
}

// Save preferences to localStorage
function savePreferences() {
    const prefs = {
        language: currentLanguage,
        topics: selectedTopics
    };
    localStorage.setItem('languageAppPrefs', JSON.stringify(prefs));
}

// Load preferences from localStorage
function loadPreferences() {
    const saved = localStorage.getItem('languageAppPrefs');
    if (saved) {
        try {
            const prefs = JSON.parse(saved);
            if (prefs.language) {
                currentLanguage = prefs.language;
                languageSelect.value = currentLanguage;
            }
            if (prefs.topics && prefs.topics.length > 0) {
                selectedTopics = prefs.topics;
                // Update checkboxes
                const checkboxes = filterList.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(cb => {
                    cb.checked = selectedTopics.includes(cb.value);
                });
            }
        } catch (e) {
            console.error('Failed to load preferences:', e);
        }
    }
}

// Reset score
function resetScore() {
    score = 0;
    totalAnswered = 0;
    updateStats();
}

// Start new session with filtered questions
function startNewSession() {
    currentIndex = -1;
    answered = false;
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';

    // Filter questions by selected topics
    filteredQuestions = questions.filter(q =>
        q.topics.some(topic => selectedTopics.includes(topic))
    );

    if (filteredQuestions.length === 0) {
        questionEl.textContent = 'Please select at least one topic.';
        choicesEl.innerHTML = '';
        nextBtn.textContent = 'Start';
        totalQuestionsSpan.textContent = '0';
        return;
    }

    // Shuffle filtered questions
    shuffledQuestions = shuffleArray(filteredQuestions);

    // Update stats
    totalQuestionsSpan.textContent = filteredQuestions.length;

    // Reset or show first question
    if (nextBtn.textContent === 'Start') {
        questionEl.textContent = 'Click "Start" to begin';
        choicesEl.innerHTML = '';
    }
}

let shuffledQuestions = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function generateWrongAnswers(currentIdx, language) {
    // Get 3 random different English questions as wrong answers
    const wrongChoices = [];
    const usedIndices = new Set([currentIdx]);

    while (wrongChoices.length < 3 && wrongChoices.length < filteredQuestions.length - 1) {
        const randomIdx = Math.floor(Math.random() * filteredQuestions.length);
        if (!usedIndices.has(randomIdx)) {
            if (language === 'english') {
                wrongChoices.push(filteredQuestions[randomIdx].english);
            } else {
                wrongChoices.push(filteredQuestions[randomIdx].languages[currentLanguage].text);
            }
            usedIndices.add(randomIdx);
        }
    }

    return wrongChoices;
}

function updateStats() {
    currentQuestionSpan.textContent = Math.min(currentIndex + 1, filteredQuestions.length);
    totalQuestionsSpan.textContent = filteredQuestions.length;
    scoreSpan.textContent = score;
    totalSpan.textContent = totalAnswered;
}

function showNextQuestion() {
    if (filteredQuestions.length === 0) {
        return;
    }

    if (answered || currentIndex === -1) {
        // Enter lesson mode on first question
        if (currentIndex === -1) {
            enterLessonMode();
        }

        // Move to next question
        currentIndex++;

        if (currentIndex >= shuffledQuestions.length) {
            // Reshuffle when done
            shuffledQuestions = shuffleArray(filteredQuestions);
            currentIndex = 0;
        }

        answered = false;
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
        nextBtn.textContent = 'Skip';
    }

    currentQuestion = shuffledQuestions[currentIndex];

    // Randomly decide direction for this question
    isReversed = Math.random() < 0.5;

    // Show question (either English or Target Language)
    const targetLangData = currentQuestion.languages[currentLanguage];
    questionEl.textContent = isReversed ? targetLangData.text : currentQuestion.english;

    // Create choice buttons
    let allChoices;
    if (isReversed) {
        // TargetLang->English: show English choices
        allChoices = [currentQuestion.english, ...generateWrongAnswers(currentIndex, 'english')];
    } else {
        // English->TargetLang: show target language choices
        allChoices = [targetLangData.text, ...targetLangData.wrongAnswers];
    }
    const shuffledChoices = shuffleArray(allChoices);

    choicesEl.innerHTML = '';
    shuffledChoices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice, button);
        choicesEl.appendChild(button);
    });

    updateStats();
}

function checkAnswer(selected, buttonEl) {
    if (answered) return;

    answered = true;
    totalAnswered++;

    // Determine correct answer based on direction
    const targetLangData = currentQuestion.languages[currentLanguage];
    const correctAnswer = isReversed ? currentQuestion.english : targetLangData.text;

    const buttons = choicesEl.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    if (selected === correctAnswer) {
        score++;
        feedbackEl.textContent = '✓ Correct!';
        feedbackEl.className = 'feedback correct';
    } else {
        buttonEl.classList.add('wrong');
        feedbackEl.textContent = `✗ Wrong. Correct answer: ${correctAnswer}`;
        feedbackEl.className = 'feedback wrong';
    }

    nextBtn.textContent = 'Next';
    updateStats();
}

nextBtn.addEventListener('click', showNextQuestion);

// Enter lesson mode - hide selectors, show exit button, change background
function enterLessonMode() {
    document.body.classList.add('lesson-mode');
    exitBtn.style.display = 'flex';
    questionCard.style.display = 'flex';
}

// Exit lesson mode - show selectors, hide exit button, reset
function exitLessonMode() {
    document.body.classList.remove('lesson-mode');
    exitBtn.style.display = 'none';
    questionCard.style.display = 'none';

    // Reset lesson state
    currentIndex = -1;
    answered = false;
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    choicesEl.innerHTML = '';
    nextBtn.textContent = 'Start';

    updateStats();
}

exitBtn.addEventListener('click', exitLessonMode);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker registration failed, but app still works
    });
}

// Initialize app
loadQuestions();
