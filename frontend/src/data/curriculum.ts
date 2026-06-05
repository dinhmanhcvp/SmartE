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
    objective: "Nắm vững cấu trúc câu S-V-O cơ bản trong tiếng Anh học thuật và làm quen với Academic Word List (AWL). Điểm khởi đầu vững chắc nhất cho cậu.",
    reading: {
      title: "The Importance of Education (Sự quan trọng của Giáo dục)",
      content: "Education is essential for personal growth. It provides individuals with crucial skills. Moreover, universities offer advanced knowledge. As a result, students can achieve success in their future careers. A strong foundation creates better opportunities for everyone.",
      translation: "Giáo dục là rất cần thiết cho sự phát triển cá nhân. Nó cung cấp cho các cá nhân những kỹ năng quan trọng. Hơn nữa, các trường đại học cung cấp kiến thức nâng cao. Do đó, sinh viên có thể đạt được thành công trong sự nghiệp tương lai. Một nền tảng vững chắc tạo ra những cơ hội tốt hơn cho mọi người."
    },
    vocabulary: [
      { word: 'Essential', ipa: '/ɪˈsen.ʃəl/', meaning: 'Thiết yếu, cực kỳ quan trọng', example: 'Education is essential for society.' },
      { word: 'Provide', ipa: '/prəˈvaɪd/', meaning: 'Cung cấp', example: 'The book provides useful information.' },
      { word: 'Individual', ipa: '/ˌɪn.dɪˈvɪdʒ.u.əl/', meaning: 'Cá nhân', example: 'Every individual has unique talents.' },
      { word: 'Crucial', ipa: '/ˈkruː.ʃəl/', meaning: 'Quan trọng, mang tính quyết định', example: 'Water is crucial for survival.' },
      { word: 'Achieve', ipa: '/əˈtʃiːv/', meaning: 'Đạt được', example: 'She achieved her academic goals.' },
      { word: 'Foundation', ipa: '/faʊnˈdeɪ.ʃən/', meaning: 'Nền tảng', example: 'Grammar is the foundation of a language.' },
      { word: 'Opportunity', ipa: '/ˌɒp.əˈtʃuː.nə.ti/', meaning: 'Cơ hội', example: 'This scholarship is a great opportunity.' }
    ],
    grammar: [
      {
        rule: 'Cấu trúc S-V-O (Subject - Verb - Object)',
        explanation: 'Trong văn phong học thuật, câu thường bắt đầu bằng Chủ ngữ (người/vật thực hiện hành động), theo sau là Động từ (hành động), và Tân ngữ (đối tượng nhận hành động).',
        examples: [
          'Education (S) provides (V) skills (O).',
          'Universities (S) offer (V) knowledge (O).',
          'Students (S) achieve (V) success (O).'
        ]
      },
      {
        rule: 'Từ nối học thuật (Transition Words)',
        explanation: 'Dùng từ nối giúp bài viết mạch lạc hơn, ghi điểm tiêu chí Coherence & Cohesion trong IELTS.',
        examples: [
          'Moreover (Hơn nữa): Thêm ý tưởng.',
          'As a result (Do đó): Chỉ kết quả.',
          'Therefore (Vì vậy): Chỉ kết luận.'
        ]
      }
    ],
    exercises: [
      {
        id: "u1-ex1",
        type: "choose",
        instruction: "Chọn từ học thuật (Academic Word) phù hợp nhất để điền vào chỗ trống.",
        question: "Good nutrition is _____ for children's healthy development.",
        options: ["essential", "opportunity", "achieve"],
        answer: "essential",
        hint: "Gợi ý: Cần một tính từ mang nghĩa 'thiết yếu'."
      },
      {
        id: "u1-ex2",
        type: "reorder",
        instruction: "Sắp xếp các từ sau thành một câu S-V-O hoàn chỉnh mang tính học thuật.",
        question: "universities / advanced / provide / knowledge",
        answer: "universities provide advanced knowledge",
        hint: "Chủ ngữ (Universities) -> Động từ (provide) -> Tân ngữ (advanced knowledge)."
      },
      {
        id: "u1-ex3",
        type: "translate",
        instruction: "Dịch câu sau sang tiếng Anh học thuật.",
        question: "Cá nhân có thể đạt được thành công.",
        answer: "Individuals can achieve success.",
        hint: "Cá nhân = Individuals, Đạt được = achieve, Thành công = success."
      }
    ],
    tips: [
      "Luôn xác định Chủ ngữ và Động từ chính khi đọc một câu dài.",
      "Thay vì dùng 'important' (quan trọng cơ bản), hãy thử dùng 'essential' hoặc 'crucial' để câu văn 'sang' hơn nhé!",
      "Đừng lo nếu lúc đầu thấy từ vựng học thuật hơi khó nhớ, tớ sẽ giúp cậu lặp lại chúng qua SRS."
    ]
  },
  {
    id: "unit-2-reading-strategies",
    unit: 2,
    title: "Reading Strategies: Skimming & Paraphrasing",
    titleVi: "Chiến thuật Đọc hiểu: Đọc lướt và Từ đồng nghĩa",
    objective: "Nắm vững kỹ năng Skimming (Đọc lướt lấy ý chính) và nhận diện Paraphrase (cách diễn đạt khác) - hai vũ khí tối thượng trong bài thi IELTS Reading.",
    reading: {
      title: "The Evolution of Urban Transport",
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
        explanation: 'Thường dùng trong văn học thuật để mô tả một sự thay đổi bắt đầu từ quá khứ và kéo dài đến hiện tại (rất hay gặp trong IELTS Writing Task 1 & Reading).',
        examples: [
          'Transportation has changed significantly. (Giao thông đã thay đổi đáng kể)',
          'Pollution has become a major issue. (Ô nhiễm đã trở thành vấn đề lớn)'
        ]
      },
      {
        rule: 'Paraphrasing (Nghệ thuật viết lại câu)',
        explanation: 'Đề thi sẽ không bao giờ dùng lại từ trong bài đọc. Cậu phải nhận ra các từ đồng nghĩa (synonyms).',
        examples: [
          'private vehicles = personal cars',
          'reduce pollution = alleviate environmental damage',
          'prevalent = common / popular'
        ]
      }
    ],
    exercises: [
      {
        id: "u2-ex1",
        type: "matching",
        instruction: "Nối từ vựng học thuật với từ/cụm từ đồng nghĩa (Paraphrase) của nó.",
        question: "Ghép các cặp: 1. Alleviate, 2. Prevalent, 3. Rely on",
        options: ["A. Depend on", "B. Common", "C. Reduce"],
        answer: "1-C, 2-B, 3-A",
        hint: "Alleviate = Làm giảm, Prevalent = Phổ biến, Rely on = Phụ thuộc."
      },
      {
        id: "u2-ex2",
        type: "fill-in",
        instruction: "Điền từ thích hợp để hoàn thành cấu trúc Hiện tại Hoàn thành.",
        question: "The number of private vehicles _____ increased significantly in recent years.",
        answer: "has",
        hint: "The number (số lượng - số ít) đi với trợ động từ gì trong thì HTHT?"
      },
      {
        id: "u2-ex3",
        type: "choose",
        instruction: "Kỹ năng Skimming: Ý chính của bài đọc trên là gì?",
        question: "What is the main idea of the text?",
        options: [
          "A. Mọi người nên mua ô tô riêng.",
          "B. Sự thay đổi từ giao thông cá nhân sang giao thông công cộng.",
          "C. Tàu điện ngầm quá đắt đỏ."
        ],
        answer: "B",
        hint: "Đọc câu đầu (Topic sentence) và câu chứa từ 'However' để nắm hướng đi của bài."
      }
    ],
    tips: [
      "Đọc lướt (Skimming): Hãy tập trung vào Câu đầu và Câu cuối của mỗi đoạn văn, đó thường là ý chính.",
      "Khi gặp từ mới trong bài đọc, đừng hoảng loạn! Hãy đoán nghĩa dựa vào ngữ cảnh xung quanh.",
      "Paraphrasing là trái tim của bài thi học thuật. Cậu ghi nhớ các cặp từ đồng nghĩa tớ chỉ nhé!"
    ]
  },
  {
    id: "unit-3-writing-task1",
    unit: 3,
    title: "Academic Writing: Describing Trends",
    titleVi: "Viết Học thuật: Mô tả Xu hướng (IELTS Task 1)",
    objective: "Nắm vững các động từ và trạng từ học thuật để miêu tả sự tăng, giảm, biến động của dữ liệu. Cực kỳ quan trọng cho IELTS Writing Task 1.",
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
    tips: [
      "Khi viết đoạn Overview (Nhìn chung), luôn dùng từ 'Overall, it is clear that...'",
      "Đừng liệt kê mọi con số! Hãy chọn lọc những điểm nổi bật như cao nhất, thấp nhất, hoặc thay đổi lớn nhất.",
      "Cố gắng thuộc lòng các từ đồng nghĩa: Increase = Rise = Grow = Surge, Decrease = Fall = Drop = Decline."
    ]
  }
];
