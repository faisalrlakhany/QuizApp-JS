# 🧠 Quiz App (Vanilla JavaScript)

A clean **multiple-choice quiz application** built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no backend. It shows 10 logic and reasoning questions one at a time, tracks correct answers, and displays your final score at the end.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Project Type

| | |
|---|---|
| **Category** | Frontend quiz / mini game |
| **Type** | Static single-page app (question flow handled in JS) |
| **Purpose** | Test logic and reasoning with a scored MCQ quiz |
| **Questions** | 10 (number series, odd-one-out, riddles, anagrams) |
| **Dependencies** | None |
| **Build Tools** | None — runs directly in the browser |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (radio inputs + labels) |
| Styling | CSS3 (gradient background, custom radio UI, animations, media queries) |
| Logic | Vanilla JavaScript (ES6+, array of objects, DOM updates) |
| Questions | Stored as a JS array of objects |
| Fonts | Google Fonts — Roboto Flex |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## ✨ Features

- 🎯 **10 logic & reasoning questions** — number series, odd one out, riddles, letter patterns, anagrams
- 🔘 **Custom radio buttons** — fully clickable option rows with hover states
- 🔄 **One question at a time** — Submit automatically loads the next question
- 📊 **Live score tracking** — correct and wrong counters in the background
- 🏁 **Result screen** — "Thank You For Playing" with `score / total`
- 🎨 **Purple gradient theme** with card lift, smooth animations, and a fade-in result box
- 📱 **Fully responsive** — 1024px, 768px, 480px, and 360px breakpoints

---

## ⚙️ How It Works

```js
const questions = [
  { question: "...", a: "...", b: "...", c: "...", d: "...", correct: "c" },
  // ...10 questions
];

let index = 0, right = 0, wrong = 0;

const loadQuestion = () => {
  if (index === questions.length) return endQuiz();
  reset();                                  // uncheck previous radios
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.question}`;
  // map a/b/c/d to the four labels
};

const submitQuiz = () => {
  const data = questions[index];
  getAnswer() === data.correct ? right++ : wrong++;
  index++;
  loadQuestion();
};
```

1. **Load** — the current question and its four options are pushed into the DOM.
2. **Answer** — the selected radio's `value` (`a`/`b`/`c`/`d`) is compared with `correct`.
3. **Next** — the index increments and the next question renders.
4. **End** — after the last question, the box is replaced with the score screen.

> **Improvement ideas:** highlight the correct answer after submitting, add a *Restart* button, show a progress bar, and disable Submit until an option is selected.

---

## 📁 Project Structure

```
QuizApp-JS/
├── index.html        # Question box, 4 radio options, submit button
├── css/
│   └── custom.css    # Gradient theme, custom radios, result screen, breakpoints
└── js/
    └── app.js        # Question bank, scoring, navigation, result rendering
```

---

## 🚀 Getting Started

No installation required.

```bash
git clone https://github.com/faisalrlakhany/QuizApp-JS.git
cd QuizApp-JS
```

Open `index.html` in your browser, or use VS Code **Live Server**.

**Add your own questions:** append an object to the `questions` array in `js/app.js`:

```js
{
  question: "Your question here?",
  a: "Option A",
  b: "Option B",
  c: "Option C",
  d: "Option D",
  correct: "b"
}
```

---

## 🧠 Concepts Practiced

- Arrays of objects as a mini data store
- Dynamic text updates with `innerText`
- Reading radio state (`checked`, `value`)
- Conditional scoring logic
- Template literals for rendering the result screen
- Responsive design with multiple breakpoints

---

## 👨‍💻 Author

**Muhammad Faisal Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
