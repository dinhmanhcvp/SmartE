from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, learning, translation, ai, documents, websockets

app = FastAPI(
    title="SmartE API",
    description="Backend API cho nền tảng học tiếng Anh SmartE",
    version="1.1.0"
)

# Cấu hình CORS để Frontend (Next.js) có thể gọi
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Đăng ký các Routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(auth.users_router, prefix="/api/users", tags=["Users"])
app.include_router(learning.router, prefix="/api/learning", tags=["Learning & SRS"])
app.include_router(translation.router, prefix="/api/translation", tags=["Translating Tutor"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI Generation"])
app.include_router(documents.router, prefix="/api/documents", tags=["Document Processing"])
app.include_router(websockets.router, prefix="/ws", tags=["WebSockets"])

@app.get("/")
def read_root():
    return {"message": "Welcome to SmartE API"}
