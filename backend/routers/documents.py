import os
from fastapi import APIRouter, UploadFile, File, BackgroundTasks
import asyncio
import uuid
import sys

# Đảm bảo có thể import module từ thư mục cha
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from services.llm_gateway import analyze_document

router = APIRouter()

# Mock DB for Tasks
TASKS_DB = {}

async def process_document_mock(task_id: str, file_content: bytes):
    # Gọi qua LLM Gateway (Sẽ định tuyến tới Claude 3.5 Sonnet)
    try:
        result = await analyze_document(file_content)
        
        # Cập nhật kết quả
        TASKS_DB[task_id] = {
            "status": "completed",
            "result": result.model_dump()
        }
    except Exception as e:
        TASKS_DB[task_id] = {
            "status": "error",
            "result": str(e)
        }

@router.post("/upload")
async def upload_document(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    task_id = str(uuid.uuid4())
    
    TASKS_DB[task_id] = {"status": "processing", "result": None}
    
    # Kích hoạt Background Task
    file_content = await file.read() # Giả lập đọc file
    background_tasks.add_task(process_document_mock, task_id, file_content)
    
    return {"task_id": task_id, "message": "File accepted for processing"}

@router.get("/status/{task_id}")
def get_task_status(task_id: str):
    task = TASKS_DB.get(task_id)
    if not task:
        return {"error": "Task not found"}
    return task
