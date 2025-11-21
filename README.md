# Russian Language Learning App

A simple Progressive Web App (PWA) for practicing Russian vocabulary and grammar. Built for personal use, optimized for mobile.

## Current Features (v0.2.0)

- **Multiple choice quiz format** - 4 options per question
- **Bidirectional practice** - Randomly switches between English→Russian and Russian→English
- **89 questions** covering:
  - Basic phrases (hello, goodbye, thank you, etc.)
  - Everyday expressions (I don't know, maybe, I think so, etc.)
  - 10 Russian modal verbs with 3+ examples each
  - Subordinate clauses (что, когда, если, потому что, чтобы)
- **Score tracking** - Shows correct/total answers
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
├── app.js          # Quiz logic + question bank
├── sw.js           # Service worker (cache versioning)
├── manifest.json   # PWA configuration
└── README.md       # This file
```

## Version Management

Version number is in `sw.js` (line 3). Update it whenever making changes:
- Patch (0.0.X): Bug fixes
- Minor (0.X.0): New features/content
- Major (X.0.0): Breaking changes

## Adding New Questions

Edit the `questions` array in `app.js`:

```javascript
{
  question: "English text",
  correct: "Правильный ответ",
  wrong: ["Неправильный 1", "Неправильный 2", "Неправильный 3"]
}
```

## Deployment

1. Commit changes to git
2. Push to GitHub
3. GitHub Pages auto-deploys
4. Wait ~1 minute for deployment
5. Hard refresh on phone (or clear cache) to see updates

## Future Ideas

### High Priority
- **Aspect pairs** - Perfective/imperfective verb practice (идти/пойти, делать/сделать)
- **Case practice** - Sentences showing different Russian cases in context
- **More verb tenses** - Past and future tense examples

### Medium Priority
- **Category filtering** - Toggle between "Basic", "Modal verbs", "Subordinate clauses", etc.
- **Difficulty levels** - Mark questions as beginner/intermediate/advanced
- **Streak counter** - Track consecutive days of practice (localStorage)

### Low Priority
- **Review wrong answers** - Keep a list of mistakes to review later
- **Custom word lists** - Import/export functionality
- **Audio pronunciation** - TTS or recorded audio

## Notes

- Currently at A2 level content
- No backend/database - all data stored in JavaScript
- Reverse mode generates random wrong answers from other questions
- Service worker auto-cleans old caches on version bump
