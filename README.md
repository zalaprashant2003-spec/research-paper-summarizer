# 📄 AI Research Paper Summarizer

An AI-powered web application that analyzes research papers and generates meaningful insights using Google Gemini AI.

## 🚀 Features

- Upload research papers in PDF format
- Generate executive summaries
- Extract key findings
- Suggest future work directions
- Generate interview questions
- Extract important keywords
- Calculate paper difficulty score
- Download analysis report
- PDF preview before analysis
- Generate PowerPoint presentation automatically

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python

### AI
- Google Gemini AI

## 📂 Project Structure

```text
research-paper-summarizer/
│
├── backend/
│   ├── app.py
│   ├── utils.py
│   ├── ppt_generator.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## ⚙️ Setup

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
GEMINI_API_KEY=your_api_key_here
```

## 🌐 API Endpoints

### 📄 Research Paper Analysis

```http
POST /summarize
```

Upload a PDF research paper and receive:

- Executive Summary
- Key Findings
- Future Work Suggestions
- Important Keywords
- Interview Questions
- Difficulty Score
- Difficulty Explanation

---

### 📊 PowerPoint Presentation Generator

```http
POST /generate-ppt
```

Upload a PDF research paper and automatically generate a PowerPoint presentation.

### Generated Slides

- Problem Statement
- Methodology
- Results
- Conclusion
- Future Work

### Output

```text
Research_Presentation.pptx
```


## 👨‍💻 Author

Prashant Zala