# Multi-Language Learning App

A Progressive Web App (PWA) for practicing vocabulary and grammar across multiple languages. Built for personal use, optimized for mobile.

## Current Features (v1.0.0)

- **Multi-language support** - Switch between Russian, Ukrainian, and European Portuguese
- **Topic filtering** - Select which topics to practice (checkboxes with collapsible panel)
- **Multiple choice quiz format** - 4 options per question
- **Bidirectional practice** - Randomly switches between English→Target Language and Target Language→English
- **115 questions** covering:
  - Basic phrases (hello, goodbye, thank you, etc.)
  - Everyday expressions (I don't know, maybe, I think so, etc.)
  - Numbers (1-3)
  - Modal verbs (can, must, want, need, etc.)
  - Subordinate clauses (that, when, if, because, in order to)
- **Score tracking** - Shows correct/total answers
- **Preference persistence** - Remembers your language and topic selections via localStorage
- **Offline support** - Works without internet after first load
- **Mobile optimized** - Installs as app on Android via GitHub Pages

## Tech Stack

- Vanilla JavaScript
- HTML5 + CSS3
- Service Worker for PWA functionality
- Hosted on GitHub Pages

## Project Structure

```
language-app/
├── index.html       # Main HTML structure
├── styles.css       # Mobile-friendly styling
├── app.js          # Quiz logic
├── questions.json   # Question bank (all languages)
├── sw.js           # Service worker (cache versioning)
├── manifest.json   # PWA configuration
└── README.md       # This file
```

## Version Management

Version number is in `sw.js` (line 3). Update it whenever making changes:
- Patch (X.X.1): Bug fixes
- Minor (X.1.0): New features/content
- Major (1.0.0): Breaking changes

## Adding New Questions

Edit `questions.json` and add a new object with this structure:

```json
{
  "id": "unique_identifier",
  "topics": ["topic-name"],
  "english": "English text",
  "languages": {
    "russian": {
      "text": "Русский текст",
      "wrongAnswers": ["Неправильный 1", "Неправильный 2", "Неправильный 3"]
    },
    "ukrainian": {
      "text": "Український текст",
      "wrongAnswers": ["Неправильний 1", "Неправильний 2", "Неправильний 3"]
    },
    "portuguese": {
      "text": "Texto português",
      "wrongAnswers": ["Errado 1", "Errado 2", "Errado 3"]
    }
  }
}
```

### Available Topics
- `basic-phrases` - Greetings, thank you, yes/no
- `everyday-expressions` - Common phrases and opinions
- `numbers` - Numbers
- `modal-verbs` - Can, must, want, need, etc.
- `subordinate-clauses` - That, when, if, because, in order to

## Adding New Languages

1. Add language option to `index.html` language selector:
   ```html
   <option value="newlang">Language Name</option>
   ```

2. Add language to `languageNames` object in `app.js`:
   ```javascript
   const languageNames = {
     russian: 'Russian',
     ukrainian: 'Ukrainian',
     portuguese: 'Portuguese',
     newlang: 'Language Name'
   };
   ```

3. Add translations to all questions in `questions.json`:
   ```json
   "newlang": {
     "text": "Translation",
     "wrongAnswers": ["Wrong 1", "Wrong 2", "Wrong 3"]
   }
   ```

4. Update service worker version in `sw.js`

## Deployment

1. Commit changes to git
2. Push to GitHub
3. GitHub Pages auto-deploys
4. Wait ~1 minute for deployment
5. Hard refresh on phone (or clear cache) to see updates

## How It Works

### Language Switching
- Select a language from the dropdown
- Score resets when switching languages
- Selection is saved to localStorage
- App title updates to "Learn [Language]"

### Topic Filtering
- Check/uncheck topics to practice
- Questions are filtered in real-time
- Selections are saved to localStorage
- Must have at least one topic selected

### Bidirectional Mode
- Each question randomly chooses direction (50/50)
- **Normal mode**: Shows English, answer in target language
- **Reverse mode**: Shows target language, answer in English
- Reverse mode generates wrong answers dynamically from other questions

## Future Ideas

### High Priority
- **Aspect pairs** - Perfective/imperfective verb practice (Russian/Ukrainian)
- **Case practice** - Sentences showing different cases in context
- **More verb tenses** - Past and future tense examples
- **More languages** - Add Spanish, French, German, etc.

### Medium Priority
- **Difficulty levels** - Mark questions as beginner/intermediate/advanced
- **Streak counter** - Track consecutive days of practice (localStorage)
- **Progress tracking** - Track performance per topic/language
- **Spaced repetition** - Show harder questions more frequently

### Low Priority
- **Review wrong answers** - Keep a list of mistakes to review later
- **Custom word lists** - Import/export functionality
- **Audio pronunciation** - TTS or recorded audio
- **Dark mode** - Theme toggle

## Notes

- Currently at A2 level content for all languages
- No backend/database - all data stored in JSON file
- Reverse mode generates random wrong answers from other questions
- Service worker auto-cleans old caches on version bump
- All questions share the same topics across languages (by design)
- Translations have been auto-generated and should be reviewed for accuracy
