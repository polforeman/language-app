// Russian vocabulary with multiple choice questions
const questions = [
    // Basic phrases
    { question: "Hello", correct: "Привет", wrong: ["Пока", "Спасибо", "Извините"] },
    { question: "Goodbye", correct: "Пока", wrong: ["Привет", "Да", "Нет"] },
    { question: "Thank you", correct: "Спасибо", wrong: ["Пожалуйста", "Извините", "Помощь"] },
    { question: "Please", correct: "Пожалуйста", wrong: ["Спасибо", "Привет", "Да"] },
    { question: "Yes", correct: "Да", wrong: ["Нет", "Может быть", "Хорошо"] },
    { question: "No", correct: "Нет", wrong: ["Да", "Никогда", "Ничего"] },
    { question: "Excuse me", correct: "Извините", wrong: ["Спасибо", "Пожалуйста", "Простите"] },
    { question: "I don't understand", correct: "Я не понимаю", wrong: ["Я понимаю", "Я знаю", "Я не знаю"] },

    // Common words
    { question: "Water", correct: "Вода", wrong: ["Еда", "Молоко", "Чай"] },
    { question: "Food", correct: "Еда", wrong: ["Вода", "Хлеб", "Мясо"] },
    { question: "Help", correct: "Помощь", wrong: ["Помогите", "Здесь", "Там"] },

    // Numbers
    { question: "One", correct: "Один", wrong: ["Два", "Три", "Четыре"] },
    { question: "Two", correct: "Два", wrong: ["Один", "Три", "Пять"] },
    { question: "Three", correct: "Три", wrong: ["Два", "Четыре", "Шесть"] },

    // Modal verb: мочь (can, to be able to)
    { question: "I can help you", correct: "Я могу помочь тебе", wrong: ["Я должен помочь тебе", "Я хочу помочь тебе", "Я буду помочь тебе"] },
    { question: "Can you speak Russian?", correct: "Ты можешь говорить по-русски?", wrong: ["Ты должен говорить по-русски?", "Ты хочешь говорить по-русски?", "Ты будешь говорить по-русски?"] },
    { question: "She can't come today", correct: "Она не может прийти сегодня", wrong: ["Она не должна прийти сегодня", "Она не хочет прийти сегодня", "Она не будет прийти сегодня"] },

    // Modal verb: должен (must, should, have to)
    { question: "I must go", correct: "Я должен идти", wrong: ["Я могу идти", "Я хочу идти", "Я буду идти"] },
    { question: "You should study", correct: "Ты должен учиться", wrong: ["Ты можешь учиться", "Ты хочешь учиться", "Ты будешь учиться"] },
    { question: "We have to work tomorrow", correct: "Мы должны работать завтра", wrong: ["Мы можем работать завтра", "Мы хотим работать завтра", "Мы будем работать завтра"] },

    // Modal verb: хотеть (want)
    { question: "I want to eat", correct: "Я хочу есть", wrong: ["Я могу есть", "Я должен есть", "Я буду есть"] },
    { question: "Do you want coffee?", correct: "Ты хочешь кофе?", wrong: ["Ты можешь кофе?", "Ты должен кофе?", "Ты будешь кофе?"] },
    { question: "They want to leave", correct: "Они хотят уйти", wrong: ["Они могут уйти", "Они должны уйти", "Они будут уйти"] },

    // Modal verb: нужно (need, necessary)
    { question: "I need to sleep", correct: "Мне нужно спать", wrong: ["Я хочу спать", "Я должен спать", "Я могу спать"] },
    { question: "You need to rest", correct: "Тебе нужно отдохнуть", wrong: ["Ты хочешь отдохнуть", "Ты должен отдохнуть", "Ты можешь отдохнуть"] },
    { question: "We need more time", correct: "Нам нужно больше времени", wrong: ["Мы хотим больше времени", "Мы должны больше времени", "Мы можем больше времени"] },

    // Modal verb: смочь (to manage to, to be able to - perfective)
    { question: "I will be able to help", correct: "Я смогу помочь", wrong: ["Я могу помочь", "Я должен помочь", "Я хочу помочь"] },
    { question: "Could you do it?", correct: "Ты смог это сделать?", wrong: ["Ты можешь это сделать?", "Ты должен это сделать?", "Ты хочешь это сделать?"] },
    { question: "She managed to finish", correct: "Она смогла закончить", wrong: ["Она может закончить", "Она должна закончить", "Она хочет закончить"] },

    // Modal verb: уметь (to know how to)
    { question: "I know how to swim", correct: "Я умею плавать", wrong: ["Я могу плавать", "Я хочу плавать", "Я должен плавать"] },
    { question: "Can you drive?", correct: "Ты умеешь водить?", wrong: ["Ты можешь водить?", "Ты хочешь водить?", "Ты должен водить?"] },
    { question: "He knows how to cook", correct: "Он умеет готовить", wrong: ["Он может готовить", "Он хочет готовить", "Он должен готовить"] },

    // Modal verb: мочь (negative - cannot)
    { question: "I cannot believe it", correct: "Я не могу в это поверить", wrong: ["Я не хочу в это поверить", "Я не должен в это поверить", "Я не умею в это поверить"] },
    { question: "They cannot wait", correct: "Они не могут ждать", wrong: ["Они не хотят ждать", "Они не должны ждать", "Они не умеют ждать"] },
    { question: "We cannot stay", correct: "Мы не можем остаться", wrong: ["Мы не хотим остаться", "Мы не должны остаться", "Мы не умеем остаться"] },

    // Modal verb: надо (must, need to - impersonal)
    { question: "It is necessary to study", correct: "Надо учиться", wrong: ["Хочется учиться", "Можно учиться", "Умею учиться"] },
    { question: "You must be careful", correct: "Надо быть осторожным", wrong: ["Можно быть осторожным", "Хочется быть осторожным", "Умею быть осторожным"] },
    { question: "We must hurry", correct: "Нам надо спешить", wrong: ["Нам можно спешить", "Нам хочется спешить", "Нам умеется спешить"] },

    // Modal verb: можно (may, allowed to)
    { question: "May I come in?", correct: "Можно войти?", wrong: ["Нужно войти?", "Хочется войти?", "Надо войти?"] },
    { question: "You can sit here", correct: "Можно здесь сесть", wrong: ["Нужно здесь сесть", "Надо здесь сесть", "Должен здесь сесть"] },
    { question: "Is it okay to ask?", correct: "Можно спросить?", wrong: ["Нужно спросить?", "Надо спросить?", "Хочется спросить?"] },

    // Modal verb: стоит (worth, should)
    { question: "It's worth trying", correct: "Стоит попробовать", wrong: ["Можно попробовать", "Нужно попробовать", "Хочется попробовать"] },
    { question: "You should see this film", correct: "Стоит посмотреть этот фильм", wrong: ["Можно посмотреть этот фильм", "Нужно посмотреть этот фильм", "Надо посмотреть этот фильм"] },
    { question: "Is it worth waiting?", correct: "Стоит ждать?", wrong: ["Можно ждать?", "Нужно ждать?", "Надо ждать?"] }
];

let currentIndex = -1;
let score = 0;
let totalAnswered = 0;
let currentQuestion = null;
let answered = false;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let shuffledQuestions = shuffleArray(questions);

function updateStats() {
    currentQuestionSpan.textContent = currentIndex + 1;
    totalQuestionsSpan.textContent = questions.length;
    scoreSpan.textContent = score;
    totalSpan.textContent = totalAnswered;
}

function showNextQuestion() {
    if (answered || currentIndex === -1) {
        // Move to next question
        currentIndex++;

        if (currentIndex >= shuffledQuestions.length) {
            // Reshuffle when done
            shuffledQuestions = shuffleArray(questions);
            currentIndex = 0;
        }

        answered = false;
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
        nextBtn.textContent = 'Skip';
    }

    currentQuestion = shuffledQuestions[currentIndex];

    // Show question
    questionEl.textContent = currentQuestion.question;

    // Create choice buttons
    const allChoices = [currentQuestion.correct, ...currentQuestion.wrong];
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

    const buttons = choicesEl.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.correct) {
            btn.classList.add('correct');
        }
    });

    if (selected === currentQuestion.correct) {
        score++;
        feedbackEl.textContent = '✓ Correct!';
        feedbackEl.className = 'feedback correct';
    } else {
        buttonEl.classList.add('wrong');
        feedbackEl.textContent = `✗ Wrong. Correct answer: ${currentQuestion.correct}`;
        feedbackEl.className = 'feedback wrong';
    }

    nextBtn.textContent = 'Next';
    updateStats();
}

nextBtn.addEventListener('click', showNextQuestion);

// Initialize
totalQuestionsSpan.textContent = questions.length;
totalSpan.textContent = totalAnswered;

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker registration failed, but app still works
    });
}
