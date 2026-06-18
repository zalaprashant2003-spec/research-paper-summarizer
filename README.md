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

research-paper-summarizer/
├── backend/
│ ├── app.py
│ ├── utils.py
│ ├── requirements.txt
│ └── .env
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md

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

## 🌐 API Endpoint

```http
POST /summarize
```


## 👨‍💻 Author

Prashant Zala