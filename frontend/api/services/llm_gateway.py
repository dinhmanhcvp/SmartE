import asyncio
from pydantic import BaseModel
import logging
import os
from dotenv import load_dotenv

# Import Google GenAI SDK
from google import genai
from google.genai import types

load_dotenv()

logger = logging.getLogger(__name__)

# Pydantic Schemas for Structured Outputs
class TranslationOutput(BaseModel):
    contextual_translation_vi: str
    ipa_pronunciation: str
    part_of_speech: str
    teaching_note_vi: str
    grammar_theory_vi: str
    example_sentence_en: str
    example_sentence_vi: str

class DocumentAnalysisOutput(BaseModel):
    advanced_vocab: list[str]
    grammar_errors: list[dict]

class LessonOutput(BaseModel):
    lesson_context: str
    questions: list[dict]

class ChatOutput(BaseModel):
    response: str

# ================= LLM GATEWAY =================

# Initialize Google GenAI client (tự động lấy key từ os.environ["GOOGLE_API_KEY"] hoặc có thể truyền tường minh)
api_key = os.getenv("GOOGLE_API_KEY")
gemini_client = genai.Client(api_key=api_key) if api_key else None

async def generate_translation_tutor(prompt: str) -> TranslationOutput:
    """
    Primary Model: Gemini 1.5 Flash (Google) - Fast & Cheap.
    Fallback: GPT-4o mini (OpenAI).
    """
    logger.info("ROUTING: Sending to Gemini 1.5 Flash...")
    
    if not gemini_client:
        logger.warning("No GOOGLE_API_KEY found, falling back to Mock Data.")
        await asyncio.sleep(0.8)
        return TranslationOutput(
            contextual_translation_vi="cạn kiệt, hết sạch (sữa, tiền, thời gian...)",
            ipa_pronunciation="/rʌn aʊt əv/",
            part_of_speech="Phrasal Verb",
            teaching_note_vi="[Mock] 'Run out of' luôn đi kèm với thứ bạn vừa dùng hết.",
            grammar_theory_vi="Đây là một Cụm động từ (Phrasal Verb) không thể tách rời.",
            example_sentence_en="We have run out of milk, so I need to go to the store.",
            example_sentence_vi="Chúng ta hết sữa rồi, nên tôi cần ra cửa hàng."
        )

    try:
        # Gọi API thật tới Gemini 1.5 Flash và ép kiểu Structured Output JSON
        # SDK mới của google-genai hỗ trợ async qua client.aio
        response = await gemini_client.aio.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=TranslationOutput,
            ),
        )
        
        # Pydantic tự động validate và parse JSON string
        return TranslationOutput.model_validate_json(response.text)
        
    except Exception as e:
        logger.warning(f"Gemini failed: {e}. FALLBACK to Mock/GPT-4o mini...")
        await asyncio.sleep(1.0)
        return TranslationOutput(
            contextual_translation_vi="hết nhẵn",
            ipa_pronunciation="/rʌn aʊt əv/",
            part_of_speech="Phrasal Verb",
            teaching_note_vi="[Fallback Mock] Dùng khi tiêu thụ hết một thứ gì đó.",
            grammar_theory_vi="Đây là một cấu trúc động từ cơ bản.",
            example_sentence_en="I ran out of ideas.",
            example_sentence_vi="Tôi cạn ý tưởng rồi."
        )

async def analyze_document(file_content: bytes) -> DocumentAnalysisOutput:
    """
    Primary Model: Claude 3.5 Sonnet (Anthropic) - Best for Reading & Reasoning.
    """
    logger.info("ROUTING: Sending to Claude 3.5 Sonnet (Mock)...")
    
    # Simulate heavy reading task (5 - 8 seconds)
    await asyncio.sleep(5.0)
    
    return DocumentAnalysisOutput(
        advanced_vocab=["omnipotent", "ubiquitous", "ephemeral"],
        grammar_errors=[
            {
                "original": "He do not like", 
                "corrected": "He does not like", 
                "explanation": "[Claude 3.5 Sonnet Mock] 'He' is third-person singular."
            }
        ]
    )

async def generate_atomic_lesson(weak_words: list[str]) -> LessonOutput:
    """
    Primary Model: GPT-4o (OpenAI) - Creative & Strict formatting.
    """
    logger.info("ROUTING: Sending to GPT-4o (Mock)...")
    
    # Simulate generation latency (2 seconds)
    await asyncio.sleep(2.0)
    
    return LessonOutput(
        lesson_context=f"[GPT-4o Mock] Hãy tưởng tượng bạn đang dùng các từ {weak_words} trong một nhà hàng...",
        questions=[
            {
                "type": "multiple_choice",
                "question": "Which sentence uses 'run out of' correctly?",
                "options": ["A. I run out of the house", "B. I run out of money", "C. I run out of him"],
                "correct_answer": "B"
            }
        ]
    )

async def chat_with_tutor(question: str, context: str) -> ChatOutput:
    """
    Tutor mode using Gemini 2.5 Flash.
    """
    logger.info("ROUTING: Sending to Gemini 1.5 Flash for Chat...")
    
    if not gemini_client:
        await asyncio.sleep(0.5)
        return ChatOutput(response="[Mock AI] Xin lỗi cậu, nhưng tớ chưa kết nối được với não bộ của tớ (chưa có API Key). Cậu kiểm tra lại nhé!")

    prompt = f"""
    Bạn là gia sư tiếng Anh riêng của Ngọc Anh, một người rất tâm lý, ấm áp và lãng mạn. 
    Bạn luôn gọi người dùng là "cậu" hoặc "Nàng", xưng là "tớ".
    Dưới đây là nội dung bài học mà Ngọc Anh đang học:
    ---
    {context}
    ---
    Câu hỏi của Ngọc Anh: {question}
    
    Hãy trả lời thật súc tích, dễ hiểu, như một người bạn thân đang giảng bài. Có thể dùng emoji dễ thương.
    Tuyệt đối không sử dụng markdown in đậm/in nghiêng quá phức tạp gây rối mắt.
    """

    try:
        response = await gemini_client.aio.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=ChatOutput,
            ),
        )
        return ChatOutput.model_validate_json(response.text)
    except Exception as e:
        logger.warning(f"Gemini Chat failed: {e}")
        return ChatOutput(response="[AI Đang buồn ngủ] Tớ đang gặp chút sự cố đường truyền, cậu hỏi lại tớ sau nhé! 🥺")
