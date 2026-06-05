from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Relative imports from the current api directory
from .routers import auth, learning, translation, ai, documents

app = FastAPI(
    title="ngocanhdangiu API",
    description="Backend API cho nền tảng học tiếng Anh cá nhân hóa",
    version="1.2.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)

# Cấu hình CORS để Frontend có thể gọi (bao gồm cả local và Vercel)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Trên Vercel thì Next.js gọi nội bộ, nhưng cứ để * cho dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Đăng ký các Routers (lưu ý: endpoint là /api/...)
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(auth.users_router, prefix="/api/users", tags=["Users"])
app.include_router(learning.router, prefix="/api/learning", tags=["Learning & SRS"])
app.include_router(translation.router, prefix="/api/translation", tags=["Translating Tutor"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI Generation"])
app.include_router(documents.router, prefix="/api/documents", tags=["Document Processing"])
# Bỏ websockets router vì Vercel Serverless không hỗ trợ Websocket và ta cũng không cần nữa.

@app.get("/api")
def read_root():
    return {"message": "Welcome to ngocanhdangiu API on Vercel Serverless"}
