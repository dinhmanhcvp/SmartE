import sys
import re

file_path = r'C:\Users\HP\Downloads\SmartE\frontend\api\services\llm_gateway.py'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add SentenceCorrectionOutput schema
new_schema = """class ChatOutput(BaseModel):
    response: str

class SentenceCorrectionOutput(BaseModel):
    is_correct: bool
    response: str
    original: str | None = None
    corrected: str | None = None
    explanation: str | None = None
"""
content = content.replace('class ChatOutput(BaseModel):\n    response: str\n', new_schema)

# Replace Document Analysis
start_idx = content.find('async def analyze_document')
end_idx = content.find('async def generate_atomic_lesson')
old_block = content[start_idx:end_idx]

new_block = """async def analyze_document(file_content: bytes) -> DocumentAnalysisOutput:
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

"""
content = content.replace(old_block, new_block)

# Replace Generate Atomic Lesson
start_idx2 = content.find('async def generate_atomic_lesson')
end_idx2 = content.find('async def chat_with_tutor')
old_block2 = content[start_idx2:end_idx2]

new_block2 = """async def generate_atomic_lesson(weak_words: list[str]) -> LessonOutput:
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

"""
content = content.replace(old_block2, new_block2)

# Add check_sentence_tutor
new_func = """
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
"""
content += new_func

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done patching!')
