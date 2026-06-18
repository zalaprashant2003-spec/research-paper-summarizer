from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from utils import extract_text, summarize_paper

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "running"}

@app.post("/summarize")
async def summarize(file: UploadFile = File(...)):

    text = extract_text(file.file)

    result = summarize_paper(text)

    return result