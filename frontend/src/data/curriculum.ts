// Giáo trình Tiếng Anh Học thuật (IELTS/Academic) — tớ soạn riêng cho cậu từ mất gốc
// Mỗi Unit có: Lý thuyết, Từ vựng Academic, Ngữ pháp, Bài đọc/Viết, Bài tập

export type VocabItem = {
  word: string;
  ipa: string;
  meaning: string;
  example: string;
};

export type GrammarPoint = {
  rule: string;
  explanation: string;
  examples: string[];
};

export type Exercise = {
  id: string;
  type: 'fill-in' | 'matching' | 'reorder' | 'choose' | 'translate';
  instruction: string;
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
};

export type Lesson = {
  id: string;
  unit: number;
  title: string;
  titleVi: string;
  objective: string;
  reading: {
    title: string;
    content: string;
    translation?: string;
  };
  vocabulary: VocabItem[];
  grammar: GrammarPoint[];
  exercises: Exercise[];
  conversationPractice?: {
    situation: string;
    dialogue: { speaker: string; line: string; lineVi: string }[];
  };
  tips?: string[];
};

export const curriculumData: Lesson[] = [
  // ===== PHẦN BỔ TRỢ CƠ BẢN (Pre-Academic Foundation) =====
  {
    id: "unit-0a-basic-tenses",
    unit: 0,
    title: "Pre-Academic: Master the Tenses",
    titleVi: "Bổ trợ Cơ bản: Làm Chủ Các Thì",
    objective: "Mục tiêu 45 Phút: Hiểu bản chất và phân biệt 4 thì nền tảng trong tiếng Anh (Hiện tại đơn, Quá khứ đơn, Tương lai đơn, Hiện tại tiếp diễn). Đây là bước KHÔNG THỂ BỎ QUA trước khi bước vào phần Academic. Cậu yên tâm, tớ sẽ giải thích chi tiết và dễ hiểu!",
    reading: {
      title: "A Day in My Life (Một ngày trong cuộc sống của tớ)",
      content: "Every morning, I wake up at 6:30 and drink a glass of warm water. I usually study English for one hour before school. Today, I am sitting at my desk and writing this essay. Right now, my cat is sleeping on the sofa.\\n\\nYesterday, I visited my grandmother. She cooked a delicious meal for the whole family. We talked about my future plans. I told her that I wanted to study abroad.\\n\\nNext year, I will take the IELTS exam. I will study harder every day. My teacher said that I will achieve a good score if I practice consistently. I believe that my dream will come true.",
      translation: "Mỗi buổi sáng, tớ thức dậy lúc 6:30 và uống một cốc nước ấm. Tớ thường học tiếng Anh một tiếng trước khi đến trường. Hôm nay, tớ đang ngồi ở bàn và viết bài luận này. Ngay lúc này, con mèo của tớ đang ngủ trên sofa.\\n\\nHôm qua, tớ đã đến thăm bà ngoại. Bà đã nấu một bữa ăn ngon cho cả gia đình. Chúng tớ đã nói về kế hoạch tương lai của tớ. Tớ nói với bà rằng tớ muốn đi du học.\\n\\nNăm tới, tớ sẽ thi IELTS. Tớ sẽ học chăm hơn mỗi ngày. Cô giáo nói rằng tớ sẽ đạt điểm tốt nếu tớ luyện tập đều đặn. Tớ tin rằng giấc mơ của tớ sẽ trở thành hiện thực."
    },
    vocabulary: [
      { word: 'Wake up', ipa: '/weɪk ʌp/', meaning: '**Nghĩa:** Thức dậy.\\n\\n💡 **Lưu ý:** Đây là Phrasal Verb (Cụm động từ). Quá khứ của nó là **woke up** (BẤT QUY TẮC nhé, không phải *waked up*).\\n\\n🔗 **Ví dụ:** I usually wake up early. / Yesterday I woke up late.', example: 'I wake up at 7 AM every day.' },
      { word: 'Usually', ipa: '/ˈjuː.ʒu.ə.li/', meaning: '**Nghĩa:** Thường xuyên (khoảng 80% thời gian).\\n\\n💡 **Lưu ý:** Đây là trạng từ chỉ tần suất - dấu hiệu nhận biết thì **Hiện tại đơn**! Các trạng từ khác cùng nhóm: *always, often, sometimes, rarely, never*.\\n\\n⚠️ **Vị trí:** Đứng TRƯỚC động từ thường, SAU động từ to be.', example: 'She usually drinks coffee in the morning.' },
      { word: 'Visit', ipa: '/ˈvɪz.ɪt/', meaning: '**Nghĩa:** Thăm, ghé thăm.\\n\\n💡 **Lưu ý:** Đây là động từ QUY TẮC (Regular Verb). Quá khứ chỉ cần thêm **-ed**: visited. Phát âm là /ˈvɪz.ɪ.tɪd/ (thêm âm /ɪd/ vì tận cùng bằng chữ t).', example: 'I visited the museum last weekend.' },
      { word: 'Cook', ipa: '/kʊk/', meaning: '**Nghĩa:** Nấu ăn (Động từ) / Đầu bếp (Danh từ).\\n\\n💡 **Lưu ý:** Quá khứ: **cooked** /kʊkt/. Lưu ý phát âm đuôi -ed là /t/ vì chữ k là âm vô thanh.\\n\\n🔗 **Word Family:** Cook (V/N) → Cooker (Bếp nấu) → Cooking (Việc nấu ăn).', example: 'My mom cooked dinner yesterday.' },
      { word: 'Achieve', ipa: '/əˈtʃiːv/', meaning: '**Nghĩa:** Đạt được (sau nỗ lực).\\n\\n💡 **Lưu ý:** Động từ QUY TẮC. Quá khứ: **achieved**. Tương lai: **will achieve**. cậu sẽ gặp lại từ này rất nhiều ở phần Academic nhé!', example: 'She will achieve her goals next year.' },
      { word: 'Practice', ipa: '/ˈpræk.tɪs/', meaning: '**Nghĩa:** Luyện tập, thực hành.\\n\\n💡 **Lưu ý:** Trong tiếng Anh Mỹ, *practice* vừa là Danh từ vừa là Động từ. Trong tiếng Anh Anh, Động từ viết là *practise* (s). IELTS chấp nhận cả hai.', example: 'I practice speaking English every evening.' },
      { word: 'Believe', ipa: '/bɪˈliːv/', meaning: '**Nghĩa:** Tin tưởng, tin rằng.\\n\\n💡 **Lưu ý:** Đây là Stative Verb (Động từ trạng thái) - KHÔNG ĐƯỢC chia ở thì tiếp diễn! Không nói *I am believing* mà nói **I believe**.\\n\\n⚠️ **Các từ tương tự:** know, want, need, love, hate.', example: 'I believe that dreams can come true.' },
      { word: 'Consistently', ipa: '/kənˈsɪs.tənt.li/', meaning: '**Nghĩa:** Một cách đều đặn, nhất quán.\\n\\n💡 **Lưu ý:** Trạng từ này rất hay dùng trong IELTS. *Practice consistently* = Luyện tập đều đặn.\\n\\n🔗 **Word Family:** Consistent (Tính từ) → Consistently (Trạng từ) → Consistency (Danh từ).', example: 'If you study consistently, you will improve.' },
      { word: 'Delicious', ipa: '/dɪˈlɪʃ.əs/', meaning: '**Nghĩa:** Ngon, thơm ngon.\\n\\n💡 **Lưu ý:** Nâng cấp hơn *very good* khi miêu tả đồ ăn. cậu có thể nói *absolutely delicious* (ngon tuyệt cú mèo).\\n\\n⚠️ **Lỗi sai:** Không nói *very delicious* vì delicious đã mang nghĩa rất ngon rồi.', example: 'The cake was absolutely delicious!' },
      { word: 'Abroad', ipa: '/əˈbrɔːd/', meaning: '**Nghĩa:** Ở nước ngoài, ra nước ngoài.\\n\\n💡 **Lưu ý:** KHÔNG CÓ giới từ *to* đằng trước! Nói **go abroad** chứ KHÔNG nói *go to abroad*. Đây là lỗi sai  của người Việt.\\n\\n🔗 **Collocations:** study abroad (du học), travel abroad (đi du lịch nước ngoài).', example: 'I want to study abroad next year.' }
    ],
    grammar: [
      {
        rule: 'Thì Hiện tại đơn (Present Simple) — Thói quen & Sự thật',
        explanation: 'Cậu dùng thì này khi nói về:\\n• Thói quen hàng ngày: *I wake up at 6:30.*\\n• Sự thật hiển nhiên: *Water boils at 100°C.*\\n\\n📌 **Công thức:****\\n• Khẳng định: **S + V(s/es)** → She study → ⚠️ SAI! Phải là **She studies** (thêm -es vì chủ ngữ ngôi 3 số ít).\\n• Phủ định: **S + do/does + not + V** → I **do not** like fish.\\n• Câu hỏi: **Do/Does + S + V?** → **Does** she speak English?\\n\\n⚠️ **Lỗi sai #1 của người Việt:** Quên thêm **-s/-es** khi chủ ngữ là He/She/It.',
        examples: [
          '✅ She **studies** English every day. (Cô ấy học tiếng Anh mỗi ngày)',
          '❌ She study English every day. → Sai vì thiếu -es cho ngôi thứ 3.',
          '✅ I **do not** eat meat. (Tớ không ăn thịt)',
          '✅ **Does** he **like** coffee? — Yes, he **does**. (Anh ấy có thích cà phê không?)'
        ]
      },
      {
        rule: 'Thì Quá khứ đơn (Past Simple) — Hành động đã xong',
        explanation: 'Dùng khi nói về hành động đã XẢY RA VÀ KẾT THÚC trong quá khứ. Dấu hiệu nhận biết: *yesterday, last week, in 2020, ago*.\\n\\n📌 **Công thức:****\\n• Khẳng định: **S + V-ed** (quy tắc) hoặc **S + V2** (bất quy tắc).\\n• Phủ định: **S + did not + V nguyên mẫu**.\\n• Câu hỏi: **Did + S + V nguyên mẫu?**\\n\\n⚠️ **Bẫy lớn nhất:** Khi dùng **did/did not**, động từ chính phải trở về **NGUYÊN MẪU**: *Did you **went**?* → SAI! Phải là *Did you **go**?*',
        examples: [
          '✅ I **visited** my grandmother yesterday. (Tớ đã thăm bà hôm qua) — Quy tắc: visit + ed.',
          '✅ She **cooked** a delicious meal. (Bà ấy đã nấu bữa ăn ngon) — Quy tắc: cook + ed.',
          '✅ We **talked** about future plans. (Chúng tớ đã nói về kế hoạch tương lai)',
          '❌ Did you **went** there? → Sai! ✅ Did you **go** there?'
        ]
      },
      {
        rule: 'Thì Tương lai đơn (Future Simple) & Hiện tại tiếp diễn (Present Continuous)',
        explanation: '**Tương lai đơn:** Dùng **will + V nguyên mẫu** khi nói về kế hoạch, dự đoán, lời hứa.\\n• *I **will take** the IELTS exam next year.*\\n\\n**Hiện tại tiếp diễn:** Dùng **am/is/are + V-ing** khi nói về hành động đang xảy ra NGAY BÂY GIỜ.\\n• *I **am sitting** at my desk right now.*\\n\\n⚠️ **Rất quan trọng:** Một số động từ KHÔNG BAO GIỜ chia tiếp diễn (Stative Verbs): **know, believe, want, need, love, hate, like, understand**. Không nói *I am knowing* mà nói **I know**.',
        examples: [
          '✅ **Tương lai:** I **will study** harder. (Tớ sẽ học chăm hơn)',
          '✅ **Tiếp diễn:** My cat **is sleeping** on the sofa. (Con mèo đang ngủ)',
          '✅ **Tiếp diễn:** What **are** you **doing** right now? (Cậu đang làm gì?)',
          '❌ I **am believing** you. → Sai! ✅ I **believe** you. (believe là Stative Verb)'
        ]
      }
    ],
    exercises: [
      { id: "u0a-ex1", type: "choose", instruction: "Cấp độ 1: Nhận biết thì — Câu này ở thì gì?", question: "She drinks coffee every morning.", options: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn"], answer: "Hiện tại đơn", hint: "'Every morning' = thói quen → Hiện tại đơn." },
      { id: "u0a-ex2", type: "choose", instruction: "Cấp độ 1: Nhận biết thì — Câu này ở thì gì?", question: "I visited my grandma last Sunday.", options: ["Hiện tại đơn", "Quá khứ đơn", "Hiện tại tiếp diễn"], answer: "Quá khứ đơn", hint: "'Last Sunday' = thời điểm trong quá khứ." },
      { id: "u0a-ex3", type: "fill-in", instruction: "Cấp độ 2: Chia động từ Hiện tại đơn — Chú ý ngôi thứ 3!", question: "He _____ (study) English every day.", answer: "studies", hint: "He = ngôi 3 số ít → study bỏ y thêm -ies." },
      { id: "u0a-ex4", type: "fill-in", instruction: "Cấp độ 2: Chia động từ Quá khứ đơn.", question: "They _____ (visit) the museum yesterday.", answer: "visited", hint: "Yesterday → Quá khứ đơn. Visit + ed = visited." },
      { id: "u0a-ex5", type: "choose", instruction: "Cấp độ 2: Phủ định Quá khứ đơn.", question: "She _____ go to school yesterday.", options: ["doesn't", "didn't", "isn't"], answer: "didn't", hint: "Yesterday = quá khứ → dùng did not = didn't." },
      { id: "u0a-ex6", type: "fill-in", instruction: "Cấp độ 2: Hiện tại tiếp diễn — Điền dạng đúng.", question: "Look! The baby _____ (sleep) on the sofa.", answer: "is sleeping", hint: "Look! = đang xảy ra ngay bây giờ → am/is/are + V-ing. The baby = It → is." },
      { id: "u0a-ex7", type: "choose", instruction: "Cấp độ 2: Stative Verb — Câu nào ĐÚNG?", question: "Chọn câu đúng ngữ pháp:", options: ["I am knowing the answer.", "I know the answer.", "I knowing the answer."], answer: "I know the answer.", hint: "Know là Stative Verb → không chia tiếp diễn." },
      { id: "u0a-ex8", type: "reorder", instruction: "Cấp độ 3: Sắp xếp câu Tương lai đơn.", question: "will / I / the / take / exam / IELTS / next year", answer: "I will take the IELTS exam next year", hint: "S (I) + will + V (take) + O (the IELTS exam) + Thời gian." },
      { id: "u0a-ex9", type: "translate", instruction: "Cấp độ 3: Dịch câu Hiện tại đơn.", question: "Tớ thường thức dậy lúc 6 giờ sáng.", answer: "I usually wake up at 6 AM", hint: "Tớ = I, Thường = usually, Thức dậy = wake up." },
      { id: "u0a-ex10", type: "translate", instruction: "Cấp độ 3: Dịch câu Quá khứ đơn + Tương lai.", question: "Hôm qua tớ đã học tiếng Anh. Ngày mai tớ sẽ học tiếp.", answer: "Yesterday I studied English. Tomorrow I will study more", hint: "Hôm qua = Yesterday → studied (V-ed). Ngày mai = Tomorrow → will study." }
    ],
    conversationPractice: {
      situation: "cậu đang kể cho tớ nghe về một ngày bình thường của cậu. Hãy chú ý cách dùng thì nhé!",
      dialogue: [
        { speaker: "Gia sư", line: "What do you usually do in the morning?", lineVi: "Cậu thường làm gì vào buổi sáng?" },
        { speaker: "Ngọc Anh", line: "I usually wake up at 6:30 and drink warm water.", lineVi: "Tớ thường thức dậy lúc 6:30 và uống nước ấm." },
        { speaker: "Gia sư", line: "That's great! And what did you do yesterday evening?", lineVi: "Tuyệt! Và tối hôm qua cậu đã làm gì?" },
        { speaker: "Ngọc Anh", line: "I visited my grandmother. She cooked a really delicious dinner.", lineVi: "Tớ đã đến thăm bà ngoại. Bà đã nấu một bữa tối thực sự ngon." },
        { speaker: "Gia sư", line: "Lovely! What are you doing right now?", lineVi: "Đáng yêu quá! Ngay bây giờ cậu đang làm gì?" },
        { speaker: "Ngọc Anh", line: "I am studying English with you! And I will practice more tonight.", lineVi: "Tớ đang học tiếng Anh cùng cậu! Và tớ sẽ luyện tập thêm tối nay." }
      ]
    },
    tips: [
      "💡 **Mẹo nhỏ:**nhớ nhanh:** Hiện tại đơn = **Thói quen** (every day, always). Quá khứ đơn = **Đã xong** (yesterday, last week). Tương lai = **Sẽ** (will, tomorrow). Tiếp diễn = **Đang** (now, right now, look!).",
      "💡 cậu đừng cố học thuộc bảng chia động từ. Hãy đọc đi đọc lại bài Reading ở trên, não bộ sẽ tự động nhận ra pattern (mẫu) của từng thì.",
      "💡 Lỗi sai mà 90% người Việt mắc phải: Quên thêm **-s/-es** cho ngôi thứ 3 (He/She/It). Tớ muốn cậu ghi nhớ câu thần chú: **He/She/It → thêm S!**"
    ]
  },
  {
    id: "unit-0b-verb-conjugation",
    unit: 0,
    title: "Pre-Academic: Verbs, Word Classes & Sentence Patterns",
    titleVi: "Bổ trợ Cơ bản: Chia Động từ, Từ loại & Mẫu câu",
    objective: "Mục tiêu 45 Phút: Phân biệt Động từ Quy tắc vs Bất quy tắc, nắm vững 4 từ loại chính (Danh-Động-Tính-Trạng) và biết cách xây dựng câu phức. Đây là những kiến thức nền tảng quan trọng cho IELTS.",
    reading: {
      title: "How I Learned to Love English (Cách tớ học cách yêu tiếng Anh)",
      content: "When I was young, I found English extremely difficult. I could not understand anything. My teacher spoke quickly, and I felt confused. I wanted to give up.\\n\\nHowever, everything changed when I discovered music. I began listening to English songs carefully. I wrote down the lyrics and looked up every new word. Gradually, my vocabulary grew significantly. I also watched movies without subtitles, which greatly improved my listening skills.\\n\\nNow, I can read academic articles confidently. I speak fluently with my online tutor. Learning a language is a beautiful journey, not a race. If you practice patiently and consistently, you will definitely succeed.",
      translation: "Khi tớ còn nhỏ, tớ thấy tiếng Anh rất khó. Tớ không thể hiểu bất cứ điều gì. Cô giáo nói nhanh, và tớ cảm thấy bối rối. Tớ muốn bỏ cuộc.\\n\\nTuy nhiên, mọi thứ thay đổi khi tớ khám phá ra âm nhạc. Tớ bắt đầu nghe nhạc tiếng Anh một cách cẩn thận. Tớ chép lại lời bài hát và tra cứu mọi từ mới. Dần dần, vốn từ vựng của tớ tăng lên đáng kể. Tớ cũng xem phim không phụ đề, điều này cải thiện rất nhiều kỹ năng nghe của tớ.\\n\\nBây giờ, tớ có thể đọc các bài báo học thuật một cách tự tin. Tớ nói trôi chảy với gia sư trực tuyến. Học một ngôn ngữ là một hành trình đẹp đẽ, không phải một cuộc đua. Nếu cậu luyện tập kiên nhẫn và đều đặn, cậu chắc chắn sẽ thành công."
    },
    vocabulary: [
      { word: 'Difficult', ipa: '/ˈdɪf.ɪ.kəlt/', meaning: '**Nghĩa:** Khó khăn. **(Tính từ - Adjective)**\\n\\n💡 **Lưu ý:** Đây là **Tính từ** (Adjective) — bổ nghĩa cho Danh từ hoặc đứng sau To Be. *English is difficult.* ≠ *English is difficultly* (SAI!)\\n\\n🔗 **Word Family:** Difficult (Adj) → Difficulty (N - Sự khó khăn) → Difficultly (❌ không tồn tại!)', example: 'The exam was extremely difficult.' },
      { word: 'Quickly', ipa: '/ˈkwɪk.li/', meaning: '**Nghĩa:** Một cách nhanh chóng. **(Trạng từ - Adverb)**\\n\\n💡 **Lưu ý:** Trạng từ (đuôi -ly) bổ nghĩa cho **Động từ**: She spoke **quickly**. Tính từ tương ứng là **quick**. Cậu nói *She is quick* (Adj) nhưng *She runs quickly* (Adv).', example: 'He answered the question quickly.' },
      { word: 'Understand', ipa: '/ˌʌn.dəˈstænd/', meaning: '**Nghĩa:** Hiểu. **(Động từ BẤT QUY TẮC)**\\n\\n💡 **Lưu ý:** Đây là động từ **bất quy tắc** : **understand → understood → understood**. Không có dạng *understanded*!\\n\\n⚠️ Cũng là Stative Verb → Không chia tiếp diễn: *I am understanding* (❌)', example: 'I understood the lesson yesterday.' },
      { word: 'Discover', ipa: '/dɪˈskʌv.ər/', meaning: '**Nghĩa:** Khám phá ra, phát hiện ra. **(Động từ QUY TẮC)**\\n\\n💡 **Lưu ý:** Quá khứ: **discovered** (thêm -ed). Danh từ: **discovery** (sự khám phá). cậu thấy chưa, thêm đuôi -y thì động từ biến thành danh từ!', example: 'Scientists discovered a new species.' },
      { word: 'Gradually', ipa: '/ˈɡrædʒ.u.ə.li/', meaning: '**Nghĩa:** Dần dần, từ từ. **(Trạng từ - Adverb)**\\n\\n💡 **Lưu ý:** Trạng từ chỉ cách thức. Rất hay dùng trong IELTS Writing Task 1 để miêu tả biểu đồ: *The number **gradually** increased.*\\n\\n🔗 **Word Family:** Gradual (Adj) → Gradually (Adv).', example: 'Her English gradually improved over time.' },
      { word: 'Confident', ipa: '/ˈkɒn.fɪ.dənt/', meaning: '**Nghĩa:** Tự tin. **(Tính từ - Adjective)**\\n\\n💡 **Lưu ý:** Tính từ → đứng sau To Be hoặc trước Danh từ: *She is **confident**.* / *A **confident** student.*\\n\\n🔗 **Word Family:** Confident (Adj) → Confidently (Adv) → Confidence (N).', example: 'I feel confident about the exam.' },
      { word: 'Fluently', ipa: '/ˈfluː.ənt.li/', meaning: '**Nghĩa:** Một cách trôi chảy. **(Trạng từ - Adverb)**\\n\\n💡 **Lưu ý:** cậu nói *I speak English **fluently*** (Trạng từ bổ nghĩa cho Động từ speak). Nhưng nói *My English is **fluent*** (Tính từ sau to be).', example: 'She speaks three languages fluently.' },
      { word: 'Improve', ipa: '/ɪmˈpruːv/', meaning: '**Nghĩa:** Cải thiện, tiến bộ. **(Động từ QUY TẮC)**\\n\\n💡 **Lưu ý:** Quá khứ: **improved**. Danh từ: **improvement**. Đây là từ vựng IELTS cốt lõi!\\n\\n🔗 **Collocations:** significantly improve (cải thiện đáng kể), improve dramatically.', example: 'Practice will improve your speaking skills.' },
      { word: 'Patiently', ipa: '/ˈpeɪ.ʃənt.li/', meaning: '**Nghĩa:** Một cách kiên nhẫn. **(Trạng từ - Adverb)**\\n\\n💡 **Lưu ý:** Patient (Adj - kiên nhẫn) → Patiently (Adv) → Patience (N - sự kiên nhẫn). cậu nhớ *Patience* phát âm là /ˈpeɪ.ʃəns/ chứ không phải /pa-ti-ên/ nhé!', example: 'The teacher explained patiently until everyone understood.' },
      { word: 'Succeed', ipa: '/səkˈsiːd/', meaning: '**Nghĩa:** Thành công. **(Động từ QUY TẮC)**\\n\\n💡 **Lưu ý:** Quá khứ: **succeeded**. Đây là một bộ từ rất quan trọng:\\n\\n🔗 **Word Family:** Succeed (V) → Success (N) → Successful (Adj) → Successfully (Adv).', example: 'If you work hard, you will succeed.' }
    ],
    grammar: [
      {
        rule: '4 Từ loại chính: Danh - Động - Tính - Trạng',
        explanation: 'Tớ muốn cậu khắc sâu 4 \"vai diễn\" chính trong mỗi câu tiếng Anh:\\n\\n📦 **Danh từ (Noun):** Tên gọi sự vật/người. Ví dụ: *student, music, confidence*.\\n🏃 **Động từ (Verb):** Hành động. Ví dụ: *study, improve, succeed*.\\n🎨 **Tính từ (Adjective):** Miêu tả đặc điểm. Đứng TRƯỚC Danh từ hoặc SAU To Be. Ví dụ: *difficult, confident*.\\n🔧 **Trạng từ (Adverb):** Bổ nghĩa cho Động từ (cách thức). Thường có đuôi **-ly**. Ví dụ: *quickly, gradually, fluently*.\\n\\n💡 **Mẹo nhỏ:**nhận dạng nhanh:** Thấy đuôi -ly → Trạng từ. Thấy đuôi -tion/-ment/-ness → Danh từ. Thấy đuôi -ful/-ous/-ive → Tính từ.',
        examples: [
          '**She is a confident (Adj) student (N).** — Tính từ đứng TRƯỚC Danh từ.',
          '**She speaks (V) fluently (Adv).** — Trạng từ đứng SAU Động từ.',
          '**Her confidence (N) grew (V) gradually (Adv).** — Danh từ làm Chủ ngữ.',
          '⚠️ **Lỗi sai:** She speaks English *fluent*. → SAI! Phải là *fluently* (Adv bổ nghĩa cho V).'
        ]
      },
      {
        rule: 'Động từ Quy tắc vs Bất quy tắc (Regular vs Irregular Verbs)',
        explanation: '**Quy tắc (Regular):** Thêm **-ed** để tạo quá khứ. Ví dụ: visit**ed**, cook**ed**, discover**ed**.\\n\\n**Bất quy tắc (Irregular):** Biến đổi hoàn toàn, phải HỌC THUỘC. Ví dụ: go → **went**, speak → **spoke**, understand → **understood**.\\n\\n💡 **Mẹo nhỏ:**** Đừng cố học thuộc bảng 200 động từ BQT một lúc. Hãy ghi nhớ 20 từ hay gặp nhất trước: go-went, come-came, take-took, make-made, see-saw, know-knew, think-thought, give-gave, find-found, tell-told, speak-spoke, write-wrote, read-read, run-ran, begin-began, feel-felt, leave-left, bring-brought, buy-bought, understand-understood.',
        examples: [
          '**Quy tắc:** I **visited** (visit+ed) the museum. She **cooked** (cook+ed) dinner.',
          '**Bất quy tắc:** I **went** (go) to school. She **spoke** (speak) quickly. We **understood** (understand) everything.',
          '⚠️ **Bẫy Quá khứ:** Khi dùng **did/did not**, động từ về nguyên mẫu: *She **did not go*** (không phải *did not went*).'
        ]
      },
      {
        rule: 'Mẫu câu cơ bản mở rộng: S + V + O + Adverb',
        explanation: 'Ở Unit Academic trước, cậu đã biết khung S-V-O. Giờ tớ muốn cậu thêm \"gia vị\" vào câu bằng cách gắn thêm **Trạng từ (Adverb)** hoặc **Cụm giới từ (Prepositional Phrase)**:\\n\\n**Công thức mở rộng:** S + V + O + **Adverb/Prep Phrase**\\n\\n💡 Chỉ cần thêm 1 trạng từ, câu của cậu lập tức \"lên đời\" từ Band 5 lên Band 6:',
        examples: [
          '**Band 5:** She improved her English. (Cô ấy cải thiện tiếng Anh)',
          '**Band 6:** She improved her English **significantly**. (Cô ấy cải thiện tiếng Anh **đáng kể**)',
          '**Band 6.5:** She **gradually** improved her English **by listening to music**. (Cô ấy **dần dần** cải thiện tiếng Anh **bằng cách nghe nhạc**)',
          '💡 cậu thấy không? Chỉ thêm 1-2 từ mà câu văn đã chuyên nghiệp hẳn lên!'
        ]
      }
    ],
    exercises: [
      { id: "u0b-ex1", type: "choose", instruction: "Cấp độ 1: Từ loại — 'quickly' thuộc từ loại gì?", question: "The word 'quickly' is a/an _____.", options: ["Noun (Danh từ)", "Adjective (Tính từ)", "Adverb (Trạng từ)"], answer: "Adverb (Trạng từ)", hint: "Đuôi -ly → Trạng từ (Adverb)." },
      { id: "u0b-ex2", type: "choose", instruction: "Cấp độ 1: Từ loại — Chọn Tính từ.", question: "Từ nào là Tính từ (Adjective)?", options: ["confidence", "confident", "confidently"], answer: "confident", hint: "Tính từ miêu tả đặc điểm. 'confidence' là Danh từ, 'confidently' là Trạng từ." },
      { id: "u0b-ex3", type: "fill-in", instruction: "Cấp độ 2: Chia Quá khứ BẤT QUY TẮC.", question: "Yesterday, I _____ (go) to the library.", answer: "went", hint: "Go → went → gone. Bất quy tắc!" },
      { id: "u0b-ex4", type: "fill-in", instruction: "Cấp độ 2: Chia Quá khứ BẤT QUY TẮC.", question: "She _____ (speak) English very well at the interview.", answer: "spoke", hint: "Speak → spoke → spoken." },
      { id: "u0b-ex5", type: "choose", instruction: "Cấp độ 2: Chọn từ đúng — Tính từ hay Trạng từ?", question: "She solved the problem _____.", options: ["quick", "quickly", "quickness"], answer: "quickly", hint: "Bổ nghĩa cho động từ 'solved' → cần Trạng từ (đuôi -ly)." },
      { id: "u0b-ex6", type: "fill-in", instruction: "Cấp độ 2: Word Family — Điền dạng Danh từ.", question: "Her _____ (confident) grew after months of practice.", answer: "confidence", hint: "Confident (Adj) → Confidence (N). Cần Danh từ vì đứng sau 'Her' (tính từ sở hữu)." },
      { id: "u0b-ex7", type: "choose", instruction: "Cấp độ 2: Quá khứ — Câu nào ĐÚNG?", question: "Chọn câu đúng ngữ pháp:", options: ["She didn't understood.", "She didn't understand.", "She didn't understands."], answer: "She didn't understand.", hint: "Sau didn't → động từ NGUYÊN MẪU." },
      { id: "u0b-ex8", type: "reorder", instruction: "Cấp độ 3: Sắp xếp câu có Trạng từ.", question: "improved / she / her / English / significantly", answer: "she improved her English significantly", hint: "S (she) + V (improved) + O (her English) + Adv (significantly)." },
      { id: "u0b-ex9", type: "translate", instruction: "Cấp độ 3: Dịch câu (Dùng từ loại đúng).", question: "Cô ấy nói tiếng Anh một cách trôi chảy.", answer: "She speaks English fluently", hint: "Trôi chảy bổ nghĩa cho 'nói' (V) → dùng Trạng từ: fluently." },
      { id: "u0b-ex10", type: "translate", instruction: "Cấp độ 3: Thử thách — Dịch câu phức.", question: "Dần dần, kỹ năng nghe của tớ cải thiện đáng kể.", answer: "Gradually, my listening skills improved significantly", hint: "Dần dần = Gradually, Kỹ năng nghe = listening skills, Cải thiện = improved, Đáng kể = significantly." }
    ],
    conversationPractice: {
      situation: "cậu đang kể cho tớ nghe về hành trình học tiếng Anh của cậu. Chú ý cách dùng Trạng từ và Động từ bất quy tắc nhé!",
      dialogue: [
        { speaker: "Gia sư", line: "How was your English when you were young?", lineVi: "Tiếng Anh của cậu hồi nhỏ thế nào?" },
        { speaker: "Ngọc Anh", line: "It was extremely difficult. I could not understand anything.", lineVi: "Nó rất khó. Tớ không thể hiểu bất cứ điều gì." },
        { speaker: "Gia sư", line: "So what changed? How did you improve?", lineVi: "Vậy điều gì đã thay đổi? Cậu đã cải thiện như thế nào?" },
        { speaker: "Ngọc Anh", line: "I discovered English music! I listened carefully and wrote down the lyrics.", lineVi: "Tớ đã khám phá ra nhạc tiếng Anh! Tớ nghe cẩn thận và chép lại lời bài hát." },
        { speaker: "Gia sư", line: "That's wonderful! Can you speak fluently now?", lineVi: "Tuyệt vời! Cậu có thể nói trôi chảy bây giờ không?" },
        { speaker: "Ngọc Anh", line: "Yes! My vocabulary grew significantly. Now I speak more confidently.", lineVi: "Có! Vốn từ vựng của tớ tăng lên đáng kể. Giờ tớ nói tự tin hơn nhiều." }
      ]
    },
    tips: [
      "💡 **Mẹo nhỏ:**để nhớ từ loại:** Danh từ = NGƯỜI/VẬT (student, music). Động từ = HÀNH ĐỘNG (study, improve). Tính từ = ĐẶC ĐIỂM (difficult, confident). Trạng từ = CÁCH THỨC, thường đuôi -ly (quickly, fluently).",
      "💡 Mỗi lần học từ mới, cậu hãy tra luôn cả **Word Family** (Họ từ) của nó. Ví dụ: succeed (V) → success (N) → successful (Adj) → successfully (Adv). Biết cả 4 dạng = ăn điểm gấp 4 lần!",
      "💡 20 động từ BQT hay gặp nhất tớ đã liệt kê trong phần Ngữ pháp. cậu hãy đọc lại 3 lần rồi tối nay trước khi ngủ đọc thêm 1 lần nữa. Não bộ sẽ tự động ghi nhớ khi ngủ đấy! 😴"
    ]
  },
  {
    id: "unit-0c-intermediate-tenses",
    unit: 0,
    title: "Pre-Academic: Perfect & Continuous Tenses",
    titleVi: "Bo\u0309 tro\u0323 Co\u01a1 ba\u0309n: Thi\u0300 Hoa\u0300n tha\u0300nh & Tie\u0301p die\u0303n",
    objective: "Mu\u0323c tie\u00eau 45 Phu\u0301t: La\u0300m chu\u0309 4 thi\u0300 quan tro\u0323ng tie\u0301p theo — Hie\u0323n ta\u0323i Hoa\u0300n tha\u0300nh, Qua\u0301 khu\u0301 Tie\u0301p die\u0303n, Tu\u01a1\u01a1ng lai Tie\u0301p die\u0303n, va\u0300 Hie\u0323n ta\u0323i Hoa\u0300n tha\u0300nh Tie\u0301p die\u0303n. \u0110a\u0302y la\u0300 4 thi\u0300 ma\u0300 IELTS cu\u0323c ky\u0300 ye\u00eau thi\u0301ch ki\u1ec3m tra!",
    reading: {
      title: "My Journey So Far (Ha\u0300nh tri\u0300nh cu\u0309a to\u0301 cho \u0111e\u0301n nay)",
      content: "I have studied English for three years now. During this time, I have learned thousands of new words and I have taken several practice tests. Recently, I have been focusing on improving my writing skills.\\n\\nI still remember a funny moment from last year. I was sitting in class when the teacher suddenly asked me a question. While I was thinking about the answer, my phone rang loudly. Everyone was laughing, and I was feeling so embarrassed!\\n\\nLooking ahead, I know my journey is not over yet. This time next month, I will be preparing for the IELTS exam. By December, I will be taking mock tests every weekend. I have been dreaming about studying abroad, and I believe this dream will become reality soon.",
      translation: "To\u0301 \u0111a\u0303 ho\u0323c tie\u0301ng Anh \u0111u\u0323o\u0323c ba na\u0306m ro\u0300i. Trong khoang thoi gian na\u0300y, to\u0301 \u0111a\u0303 ho\u0323c ha\u0300ng nghi\u0300n tu\u0300 mo\u0301i va\u0300 to\u0301 \u0111a\u0303 la\u0300m va\u0300i ba\u0300i thi thu\u0309. Ga\u0300n \u0111a\u0302y, to\u0301 \u0111ang ta\u0323p trung va\u0300o vie\u0323c ca\u0309i thie\u0323n ky\u0303 na\u0306ng vie\u0301t cu\u0309a mi\u0300nh.\\n\\nTo\u0301 va\u0303n nho\u0301 mo\u0323t khoa\u0309nh kha\u0306c vui tu\u0300 na\u0306m ngoa\u0301i. To\u0301 \u0111ang ngo\u0300i trong lo\u0301p thi\u0300 co\u0302 gia\u0301o \u0111o\u0323t nhie\u00e2n ho\u0309i to\u0301 mo\u0323t ca\u0302u ho\u0309i. Trong khi to\u0301 \u0111ang nghi\u0303 ve\u0300 ca\u0302u tra\u0309 lo\u0300i, \u0111ie\u0323n thoa\u0323i cu\u0309a to\u0301 reo vang. Mo\u0323i ngu\u0301o\u0300i \u0111ang cu\u0301o\u0300i, va\u0300 to\u0301 ca\u0309m tha\u0301y ra\u0301t xa\u0301u ho\u0309!\\n\\nNhi\u0300n ve\u0300 phi\u0301a tru\u0301o\u0301c, to\u0301 bie\u0301t ha\u0300nh tri\u0300nh cu\u0309a mi\u0300nh chu\u0301a ke\u0301t thu\u0301c. Va\u0300o lu\u0301c na\u0300y tha\u0301ng sau, to\u0301 se\u0303 \u0111ang chuan bi\u0323 cho ky\u0300 thi IELTS. \u0110e\u0301n tha\u0301ng 12, to\u0301 se\u0303 \u0111ang la\u0300m ba\u0300i thi thu\u0309 mo\u0303i cuo\u0301i tua\u0300n. To\u0301 \u0111a\u0303 \u0111ang mo\u01a1 ve\u0300 vie\u0323c du ho\u0323c, va\u0300 to\u0301 tin gia\u0301c mo\u01a1 na\u0300y se\u0303 tro\u0309 tha\u0300nh hie\u0323n thu\u0323c so\u0301m tho\u0302i."
    },
    vocabulary: [
      { word: 'Recently', ipa: '/\u02c8ri\u02d0.s\u0259nt.li/', meaning: '**Ngh\u0129a:** G\u1ea7n \u0111\u00e2y.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** \u0110\u00e2y l\u00e0 d\u1ea5u hi\u1ec7u nh\u1eadn bi\u1ebft th\u00ec **Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh**! Khi th\u1ea5y *recently, lately, so far, already, yet, just* \u2192 ngh\u0129 ngay \u0111\u1ebfn Have/Has + V3.', example: 'I have recently started a new course.' },
      { word: 'Several', ipa: '/\u02c8sev.\u0259r.\u0259l/', meaning: '**Ngh\u0129a:** M\u1ed9t v\u00e0i, nhi\u1ec1u (nh\u01b0ng kh\u00f4ng qu\u00e1 nhi\u1ec1u).\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Thay v\u00ec d\u00f9ng *some* (qu\u00e1 c\u01a1 b\u1ea3n), h\u00e3y d\u00f9ng *several* \u0111\u1ec3 n\u00e2ng band \u0111i\u1ec3m.\\n\\n\ud83d\udd17 **V\u00ed d\u1ee5:** I have taken **several** practice tests.', example: 'She has visited several countries.' },
      { word: 'Focus on', ipa: '/\u02c8f\u0259\u028a.k\u0259s \u0252n/', meaning: '**Ngh\u0129a:** T\u1eadp trung v\u00e0o.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Lu\u00f4n \u0111i v\u1edbi gi\u1edbi t\u1eeb **on**. *Focus on + V-ing*: I am focusing on **improving** my skills.\\n\\n\u26a0\ufe0f Kh\u00f4ng n\u00f3i *focus in* hay *focus at*.', example: 'You should focus on your studies.' },
      { word: 'Suddenly', ipa: '/\u02c8s\u028cd.\u0259n.li/', meaning: '**Ngh\u0129a:** \u0110\u1ed9t nhi\u00ean, b\u1ea5t ch\u1ee3t.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** T\u1eeb n\u00e0y l\u00e0 d\u1ea5u hi\u1ec7u c\u1ee7a th\u00ec **Qu\u00e1 kh\u1ee9 Tie\u0301p die\u0303n** b\u1ecb ng\u1eaft: *I was studying **when** the phone **suddenly** rang.*', example: 'The lights suddenly went out.' },
      { word: 'Embarrassed', ipa: '/\u026am\u02c8b\u00e6r.\u0259st/', meaning: '**Ngh\u0129a:** X\u1ea5u h\u1ed5, ng\u01b0\u1ee3ng ng\u00f9ng.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** \u0110\u1eebng nh\u1ea7m v\u1edbi *embarrassing* (l\u00e0m ng\u01b0\u1eddi kh\u00e1c x\u1ea5u h\u1ed5). **-ed** = c\u1ea3m x\u00fac c\u1ee7a m\u00ecnh. **-ing** = t\u00ednh ch\u1ea5t c\u1ee7a v\u1eadt/vi\u1ec7c.\\n\\n\ud83d\udd17 **V\u00ed d\u1ee5:** I feel **embarrassed**. / The situation is **embarrassing**.', example: 'I was feeling so embarrassed.' },
      { word: 'Prepare', ipa: '/pr\u026a\u02c8pe\u0259r/', meaning: '**Ngh\u0129a:** Chu\u1ea9n b\u1ecb.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *Prepare for + N/V-ing*: I am preparing **for** the exam. Danh t\u1eeb: **preparation**.', example: 'She is preparing for her interview.' },
      { word: 'Mock test', ipa: '/m\u0252k test/', meaning: '**Ngh\u0129a:** B\u00e0i thi th\u1eed.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *Mock* = gi\u1ea3, m\u00f4 ph\u1ecfng. Trong IELTS, l\u00e0m **mock tests** th\u01b0\u1eddng xuy\u00ean l\u00e0 c\u00e1ch t\u1ed1t nh\u1ea5t \u0111\u1ec3 l\u00e0m quen \u00e1p l\u1ef1c thi.', example: 'I take a mock test every Saturday.' },
      { word: 'Journey', ipa: '/\u02c8d\u0292\u025c\u02d0.ni/', meaning: '**Ngh\u0129a:** H\u00e0nh tr\u00ecnh, chuy\u1ebfn \u0111i.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** C\u00f3 th\u1ec3 d\u00f9ng ngh\u0129a b\u00f3ng: *Learning English is a beautiful **journey*** (H\u1ecdc ti\u1ebfng Anh l\u00e0 m\u1ed9t h\u00e0nh tr\u00ecnh \u0111\u1eb9p).', example: 'Life is a wonderful journey.' },
      { word: 'Dream about', ipa: '/dri\u02d0m \u0259\u02c8ba\u028at/', meaning: '**Ngh\u0129a:** M\u01a1 v\u1ec1.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *Dream about + V-ing*: I have been dreaming **about studying** abroad. Gi\u1edbi t\u1eeb l\u00e0 **about** ho\u1eb7c **of**, kh\u00f4ng d\u00f9ng *dream to*.', example: 'She has been dreaming about this moment.' },
      { word: 'Reality', ipa: '/ri\u02c8\u00e6l.\u0259.ti/', meaning: '**Ngh\u0129a:** Hi\u1ec7n th\u1ef1c, th\u1ef1c t\u1ebf.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *Become reality* = tr\u1edf th\u00e0nh hi\u1ec7n th\u1ef1c. \\n\\n\ud83d\udd17 **Word Family:** Real (Adj) \u2192 Reality (N) \u2192 Realize (V) \u2192 Really (Adv).', example: 'Hard work can turn dreams into reality.' }
    ],
    grammar: [
      {
        rule: 'Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh (Present Perfect): Have/Has + V3',
        explanation: '\u0110\u00e2y l\u00e0 th\u00ec \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng NHI\u1ec0U NH\u1ea4T trong IELTS. N\u00f3 di\u1ec5n t\u1ea3 h\u00e0nh \u0111\u1ed9ng b\u1eaft \u0111\u1ea7u trong qu\u00e1 kh\u1ee9 v\u00e0 V\u1eaaN C\u00d2N \u0110\u00daNG \u1edf hi\u1ec7n t\u1ea1i.\\n\\n\ud83d\udca1 **D\u1ea5u hi\u1ec7u nh\u1eadn bi\u1ebft:** *for* (trong kho\u1ea3ng), *since* (k\u1ec3 t\u1eeb), *already, yet, just, recently, so far, ever, never*.\\n\\n\ud83d\udca1 **Ph\u00e2n bi\u1ec7t v\u1edbi Qu\u00e1 kh\u1ee9 \u0111\u01a1n:**\\n\u2022 *I **studied** English yesterday.* (Qu\u00e1 kh\u1ee9 \u0111\u01a1n \u2014 \u0111\u00e3 xong)\\n\u2022 *I **have studied** English for 3 years.* (Ho\u00e0n th\u00e0nh \u2014 v\u1eabn \u0111ang h\u1ecdc)',
        examples: [
          '\u2705 I **have studied** English **for** three years. (To\u0301 \u0111\u00e3 h\u1ecdc ti\u1ebfng Anh \u0111\u01b0\u1ee3c 3 n\u0103m r\u1ed3i \u2014 v\u00e0 v\u1eabn \u0111ang h\u1ecdc)',
          '\u2705 She **has already taken** several practice tests. (C\u00f4 \u1ea5y \u0111\u00e3 l\u00e0m v\u00e0i b\u00e0i thi th\u1eed r\u1ed3i)',
          '\u2705 **Have** you **ever been** to Japan? \u2014 No, I **have never been** there.',
          '\u26a0\ufe0f **L\u1ed7i sai:** I have studied English **yesterday**. \u2192 SAI! Yesterday = Qu\u00e1 kh\u1ee9 \u0111\u01a1n.'
        ]
      },
      {
        rule: 'Qu\u00e1 kh\u1ee9 Ti\u1ebfp di\u1ec5n (Past Continuous): Was/Were + V-ing',
        explanation: 'Di\u1ec5n t\u1ea3 h\u00e0nh \u0111\u1ed9ng \u0110ANG x\u1ea3y ra t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m trong qu\u00e1 kh\u1ee9 th\u00ec b\u1ecb m\u1ed9t h\u00e0nh \u0111\u1ed9ng kh\u00e1c NG\u1eaeT NGANG.\\n\\n\ud83d\udca1 **C\u00f4ng th\u1ee9c kinh \u0111i\u1ec3n:** **While** + S1 + **was/were V-ing** (h\u00e0nh \u0111\u1ed9ng d\u00e0i), S2 + **V-ed/V2** (h\u00e0nh \u0111\u1ed9ng ng\u1eaft).\\n\\n\ud83d\udca1 C\u00f3 th\u1ec3 \u0111\u1ea3o l\u1ea1i: S1 + **was V-ing** + **when** + S2 + **V-ed**.',
        examples: [
          '\u2705 I **was sitting** in class **when** the teacher **asked** me a question.',
          '\u2705 **While** I **was thinking**, my phone **rang** loudly.',
          '\u2705 Everyone **was laughing** at that moment. (M\u1ecdi ng\u01b0\u1eddi \u0111ang c\u01b0\u1eddi v\u00e0o l\u00fac \u0111\u00f3)',
          '\ud83d\udca1 **M\u1eb9o:** H\u00e3y t\u01b0\u1edfng t\u01b0\u1ee3ng nh\u01b0 m\u1ed9t b\u1ed9 phim: C\u1ea3nh n\u1ec1n (\u0111ang di\u1ec5n ra) = Was V-ing. S\u1ef1 ki\u1ec7n ch\u00ednh (x\u1ea3y \u0111\u1ebfn \u0111\u1ed9t ng\u1ed9t) = V-ed.'
        ]
      },
      {
        rule: 'T\u01b0\u01a1ng lai Ti\u1ebfp di\u1ec5n (Future Continuous) & Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n (Present Perfect Continuous)',
        explanation: '**T\u01b0\u01a1ng lai Ti\u1ebfp di\u1ec5n:** **Will be + V-ing** \u2014 h\u00e0nh \u0111\u1ed9ng s\u1ebd \u0110ANG x\u1ea3y ra t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m trong t\u01b0\u01a1ng lai.\\n\u2022 *This time next month, I **will be preparing** for the exam.*\\n\\n**Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n:** **Have/Has been + V-ing** \u2014 h\u00e0nh \u0111\u1ed9ng b\u1eaft \u0111\u1ea7u t\u1eeb qu\u00e1 kh\u1ee9, \u0111ang ti\u1ebfp t\u1ee5c v\u00e0 NH\u1ea4N M\u1ea0NH qu\u00e1 tr\u00ecnh/th\u1eddi gian.\\n\u2022 *I **have been studying** English for 3 years.* (Nh\u1ea5n m\u1ea1nh: \u0111\u00e3 h\u1ecdc li\u00ean t\u1ee5c su\u1ed1t 3 n\u0103m qua)',
        examples: [
          '\u2705 **TLTD:** This time tomorrow, I **will be sitting** in the exam room.',
          '\u2705 **TLTD:** Next week, she **will be traveling** to London.',
          '\u2705 **HTHTTD:** I **have been dreaming** about studying abroad. (Nh\u1ea5n m\u1ea1nh: m\u01a1 su\u1ed1t m\u1ed9t th\u1eddi gian d\u00e0i)',
          '\ud83d\udca1 **Ph\u00e2n bi\u1ec7t:** *I **have studied*** (Ho\u00e0n th\u00e0nh: k\u1ebft qu\u1ea3) vs *I **have been studying*** (HTTD: qu\u00e1 tr\u00ecnh)'
        ]
      }
    ],
    exercises: [
      { id: "u0c-ex1", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 1: Nh\u1eadn bi\u1ebft th\u00ec \u2014 C\u00e2u n\u00e0y \u1edf th\u00ec g\u00ec?", question: "I have studied English for three years.", options: ["Qu\u00e1 kh\u1ee9 \u0111\u01a1n", "Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh", "Hi\u1ec7n t\u1ea1i \u0111\u01a1n"], answer: "Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh", hint: "'for three years' = kho\u1ea3ng th\u1eddi gian k\u00e9o d\u00e0i \u0111\u1ebfn hi\u1ec7n t\u1ea1i \u2192 Present Perfect." },
      { id: "u0c-ex2", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 1: Ch\u1ecdn FOR hay SINCE?", question: "She has lived here _____ 2019.", options: ["for", "since", "during"], answer: "since", hint: "2019 l\u00e0 m\u1ed9t M\u1ed0C th\u1eddi gian c\u1ee5 th\u1ec3 \u2192 since. FOR + kho\u1ea3ng th\u1eddi gian (3 years)." },
      { id: "u0c-ex3", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9 2: Chia Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh.", question: "They _____ (already / finish) the project.", answer: "have already finished", hint: "They + have + already + V3 (finished)." },
      { id: "u0c-ex4", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9  2: Chia Qu\u00e1 kh\u1ee9 Ti\u1ebfp di\u1ec5n.", question: "I _____ (study) when the phone rang.", answer: "was studying", hint: "I + was + V-ing. \u0110ang l\u00e0m g\u00ec th\u00ec b\u1ecb ng\u1eaft ngang." },
      { id: "u0c-ex5", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 2: Ch\u1ecdn th\u00ec \u0111\u00fang.", question: "While she _____ dinner, the doorbell rang.", options: ["cooked", "was cooking", "has cooked"], answer: "was cooking", hint: "While + \u0111ang l\u00e0m g\u00ec (was V-ing) + when/th\u00ec b\u1ecb ng\u1eaft." },
      { id: "u0c-ex6", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9 2: Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n.", question: "She _____ (wait) for the bus for 30 minutes.", answer: "has been waiting", hint: "Nh\u1ea5n m\u1ea1nh qu\u00e1 tr\u00ecnh + th\u1eddi gian d\u00e0i \u2192 has been + V-ing." },
      { id: "u0c-ex7", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 2: T\u01b0\u01a1ng lai Ti\u1ebfp di\u1ec5n.", question: "This time next week, I _____ on the beach.", options: ["will sit", "will be sitting", "am sitting"], answer: "will be sitting", hint: "This time next week = th\u1eddi \u0111i\u1ec3m c\u1ee5 th\u1ec3 trong t\u01b0\u01a1ng lai \u2192 will be + V-ing." },
      { id: "u0c-ex8", type: "reorder", instruction: "C\u1ea5p \u0111\u1ed9 3: S\u1eafp x\u1ebfp c\u00e2u Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh.", question: "English / have / for / I / studied / years / three", answer: "I have studied English for three years", hint: "S (I) + have + V3 (studied) + O + for + time." },
      { id: "u0c-ex9", type: "translate", instruction: "C\u1ea5p \u0111\u1ed9 3: D\u1ecbch c\u00e2u Qu\u00e1 kh\u1ee9 Ti\u1ebfp di\u1ec5n.", question: "T\u1edb \u0111ang ng\u1ee7 th\u00ec \u0111i\u1ec7n tho\u1ea1i reo.", answer: "I was sleeping when the phone rang", hint: "T\u1edb \u0111ang ng\u1ee7 = I was sleeping, th\u00ec = when, reo = rang." },
      { id: "u0c-ex10", type: "translate", instruction: "C\u1ea5p \u0111\u1ed9 3: D\u1ecbch c\u00e2u Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n.", question: "T\u1edb \u0111\u00e3 \u0111ang h\u1ecdc ti\u1ebfng Anh su\u1ed1t c\u1ea3 bu\u1ed5i s\u00e1ng.", answer: "I have been studying English all morning", hint: "have been + V-ing. Su\u1ed1t c\u1ea3 bu\u1ed5i s\u00e1ng = all morning." }
    ],
    conversationPractice: {
      situation: "N\u00e0ng k\u1ec3 cho t\u1edb nghe v\u1ec1 h\u00e0nh tr\u00ecnh h\u1ecdc ti\u1ebfng Anh c\u1ee7a N\u00e0ng, d\u00f9ng th\u00ec Ho\u00e0n th\u00e0nh v\u00e0 Ti\u1ebfp di\u1ec5n nh\u00e9!",
      dialogue: [
        { speaker: "Gia s\u01b0", line: "How long have you studied English?", lineVi: "C\u1eadu \u0111\u00e3 h\u1ecdc ti\u1ebfng Anh bao l\u00e2u r\u1ed3i?" },
        { speaker: "Ng\u1ecdc Anh", line: "I have studied English for about three years now.", lineVi: "T\u1edb \u0111\u00e3 h\u1ecdc ti\u1ebfng Anh kho\u1ea3ng ba n\u0103m r\u1ed3i." },
        { speaker: "Gia s\u01b0", line: "Have you ever had an embarrassing moment in class?", lineVi: "C\u1eadu \u0111\u00e3 bao gi\u1edd c\u00f3 m\u1ed9t kho\u1ea3nh kh\u1eafc x\u1ea5u h\u1ed5 trong l\u1edbp ch\u01b0a?" },
        { speaker: "Ng\u1ecdc Anh", line: "Yes! I was answering a question when my phone suddenly rang.", lineVi: "C\u00f3! T\u1edb \u0111ang tr\u1ea3 l\u1eddi c\u00e2u h\u1ecfi th\u00ec \u0111i\u1ec7n tho\u1ea1i \u0111\u1ed9t nhi\u00ean reo." },
        { speaker: "Gia s\u01b0", line: "What will you be doing this time next month?", lineVi: "V\u00e0o l\u00fac n\u00e0y th\u00e1ng sau c\u1eadu s\u1ebd \u0111ang l\u00e0m g\u00ec?" },
        { speaker: "Ng\u1ecdc Anh", line: "I will be preparing for the IELTS exam. I have been dreaming about it!", lineVi: "T\u1edb s\u1ebd \u0111ang chu\u1ea9n b\u1ecb cho k\u1ef3 thi IELTS. T\u1edb \u0111\u00e3 \u0111ang m\u01a1 v\u1ec1 n\u00f3!" }
      ]
    },
    tips: [
      "\ud83d\udca1 **B\u1ea3ng t\u1ed5ng h\u1ee3p nhanh:** **FOR** + kho\u1ea3ng th\u1eddi gian (for 3 years, for 2 hours). **SINCE** + m\u1ed1c th\u1eddi gian (since 2019, since Monday). \u0110\u1eebng bao gi\u1edd nh\u1ea7m hai t\u1eeb n\u00e0y nh\u00e9!",
      "\ud83d\udca1 Khi k\u1ec3 m\u1ed9t c\u00e2u chuy\u1ec7n, N\u00e0ng h\u00e3y d\u00f9ng **Past Continuous** l\u00e0m c\u1ea3nh n\u1ec1n (I was sitting...) v\u00e0 **Past Simple** l\u00e0m s\u1ef1 ki\u1ec7n ch\u00ednh (the phone rang). Nh\u01b0 quay phim v\u1eady!",
      "\ud83d\udca1 Ph\u00e2n bi\u1ec7t: **Have studied** (Ho\u00e0n th\u00e0nh \u2014 nh\u1ea5n m\u1ea1nh k\u1ebft qu\u1ea3) vs **Have been studying** (HTTD \u2014 nh\u1ea5n m\u1ea1nh qu\u00e1 tr\u00ecnh li\u00ean t\u1ee5c). C\u1ea3 hai \u0111\u1ec1u d\u00f9ng \u0111\u01b0\u1ee3c, nh\u01b0ng IELTS th\u00edch c\u00e1i n\u00e0o h\u01a1n? C\u1ea3 hai!"
    ]
  },
  {
    id: "unit-0d-advanced-tenses",
    unit: 0,
    title: "Pre-Academic: Perfect Tenses (Advanced)",
    titleVi: "Bo\u0309 tro\u0323 Co\u01a1 ba\u0309n: Ca\u0301c Thi\u0300 Hoa\u0300n tha\u0300nh Na\u0302ng cao",
    objective: "Mu\u0323c tie\u00eau 45 Phu\u0301t: La\u0300m chu\u0309 4 thi\u0300 na\u0302ng cao cuo\u0301i cu\u0300ng \u2014 Qua\u0301 khu\u0301 Hoa\u0300n tha\u0300nh, Qua\u0301 khu\u0301 Hoa\u0300n tha\u0300nh Tie\u0301p die\u0303n, Tu\u01a1\u01a1ng lai Hoa\u0300n tha\u0300nh, Tu\u01a1\u01a1ng lai Hoa\u0300n tha\u0300nh Tie\u0301p die\u0303n. Hoa\u0300n tha\u0300nh ba\u0300i na\u0300y = Na\u0300ng \u0111a\u0303 thu to\u0323p \u0111u\u0309 bo\u0323 12 vu\u0303 khi\u0301!",
    reading: {
      title: "The Night Before the Big Exam (\u0110\u00eam tru\u0301o\u0301c ky\u0300 thi lo\u0301n)",
      content: "By the time I arrived at the exam center, I had already reviewed all my notes twice. I had been preparing for this moment for six months. My hands were shaking because I had never taken such an important test before.\\n\\nThe night before, I had studied until midnight. I had been revising vocabulary for three hours straight when my eyes started to hurt. My mother came in and said I had done enough. She was right \u2014 I had been pushing myself too hard.\\n\\nNow, looking back, I realize something important. By the end of this year, I will have completed my IELTS preparation. By next June, I will have been studying English for exactly four years. And by the time you read this story, I will have already received my exam results. No matter what score I get, I will have learned something invaluable: patience and perseverance.",
      translation: "Va\u0300o lu\u0301c to\u0301 \u0111e\u0301n trung ta\u0302m thi, to\u0301 \u0111a\u0303 o\u0302n la\u0323i ta\u0301t ca\u0309 ghi chu\u0301 cu\u0309a mi\u0300nh hai la\u0300n ro\u0300i. To\u0301 \u0111a\u0303 \u0111ang chua\u0309n bi\u0323 cho khoa\u0309nh kha\u0306c na\u0300y suo\u0301t sa\u0301u tha\u0301ng. Tay to\u0301 run vi\u0300 to\u0301 chu\u0301a bao gio\u0300 la\u0300m mo\u0323t ba\u0300i thi quan tro\u0323ng nhu\u0301 va\u0323y tru\u0301o\u0301c \u0111a\u0302y.\\n\\n\u0110e\u00e2m tru\u0301o\u0301c \u0111o\u0301, to\u0301 \u0111a\u0303 ho\u0323c \u0111e\u0301n nu\u0309a \u0111e\u00e2m. To\u0301 \u0111a\u0303 \u0111ang o\u0302n tu\u0300 vu\u0323ng suo\u0301t ba tie\u0301ng \u0111o\u0300ng ho\u0300 thi\u0300 ma\u0306t to\u0301 ba\u0306t \u0111a\u0300u \u0111au. Me\u0323 to\u0301 va\u0300o va\u0300 no\u0301i to\u0301 \u0111a\u0303 la\u0300m \u0111u\u0309 ro\u0300i. Me\u0323 \u0111u\u0301ng \u2014 to\u0301 \u0111a\u0303 \u0111ang e\u0301p mi\u0300nh qua\u0301 mu\u0301c.\\n\\nBa\u0302y gio\u0300, nhi\u0300n la\u0323i, to\u0301 nha\u0323n ra mo\u0323t \u0111ie\u0300u quan tro\u0323ng. Va\u0300o cuo\u0301i na\u0306m nay, to\u0301 se\u0303 \u0111a\u0303 hoa\u0300n tha\u0300nh vie\u0323c o\u0302n IELTS. Va\u0300o tha\u0301ng Sa\u0301u na\u0306m sau, to\u0301 se\u0303 \u0111a\u0303 \u0111ang ho\u0323c tie\u0301ng Anh \u0111u\u0301ng bo\u0301n na\u0306m. Va\u0300 va\u0300o lu\u0301c ba\u0323n \u0111o\u0323c ca\u0302u chuye\u0323n na\u0300y, to\u0301 se\u0303 \u0111a\u0303 nha\u0323n \u0111u\u0301o\u0323c ke\u0301t qua\u0309 thi ro\u0300i. Du\u0300 \u0111ie\u0309m na\u0300o, to\u0301 se\u0303 \u0111a\u0303 ho\u0323c \u0111u\u0301o\u0323c mo\u0323t \u0111ie\u0300u vo\u0302 gia\u0301: su\u0323 kie\u00e2n nha\u0303n va\u0300 lo\u0300ng be\u0300n bi\u0309."
    },
    vocabulary: [
      { word: 'Review', ipa: '/r\u026a\u02c8vju\u02d0/', meaning: '**Ngh\u0129a:** \u00d4n l\u1ea1i, xem l\u1ea1i.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** T\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi *revise* (Anh-Anh). Trong IELTS c\u1ea3 hai \u0111\u1ec1u \u0111\u01b0\u1ee3c ch\u1ea5p nh\u1eadn.\\n\\n\ud83d\udd17 **Collocations:** review notes (\u00f4n l\u1ea1i ghi ch\u00fa), review materials.', example: 'I had already reviewed all my notes.' },
      { word: 'Arrive', ipa: '/\u0259\u02c8ra\u026av/', meaning: '**Ngh\u0129a:** \u0110\u1ebfn n\u01a1i.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Lu\u00f4n \u0111i v\u1edbi **at** (arrive **at** the station) ho\u1eb7c **in** (arrive **in** Hanoi \u2014 th\u00e0nh ph\u1ed1 l\u1edbn). KH\u00d4NG d\u00f9ng *arrive to*!', example: 'By the time I arrived, the class had started.' },
      { word: 'Revise', ipa: '/r\u026a\u02c8va\u026az/', meaning: '**Ngh\u0129a:** \u00d4n t\u1eadp, s\u1eeda \u0111\u1ed5i.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Trong ti\u1ebfng Anh-Anh, **revise** = \u00f4n b\u00e0i. Danh t\u1eeb: **revision** (s\u1ef1 \u00f4n t\u1eadp).', example: 'She had been revising vocabulary for hours.' },
      { word: 'Straight', ipa: '/stre\u026at/', meaning: '**Ngh\u0129a:** Li\u00ean t\u1ee5c, kh\u00f4ng ng\u1eebng ngh\u1ec9 (Tr\u1ea1ng t\u1eeb).\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *For three hours **straight*** = su\u1ed1t 3 ti\u1ebfng li\u00ean t\u1ee5c. R\u1ea5t hay d\u00f9ng v\u1edbi th\u00ec Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n.', example: 'I had been working for five hours straight.' },
      { word: 'Push oneself', ipa: '/p\u028a\u0283 w\u028cn\u02c8self/', meaning: '**Ngh\u0129a:** \u00c9p b\u1ea3n th\u00e2n, c\u1ed1 g\u1eafng qu\u00e1 m\u1ee9c.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *Push yourself too hard* = \u00e9p b\u1ea3n th\u00e2n qu\u00e1 m\u1ee9c. N\u00e0ng nh\u1edb ngh\u1ec9 ng\u01a1i \u0111\u1ea7y \u0111\u1ee7 nh\u00e9!', example: 'I had been pushing myself too hard before the exam.' },
      { word: 'Complete', ipa: '/k\u0259m\u02c8pli\u02d0t/', meaning: '**Ngh\u0129a:** Ho\u00e0n th\u00e0nh (V) / Ho\u00e0n ch\u1ec9nh (Adj).\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** *By the end of this year, I **will have completed** the course.* C\u1ea5u tr\u00fac T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh!\\n\\n\ud83d\udd17 **Word Family:** Complete (V/Adj) \u2192 Completion (N) \u2192 Completely (Adv).', example: 'I will have completed the project by Friday.' },
      { word: 'Receive', ipa: '/r\u026a\u02c8si\u02d0v/', meaning: '**Ngh\u0129a:** Nh\u1eadn \u0111\u01b0\u1ee3c.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Trang tr\u1ecdng h\u01a1n ch\u1eef *get*. *I **will have received** the results by then.* Qu\u00e1 kh\u1ee9: **received** (quy t\u1eafc).', example: 'She received a scholarship last month.' },
      { word: 'Invaluable', ipa: '/\u026an\u02c8v\u00e6l.ju.\u0259.b\u0259l/', meaning: '**Ngh\u0129a:** V\u00f4 gi\u00e1, c\u1ef1c k\u1ef3 qu\u00fd.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** CH\u00da \u00dd! Invaluable \u2260 Valueless. **In-valuable** = v\u00f4 gi\u00e1 (qu\u00fd \u0111\u1ebfn m\u1ee9c kh\u00f4ng \u0111\u1ecbnh gi\u00e1 \u0111\u01b0\u1ee3c). **Value-less** = v\u00f4 gi\u00e1 tr\u1ecb.', example: 'The experience was invaluable for my career.' },
      { word: 'Patience', ipa: '/\u02c8pe\u026a.\u0283\u0259ns/', meaning: '**Ngh\u0129a:** S\u1ef1 ki\u00ean nh\u1eabn (Danh t\u1eeb).\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** Patient (Adj) \u2192 Patience (N) \u2192 Patiently (Adv). H\u1ecdc ngo\u1ea1i ng\u1eef c\u1ea7n r\u1ea5t nhi\u1ec1u **patience**!', example: 'Learning English requires patience.' },
      { word: 'Perseverance', ipa: '/\u02ccp\u025c\u02d0.s\u026a\u02c8v\u026a\u0259.r\u0259ns/', meaning: '**Ngh\u0129a:** S\u1ef1 b\u1ec1n b\u1ec9, ki\u00ean tr\u00ec.\\n\\n\ud83d\udca1 **Gia s\u01b0 b\u1eadt m\u00ed:** T\u1eeb v\u1ef1ng Band 8.0! *Patience and perseverance* l\u00e0 m\u1ed9t c\u1eb7p \u0111\u00f4i ho\u00e0n h\u1ea3o trong IELTS Writing.\\n\\n\ud83d\udd17 **Verb:** Persevere (/\u02ccp\u025c\u02d0.s\u026a\u02c8v\u026a\u0259r/).', example: 'Success comes through perseverance.' }
    ],
    grammar: [
      {
        rule: 'Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh (Past Perfect): Had + V3',
        explanation: 'Di\u1ec5n t\u1ea3 h\u00e0nh \u0111\u1ed9ng x\u1ea3y ra TR\u01af\u1edaC m\u1ed9t h\u00e0nh \u0111\u1ed9ng kh\u00e1c trong qu\u00e1 kh\u1ee9. Ngh\u0129 v\u1ec1 n\u00f3 nh\u01b0 \"qu\u00e1 kh\u1ee9 c\u1ee7a qu\u00e1 kh\u1ee9\".\\n\\n\ud83d\udca1 **C\u00f4ng th\u1ee9c:** **By the time** + S1 + V-ed, S2 + **had + V3**.\\n\\n\ud83d\udca1 **M\u1eb9o c\u1ee7a t\u1edb:** H\u00e0nh \u0111\u1ed9ng n\u00e0o x\u1ea3y ra TR\u01af\u1edaC \u2192 d\u00f9ng **Had V3**. H\u00e0nh \u0111\u1ed9ng n\u00e0o x\u1ea3y ra SAU \u2192 d\u00f9ng **V-ed**.',
        examples: [
          '\u2705 **By the time** I arrived, the class **had already started**. (L\u00fac t\u1edb \u0111\u1ebfn, l\u1edbp \u0111\u00e3 b\u1eaft \u0111\u1ea7u r\u1ed3i)',
          '\u2705 I **had reviewed** all my notes **before** the exam. (\u0110\u00e3 \u00f4n xong TR\u01af\u1edaC KHI thi)',
          '\u2705 She **had never taken** such an important test before. (Ch\u01b0a bao gi\u1edd thi b\u00e0i quan tr\u1ecdng nh\u01b0 v\u1eady tr\u01b0\u1edbc \u0111\u00f3)',
          '\ud83d\udca1 **Timeline:** had V3 (s\u1ef1 ki\u1ec7n 1) -----> V-ed (s\u1ef1 ki\u1ec7n 2) -----> NOW'
        ]
      },
      {
        rule: 'Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n (Past Perfect Continuous): Had been + V-ing',
        explanation: 'Nh\u1ea5n m\u1ea1nh QU\u00c1 TR\u00ccNH c\u1ee7a m\u1ed9t h\u00e0nh \u0111\u1ed9ng \u0111\u00e3 di\u1ec5n ra li\u00ean t\u1ee5c TR\u01af\u1edaC m\u1ed9t th\u1eddi \u0111i\u1ec3m trong qu\u00e1 kh\u1ee9.\\n\\n\ud83d\udca1 **Khi n\u00e0o d\u00f9ng:** Khi N\u00e0ng mu\u1ed1n nh\u1ea5n m\u1ea1nh \u0111\u00e3 l\u00e0m m\u1ed9t vi\u1ec7c g\u00ec \u0111\u00f3 **LI\u00caN T\u1ee4C SU\u1ed0T** m\u1ed9t kho\u1ea3ng th\u1eddi gian d\u00e0i tr\u01b0\u1edbc khi m\u1ed9t s\u1ef1 ki\u1ec7n kh\u00e1c x\u1ea3y ra.\\n\\n\ud83d\udca1 **Ph\u00e2n bi\u1ec7t:** *I **had studied** for 3 hours* (Ho\u00e0n th\u00e0nh \u2014 k\u1ebft qu\u1ea3) vs *I **had been studying** for 3 hours* (HTTD \u2014 nh\u1ea5n m\u1ea1nh qu\u00e1 tr\u00ecnh m\u1ec7t m\u1ecfi).',
        examples: [
          '\u2705 I **had been revising** vocabulary for three hours **when** my eyes started to hurt.',
          '\u2705 She **had been preparing** for the exam for six months.',
          '\u2705 They **had been waiting** for two hours before the bus finally came.',
          '\ud83d\udca1 D\u00f9ng th\u00ec n\u00e0y khi mu\u1ed1n ng\u01b0\u1eddi nghe C\u1ea2M NH\u1eacN \u0111\u01b0\u1ee3c s\u1ef1 m\u1ec7t m\u1ecfi, n\u1ed7 l\u1ef1c li\u00ean t\u1ee5c c\u1ee7a ch\u1ee7 th\u1ec3.'
        ]
      },
      {
        rule: 'T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh (Future Perfect) & T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n (Future Perfect Continuous)',
        explanation: '**T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh:** **Will have + V3** \u2014 h\u00e0nh \u0111\u1ed9ng s\u1ebd HO\u00c0N T\u1ea4T tr\u01b0\u1edbc m\u1ed9t th\u1eddi \u0111i\u1ec3m trong t\u01b0\u01a1ng lai.\\n\u2022 D\u1ea5u hi\u1ec7u: *By + th\u1eddi gian t\u01b0\u01a1ng lai* (By next year, By 2030, By the time...).\\n\\n**T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n:** **Will have been + V-ing** \u2014 nh\u1ea5n m\u1ea1nh QU\u00c1 TR\u00ccNH li\u00ean t\u1ee5c cho \u0111\u1ebfn m\u1ed9t m\u1ed1c t\u01b0\u01a1ng lai.\\n\u2022 *By next June, I **will have been studying** English for exactly 4 years.*',
        examples: [
          '\u2705 **TLHT:** By December, I **will have completed** my IELTS preparation.',
          '\u2705 **TLHT:** By the time you read this, I **will have already received** my results.',
          '\u2705 **TLHTTD:** By next June, I **will have been studying** English for 4 years.',
          '\ud83d\udca1 **D\u1ea5u hi\u1ec7u:** Th\u1ea5y **BY + th\u1eddi gian t\u01b0\u01a1ng lai** \u2192 ngh\u0129 ngay \u0111\u1ebfn Will have V3 ho\u1eb7c Will have been V-ing.'
        ]
      }
    ],
    exercises: [
      { id: "u0d-ex1", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 1: Nh\u1eadn bi\u1ebft th\u00ec \u2014 C\u00e2u n\u00e0y \u1edf th\u00ec g\u00ec?", question: "By the time she arrived, the movie had already started.", options: ["Qu\u00e1 kh\u1ee9 \u0111\u01a1n", "Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh", "Hi\u1ec7n t\u1ea1i Ho\u00e0n th\u00e0nh"], answer: "Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh", hint: "By the time + V-ed, S + had V3 = Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh." },
      { id: "u0d-ex2", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 1: Nh\u1eadn bi\u1ebft th\u00ec \u2014 C\u00e2u n\u00e0y \u1edf th\u00ec g\u00ec?", question: "By 2030, we will have finished the project.", options: ["T\u01b0\u01a1ng lai \u0111\u01a1n", "T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh", "T\u01b0\u01a1ng lai Ti\u1ebfp di\u1ec5n"], answer: "T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh", hint: "By 2030 + will have V3 = T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh." },
      { id: "u0d-ex3", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9 2: Chia Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh.", question: "By the time we got to the station, the train _____ (already / leave).", answer: "had already left", hint: "had + already + V3 (left). Leave \u2192 left (b\u1ea5t quy t\u1eafc)." },
      { id: "u0d-ex4", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9 2: Chia Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n.", question: "She _____ (study) for 5 hours when the power went out.", answer: "had been studying", hint: "Nh\u1ea5n m\u1ea1nh qu\u00e1 tr\u00ecnh li\u00ean t\u1ee5c tr\u01b0\u1edbc m\u1ed9t s\u1ef1 ki\u1ec7n qu\u00e1 kh\u1ee9 \u2192 had been + V-ing." },
      { id: "u0d-ex5", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 2: Ch\u1ecdn th\u00ec \u0111\u00fang.", question: "By next month, I _____ this course.", options: ["will finish", "will have finished", "will be finishing"], answer: "will have finished", hint: "By next month = m\u1ed1c th\u1eddi gian t\u01b0\u01a1ng lai + ho\u00e0n t\u1ea5t \u2192 will have V3." },
      { id: "u0d-ex6", type: "fill-in", instruction: "C\u1ea5p \u0111\u1ed9 2: Chia T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n.", question: "By 2027, she _____ (work) at this company for 10 years.", answer: "will have been working", hint: "By 2027 + nh\u1ea5n m\u1ea1nh qu\u00e1 tr\u00ecnh \u2192 will have been + V-ing." },
      { id: "u0d-ex7", type: "choose", instruction: "C\u1ea5p \u0111\u1ed9 2: H\u00e0nh \u0111\u1ed9ng n\u00e0o x\u1ea3y ra TR\u01af\u1edaC?", question: "I had eaten dinner before she called. \u2014 H\u00e0nh \u0111\u1ed9ng n\u00e0o x\u1ea3y ra tr\u01b0\u1edbc?", options: ["\u0102n t\u1ed1i (had eaten)", "G\u1ecdi \u0111i\u1ec7n (called)"], answer: "\u0102n t\u1ed1i (had eaten)", hint: "Had V3 = x\u1ea3y ra tr\u01b0\u1edbc. V-ed = x\u1ea3y ra sau." },
      { id: "u0d-ex8", type: "reorder", instruction: "C\u1ea5p \u0111\u1ed9 3: S\u1eafp x\u1ebfp c\u00e2u Qu\u00e1 kh\u1ee9 Ho\u00e0n th\u00e0nh.", question: "had / the / by / arrived / I / time / started / class / already / the", answer: "by the time I arrived the class had already started", hint: "By the time + S1 + V-ed, + S2 + had already + V3." },
      { id: "u0d-ex9", type: "translate", instruction: "C\u1ea5p \u0111\u1ed9 3: D\u1ecbch c\u00e2u T\u01b0\u01a1ng lai Ho\u00e0n th\u00e0nh.", question: "V\u00e0o cu\u1ed1i n\u0103m nay, t\u1edb s\u1ebd \u0111\u00e3 ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc.", answer: "By the end of this year, I will have completed the course", hint: "V\u00e0o cu\u1ed1i n\u0103m nay = By the end of this year, s\u1ebd \u0111\u00e3 ho\u00e0n th\u00e0nh = will have completed." },
      { id: "u0d-ex10", type: "translate", instruction: "C\u1ea5p \u0111\u1ed9 3: Th\u1eed th\u00e1ch cu\u1ed1i c\u00f9ng \u2014 Qu\u00e1 kh\u1ee9 HTTD.", question: "T\u1edb \u0111\u00e3 \u0111ang \u0111\u1ee3i su\u1ed1t 2 ti\u1ebfng tr\u01b0\u1edbc khi xe bu\u00fdt \u0111\u1ebfn.", answer: "I had been waiting for 2 hours before the bus arrived", hint: "had been + V-ing + for + time + before + V-ed." }
    ],
    conversationPractice: {
      situation: "N\u00e0ng k\u1ec3 cho t\u1edb nghe v\u1ec1 \u0111\u00eam tr\u01b0\u1edbc k\u1ef3 thi v\u00e0 k\u1ebf ho\u1ea1ch t\u01b0\u01a1ng lai. Ch\u00fa \u00fd th\u00ec Ho\u00e0n th\u00e0nh (qu\u00e1 kh\u1ee9 v\u00e0 t\u01b0\u01a1ng lai)!",
      dialogue: [
        { speaker: "Gia s\u01b0", line: "Tell me about the night before your last big exam.", lineVi: "K\u1ec3 cho t\u1edb nghe v\u1ec1 \u0111\u00eam tr\u01b0\u1edbc k\u1ef3 thi l\u1edbn cu\u1ed1i c\u00f9ng c\u1ee7a c\u1eadu." },
        { speaker: "Ng\u1ecdc Anh", line: "I had been studying for hours. By midnight, I had reviewed everything twice.", lineVi: "T\u1edb \u0111\u00e3 \u0111ang h\u1ecdc su\u1ed1t nhi\u1ec1u ti\u1ebfng. V\u00e0o l\u00fac n\u1eeda \u0111\u00eam, t\u1edb \u0111\u00e3 \u00f4n xong m\u1ecdi th\u1ee9 hai l\u1ea7n." },
        { speaker: "Gia s\u01b0", line: "Had you ever felt that nervous before?", lineVi: "C\u1eadu \u0111\u00e3 bao gi\u1edd c\u1ea3m th\u1ea5y lo l\u1eafng nh\u01b0 v\u1eady tr\u01b0\u1edbc \u0111\u00f3 ch\u01b0a?" },
        { speaker: "Ng\u1ecdc Anh", line: "No, I had never taken such an important test before.", lineVi: "Ch\u01b0a, t\u1edb ch\u01b0a bao gi\u1edd thi b\u00e0i quan tr\u1ecdng nh\u01b0 v\u1eady." },
        { speaker: "Gia s\u01b0", line: "What about the future? What will you have accomplished by next year?", lineVi: "C\u00f2n t\u01b0\u01a1ng lai th\u00ec sao? V\u00e0o n\u0103m sau c\u1eadu s\u1ebd \u0111\u00e3 \u0111\u1ea1t \u0111\u01b0\u1ee3c g\u00ec?" },
        { speaker: "Ng\u1ecdc Anh", line: "By next year, I will have completed my IELTS prep. And I will have been studying English for four years!", lineVi: "V\u00e0o n\u0103m sau, t\u1edb s\u1ebd \u0111\u00e3 ho\u00e0n th\u00e0nh vi\u1ec7c \u00f4n IELTS. V\u00e0 t\u1edb s\u1ebd \u0111\u00e3 \u0111ang h\u1ecdc ti\u1ebfng Anh \u0111\u01b0\u1ee3c b\u1ed1n n\u0103m!" }
      ]
    },
    tips: [
      "\ud83d\udca1 **T\u1ed5ng h\u1ee3p 12 th\u00ec:** \u0110\u01a1n (Simple) = k\u1ebft qu\u1ea3/s\u1ef1 th\u1eadt. Ti\u1ebfp di\u1ec5n (Continuous) = \u0111ang di\u1ec5n ra. Ho\u00e0n th\u00e0nh (Perfect) = tr\u01b0\u1edbc m\u1ed9t m\u1ed1c. Ho\u00e0n th\u00e0nh Ti\u1ebfp di\u1ec5n = qu\u00e1 tr\u00ecnh li\u00ean t\u1ee5c tr\u01b0\u1edbc m\u1ed9t m\u1ed1c.",
      "\ud83d\udca1 **D\u1ea5u hi\u1ec7u v\u00e0ng:** Th\u1ea5y **BY** + th\u1eddi gian \u2192 ngh\u0129 ngay \u0111\u1ebfn th\u00ec Ho\u00e0n th\u00e0nh (had V3 ho\u1eb7c will have V3). Th\u1ea5y **WHILE/WHEN** + 2 h\u00e0nh \u0111\u1ed9ng \u2192 ngh\u0129 \u0111\u1ebfn Ti\u1ebfp di\u1ec5n.",
      "\ud83d\udca1 Ch\u00fac m\u1eebng N\u00e0ng \u0111\u00e3 thu th\u1eadp \u0111\u1ee7 b\u1ed9 **12 v\u0169 kh\u00ed th\u00ec**! \ud83c\udf89 T\u1eeb gi\u1edd tr\u1edf \u0111i, khi \u0111\u1ecdc b\u1ea5t k\u1ef3 c\u00e2u ti\u1ebfng Anh n\u00e0o, N\u00e0ng h\u00e3y t\u1ef1 h\u1ecfi: C\u00e2u n\u00e0y \u1edf th\u00ec g\u00ec v\u00e0 t\u1ea1i sao t\u00e1c gi\u1ea3 l\u1ea1i ch\u1ecdn th\u00ec \u0111\u00f3. L\u00e0m v\u1eady l\u00e0 N\u00e0ng \u0111ang h\u1ecdc nh\u01b0 m\u1ed9t ng\u01b0\u1eddi b\u1ea3n ng\u1eef r\u1ed3i \u0111\u1ea5y! \ud83e\udd70"
    ]
  },
  {
    id: "unit-1-academic-foundation",
    unit: 1,
    title: "Academic Foundation: The Sentence Builder",
    titleVi: "Nền tảng Học thuật: Xây dựng cấu trúc câu chuẩn",
    objective: "Mục tiêu 45 Phút: Nắm vững cấu trúc câu cốt lõi trong tiếng Anh học thuật, làm chủ 10 từ vựng Academic tần suất cao nhất, và loại bỏ hoàn toàn thói quen dịch Word-by-Word. Đây là nền móng để xây ngôi nhà IELTS của cậu, cậu tập trung nhé!",
    reading: {
      title: "The Transformative Power of Education (Sức mạnh chuyển hóa của Giáo dục)",
      content: "In contemporary society, education is widely acknowledged as an essential pillar for both personal and economic growth. Firstly, it provides individuals with crucial cognitive skills and a broader perspective on global issues. Instead of merely memorizing facts, modern educational institutions emphasize critical thinking and problem-solving abilities.\n\nMoreover, universities and higher education establishments offer advanced knowledge that is highly demanded in today's competitive job market. As a result, students who pursue academic excellence often achieve remarkable success in their future careers. They are better equipped to adapt to technological advancements and industry shifts.\n\nUltimately, a robust educational foundation creates equitable opportunities for everyone, regardless of their socio-economic background. By investing in education, governments not only empower their citizens but also foster a more innovative and resilient society.",
      translation: "Trong xã hội đương đại, giáo dục được công nhận rộng rãi như một trụ cột thiết yếu cho sự phát triển cả về cá nhân lẫn kinh tế. Đầu tiên, nó cung cấp cho các cá nhân những kỹ năng nhận thức quan trọng và một góc nhìn rộng hơn về các vấn đề toàn cầu. Thay vì chỉ ghi nhớ các sự kiện, các cơ sở giáo dục hiện đại nhấn mạnh vào tư duy phản biện và khả năng giải quyết vấn đề.\n\nHơn nữa, các trường đại học và cơ sở giáo dục đại học cung cấp kiến thức nâng cao vốn được yêu cầu rất cao trong thị trường việc làm cạnh tranh ngày nay. Do đó, những sinh viên theo đuổi sự xuất sắc trong học thuật thường đạt được những thành công đáng chú ý trong sự nghiệp tương lai của họ. Họ được trang bị tốt hơn để thích ứng với những tiến bộ công nghệ và sự thay đổi của ngành.\n\nCuối cùng, một nền tảng giáo dục vững chắc tạo ra cơ hội bình đẳng cho tất cả mọi người, bất kể nền tảng kinh tế xã hội của họ. Bằng cách đầu tư vào giáo dục, các chính phủ không chỉ trao quyền cho công dân của họ mà còn thúc đẩy một xã hội đổi mới và kiên cường hơn."
    },
    vocabulary: [
      { word: 'Contemporary', ipa: '/kənˈtem.pər.ər.i/', meaning: '**Nghĩa:** Đương đại, hiện đại.\n\n💡 **Lưu ý:** Thay vì dùng *modern* (quá phổ thông), hãy dùng *contemporary* trong IELTS Writing Task 2. Ví dụ: *In contemporary society...* (Trong xã hội đương đại...).\n\n🔗 **Collocations:** contemporary art (nghệ thuật đương đại), contemporary issues (vấn đề đương đại).', example: 'In contemporary society, stress is a common issue.' },
      { word: 'Acknowledge', ipa: '/əkˈnɒl.ɪdʒ/', meaning: '**Nghĩa:** Công nhận, thừa nhận.\n\n💡 **Lưu ý:** Dùng từ này khi cậu muốn thể hiện sự đồng tình với một quan điểm khách quan. Dạng bị động *is widely acknowledged as* (được công nhận rộng rãi là) rất ăn điểm.\n\n⚠️ **Lỗi sai thường gặp:** Đừng quên âm /dʒ/ (chờ) ở cuối từ nhé!', example: 'It is widely acknowledged that smoking causes cancer.' },
      { word: 'Essential', ipa: '/ɪˈsen.ʃəl/', meaning: '**Nghĩa:** Thiết yếu, rất quan trọng.\n\n💡 **Lưu ý:** Nó mạnh hơn chữ *important* rất nhiều. Nếu thiếu nó thì mọi thứ sẽ sụp đổ. \n\n🔗 **Từ đồng nghĩa:** Crucial, Vital, Indispensable.', example: 'Water is essential for the survival of all living creatures.' },
      { word: 'Crucial', ipa: '/ˈkruː.ʃəl/', meaning: '**Nghĩa:** Quan trọng mang tính quyết định.\n\n💡 **Lưu ý:** Từ này thường đi với giới từ *to* hoặc *for*. \n\n🔗 **Collocations:** play a crucial role in (đóng vai trò quyết định trong việc...).', example: 'Parents play a crucial role in a child’s development.' },
      { word: 'Establishment', ipa: '/ɪˈstæb.lɪʃ.mənt/', meaning: '**Nghĩa:** Sự thành lập / Cơ sở, tổ chức.\n\n💡 **Lưu ý:** Trong bài đọc vừa rồi, *educational establishments* chính là cách Paraphrase cực xịn cho *schools and universities*.\n\n🔗 **Word Family:** Establish (Động từ) -> Establishment (Danh từ).', example: 'Educational establishments need more funding from the government.' },
      { word: 'Pursue', ipa: '/pəˈsjuː/', meaning: '**Nghĩa:** Theo đuổi (mục tiêu, sự nghiệp, đam mê).\n\n💡 **Lưu ý:** Chữ *Pursue* mang sắc thái quyết tâm rất cao. cậu nhớ đọc là /pəˈsjuː/ chứ không phải là /pơ-su/ nha.\n\n🔗 **Collocations:** pursue a career (theo đuổi sự nghiệp), pursue higher education (học lên cao).', example: 'Many students go abroad to pursue higher education.' },
      { word: 'Achieve', ipa: '/əˈtʃiːv/', meaning: '**Nghĩa:** Đạt được (thường là thành tựu sau khi nỗ lực).\n\n💡 **Lưu ý:** Đừng dùng *get* (lấy được) cho những thứ to tát nhé. cậu hãy dùng *achieve*.\n\n🔗 **Danh từ:** Achievement (Thành tựu).', example: 'With hard work, you can achieve your wildest dreams.' },
      { word: 'Remarkable', ipa: '/rɪˈmɑː.kə.bəl/', meaning: '**Nghĩa:** Đáng chú ý, xuất chúng.\n\n💡 **Lưu ý:** Thay vì khen *very good* hay *great*, cậu hãy dùng *remarkable*. Nó mang nghĩa "tốt đến mức ai cũng phải để ý".', example: 'She has made remarkable progress in her English studies.' },
      { word: 'Equipped', ipa: '/ɪˈkwɪpt/', meaning: '**Nghĩa:** Được trang bị (kỹ năng, kiến thức, vũ khí).\n\n💡 **Lưu ý:** Cấu trúc *be better equipped to V* (được trang bị tốt hơn để làm gì) là một cấu trúc "vàng" trong viết luận.\n\n🔗 **Từ gốc:** Equip (Động từ) -> Equipment (Trang thiết bị).', example: 'Graduates today are better equipped to face global challenges.' },
      { word: 'Foster', ipa: '/ˈfɒs.tər/', meaning: '**Nghĩa:** Thúc đẩy, bồi dưỡng, nuôi dưỡng.\n\n💡 **Lưu ý:** Từ này dùng để nói về việc nuôi dưỡng những thứ vô hình (tài năng, sự đổi mới, tinh thần). Rất hay gặp trong IELTS Reading!\n\n🔗 **Collocations:** foster innovation (thúc đẩy đổi mới), foster economic growth.', example: 'Reading aloud helps foster a child’s imagination.' }
    ],
    grammar: [
      {
        rule: 'Cấu trúc xương sống S-V-O (Subject - Verb - Object)',
        explanation: 'Cậu biết không, điểm khác biệt lớn nhất giữa tiếng Việt và tiếng Anh học thuật là Tiếng Anh ĐÒI HỎI sự rõ ràng tuyệt đối. Một câu LUÔN LUÔN phải có Chủ ngữ (S) và Động từ (V).\n\n💡 **Mẹo nhỏ:**** Khi viết câu dài, hãy nhắm mắt lại và tự hỏi: "Đứa nào (S) làm cái hành động gì (V) lên ai/cái gì (O)?". Nếu tìm được đủ 3 thành phần này, câu của cậu không bao giờ bị sai ngữ pháp nặng.',
        examples: [
          '**S-V-O Cơ bản:** \nEducation (S) provides (V) skills (O).',
          '**S-V-O Nâng cao (có cụm từ mở rộng):** \nModern educational establishments (S) offer (V) advanced knowledge (O).',
          '⚠️ **Lỗi sai :** "In Vietnam is very hot." (Câu này thiếu S. Phải viết là "The weather in Vietnam (S) is (V) very hot.")'
        ]
      },
      {
        rule: 'Phó từ chỉ mức độ kết hợp Động từ (Adverb + Verb)',
        explanation: 'Để biến một câu 5.0 thành câu 7.0, cậu đừng chỉ dùng Động từ trần trụi. Hãy đính kèm một Phó từ (đuôi -ly) ngay trước Động từ hoặc Quá khứ phân từ để câu văn "có da có thịt" hơn.',
        examples: [
          'Thay vì: "Education is acknowledged as..."',
          'Hãy viết: "Education is **widely** (rộng rãi) acknowledged as..."',
          'Thay vì: "People rely on cars."',
          'Hãy viết: "People rely **heavily** (nặng nề) on cars."'
        ]
      },
      {
        rule: 'Từ nối học thuật (Transition Words) tạo mạch văn',
        explanation: 'Đây là "chất keo" dính các câu lại với nhau. Giám khảo IELTS sẽ cho điểm tiêu chí Coherence & Cohesion rất cao nếu cậu biết dùng các từ sau đứng ở ĐẦU CÂU (và phải có dấu phẩy đi theo sau nhé):',
        examples: [
          '**Firstly, / Secondly,**: Mở đầu một loạt các ý tưởng.',
          '**Moreover, / Furthermore,**: Khi cậu muốn bồi thêm một ý cùng chiều (khen thêm, hoặc chê thêm).',
          '**As a result, / Consequently,**: Để chốt hạ hậu quả hay kết quả của câu đằng trước.',
          '**Ultimately,**: Cuối cùng thì, suy cho cùng thì...'
        ]
      }
    ],
    exercises: [
      { id: "u1-ex1", type: "choose", instruction: "Cấp độ 1: Chọn từ vựng - Cụm từ nào mang nghĩa 'Trong xã hội đương đại'?", question: "_____ society, stress is a common issue.", options: ["In modern", "In contemporary", "In temporary"], answer: "In contemporary", hint: "Từ học thuật bắt đầu bằng chữ 'c', mang nghĩa đương đại." },
      { id: "u1-ex2", type: "matching", instruction: "Cấp độ 1: Nối từ đồng nghĩa - Từ nào đồng nghĩa với 'Crucial'?", question: "Water is _____ for survival.", options: ["essential", "opportunity", "achieve"], answer: "essential", hint: "Crucial = Vital = Essential." },
      { id: "u1-ex3", type: "fill-in", instruction: "Cấp độ 2: Điền giới từ - 'Rely' đi với giới từ gì?", question: "People rely heavily _____ their smartphones today.", answer: "on", hint: "Phụ thuộc VÀO ai/cái gì -> rely O..." },
      { id: "u1-ex4", type: "choose", instruction: "Cấp độ 2: Ngữ pháp - Chọn từ nối đúng để chỉ KẾT QUẢ.", question: "He studied very hard. _____, he passed the exam with flying colors.", options: ["Moreover", "As a result", "Firstly"], answer: "As a result", hint: "As a result = Do đó / Kết quả là." },
      { id: "u1-ex5", type: "fill-in", instruction: "Cấp độ 2: Từ vựng - Điền động từ mang nghĩa 'Thúc đẩy/Nuôi dưỡng'.", question: "Reading aloud helps f_____ a child's imagination.", answer: "foster", hint: "Từ có 6 chữ cái, bắt đầu bằng chữ 'f'." },
      { id: "u1-ex6", type: "choose", instruction: "Cấp độ 2: Ngữ pháp - Cấu trúc Bị động.", question: "It is widely ________ that the Earth is round.", options: ["acknowledge", "acknowledged", "acknowledges"], answer: "acknowledged", hint: "Cấu trúc bị động: Is + V_ed/V3." },
      { id: "u1-ex7", type: "reorder", instruction: "Cấp độ 3: Tư duy cấu trúc S-V-O.", question: "play / parents / a / role / crucial / in education", answer: "parents play a crucial role in education", hint: "Chủ ngữ (Parents) -> Động từ (play) -> Tân ngữ (a crucial role) -> Bổ ngữ." },
      { id: "u1-ex8", type: "reorder", instruction: "Cấp độ 3: Sắp xếp câu phức có phó từ.", question: "is / acknowledged / widely / it / that / education / is / essential", answer: "it is widely acknowledged that education is essential", hint: "It is widely acknowledged that..." },
      { id: "u1-ex9", type: "translate", instruction: "Cấp độ 3: Dịch câu (Sử dụng từ Achieve và Remarkable).", question: "Họ đã đạt được thành công đáng chú ý.", answer: "They achieved remarkable success", hint: "Họ = They, Đạt được = achieved (hoặc have achieved), Đáng chú ý = remarkable, Thành công = success." },
      { id: "u1-ex10", type: "translate", instruction: "Cấp độ 3: Thử thách cuối cùng - Dịch câu ghép.", question: "Hơn nữa, các trường đại học cung cấp kiến thức nâng cao.", answer: "Moreover, universities provide advanced knowledge", hint: "Hơn nữa = Moreover, Trường đại học = universities, Cung cấp = provide (hoặc offer), Kiến thức nâng cao = advanced knowledge." }
    ],
    conversationPractice: {
      situation: "Tưởng tượng cậu đang thi IELTS Speaking Part 3, Giám khảo (Examiner) hỏi cậu về chủ đề Giáo dục. Hãy bình tĩnh phân tích và đáp lại nhé!",
      dialogue: [
        { speaker: "Examiner", line: "In your opinion, what is the most important function of a university?", lineVi: "Theo bạn, chức năng quan trọng nhất của một trường đại học là gì?" },
        { speaker: "Ngọc Anh", line: "Well, I believe the primary function is to foster critical thinking.", lineVi: "À, tôi tin rằng chức năng chính là thúc đẩy tư duy phản biện." },
        { speaker: "Examiner", line: "Interesting. Do you think academic knowledge is enough for a student's future?", lineVi: "Thú vị đấy. Bạn có nghĩ kiến thức học thuật là đủ cho tương lai của sinh viên không?" },
        { speaker: "Ngọc Anh", line: "Not really. It is widely acknowledged that practical skills are also crucial. Students need both to achieve remarkable success.", lineVi: "Không hẳn. Người ta công nhận rộng rãi rằng các kỹ năng thực tế cũng rất quan trọng. Sinh viên cần cả hai để đạt được thành công xuất chúng." },
        { speaker: "Examiner", line: "So, are universities doing a good job in providing those skills?", lineVi: "Vậy các trường đại học có đang làm tốt việc cung cấp các kỹ năng đó không?" },
        { speaker: "Ngọc Anh", line: "Yes. Contemporary educational establishments are better equipped to prepare students for the competitive job market.", lineVi: "Có. Các cơ sở giáo dục đương đại được trang bị tốt hơn để chuẩn bị cho sinh viên bước vào thị trường việc làm cạnh tranh." }
      ]
    },
    tips: [
      "💡 Gia sư dặn dò 1: Khi học từ vựng, cậu đừng chỉ học mỗi từ đó. Hãy đọc cả câu ví dụ tớ đã viết. Não bộ cậu sẽ tự động ghi nhớ \"hoàn cảnh\" từ đó xuất hiện.",
      "💡 Gia sư dặn dò 2: Trong bài thi IELTS Writing, việc cậu dùng đúng 1 từ \"crucial\" đắt giá hơn rất nhiều so với việc viết 1 câu siêu dài nhưng dùng từ sai ngữ cảnh.",
      "💡 Gia sư dặn dò 3: Cứ mỗi 15 phút học, cậu hãy vươn vai một cái nhé. Uống một ngụm nước rồi ấn vào làm bài tập, đừng cố ép não bộ căng thẳng quá!"
    ]
  },
  {
    id: "unit-2-reading-strategies",
    unit: 2,
    title: "Reading Strategies: Skimming & Paraphrasing",
    titleVi: "Chiến thuật Đọc hiểu: Đọc lướt và Từ đồng nghĩa",
    objective: "Mục tiêu 45 Phút: Nắm vững kỹ năng Skimming (Đọc lướt lấy ý chính), nhận diện Paraphrase (từ đồng nghĩa) và làm quen với 10 từ vựng chủ đề Giao Thông Đô Thị (Urban Transport). Đây là 2 vũ khí tối thượng giúp cậu tiết kiệm 50% thời gian làm bài IELTS Reading.",
    reading: {
      title: "The Evolution of Urban Transport (Sự tiến hóa của Giao thông Đô thị)",
      content: "In recent decades, city transportation has changed significantly due to rapid urbanization and population growth. In the past, citizens relied heavily on private vehicles, which inevitably led to severe environmental degradation and daily gridlocks. Consequently, the quality of urban life deteriorated.\n\nHowever, modern metropolises are actively shifting towards sustainable public transit systems to mitigate these pressing issues. For instance, underground subways, light rail networks, and eco-friendly electric buses have become increasingly prevalent. This crucial transition not only helps alleviate traffic congestion but also substantially reduces carbon footprints.\n\nLooking ahead, urban planners are integrating smart technologies to revolutionize how people commute. Initiatives such as car-pooling apps and dedicated cycling lanes are being implemented globally. Ultimately, a well-structured transport infrastructure is indispensable for fostering a resilient and livable city.",
      translation: "Trong những thập kỷ gần đây, giao thông thành phố đã thay đổi đáng kể do đô thị hóa nhanh chóng và gia tăng dân số. Trong quá khứ, người dân phụ thuộc nặng nề vào phương tiện cá nhân, điều này tất yếu dẫn đến suy thoái môi trường nghiêm trọng và kẹt xe hàng ngày. Hậu quả là, chất lượng cuộc sống đô thị ngày càng giảm sút.\n\nTuy nhiên, các siêu đô thị hiện đại đang tích cực chuyển hướng sang các hệ thống giao thông công cộng bền vững để giảm nhẹ những vấn đề cấp bách này. Ví dụ, tàu điện ngầm, mạng lưới đường sắt nhẹ và xe buýt điện thân thiện với môi trường ngày càng trở nên thịnh hành. Sự chuyển đổi mang tính quyết định này không chỉ giúp làm giảm bớt ùn tắc giao thông mà còn giảm thiểu đáng kể lượng khí thải carbon.\n\nNhìn về tương lai, các nhà quy hoạch đô thị đang tích hợp các công nghệ thông minh để cách mạng hóa cách mọi người đi lại. Các sáng kiến như ứng dụng đi chung xe và làn đường dành riêng cho xe đạp đang được triển khai trên toàn cầu. Rốt cuộc, một cơ sở hạ tầng giao thông được cấu trúc tốt là điều không thể thiếu để nuôi dưỡng một thành phố kiên cường và đáng sống."
    },
    vocabulary: [
      { word: 'Significantly', ipa: '/sɪɡˈnɪf.ɪ.kənt.li/', meaning: '**Nghĩa:** Đáng kể, to lớn.\n\n💡 **Lưu ý:** Từ này sinh ra là để miêu tả sự thay đổi trong IELTS Writing Task 1. Thay vì nói *changed a lot*, hãy nói *changed significantly*.\n\n🔗 **Từ đồng nghĩa:** Considerably, Substantially.', example: 'The cost of living in big cities has increased significantly.' },
      { word: 'Rely on', ipa: '/rɪˈlaɪ ɒn/', meaning: '**Nghĩa:** Phụ thuộc vào, dựa dẫm vào.\n\n💡 **Lưu ý:** Trong IELTS, từ này rất hay được dùng với phó từ *heavily* (Rely heavily on = Phụ thuộc nặng nề vào).\n\n🔗 **Từ đồng nghĩa:** Depend on.', example: 'Many businesses rely heavily on social media marketing.' },
      { word: 'Degradation', ipa: '/ˌdeɡ.rəˈdeɪ.ʃən/', meaning: '**Nghĩa:** Sự suy thoái, sự giảm sút chất lượng.\n\n💡 **Lưu ý:** Đây là từ vựng Band 7.5+ cực xịn cho chủ đề Môi trường. cậu hãy học thuộc cụm *environmental degradation* nhé.\n\n🔗 **Word Family:** Degrade (Động từ).', example: 'Air pollution is a major cause of environmental degradation.' },
      { word: 'Mitigate', ipa: '/ˈmɪt.ɪ.ɡeɪt/', meaning: '**Nghĩa:** Làm giảm nhẹ, làm dịu bớt (hậu quả, vấn đề).\n\n💡 **Lưu ý:** Giám khảo IELTS rất thích từ này ở phần kết bài khi cậu đề xuất giải pháp. *To mitigate the problem, governments should...*\n\n🔗 **Từ đồng nghĩa:** Alleviate, Ease.', example: 'Planting more trees can mitigate the effects of global warming.' },
      { word: 'Prevalent', ipa: '/ˈprev.əl.ənt/', meaning: '**Nghĩa:** Thịnh hành, phổ biến.\n\n💡 **Lưu ý:** Nó sang hơn *common* hay *popular* rất nhiều. Dùng để nói về một xu hướng đang lan rộng.\n\n🔗 **Collocations:** highly prevalent (rất phổ biến).', example: 'Electric cars are becoming increasingly prevalent nowadays.' },
      { word: 'Alleviate', ipa: '/əˈliː.vi.eɪt/', meaning: '**Nghĩa:** Làm giảm bớt (sự đau đớn, nghèo đói, kẹt xe).\n\n💡 **Lưu ý:** Thường đi liền với *pain* (nỗi đau), *poverty* (nghèo đói) hoặc *congestion* (kẹt xe).\n\n🔗 **Từ đồng nghĩa:** Relieve, Mitigate.', example: 'The new bridge will help alleviate traffic congestion.' },
      { word: 'Congestion', ipa: '/kənˈdʒes.tʃən/', meaning: '**Nghĩa:** Sự tắc nghẽn (giao thông).\n\n💡 **Lưu ý:** Paraphrase  cho *traffic jam*. cậu hãy viết *traffic congestion* để ẵm điểm từ vựng nhé.\n\n🔗 **Word Family:** Congested (Tính từ - Bị tắc nghẽn).', example: 'Traffic congestion is a daily nightmare in Hanoi.' },
      { word: 'Infrastructure', ipa: '/ˈɪn.frəˌstrʌk.tʃər/', meaning: '**Nghĩa:** Cơ sở hạ tầng (đường xá, cầu cống, trường trạm).\n\n💡 **Lưu ý:** Một từ không thể thiếu khi viết luận về sự phát triển của một quốc gia.\n\n🔗 **Collocations:** improve infrastructure (cải thiện cơ sở hạ tầng).', example: 'The government needs to invest more in public infrastructure.' },
      { word: 'Indispensable', ipa: '/ˌɪn.dɪˈspen.sə.bəl/', meaning: '**Nghĩa:** Không thể thiếu được, hoàn toàn cần thiết.\n\n💡 **Lưu ý:** Từ này tương đương với *absolutely essential*. Dùng để chốt lại tầm quan trọng của một thứ gì đó.\n\n🔗 **Từ đồng nghĩa:** Crucial, Vital.', example: 'Smartphones have become an indispensable part of our lives.' },
      { word: 'Commute', ipa: '/kəˈmjuːt/', meaning: '**Nghĩa:** Đi lại thường xuyên (từ nhà đến chỗ làm/trường học).\n\n💡 **Lưu ý:** Không dùng *go to work*, hãy dùng *commute*. cậu có thể dùng nó như Danh từ (*the daily commute*).\n\n🔗 **Danh từ chỉ người:** Commuter (Người đi làm xa).', example: 'I have a long daily commute to the office.' }
    ],
    grammar: [
      {
        rule: 'Thì Hiện tại Hoàn thành (Present Perfect) diễn tả sự thay đổi',
        explanation: 'Cậu lưu ý nhé, thì Hiện tại Hoàn thành (Have/Has + V3) là "đặc sản" của văn học thuật. Người ta KHÔNG dùng nó để kể lể quá khứ, mà dùng nó để NẾN MẠNH MỘT SỰ THAY ĐỔI kéo dài từ quá khứ và VẪN CÒN ĐÚNG ở hiện tại.\n\n💡 **Mẹo nhỏ:**** Trong Task 1, nếu có mốc thời gian "In recent years" hoặc "Over the last decade", cậu NHẤT ĐỊNH phải dùng thì này!',
        examples: [
          '**Miêu tả sự thay đổi:** City transportation **has changed** significantly. (Giao thông đã thay đổi đáng kể và bây giờ vẫn đang thay đổi).',
          '**Miêu tả xu hướng:** Eco-friendly buses **have become** prevalent. (Xe buýt điện đã trở nên thịnh hành).',
          '⚠️ **Lỗi sai thường gặp:** Dùng quá khứ đơn ("City transportation changed") sẽ làm đứt gãy sự liên kết với hiện tại.'
        ]
      },
      {
        rule: 'Nghệ thuật Paraphrasing (Dùng từ đồng nghĩa)',
        explanation: 'IELTS thực chất là một trò chơi Trốn Tìm bằng Từ Đồng Nghĩa. Đề bài hỏi từ A, nhưng trong bài đọc nó sẽ viết là từ B. Cậu không được đi tìm chính xác từ A trong bài đọc, vì đó là "cú lừa" đấy!\n\n💡 **Quy tắc vàng:** Luôn nhìn vào MẶT NGHĨA, đừng nhìn vào MẶT CHỮ.',
        examples: [
          'Từ trong đề bài: **Traffic jams** -> Từ trong bài đọc: **Gridlocks** hoặc **Congestion**.',
          'Từ trong đề bài: **Decrease the impact** -> Từ trong bài đọc: **Mitigate the issues**.',
          'Từ trong đề bài: **Very important** -> Từ trong bài đọc: **Indispensable / Crucial**.'
        ]
      },
      {
        rule: 'Mệnh đề Quan hệ chỉ Nguyên nhân (Which inevitably led to...)',
        explanation: 'Thay vì dùng "And it caused..." (nghe rất chán), cậu hãy dùng phẩy + **Which** để tóm gọn cả một sự việc phía trước và chỉ ra hậu quả của nó. Đây là cấu trúc câu Phức (Complex Sentence) giúp nâng band điểm ngữ pháp.',
        examples: [
          '**Cách viết 5.0:** People relied on private vehicles. And it led to gridlocks.',
          '**Cách viết 7.0:** People relied on private vehicles**, which inevitably led to** gridlocks. (Người dân phụ thuộc phương tiện cá nhân, điều mà tất yếu dẫn đến kẹt xe).'
        ]
      }
    ],
    exercises: [
      { id: "u2-ex1", type: "matching", instruction: "Cấp độ 1: Trò chơi Paraphrase - Từ nào đồng nghĩa với 'Reduce / Relieve'?", question: "Ghép từ đồng nghĩa với Reduce.", options: ["alleviate", "prevalent", "rely on"], answer: "alleviate", hint: "Nghĩ đến chữ A - làm giảm bớt nỗi đau hoặc kẹt xe." },
      { id: "u2-ex2", type: "choose", instruction: "Cấp độ 1: Chọn từ vựng thay thế cho 'Traffic Jam'.", question: "The city center is always full of traffic ________.", options: ["commute", "congestion", "infrastructure"], answer: "congestion", hint: "Sự tắc nghẽn giao thông = Traffic congestion." },
      { id: "u2-ex3", type: "fill-in", instruction: "Cấp độ 2: Điền thì Hiện tại hoàn thành.", question: "Over the last decade, the global temperature _____ increased significantly.", answer: "has", hint: "The global temperature là số ít, nên dùng 'have' hay 'has'?" },
      { id: "u2-ex4", type: "fill-in", instruction: "Cấp độ 2: Từ vựng - Điền giới từ đi với 'Rely'.", question: "In the past, citizens relied heavily _____ private vehicles.", answer: "on", hint: "Phụ thuộc VÀO = rely ..." },
      { id: "u2-ex5", type: "choose", instruction: "Cấp độ 2: Từ vựng - Điền từ mang nghĩa 'Đi lại hàng ngày'.", question: "My daily ________ to work takes about 45 minutes.", options: ["commute", "infrastructure", "degradation"], answer: "commute", hint: "Chuyến đi lại từ nhà đến chỗ làm = commute." },
      { id: "u2-ex6", type: "matching", instruction: "Cấp độ 2: Paraphrase - Từ nào đồng nghĩa với 'Important/Essential'?", question: "Water is _____ for life.", options: ["indispensable", "prevalent", "mitigate"], answer: "indispensable", hint: "Không thể thiếu được = Indispensable." },
      { id: "u2-ex7", type: "reorder", instruction: "Cấp độ 3: Tư duy Mệnh đề quan hệ (Which).", question: "led to / which / traffic / congestion / inevitably", answer: "which inevitably led to traffic congestion", hint: "which -> phó từ (inevitably) -> động từ (led to) -> tân ngữ." },
      { id: "u2-ex8", type: "reorder", instruction: "Cấp độ 3: Sắp xếp câu Hiện tại hoàn thành.", question: "prevalent / have / eco-friendly / become / buses", answer: "eco-friendly buses have become prevalent", hint: "Chủ ngữ (eco-friendly buses) -> Hiện tại hoàn thành (have become) -> tính từ (prevalent)." },
      { id: "u2-ex9", type: "translate", instruction: "Cấp độ 3: Dịch câu (Sử dụng từ Alleviate và Congestion).", question: "Xe buýt giúp giảm bớt ùn tắc giao thông.", answer: "Buses help alleviate traffic congestion", hint: "Xe buýt = Buses, Giúp = help, Giảm bớt = alleviate, Ùn tắc giao thông = traffic congestion." },
      { id: "u2-ex10", type: "translate", instruction: "Cấp độ 3: Thử thách cuối cùng - Dịch câu có phó từ.", question: "Chất lượng không khí đã thay đổi đáng kể.", answer: "Air quality has changed significantly", hint: "Chất lượng không khí = Air quality, Đã thay đổi = has changed, Đáng kể = significantly." }
    ],
    conversationPractice: {
      situation: "Chủ đề IELTS Speaking Part 3: Giao thông Đô thị. Giám khảo (Examiner) đang hỏi cậu về giải pháp cho nạn kẹt xe. Tự tin lên nhé!",
      dialogue: [
        { speaker: "Examiner", line: "In your view, what is the biggest problem with city transportation nowadays?", lineVi: "Theo bạn, vấn đề lớn nhất với giao thông thành phố hiện nay là gì?" },
        { speaker: "Ngọc Anh", line: "Without a doubt, it's traffic congestion. People rely heavily on private vehicles, which inevitably leads to daily gridlocks.", lineVi: "Không nghi ngờ gì nữa, đó là sự ùn tắc giao thông. Mọi người phụ thuộc nặng nề vào phương tiện cá nhân, điều tất yếu dẫn đến kẹt xe hàng ngày." },
        { speaker: "Examiner", line: "I see. So how can governments mitigate this pressing issue?", lineVi: "Tôi hiểu. Vậy chính phủ có thể làm giảm nhẹ vấn đề cấp bách này như thế nào?" },
        { speaker: "Ngọc Anh", line: "Well, investing in public infrastructure is indispensable. They should build more subways to alleviate the situation.", lineVi: "À, đầu tư vào cơ sở hạ tầng công cộng là không thể thiếu. Họ nên xây thêm tàu điện ngầm để giảm bớt tình trạng này." },
        { speaker: "Examiner", line: "Do you think eco-friendly vehicles will become more popular?", lineVi: "Bạn có nghĩ phương tiện thân thiện với môi trường sẽ trở nên phổ biến hơn không?" },
        { speaker: "Ngọc Anh", line: "Absolutely. Electric buses have already become prevalent in many metropolises. It's a crucial transition to reduce environmental degradation.", lineVi: "Chắc chắn rồi. Xe buýt điện đã trở nên thịnh hành ở nhiều siêu đô thị. Đây là một sự chuyển đổi mang tính quyết định để giảm thiểu suy thoái môi trường." }
      ]
    },
    tips: [
      "💡 Lưu ý Skimming: cậu đừng đọc từng chữ! Hãy lướt nhanh để tìm các danh từ chính (Nouns) và động từ chính (Verbs). Đọc thật kỹ câu ĐẦU TIÊN của mỗi đoạn vì nó chứa ý chính của cả đoạn đó (Topic Sentence).",
      "💡 Gia sư dặn dò: Khi học từ vựng mới, Ngọc Anh nhớ luôn học theo CỤM (Collocations). Đừng học 'alleviate' không, hãy học 'alleviate congestion'. Nó sẽ giúp cậu phản xạ nhanh gấp đôi khi nói và viết.",
      "💡 Nếu thấy bài học hơi dài, cậu có thể dừng lại 5 phút ngắm trời mây rồi học tiếp. Học ngoại ngữ là một hành trình lãng mạn, không phải một cuộc chạy đua đâu! 🥰"
    ]
  },
  {
    id: "unit-3-writing-task-1",
    unit: 3,
    title: "Academic Writing: Describing Trends",
    titleVi: "Viết Học thuật: Mô tả Xu hướng (IELTS Task 1)",
    objective: "Nắm vững các động từ và trạng từ học thuật để miêu tả sự tăng, giảm, biến động của dữ liệu. Rất quan trọng cho IELTS Writing Task 1.",
    reading: {
      title: "Global Smartphone Sales (2010 - 2020)",
      content: "The chart illustrates the global sales of smartphones between 2010 and 2020. Overall, it is clear that smartphone sales experienced a dramatic upward trend. In 2010, the figure stood at just 300 million units. However, it surged significantly to reach a peak of 1.5 billion units in 2018. Following this, the sales witnessed a slight decline to 1.4 billion in 2020.",
      translation: "Biểu đồ minh họa doanh số bán điện thoại thông minh toàn cầu từ năm 2010 đến 2020. Nhìn chung, rõ ràng là doanh số đã trải qua một xu hướng tăng mạnh mẽ. Vào năm 2010, con số này chỉ ở mức 300 triệu chiếc. Tuy nhiên, nó đã tăng vọt đáng kể để đạt đỉnh 1,5 tỷ chiếc vào năm 2018. Sau đó, doanh số chứng kiến một sự sụt giảm nhẹ xuống còn 1,4 tỷ chiếc vào năm 2020."
    },
    vocabulary: [
      { word: 'Illustrate', ipa: '/ˈɪl.ə.streɪt/', meaning: 'Minh họa, chỉ ra', example: 'The graph illustrates the changes in population.' },
      { word: 'Dramatic', ipa: '/drəˈmæt.ɪk/', meaning: 'Mạnh mẽ, đột ngột', example: 'There was a dramatic drop in temperature.' },
      { word: 'Upward trend', ipa: '/ˈʌp.wəd trend/', meaning: 'Xu hướng tăng', example: 'The economy shows an upward trend.' },
      { word: 'Surge', ipa: '/sɜːdʒ/', meaning: 'Tăng vọt (động từ/danh từ)', example: 'House prices surged last year.' },
      { word: 'Peak', ipa: '/piːk/', meaning: 'Đỉnh điểm', example: 'The traffic reaches its peak at 5 PM.' },
      { word: 'Decline', ipa: '/dɪˈklaɪn/', meaning: 'Giảm xuống, sự sụt giảm', example: 'The number of readers witnessed a decline.' },
      { word: 'Fluctuate', ipa: '/ˈflʌk.tʃu.eɪt/', meaning: 'Biến động, dao động', example: 'Stock prices fluctuate daily.' }
    ],
    grammar: [
      {
        rule: 'Ngữ pháp mô tả sự thay đổi (Verb + Adverb vs. Adjective + Noun)',
        explanation: 'Trong Writing, cậu nên linh hoạt thay đổi giữa 2 cấu trúc này để ghi điểm Ngữ pháp.',
        examples: [
          'Verb + Adverb: Sales increased (V) significantly (Adv).',
          'Adjective + Noun: There was a significant (Adj) increase (N) in sales.'
        ]
      },
      {
        rule: 'Giới từ đi kèm (Prepositions of Data)',
        explanation: 'Giới từ rất dễ sai khi viết số liệu.',
        examples: [
          'Tăng TỚI mức: increase TO 50%',
          'Tăng THÊM một khoảng: increase BY 10%',
          'Đạt đỉnh TẠI: reach a peak AT 100'
        ]
      }
    ],
    exercises: [
      {
        id: "u3-ex1",
        type: "reorder",
        instruction: "Chuyển câu sau từ cấu trúc (Verb + Adverb) sang (Adjective + Noun).",
        question: "Prices fell dramatically -> There was a...",
        answer: "There was a dramatic fall in prices",
        hint: "fell (verb) -> fall (noun), dramatically (adv) -> dramatic (adj)."
      },
      {
        id: "u3-ex2",
        type: "choose",
        instruction: "Chọn giới từ đúng.",
        question: "The percentage surged _____ 80% in 2015.",
        options: ["in", "by", "to"],
        answer: "to",
        hint: "Đạt đến một mốc cụ thể thì dùng giới từ gì nhỉ?"
      },
      {
        id: "u3-ex3",
        type: "fill-in",
        instruction: "Điền từ vựng mang nghĩa 'biến động' (dao động lên xuống).",
        question: "The figures _____ wildly throughout the decade.",
        answer: "fluctuated",
        hint: "Bắt đầu bằng chữ 'f', dạng quá khứ."
      }
    ],
    conversationPractice: {
      situation: "Cùng tớ tập miêu tả biểu đồ chi tiêu của cậu tháng này nhé!",
      dialogue: [
        { speaker: "A", line: "Did your shopping expenses increase this month?", lineVi: "Chi phí mua sắm của cậu tháng này có tăng không?" },
        { speaker: "B", line: "Yes. There was a dramatic increase.", lineVi: "Có. Đã có một sự tăng mạnh." },
        { speaker: "A", line: "Oh! Did it reach a peak?", lineVi: "Ồ! Nó có chạm đỉnh không?" },
        { speaker: "B", line: "Exactly. It reached a peak of 5 million VND.", lineVi: "Chính xác. Nó đạt đỉnh 5 triệu đồng." }
      ]
    },
    tips: [
      "💡 Lưu ý: Đừng bao giờ chép lại nguyên văn câu hỏi đề bài vào câu mở bài của cậu. Luôn dùng từ đồng nghĩa! (Ví dụ đề dùng 'show', cậu dùng 'illustrate').",
      "💡 Để làm bài Task 1 điểm cao, Ngọc Anh nhớ phải có một câu 'Overall' (Nhìn chung) miêu tả xu hướng bao quát nhất của toàn bộ biểu đồ nhé!"
    ]
  }
];
