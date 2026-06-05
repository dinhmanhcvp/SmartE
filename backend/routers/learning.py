from fastapi import APIRouter
from pydantic import BaseModel
import time

router = APIRouter()

class ProgressRequest(BaseModel):
    item_key: str
    item_type: str
    is_correct: bool
    time_spent_seconds: int

# Mock SRS Data
SRS_DB = {
    "u_1": {
        "knowledge_states": {},
        "srs_items": {}
    }
}

@router.get("/dashboard")
def get_dashboard():
    # Giả lập lấy data của user u_1
    return {
        "nodes": [
            {"id": "present_simple", "status": "mastered"},
            {"id": "present_continuous", "status": "learning"}
        ],
        "srs_due_today": [
            {"item_key": "run out of", "due_time": time.time()}
        ]
    }

@router.post("/progress")
def submit_progress(request: ProgressRequest):
    # Dummy logic SM-2
    # Cập nhật mastery_score và next_review_due
    new_due = time.time() + (86400 if request.is_correct else 3600)
    
    return {
        "status": "success",
        "item_key": request.item_key,
        "mastery_score": 1 if request.is_correct else 0,
        "next_review_due": new_due
    }
