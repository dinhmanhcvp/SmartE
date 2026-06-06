const BASE_URL = '/api';

export const apiClient = {
  async generateAtomicLesson(weak_vocab_keys: string[]) {
    try {
      const response = await fetch(`${BASE_URL}/ai/generate-lesson`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weak_vocab_keys }),
      });
      if (!response.ok) throw new Error('API Error');
      return await response.json();
    } catch (error) {
      console.warn("[ngocanhdangiu] Backend chưa chạy — bỏ qua lỗi generate-lesson");
      throw error;
    }
  },

  async uploadDocument(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${BASE_URL}/documents/upload`, {
        method: 'POST',
        body: formData, // Không set Content-Type vì browser sẽ tự động set kèm theo boundary
      });
      if (!response.ok) throw new Error('API Error');
      return await response.json(); // Trả về { task_id }
    } catch (error) {
      console.error("Upload failed:", error);
      throw error;
    }
  },

  async checkDocumentStatus(taskId: string) {
    try {
      const response = await fetch(`${BASE_URL}/documents/status/${taskId}`, {
        method: 'GET',
      });
      if (!response.ok) throw new Error('API Error');
      return await response.json();
    } catch (error) {
      console.error("Status check failed:", error);
      throw error;
    }
  },

  async analyzeTranslation(selected_text: string, full_sentence_context: string = "") {
    try {
      const response = await fetch(`${BASE_URL}/translation/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selected_text, full_sentence_context }),
      });
      if (!response.ok) throw new Error('Translation API Error');
      return await response.json();
    } catch (error) {
      console.error("Translation failed:", error);
      throw error;
    }
  },

  async chatWithTutor(question: string, context: string) {
    try {
      const response = await fetch(`${BASE_URL}/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, context }),
      });
      if (!response.ok) throw new Error('Chat API Error');
      return await response.json();
    } catch (error) {
      console.error("Chat failed:", error);
      throw error;
    }
  },

  async checkSentence(sentence: string) {
    try {
      const response = await fetch(`${BASE_URL}/ai/check-sentence`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence }),
      });
      if (!response.ok) throw new Error('Check Sentence API Error');
      return await response.json();
    } catch (error) {
      console.error("Check sentence failed:", error);
      throw error;
    }
  }
};
