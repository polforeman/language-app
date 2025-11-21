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

    // Useful everyday phrases
    { question: "I don't know", correct: "Я не знаю", wrong: ["Я знаю", "Я не понимаю", "Я не помню"] },
    { question: "I think so", correct: "Я так думаю", wrong: ["Я не думаю", "Я знаю это", "Я так считаю"] },
    { question: "Maybe", correct: "Может быть", wrong: ["Конечно", "Наверное", "Точно"] },
    { question: "Probably", correct: "Наверное", wrong: ["Может быть", "Точно", "Конечно"] },
    { question: "Of course", correct: "Конечно", wrong: ["Наверное", "Может быть", "Возможно"] },
    { question: "A little bit", correct: "Немного", wrong: ["Много", "Чуть-чуть", "Мало"] },
    { question: "Very much", correct: "Очень", wrong: ["Немного", "Мало", "Много"] },
    { question: "I remember", correct: "Я помню", wrong: ["Я не помню", "Я знаю", "Я забыл"] },
    { question: "I forgot", correct: "Я забыл", wrong: ["Я помню", "Я не знаю", "Я вспомнил"] },
    { question: "In my opinion", correct: "По-моему", wrong: ["Я думаю", "Мне кажется", "Я считаю"] },
    { question: "It seems to me", correct: "Мне кажется", wrong: ["По-моему", "Я думаю", "Я уверен"] },
    { question: "I agree", correct: "Я согласен", wrong: ["Я не согласен", "Я думаю так", "Это правда"] },
    { question: "I don't agree", correct: "Я не согласен", wrong: ["Я согласен", "Это неправда", "Я сомневаюсь"] },
    { question: "That's right", correct: "Это правда", wrong: ["Это неправда", "Это верно", "Конечно"] },
    { question: "That's wrong", correct: "Это неправда", wrong: ["Это правда", "Это ошибка", "Это не так"] },

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
    { question: "Is it worth waiting?", correct: "Стоит ждать?", wrong: ["Можно ждать?", "Нужно ждать?", "Надо ждать?"] },

    // Subordinate clauses with что (that)
    { question: "I know that you are right", correct: "Я знаю, что ты прав", wrong: ["Я думаю, что ты прав", "Я вижу, что ты прав", "Я слышал, что ты прав"] },
    { question: "I think that it's important", correct: "Я думаю, что это важно", wrong: ["Я знаю, что это важно", "Я считаю, что это важно", "Я чувствую, что это важно"] },
    { question: "She said that she's busy", correct: "Она сказала, что она занята", wrong: ["Она думает, что она занята", "Она знает, что она занята", "Она чувствует, что она занята"] },
    { question: "I heard that he left", correct: "Я слышал, что он ушёл", wrong: ["Я знаю, что он ушёл", "Я видел, что он ушёл", "Я думаю, что он ушёл"] },

    // Subordinate clauses with когда (when)
    { question: "When I come home, I'll call", correct: "Когда я приду домой, я позвоню", wrong: ["Если я приду домой, я позвоню", "Пока я приду домой, я позвоню", "После того как я приду домой, я позвоню"] },
    { question: "When you see him, tell him", correct: "Когда ты увидишь его, скажи ему", wrong: ["Если ты увидишь его, скажи ему", "Пока ты увидишь его, скажи ему", "После того как ты увидишь его, скажи ему"] },
    { question: "I was happy when she arrived", correct: "Я был рад, когда она приехала", wrong: ["Я был рад, если она приехала", "Я был рад, пока она приехала", "Я был рад, что она приехала"] },

    // Subordinate clauses with если (if)
    { question: "If you want, we can go", correct: "Если хочешь, мы можем пойти", wrong: ["Когда хочешь, мы можем пойти", "Пока хочешь, мы можем пойти", "Что хочешь, мы можем пойти"] },
    { question: "If it rains, I'll stay home", correct: "Если будет дождь, я останусь дома", wrong: ["Когда будет дождь, я останусь дома", "Пока будет дождь, я останусь дома", "Что будет дождь, я останусь дома"] },
    { question: "Call me if you need help", correct: "Позвони мне, если нужна помощь", wrong: ["Позвони мне, когда нужна помощь", "Позвони мне, пока нужна помощь", "Позвони мне, что нужна помощь"] },

    // Subordinate clauses with потому что (because)
    { question: "I'm late because traffic was bad", correct: "Я опоздал, потому что были пробки", wrong: ["Я опоздал, когда были пробки", "Я опоздал, если были пробки", "Я опоздал, пока были пробки"] },
    { question: "She's tired because she worked a lot", correct: "Она устала, потому что много работала", wrong: ["Она устала, когда много работала", "Она устала, если много работала", "Она устала, пока много работала"] },
    { question: "I'm learning Russian because I like it", correct: "Я учу русский, потому что мне нравится", wrong: ["Я учу русский, когда мне нравится", "Я учу русский, если мне нравится", "Я учу русский, что мне нравится"] },

    // Subordinate clauses with чтобы (in order to)
    { question: "I came to talk", correct: "Я пришёл, чтобы поговорить", wrong: ["Я пришёл, когда поговорить", "Я пришёл, что поговорить", "Я пришёл, потому что поговорить"] },
    { question: "She's studying to pass the exam", correct: "Она учится, чтобы сдать экзамен", wrong: ["Она учится, когда сдать экзамен", "Она учится, потому что сдать экзамен", "Она учится, если сдать экзамен"] },
    { question: "We need to hurry to catch the train", correct: "Нам надо спешить, чтобы успеть на поезд", wrong: ["Нам надо спешить, когда успеть на поезд", "Нам надо спешить, если успеть на поезд", "Нам надо спешить, потому что успеть на поезд"] }
];

let currentIndex = -1;
let score = 0;
let totalAnswered = 0;
let currentQuestion = null;
let answered = false;
let isReversed = false; // true = Russian->English, false = English->Russian

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

function generateWrongEnglishChoices(currentIdx) {
    // Get 3 random different English questions as wrong answers
    const wrongChoices = [];
    const usedIndices = new Set([currentIdx]);

    while (wrongChoices.length < 3 && wrongChoices.length < questions.length - 1) {
        const randomIdx = Math.floor(Math.random() * questions.length);
        if (!usedIndices.has(randomIdx)) {
            wrongChoices.push(questions[randomIdx].question);
            usedIndices.add(randomIdx);
        }
    }

    return wrongChoices;
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

    // Randomly decide direction for this question
    isReversed = Math.random() < 0.5;

    // Show question (either English or Russian)
    questionEl.textContent = isReversed ? currentQuestion.correct : currentQuestion.question;

    // Create choice buttons
    let allChoices;
    if (isReversed) {
        // Russian->English: show English choices
        allChoices = [currentQuestion.question, ...generateWrongEnglishChoices(currentIndex)];
    } else {
        // English->Russian: show Russian choices
        allChoices = [currentQuestion.correct, ...currentQuestion.wrong];
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
    const correctAnswer = isReversed ? currentQuestion.question : currentQuestion.correct;

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

// Initialize
totalQuestionsSpan.textContent = questions.length;
totalSpan.textContent = totalAnswered;

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker registration failed, but app still works
    });
}
