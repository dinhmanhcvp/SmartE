import os
from fastapi import APIRouter
from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader
import sys

# Đảm bảo có thể import module từ thư mục cha
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from services.llm_gateway import generate_translation_tutor

router = APIRouter()

# Khởi tạo Jinja2 Environment cho Prompt Registry
current_dir = os.path.dirname(os.path.abspath(__file__))
prompts_dir = os.path.join(os.path.dirname(current_dir), 'prompts')
env = Environment(loader=FileSystemLoader(prompts_dir))

class TranslationRequest(BaseModel):
    selected_text: str
    full_sentence_context: str
    learning_track: str = "beginner" # Mặc định

@router.post("/analyze")
async def analyze_translation(request: TranslationRequest):
    # 1. Đọc và Render Prompt từ Registry
    template = env.get_template('tutor_translation.jinja2')
    prompt = template.render(
        selected_text=request.selected_text,
        full_sentence_context=request.full_sentence_context,
        learning_track=request.learning_track
    )
    
    # 2. Gửi qua LLM Gateway (Sẽ được định tuyến tới Gemini 1.5 Flash)
    result = await generate_translation_tutor(prompt)
    
    # 3. Trả về JSON chuẩn Pydantic
    return result.model_dump()
