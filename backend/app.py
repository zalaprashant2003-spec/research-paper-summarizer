from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ppt_generator import create_ppt
from utils import generate_ppt_content
from fastapi.responses import FileResponse
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


@app.post("/generate-ppt")
async def generate_ppt(
    file: UploadFile = File(...)
):

    text = extract_text(file.file)

    ppt_data = generate_ppt_content(text)

    ppt_file = create_ppt(ppt_data)

    return FileResponse(
        ppt_file,
        filename="Research_Presentation.pptx"
    )