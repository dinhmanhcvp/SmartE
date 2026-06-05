from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import uuid

router = APIRouter()
users_router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class TrackRequest(BaseModel):
    learning_track: str

# Mock Database
USERS_DB = {
    "ngocanhdangiu@smarte.com": {
        "id": "u_1",
        "username": "ngocanhdangiu",
        "is_first_login": True,
        "learning_track": None,
        "account_status": "active"
    },
    "dinhmanh@smarte.com": {
        "id": "u_2",
        "username": "dinhmanh",
        "is_first_login": True,
        "learning_track": None,
        "account_status": "active"
    },
    "omachi@smarte.com": {
        "id": "u_3",
        "username": "omachi",
        "is_first_login": True,
        "learning_track": None,
        "account_status": "active"
    }
}

@router.post("/login")
def login(request: LoginRequest):
    # Dummy login
    user = USERS_DB.get(request.email)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Dummy JWT
    token = f"mock-jwt-token-{user['id']}"
    return {
        "access_token": token,
        "token_type": "bearer",
        "user_id": user["id"],
        "is_first_login": user["is_first_login"]
    }

@users_router.post("/me/track")
def set_learning_track(request: TrackRequest):
    # Trong thực tế, ta lấy user_id từ JWT. Ở đây mock ID u_1
    user_id = "u_1" 
    # Tìm user (mock logic)
    for email, user in USERS_DB.items():
        if user["id"] == user_id:
            user["learning_track"] = request.learning_track
            user["is_first_login"] = False
            return {"status": "success", "user": user}
    
    raise HTTPException(status_code=404, detail="User not found")
