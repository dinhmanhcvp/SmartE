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

class SentenceCorrectionOutput(BaseModel):
    is_correct: bool
    response: str
    original: str | None = None
    corrected: str | None = None
    explanation: str | None = None

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
    logger.info("ROUTING: Sending to Gemini 2.5 Flash for Document Analysis...")
    if not gemini_client:
        import asyncio
        await asyncio.sleep(2.0)
        return DocumentAnalysisOutput(advanced_vocab=["omnipotent"], grammar_errors=[])
        
    prompt = "Phân tích nội dung tài liệu này và trích xuất: 1. 5 từ vựng tiếng Anh nâng cao. 2. Nếu có câu sai ngữ pháp, hãy liệt kê tối đa 3 lỗi sai, kèm theo cách sửa và giải thích bằng tiếng Việt. Chỉ trả về JSON."
    
    try:
        response = await gemini_client.aio.models.generate_content(
            model='gemini-2.5-flash',
            contents=[prompt, file_content.decode('utf-8', errors='ignore')],
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=DocumentAnalysisOutput,
            ),
        )
        return DocumentAnalysisOutput.model_validate_json(response.text)
    except Exception as e:
        logger.warning(f"Gemini Doc Analysis failed: {e}")
        return DocumentAnalysisOutput(advanced_vocab=[], grammar_errors=[])

async def generate_atomic_lesson(weak_words: list[str]) -> LessonOutput:
    logger.info("ROUTING: Sending to Gemini 2.5 Flash for Lesson...")
    if not gemini_client:
        import asyncio
        await asyncio.sleep(1.0)
        return LessonOutput(lesson_context="Hệ thống chưa kết nối API.", questions=[])
        
    prompt = f"Hãy đóng vai là gia sư tiếng Anh dễ thương, xưng 'tớ' và gọi học viên là 'cậu'. Tạo bài học ngắn tập trung vào các từ vựng: {weak_words}. Tạo ra một ngữ cảnh học tập thú vị (lesson_context) khoảng 3-4 câu. Sau đó tạo 1 câu hỏi trắc nghiệm (multiple_choice) để kiểm tra cách dùng từ. Trả về JSON."
    
    try:
        response = await gemini_client.aio.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=LessonOutput,
            ),
        )
        return LessonOutput.model_validate_json(response.text)
    except Exception as e:
        logger.warning(f"Gemini Lesson failed: {e}")
        return LessonOutput(lesson_context="Hệ thống AI đang bảo trì, cậu chờ xíu nhé!", questions=[])

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

async def check_sentence_tutor(sentence: str) -> SentenceCorrectionOutput:
    logger.info("ROUTING: Sending to Gemini for Sentence Checking...")
    if not gemini_client:
        import asyncio
        await asyncio.sleep(1.0)
        return SentenceCorrectionOutput(is_correct=False, response="Chưa có kết nối AI.", original=sentence, corrected=sentence, explanation="")
        
    prompt = f"Bạn là gia sư tiếng Anh. Học viên vừa nói/viết câu sau: '{sentence}'. 1. Kiểm tra ngữ pháp và sự tự nhiên. 2. Nếu đúng hoàn toàn, hãy khen ngợi. 3. Nếu sai hoặc chưa tự nhiên, chỉ ra lỗi sai, đề xuất câu sửa lại, và giải thích bằng tiếng Việt thật dễ hiểu. Gọi học viên là cậu, xưng tớ. Trả về JSON."
    
    try:
        response = await gemini_client.aio.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=SentenceCorrectionOutput,
            ),
        )
        return SentenceCorrectionOutput.model_validate_json(response.text)
    except Exception as e:
        logger.warning(f"Gemini Sentence Check failed: {e}")
        return SentenceCorrectionOutput(is_correct=True, response="Tớ đang hơi mệt, không phân tích được bây giờ.", original=None, corrected=None, explanation=None)
