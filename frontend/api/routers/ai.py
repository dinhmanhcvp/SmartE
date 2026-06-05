import os
from fastapi import APIRouter
from pydantic import BaseModel
import sys

# Đảm bảo có thể import module từ thư mục cha
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from services.llm_gateway import generate_atomic_lesson

router = APIRouter()

class LessonGenerateRequest(BaseModel):
    weak_vocab_keys: list[str]

@router.post("/generate-lesson")
async def generate_lesson(request: LessonGenerateRequest):
    # Gọi qua LLM Gateway (Sẽ định tuyến tới GPT-4o)
    result = await generate_atomic_lesson(request.weak_vocab_keys)
    return result.model_dump()
