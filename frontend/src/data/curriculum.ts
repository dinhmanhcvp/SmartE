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
  {
    id: "unit-1-academic-foundation",
    unit: 1,
    title: "Academic Foundation: The Sentence Builder",
    titleVi: "Nền tảng Học thuật: Xây dựng cấu trúc câu chuẩn",
    objective: "Nắm vững cấu trúc câu S-V-O cơ bản trong tiếng Anh học thuật và làm quen với Academic Word List (AWL). Đây là viên gạch đầu tiên, Ngọc Anh cố lên nhé!",
    reading: {
      title: "The Importance of Education (Sự quan trọng của Giáo dục)",
      content: "Education is essential for personal growth. It provides individuals with crucial skills. Moreover, universities offer advanced knowledge. As a result, students can achieve success in their future careers. A strong foundation creates better opportunities for everyone.",
      translation: "Giáo dục là rất cần thiết cho sự phát triển cá nhân. Nó cung cấp cho các cá nhân những kỹ năng quan trọng. Hơn nữa, các trường đại học cung cấp kiến thức nâng cao. Do đó, sinh viên có thể đạt được thành công trong sự nghiệp tương lai. Một nền tảng vững chắc tạo ra những cơ hội tốt hơn cho mọi người."
    },
    vocabulary: [
      { word: 'Essential', ipa: '/ɪˈsen.ʃəl/', meaning: 'Thiết yếu, cực kỳ quan trọng', example: 'Education is essential for society.' },
      { word: 'Provide', ipa: '/prəˈvaɪd/', meaning: 'Cung cấp', example: 'The book provides useful information.' },
      { word: 'Individual', ipa: '/ˌɪn.dɪˈvɪdʒ.u.əl/', meaning: 'Cá nhân (danh từ/tính từ)', example: 'Every individual has unique talents.' },
      { word: 'Crucial', ipa: '/ˈkruː.ʃəl/', meaning: 'Quan trọng, mang tính quyết định', example: 'Water is crucial for survival.' },
      { word: 'Achieve', ipa: '/əˈtʃiːv/', meaning: 'Đạt được (mục tiêu)', example: 'She achieved her academic goals.' },
      { word: 'Foundation', ipa: '/faʊnˈdeɪ.ʃən/', meaning: 'Nền tảng', example: 'Grammar is the foundation of a language.' },
      { word: 'Opportunity', ipa: '/ˌɒp.əˈtʃuː.nə.ti/', meaning: 'Cơ hội', example: 'This scholarship is a great opportunity.' }
    ],
    grammar: [
      {
        rule: 'Cấu trúc S-V-O (Subject - Verb - Object)',
        explanation: 'Ngọc Anh biết không, trong văn phong học thuật, câu thường bắt đầu bằng Chủ ngữ (người/vật thực hiện), theo sau là Động từ (hành động), và Tân ngữ (bị tác động). Nắm chắc khung này, câu viết của cậu sẽ không bao giờ bị lủng củng!',
        examples: [
          'Education (S) provides (V) skills (O).',
          'Universities (S) offer (V) knowledge (O).',
          'Students (S) achieve (V) success (O).'
        ]
      },
      {
        rule: 'Từ nối học thuật (Transition Words)',
        explanation: 'Đây là "chất keo" dính các câu lại với nhau. Giám khảo IELTS cực kỳ thích điều này vì nó làm bài viết của cậu mạch lạc hẳn lên. Tớ gợi ý dùng những từ sau thay vì "and" hay "so" nhé:',
        examples: [
          'Moreover (Hơn nữa): Dùng khi cậu muốn thêm một ý khen ngợi hoặc chê bai tương tự.',
          'As a result (Do đó): Chỉ hậu quả, kết quả của hành động trước.',
          'Therefore (Vì vậy): Dùng để chốt lại một vấn đề.'
        ]
      }
    ],
    exercises: [
      {
        id: "u1-ex1",
        type: "choose",
        instruction: "Chọn từ học thuật phù hợp nhất để điền vào chỗ trống.",
        question: "Good nutrition is _____ for children's healthy development.",
        options: ["essential", "opportunity", "achieve"],
        answer: "essential",
        hint: "Gợi ý cho Ngọc Anh: Ở đây mình cần một tính từ mang nghĩa 'thiết yếu', không thể thiếu được."
      },
      {
        id: "u1-ex2",
        type: "reorder",
        instruction: "Sắp xếp các từ sau thành một câu S-V-O hoàn chỉnh mang tính học thuật.",
        question: "universities / advanced / provide / knowledge",
        answer: "universities provide advanced knowledge",
        hint: "Tớ nhắc nhỏ nè: Chủ ngữ (Universities) -> Động từ (provide) -> Tân ngữ (advanced knowledge)."
      },
      {
        id: "u1-ex3",
        type: "translate",
        instruction: "Dịch câu sau sang tiếng Anh học thuật. (Gõ tiếng Anh vào ô dưới nhé)",
        question: "Cá nhân có thể đạt được thành công.",
        answer: "Individuals can achieve success",
        hint: "Cá nhân = Individuals, Đạt được = achieve, Thành công = success."
      }
    ],
    conversationPractice: {
      situation: "Tưởng tượng cậu đang thảo luận với bạn về tầm quan trọng của việc học đại học. Cậu hãy đóng vai A nhé!",
      dialogue: [
        { speaker: "A", line: "Do you think going to university is essential?", lineVi: "Cậu có nghĩ học đại học là thiết yếu không?" },
        { speaker: "B", line: "Yes. Universities provide advanced knowledge for us.", lineVi: "Có chứ. Các trường đại học cung cấp kiến thức nâng cao cho chúng ta." },
        { speaker: "A", line: "I agree. Therefore, individuals can achieve success easier.", lineVi: "Tớ đồng ý. Do đó, các cá nhân có thể đạt được thành công dễ dàng hơn." }
      ]
    },
    tips: [
      "💡 Gia sư bật mí: Luôn xác định Chủ ngữ và Động từ chính khi đọc một câu tiếng Anh dài. Cứ tóm được 2 thành phần này là hiểu được 80% câu rồi!",
      "💡 Thay vì dùng 'important' (quan trọng cơ bản), Ngọc Anh hãy thử dùng 'essential' hoặc 'crucial' để câu văn 'sang' và chuẩn IELTS hơn nhé!",
      "💡 Đừng lo nếu lúc đầu thấy từ vựng học thuật hơi khó nhớ, tớ sẽ luôn ở đây để giúp cậu lặp lại chúng qua SRS."
    ]
  },
  {
    id: "unit-2-reading-strategies",
    unit: 2,
    title: "Reading Strategies: Skimming & Paraphrasing",
    titleVi: "Chiến thuật Đọc hiểu: Đọc lướt và Từ đồng nghĩa",
    objective: "Nắm vững kỹ năng Skimming (Đọc lướt lấy ý chính) và nhận diện Paraphrase (cách diễn đạt khác) - hai vũ khí tối thượng giúp cậu chinh phục bài thi IELTS Reading.",
    reading: {
      title: "The Evolution of Urban Transport (Sự tiến hóa của giao thông đô thị)",
      content: "In recent decades, city transportation has changed significantly. In the past, people relied heavily on private vehicles. However, modern cities are shifting towards public transit systems to reduce pollution. For instance, subways and eco-friendly buses have become prevalent. This transition helps alleviate traffic congestion.",
      translation: "Trong những thập kỷ gần đây, giao thông thành phố đã thay đổi đáng kể. Trong quá khứ, con người phụ thuộc nhiều vào phương tiện cá nhân. Tuy nhiên, các thành phố hiện đại đang chuyển hướng sang hệ thống giao thông công cộng để giảm thiểu ô nhiễm. Ví dụ, tàu điện ngầm và xe buýt thân thiện với môi trường đã trở nên thịnh hành. Sự chuyển đổi này giúp giảm bớt ùn tắc giao thông."
    },
    vocabulary: [
      { word: 'Significantly', ipa: '/sɪɡˈnɪf.ɪ.kənt.li/', meaning: 'Đáng kể', example: 'The cost of living has increased significantly.' },
      { word: 'Rely on', ipa: '/rɪˈlaɪ ɒn/', meaning: 'Phụ thuộc vào', example: 'We rely on technology for communication.' },
      { word: 'Transit', ipa: '/ˈtræn.zɪt/', meaning: 'Sự vận chuyển, giao thông', example: 'Public transit is cheap and fast.' },
      { word: 'Prevalent', ipa: '/ˈprev.əl.ənt/', meaning: 'Thịnh hành, phổ biến', example: 'Electric cars are becoming prevalent.' },
      { word: 'Alleviate', ipa: '/əˈliː.vi.eɪt/', meaning: 'Làm giảm bớt (đau đớn, vấn đề)', example: 'Medicine helps alleviate the pain.' },
      { word: 'Congestion', ipa: '/kənˈdʒes.tʃən/', meaning: 'Sự tắc nghẽn', example: 'Traffic congestion is a major issue in Hanoi.' }
    ],
    grammar: [
      {
        rule: 'Thì Hiện tại Hoàn thành (Present Perfect)',
        explanation: 'Ngọc Anh lưu ý nhé, thì này thường dùng trong văn học thuật để mô tả một sự thay đổi bắt đầu từ quá khứ và kéo dài đến hiện tại. Rất hay gặp trong IELTS Writing Task 1 & Reading đó!',
        examples: [
          'Transportation has changed significantly. (Giao thông đã thay đổi đáng kể)',
          'Pollution has become a major issue. (Ô nhiễm đã trở thành vấn đề lớn)'
        ]
      },
      {
        rule: 'Paraphrasing (Nghệ thuật viết lại câu)',
        explanation: 'IELTS là một bài thi về Paraphrase. Họ sẽ không bao giờ dùng lại từ trong câu hỏi để viết trong bài đọc. Cậu phải nhận ra sự thay đổi từ vựng nhưng giữ nguyên ý nghĩa.',
        examples: [
          'Private vehicles = Cars and motorbikes (Phương tiện cá nhân)',
          'Reduce pollution = Alleviate environmental damage (Giảm ô nhiễm)'
        ]
      }
    ],
    exercises: [
      {
        id: "u2-ex1",
        type: "matching",
        instruction: "Nối từ đồng nghĩa (Paraphrase) thường gặp trong IELTS.",
        question: "Từ nào sau đây đồng nghĩa với 'Reduce'?",
        options: ["alleviate", "prevalent", "rely on"],
        answer: "alleviate",
        hint: "Giảm bớt một điều gì đó tiêu cực (như cơn đau, ùn tắc) thì dùng từ bắt đầu bằng chữ A nhé."
      },
      {
        id: "u2-ex2",
        type: "fill-in",
        instruction: "Điền giới từ đi kèm với động từ 'Rely'.",
        question: "Many people rely ___ their smartphones.",
        answer: "on",
        hint: "'Rely' luôn đi với giới từ 'on' (phụ thuộc vào)."
      },
      {
        id: "u2-ex3",
        type: "choose",
        instruction: "Tìm từ miêu tả sự ùn tắc giao thông.",
        question: "Traffic ________ is getting worse in big cities.",
        options: ["transit", "congestion", "foundation"],
        answer: "congestion",
        hint: "Sự tắc nghẽn, kẹt xe = Congestion."
      }
    ],
    conversationPractice: {
      situation: "Chủ đề IELTS Speaking Part 3: Giao thông. Hãy cùng tớ trả lời câu hỏi này nhé!",
      dialogue: [
        { speaker: "A", line: "How has transportation changed in your city?", lineVi: "Giao thông ở thành phố cậu đã thay đổi thế nào?" },
        { speaker: "B", line: "It has changed significantly. People rely less on motorbikes now.", lineVi: "Nó đã thay đổi đáng kể. Mọi người giờ ít phụ thuộc vào xe máy hơn." },
        { speaker: "A", line: "That's good. Public transit can alleviate congestion.", lineVi: "Tốt đó. Giao thông công cộng có thể giảm bớt sự ùn tắc." }
      ]
    },
    tips: [
      "💡 Gia sư bật mí: Skimming (Đọc lướt) nghĩa là cậu chỉ đọc câu đầu tiên và câu cuối cùng của mỗi đoạn văn để nắm ý chính, đừng cố đọc từng chữ một nhé!",
      "💡 Khi học từ vựng mới, Ngọc Anh nhớ luôn học các từ đồng nghĩa (synonyms) của nó. Ví dụ học 'Important' thì nhớ luôn 'Crucial' và 'Essential'."
    ]
  },
  {
    id: "unit-3-writing-task-1",
    unit: 3,
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
    tips: [
      "Khi viết đoạn Overview (Nhìn chung), luôn dùng từ 'Overall, it is clear that...'",
      "Đừng liệt kê mọi con số! Hãy chọn lọc những điểm nổi bật như cao nhất, thấp nhất, hoặc thay đổi lớn nhất.",
      "Cố gắng thuộc lòng các từ đồng nghĩa: Increase = Rise = Grow = Surge, Decrease = Fall = Drop = Decline."
    ]
  }
];
