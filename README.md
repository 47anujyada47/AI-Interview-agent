# InterviewIQ.AI 🤖 Target-Oriented AI Interview Practice Platform

**InterviewIQ.AI** is an AI-powered mock interview application designed to help job seekers practice technical and HR interviews with real-time feedback, voice synthesis, speech recognition, and performance analytics.

---

## ✨ Features

- 🎙️ **Interactive AI Voice & Avatar Interview:**
  - AI speaks questions naturally using Web Speech Synthesis with animated avatar video feedback.
  - Candidate responses captured via Speech-to-Text (`webkitSpeechRecognition`) or manual text input.
  - Per-question countdown timer for timed interview simulation.

- 📄 **Resume Parsing & Project-Specific Questions:**
  - Upload PDF resumes parsed with `pdfjs-dist`.
  - GPT extracts candidate role, experience level, projects, and key skills to tailor questions.

- 📊 **Detailed Evaluation & Performance Analytics:**
  - Evaluates **Confidence**, **Communication**, and **Correctness** scores (0–10).
  - Generates question-by-question feedback and score trends visualized with Recharts.

- 📥 **Downloadable PDF Performance Reports:**
  - Export professional PDF reports summarizing overall scores, skill evaluations, and feedback via `jsPDF`.

- 💳 **Credits & Razorpay Payment Integration:**
  - Integrated credit management system (100 free default credits).
  - Purchase additional credit packs via Razorpay payment gateway.

- 🔒 **Google OAuth Authentication:**
  - Firebase Authentication integration with JWT cookie-based backend sessions.

---

## 🛠️ Tech Stack

### **Frontend (Client)**
- **Framework:** React 19 + Vite
- **State Management:** Redux Toolkit
- **Styling:** TailwindCSS + Framer Motion
- **Data Visualization:** Recharts
- **PDF Generation:** jsPDF + jsPDF-AutoTable
- **Authentication:** Firebase Auth

### **Backend (Server)**
- **Runtime:** Node.js + Express.js (ES Modules)
- **Database:** MongoDB Atlas + Mongoose
- **AI Integration:** OpenRouter API (`openai/gpt-4o-mini`)
- **Payment Gateway:** Razorpay SDK
- **File Processing:** Multer + `pdfjs-dist`

---

## 📁 Project Structure

```
interviewIQ/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/         # Video avatars & images
│   │   ├── components/     # UI Components (Navbar, Timer, Steps 1-3)
│   │   ├── pages/          # Home, Auth, Interview, History, Pricing, Report
│   │   ├── redux/          # Redux Toolkit User Slice & Store
│   │   └── utils/          # Firebase Auth Configuration
│   ├── .env                # Frontend Environment Variables
│   └── package.json
│
└── server/                 # Express Backend
    ├── config/             # DB & JWT Token Configuration
    ├── controllers/        # Auth, User, Interview, & Payment Controllers
    ├── middlewares/        # Auth verification & Multer upload
    ├── models/             # Mongoose Schemas (User, Interview, Payment)
    ├── routes/             # Express API Endpoints
    ├── services/           # OpenRouter AI & Razorpay Services
    ├── .env                # Backend Environment Variables
    └── index.js            # Express Server Entry Point
```

---

## ⚙️ Environment Configuration

### **Backend Environment Variables (`server/.env`)**

Create a `.env` file inside the `server/` directory:

```env
PORT=8000
MONGODB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### **Frontend Environment Variables (`client/.env`)**

Create a `.env` file inside the `client/` directory:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/interviewIQ.git
cd interviewIQ
```

### **2. Install Dependencies**

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd ../client
npm install
```

### **3. Start Development Servers**

**Run Backend Server:**
```bash
cd server
npm run dev
# Server will start on http://localhost:8000
```

**Run Frontend Client:**
```bash
cd client
npm run dev
# Client will start on http://localhost:5173
```

---

## 📝 License
This project is open source and available under the [ISC License](LICENSE).
