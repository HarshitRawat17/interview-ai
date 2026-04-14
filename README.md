# InterviewAI 🤖

> AI-powered interview preparation platform for software engineering placements.  
> Practice DSA, HR, and System Design questions with **instant AI feedback powered by Groq (LLaMA 3).**

![React](https://img.shields.io/badge/Frontend-React%2018-blue?style=flat-square)
![Node](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square)
![Groq](https://img.shields.io/badge/AI-Groq%20LLaMA3-orange?style=flat-square)
![Vite](https://img.shields.io/badge/Build-Vite-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square)

---

# 🎯 Overview

**InterviewAI** is a full-stack AI-powered interview preparation platform designed to help students practice real interview questions and receive **instant AI-generated feedback**.

Instead of just telling whether an answer is correct, the system evaluates:

- ✅ **Correctness**
- 💬 **Clarity**
- ⚡ **Efficiency**

This helps simulate **real technical interview feedback**.

Built specifically for **BTech CSE placement preparation.**

---

# ✨ Features

- 🧠 AI-powered feedback using **Groq LLaMA 3**
- 📚 Curated interview questions (DSA, HR, System Design)
- 📊 Scoring system (Correctness, Clarity, Efficiency)
- 🕘 Practice attempt history
- 🏷 Difficulty badges (Easy / Medium / Hard)
- 💡 Hints for each question
- 🌙 Dark mode interface
- ⚡ Fast responses using Groq inference

---

# 🛠 Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express |
| Database | MongoDB |
| AI | Groq API (LLaMA 3) |
| Styling | CSS Variables |
| Storage | MongoDB + Local State |

---

# 📁 Project Structure

```
interview-ai
│
├── client                # React frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── FeedbackPanel.jsx
│   │   │   └── HistoryView.jsx
│   │   │
│   │   ├── hooks
│   │   │   ├── useAI.js
│   │   │   └── useHistory.js
│   │   │
│   │   ├── data
│   │   │   └── questions.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── vite.config.js
│
├── server                # Node.js backend
│   ├── models
│   │   └── Attempt.js
│   │
│   ├── routes
│   │   ├── feedback.js
│   │   └── history.js
│   │
│   └── index.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the repository

```bash
git clone https://github.com/HarshitRawat17/interview-ai.git
cd interview-ai
```

---

# 2️⃣ Install dependencies

### Frontend

```
cd client
npm install
```

### Backend

```
cd ../server
npm install
```

---

# 3️⃣ Setup environment variables

Create `.env` inside **server**

```
GROQ_API_KEY=your_groq_key
MONGO_URI=your_mongodb_connection
PORT=5000
```

Get your Groq key here:

https://console.groq.com

---

# 4️⃣ Run the backend

```
cd server
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

# 5️⃣ Run the frontend

```
cd client
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🧠 Example AI Feedback

Example response from Groq:

```
Correctness: 8/10
Clarity: 7/10
Efficiency: 9/10

Your approach using a hash map achieves O(n) time complexity,
which is optimal for this problem. However the explanation could
be clearer by describing how collisions are handled.
```

---

# 🗺 Roadmap

Future improvements planned:

- [ ] Code editor with syntax highlighting
- [ ] Interview timer mode
- [ ] Topic progress analytics
- [ ] Export practice report as PDF
- [ ] Full mock interview sessions
- [ ] 30+ curated interview questions

---

# 💡 Why I Built This

As a **BTech CSE 2026 placement student**, I wanted a tool that provides **real interview-style feedback**, not just correct/incorrect answers.

This project helped me practice:

- Full-stack architecture
- API integration
- AI prompt engineering
- React state management
- Backend API design
- MongoDB data modeling

---

# 📸 Screenshots

*(Will be added after UI polish)*

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to:

- Add more interview questions
- Improve UI
- Add analytics
- Improve AI prompts

Feel free to fork the repository and submit a pull request.

---

# 📄 License

MIT License