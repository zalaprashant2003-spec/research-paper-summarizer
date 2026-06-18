from pypdf import PdfReader
import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def extract_text(pdf_file):

    reader = PdfReader(pdf_file)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text

    return text


def summarize_paper(text):

    prompt = f"""
You are an expert AI research analyst.

Analyze this research paper and return ONLY valid JSON.

{{
    "summary":"",
    "findings":"",
    "future_work":"",
    "keywords":[],
    "questions":[],
    "difficulty_score":"",
    "difficulty_reason":""
}}

Requirements:

- Executive summary in 5-7 sentences
- Key findings in concise format
- Future work suggestions
- 5 interview questions
- 5-10 keywords
- Difficulty score out of 10

Paper:

{text[:50000]}
"""

    response = model.generate_content(prompt)

    cleaned = response.text.replace("```json", "")
    cleaned = cleaned.replace("```", "")

    return json.loads(cleaned)