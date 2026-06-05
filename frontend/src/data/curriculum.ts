// Giáo trình tiếng Anh bài bản — tớ soạn riêng cho cậu
// Mỗi Unit có: Lý thuyết, Từ vựng, Ngữ pháp, Bài đọc, Bài tập

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

export const curriculum: Lesson[] = [
  // ========== UNIT 1 ==========
  {
    id: 'u1',
    unit: 1,
    title: 'Greetings & Introductions',
    titleVi: 'Chào hỏi & Giới thiệu bản thân',
    objective: 'Sau bài này, tớ và cậu sẽ biết cách chào hỏi, giới thiệu bản thân và hỏi thăm người khác bằng tiếng Anh.',
    reading: {
      title: 'Meeting a New Friend',
      content: `Anna walks into a coffee shop and sees someone sitting alone. She decides to say hello.

Anna: "Hi there! My name is Anna. What's your name?"
Ben: "Hey! I'm Ben. Nice to meet you, Anna!"
Anna: "Nice to meet you too! Where are you from?"
Ben: "I'm from Vietnam. How about you?"
Anna: "I'm from Canada. I love Vietnamese food!"
Ben: "Really? That's great! What's your favorite dish?"
Anna: "I love pho! It's so delicious."
Ben: "Me too! We should grab some pho together sometime."
Anna: "That sounds wonderful! Here's my phone number."
Ben: "Thanks! Let's keep in touch. See you later!"
Anna: "Bye, Ben! Have a nice day!"`,
      translation: `Anna bước vào quán cà phê và thấy ai đó đang ngồi một mình. Cô ấy quyết định chào.

Anna: "Xin chào! Tên tôi là Anna. Bạn tên là gì?"
Ben: "Chào! Tôi là Ben. Rất vui được gặp bạn, Anna!"
Anna: "Tôi cũng rất vui được gặp bạn! Bạn đến từ đâu?"
Ben: "Tôi đến từ Việt Nam. Còn bạn?"
Anna: "Tôi đến từ Canada. Tôi rất thích đồ ăn Việt Nam!"
Ben: "Thật sao? Tuyệt quá! Món yêu thích của bạn là gì?"
Anna: "Tôi thích phở! Nó ngon lắm."
Ben: "Tôi cũng vậy! Chúng ta nên đi ăn phở cùng nhau lúc nào đó."
Anna: "Nghe tuyệt lắm! Đây là số điện thoại của tôi."
Ben: "Cảm ơn! Giữ liên lạc nhé. Gặp lại sau!"
Anna: "Tạm biệt, Ben! Chúc một ngày tốt lành!"`,
    },
    vocabulary: [
      { word: 'Hello / Hi', ipa: '/həˈloʊ/ /haɪ/', meaning: 'Xin chào', example: 'Hello! How are you today?' },
      { word: 'Goodbye / Bye', ipa: '/ɡʊdˈbaɪ/ /baɪ/', meaning: 'Tạm biệt', example: 'Goodbye! See you tomorrow.' },
      { word: 'Nice to meet you', ipa: '/naɪs tuː miːt juː/', meaning: 'Rất vui được gặp bạn', example: "I'm Ngọc Anh. Nice to meet you!" },
      { word: 'My name is...', ipa: '/maɪ neɪm ɪz/', meaning: 'Tên tôi là...', example: 'My name is Ngọc Anh.' },
      { word: 'Where are you from?', ipa: '/wɛr ɑːr juː frɒm/', meaning: 'Bạn đến từ đâu?', example: "Where are you from? — I'm from Hanoi." },
      { word: 'How are you?', ipa: '/haʊ ɑːr juː/', meaning: 'Bạn khỏe không?', example: "How are you? — I'm fine, thanks!" },
      { word: 'See you later', ipa: '/siː juː ˈleɪtər/', meaning: 'Gặp lại sau', example: "I have to go now. See you later!" },
      { word: 'Have a nice day', ipa: '/hæv ə naɪs deɪ/', meaning: 'Chúc một ngày tốt lành', example: 'Thanks for the coffee. Have a nice day!' },
    ],
    grammar: [
      {
        rule: 'Đại từ nhân xưng (Subject Pronouns)',
        explanation: 'Đại từ nhân xưng thay thế cho danh từ chỉ người. Trong tiếng Anh có 7 đại từ chính.',
        examples: [
          'I am a student. (Tôi là học sinh)',
          'You are my friend. (Bạn là bạn của tôi)',
          'He is from Vietnam. (Anh ấy đến từ Việt Nam)',
          'She is very kind. (Cô ấy rất tốt bụng)',
          'We are learning English. (Chúng tôi đang học tiếng Anh)',
          'They are classmates. (Họ là bạn cùng lớp)',
        ],
      },
      {
        rule: 'Động từ "to be" (am, is, are)',
        explanation: 'Động từ "to be" dùng để giới thiệu, mô tả. I → am, He/She/It → is, You/We/They → are.',
        examples: [
          'I am happy. → I\'m happy.',
          'She is a teacher. → She\'s a teacher.',
          'They are from Hanoi. → They\'re from Hanoi.',
          'Câu phủ định: I am not tired. / She is not here.',
          'Câu hỏi: Are you ready? / Is he your brother?',
        ],
      },
    ],
    exercises: [
      { id: 'u1e1', type: 'fill-in', instruction: 'Điền từ thích hợp vào chỗ trống', question: '"___ name is Anna. Nice to ___ you!"', answer: 'My, meet', hint: 'Đại từ sở hữu + động từ gặp' },
      { id: 'u1e2', type: 'choose', instruction: 'Chọn đáp án đúng', question: 'She ___ from Vietnam.', options: ['am', 'is', 'are', 'be'], answer: 'is', hint: 'She + ?' },
      { id: 'u1e3', type: 'choose', instruction: 'Chọn đáp án đúng', question: 'They ___ students.', options: ['am', 'is', 'are', 'be'], answer: 'are', hint: 'They + ?' },
      { id: 'u1e4', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Tôi rất vui được gặp bạn!', answer: 'Nice to meet you!', hint: 'Nice to...' },
      { id: 'u1e5', type: 'fill-in', instruction: 'Điền từ thích hợp', question: '"Where ___ you from?" — "I ___ from Hanoi."', answer: 'are, am', hint: 'Động từ to be' },
      { id: 'u1e6', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Tên tôi là Ngọc Anh. Tôi đến từ Việt Nam.', answer: 'My name is Ngoc Anh. I am from Vietnam.', hint: 'My name is... I am from...' },
    ],
    conversationPractice: {
      situation: 'Tớ với cậu luyện hội thoại nha: Gặp nhau lần đầu ở quán cà phê ☕',
      dialogue: [
        { speaker: 'A', line: 'Hi! My name is ___. What\'s your name?', lineVi: 'Xin chào! Tên tôi là ___. Bạn tên gì?' },
        { speaker: 'B', line: 'Hello! I\'m ___. Nice to meet you!', lineVi: 'Xin chào! Tôi là ___. Rất vui được gặp bạn!' },
        { speaker: 'A', line: 'Nice to meet you too! Where are you from?', lineVi: 'Tôi cũng rất vui! Bạn đến từ đâu?' },
        { speaker: 'B', line: 'I\'m from Vietnam. How about you?', lineVi: 'Tôi từ Việt Nam. Còn bạn?' },
        { speaker: 'A', line: 'I\'m from ___ too! We\'re neighbors!', lineVi: 'Tôi cũng từ ___! Chúng ta là hàng xóm!' },
      ],
    },
    tips: [
      '💡 "Hi" thân mật hơn "Hello" — cậu dùng với tớ thì nói Hi là được rồi 😉',
      '💡 "How are you?" cậu trả lời nhanh: "Good, thanks!" hoặc "Not bad!" là ổn!',
      '💡 Người bản ngữ hay nói "I\'m" thay vì "I am" — cậu nhớ nha, nghe tự nhiên hơn!',
    ],
  },

  // ========== UNIT 2 ==========
  {
    id: 'u2',
    unit: 2,
    title: 'Daily Routines',
    titleVi: 'Hoạt động hàng ngày',
    objective: 'Sau bài này, cậu sẽ biết cách kể về một ngày bình thường bằng tiếng Anh, sử dụng thì Hiện tại đơn nha.',
    reading: {
      title: 'A Day in Linh\'s Life',
      content: `Linh is a college student in Hanoi. She has a busy but happy life.

Every morning, Linh wakes up at 6:30 AM. She brushes her teeth, washes her face, and gets dressed. Then she eats breakfast with her family. She usually has bread and milk.

At 7:30, she goes to school by bus. Her classes start at 8:00 AM and finish at 11:30 AM. After school, she eats lunch at the canteen with her friends.

In the afternoon, Linh studies at the library. She reads books and does her homework. Sometimes she watches English videos on YouTube to practice her listening skills.

In the evening, she has dinner with her family at 6:00 PM. After dinner, she chats with her friends online and listens to music. Her favorite song is "Biển, Đảo Và Em."

Linh goes to bed at 10:30 PM. Before sleeping, she writes in her diary about her day. She always writes: "Today was a good day. I am grateful."`,
      translation: `Linh là sinh viên đại học ở Hà Nội. Cô ấy có một cuộc sống bận rộn nhưng hạnh phúc.

Mỗi sáng, Linh thức dậy lúc 6:30. Cô ấy đánh răng, rửa mặt, và mặc quần áo. Sau đó cô ấy ăn sáng cùng gia đình. Cô ấy thường ăn bánh mì và uống sữa.

Lúc 7:30, cô ấy đi học bằng xe buýt. Các lớp bắt đầu lúc 8:00 và kết thúc lúc 11:30. Sau giờ học, cô ấy ăn trưa ở căn-tin với bạn bè.

Buổi chiều, Linh học ở thư viện. Cô ấy đọc sách và làm bài tập. Đôi khi cô ấy xem video tiếng Anh trên YouTube để luyện nghe.

Buổi tối, cô ấy ăn tối cùng gia đình lúc 6 giờ. Sau bữa tối, cô ấy nhắn tin với bạn bè và nghe nhạc. Bài hát yêu thích của cô ấy là "Biển, Đảo Và Em."

Linh đi ngủ lúc 10:30 tối. Trước khi ngủ, cô ấy viết nhật ký về ngày hôm đó. Cô ấy luôn viết: "Hôm nay là một ngày tốt lành. Tôi biết ơn."`,
    },
    vocabulary: [
      { word: 'wake up', ipa: '/weɪk ʌp/', meaning: 'thức dậy', example: 'I wake up at 7 AM every day.' },
      { word: 'brush teeth', ipa: '/brʌʃ tiːθ/', meaning: 'đánh răng', example: 'She brushes her teeth twice a day.' },
      { word: 'have breakfast', ipa: '/hæv ˈbrekfəst/', meaning: 'ăn sáng', example: 'We have breakfast together every morning.' },
      { word: 'go to school', ipa: '/ɡoʊ tuː skuːl/', meaning: 'đi học', example: 'He goes to school by bicycle.' },
      { word: 'study', ipa: '/ˈstʌdi/', meaning: 'học bài', example: 'I study English every evening.' },
      { word: 'do homework', ipa: '/duː ˈhoʊmwɜːrk/', meaning: 'làm bài tập', example: 'She does her homework after school.' },
      { word: 'have dinner', ipa: '/hæv ˈdɪnər/', meaning: 'ăn tối', example: 'We have dinner at 6 PM.' },
      { word: 'go to bed', ipa: '/ɡoʊ tuː bed/', meaning: 'đi ngủ', example: 'I usually go to bed at 11 PM.' },
      { word: 'listen to music', ipa: '/ˈlɪsən tuː ˈmjuːzɪk/', meaning: 'nghe nhạc', example: 'She listens to music before sleeping.' },
      { word: 'every day', ipa: '/ˈevri deɪ/', meaning: 'mỗi ngày', example: 'I practice English every day.' },
    ],
    grammar: [
      {
        rule: 'Thì Hiện tại đơn (Simple Present Tense)',
        explanation: 'Dùng để diễn tả thói quen, sự thật hiển nhiên. Với He/She/It, thêm -s hoặc -es vào động từ.',
        examples: [
          'I wake up at 7 AM. (Tôi thức dậy lúc 7 giờ)',
          'She goes to school by bus. (Cô ấy đi học bằng xe buýt)',
          'He watches TV every evening. (Anh ấy xem TV mỗi tối)',
          'We study English together. (Chúng tôi học tiếng Anh cùng nhau)',
        ],
      },
      {
        rule: 'Trạng từ tần suất (Frequency Adverbs)',
        explanation: 'Đặt trước động từ chính, sau động từ "to be". Always (100%) → Usually (80%) → Often (60%) → Sometimes (40%) → Rarely (10%) → Never (0%)',
        examples: [
          'I always drink water in the morning.',
          'She usually has coffee for breakfast.',
          'They sometimes go to the gym.',
          'He never eats fast food.',
          'Sau "to be": She is always happy.',
        ],
      },
    ],
    exercises: [
      { id: 'u2e1', type: 'fill-in', instruction: 'Chia động từ trong ngoặc ở thì Hiện tại đơn', question: 'She (wake up) ___ at 6:30 every morning.', answer: 'wakes up', hint: 'She + V-s/es' },
      { id: 'u2e2', type: 'fill-in', instruction: 'Chia động từ', question: 'They (study) ___ English every day.', answer: 'study', hint: 'They + V nguyên mẫu' },
      { id: 'u2e3', type: 'choose', instruction: 'Chọn trạng từ tần suất phù hợp', question: 'I ___ eat breakfast. I eat it every single morning without exception.', options: ['never', 'sometimes', 'always', 'rarely'], answer: 'always' },
      { id: 'u2e4', type: 'fill-in', instruction: 'Chia động từ', question: 'He (go) ___ to bed at 10 PM and (brush) ___ his teeth before sleeping.', answer: 'goes, brushes', hint: 'He + V-s/es' },
      { id: 'u2e5', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Tôi thường nghe nhạc trước khi đi ngủ.', answer: 'I usually listen to music before going to bed.', hint: 'usually + listen to music + before going to bed' },
      { id: 'u2e6', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Cô ấy ăn sáng với gia đình mỗi ngày.', answer: 'She has breakfast with her family every day.', hint: 'She + has breakfast + with her family + every day' },
    ],
    conversationPractice: {
      situation: 'Luyện hỏi về thói quen hàng ngày của nhau 📅',
      dialogue: [
        { speaker: 'A', line: 'What time do you usually wake up?', lineVi: 'Bạn thường thức dậy lúc mấy giờ?' },
        { speaker: 'B', line: 'I usually wake up at ___. How about you?', lineVi: 'Tôi thường dậy lúc ___. Còn bạn?' },
        { speaker: 'A', line: 'I wake up at ___. What do you do after that?', lineVi: 'Tôi dậy lúc ___. Sau đó bạn làm gì?' },
        { speaker: 'B', line: 'I brush my teeth and have breakfast. Then I ___.', lineVi: 'Tôi đánh răng và ăn sáng. Sau đó tôi ___.' },
        { speaker: 'A', line: 'What do you do in the evening?', lineVi: 'Buổi tối bạn làm gì?' },
        { speaker: 'B', line: 'I usually ___ and listen to music. My favorite song is ___.', lineVi: 'Tôi thường ___ và nghe nhạc. Bài hát yêu thích là ___.' },
      ],
    },
    tips: [
      '💡 Cậu nhớ nha: "Go to school" KHÔNG có "the": ❌ go to the school → ✅ go to school',
      '💡 Nhớ thêm -es cho động từ kết thúc bằng -ch, -sh, -s, -x, -o: watches, brushes, goes',
      '💡 Tớ có mẹo nhớ trạng từ tần suất cho cậu nè: "A U O S R N" = Always Usually Often Sometimes Rarely Never',
    ],
  },

  // ========== UNIT 3 ==========
  {
    id: 'u3',
    unit: 3,
    title: 'At a Restaurant',
    titleVi: 'Gọi món tại nhà hàng',
    objective: 'Sau bài này, cậu sẽ tự tin gọi đồ ăn, đồ uống bằng tiếng Anh khi tớ với cậu đi ăn cùng nhau ☕🍕',
    reading: {
      title: 'A Dinner Date',
      content: `Minh and his friend go to a restaurant for dinner. A waiter greets them at the door.

Waiter: "Good evening! Welcome to Sunrise Restaurant. Table for two?"
Minh: "Yes, please. Can we sit near the window?"
Waiter: "Of course! Please follow me. Here's the menu."
Minh: "Thank you! What do you recommend?"
Waiter: "Our grilled chicken with vegetables is very popular today."
Friend: "That sounds delicious! I'll have the grilled chicken, please."
Minh: "And I'd like a bowl of mushroom soup and a Caesar salad."
Waiter: "Great choices! And what would you like to drink?"
Minh: "Two glasses of lemonade, please."
Waiter: "Perfect. Your order will be ready in about 15 minutes."

— 15 minutes later —

Waiter: "Here's your food. Enjoy your meal!"
Minh: "This looks amazing! Thank you."
Friend: "It's really delicious!"

— After eating —

Minh: "Can I have the bill, please?"
Waiter: "Of course. The total is 350,000 VND."
Minh: "Here you go. Keep the change."
Waiter: "Thank you! Have a wonderful evening!"`,
      translation: `Minh và bạn đến nhà hàng ăn tối. Nhân viên phục vụ chào họ ở cửa.

Phục vụ: "Chào buổi tối! Chào mừng đến Sunrise Restaurant. Bàn cho hai người ạ?"
Minh: "Vâng ạ. Chúng tôi ngồi gần cửa sổ được không?"
Phục vụ: "Tất nhiên ạ! Mời theo tôi. Đây là thực đơn."
Minh: "Cảm ơn! Bạn gợi ý món gì nhỉ?"
Phục vụ: "Gà nướng với rau của chúng tôi rất được ưa chuộng hôm nay."
Bạn: "Nghe ngon quá! Cho tôi gà nướng nhé."
Minh: "Và tôi muốn một tô súp nấm với salad Caesar."
Phục vụ: "Lựa chọn tuyệt vời! Quý khách muốn uống gì ạ?"
Minh: "Hai ly nước chanh nhé."
Phục vụ: "Tuyệt. Đơn của quý khách sẽ sẵn sàng trong khoảng 15 phút."

— 15 phút sau —

Phục vụ: "Đây là đồ ăn. Chúc quý khách ngon miệng!"
Minh: "Trông tuyệt quá! Cảm ơn bạn."
Bạn: "Ngon thật sự!"

— Sau khi ăn xong —

Minh: "Cho tôi xin hóa đơn được không?"
Phục vụ: "Tất nhiên ạ. Tổng cộng là 350.000 đồng."
Minh: "Đây ạ. Giữ lại tiền thừa nhé."
Phục vụ: "Cảm ơn ạ! Chúc quý khách buổi tối vui vẻ!"`,
    },
    vocabulary: [
      { word: 'menu', ipa: '/ˈmenjuː/', meaning: 'thực đơn', example: 'Can I see the menu, please?' },
      { word: 'order', ipa: '/ˈɔːrdər/', meaning: 'gọi món', example: 'Are you ready to order?' },
      { word: "I'd like...", ipa: '/aɪd laɪk/', meaning: 'Tôi muốn...', example: "I'd like a cup of coffee, please." },
      { word: 'recommend', ipa: '/ˌrekəˈmend/', meaning: 'gợi ý / đề xuất', example: 'What do you recommend?' },
      { word: 'bill / check', ipa: '/bɪl/ /tʃek/', meaning: 'hóa đơn', example: 'Can I have the bill, please?' },
      { word: 'delicious', ipa: '/dɪˈlɪʃəs/', meaning: 'ngon', example: 'This soup is delicious!' },
      { word: 'a glass of', ipa: '/ə ɡlæs ɒv/', meaning: 'một ly', example: 'A glass of water, please.' },
      { word: 'a bowl of', ipa: '/ə boʊl ɒv/', meaning: 'một tô/bát', example: 'A bowl of pho, please.' },
    ],
    grammar: [
      {
        rule: '"Would like" — Cách gọi món lịch sự',
        explanation: '"Would like" = "want" nhưng lịch sự hơn rất nhiều. Viết tắt: I\'d like = I would like.',
        examples: [
          "I'd like a cup of coffee. (Tôi muốn một tách cà phê)",
          "She'd like the grilled fish. (Cô ấy muốn cá nướng)",
          "Would you like some dessert? (Bạn có muốn tráng miệng không?)",
          "What would you like to drink? (Bạn muốn uống gì?)",
        ],
      },
      {
        rule: 'Danh từ đếm được & không đếm được',
        explanation: 'Đếm được (countable): dùng a/an, số đếm. Không đếm được (uncountable): dùng some, a glass of, a cup of...',
        examples: [
          'Đếm được: an apple, two eggs, three sandwiches',
          'Không đếm được: some water, some rice, some coffee',
          'Dùng lượng từ: a cup of tea, a glass of juice, a bowl of soup, a slice of pizza',
        ],
      },
    ],
    exercises: [
      { id: 'u3e1', type: 'fill-in', instruction: 'Hoàn thành câu gọi món', question: '"___ like a glass of orange juice, please."', answer: "I'd", hint: 'Viết tắt của I would' },
      { id: 'u3e2', type: 'choose', instruction: 'Chọn đáp án đúng', question: 'Can I have ___ water, please?', options: ['a', 'an', 'some', 'two'], answer: 'some', hint: 'Water là danh từ không đếm được' },
      { id: 'u3e3', type: 'choose', instruction: 'Chọn cách nói lịch sự nhất', question: 'Cách nào lịch sự nhất khi gọi món?', options: ['I want coffee.', "Give me coffee.", "I'd like a coffee, please.", 'Coffee!'], answer: "I'd like a coffee, please." },
      { id: 'u3e4', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Bạn gợi ý món gì? — Gà nướng rất được ưa chuộng hôm nay.', answer: 'What do you recommend? — The grilled chicken is very popular today.', hint: 'recommend = gợi ý, popular = được ưa chuộng' },
      { id: 'u3e5', type: 'fill-in', instruction: 'Điền lượng từ phù hợp', question: 'I\'d like a ___ of soup, a ___ of water, and two ___ of pizza.', answer: 'bowl, glass, slices', hint: 'soup → bowl, water → glass, pizza → slice' },
      { id: 'u3e6', type: 'translate', instruction: 'Dịch sang tiếng Anh', question: 'Cho tôi xin hóa đơn. — Tổng cộng là 200.000 đồng.', answer: 'Can I have the bill, please? — The total is 200,000 VND.', hint: 'bill = hóa đơn, total = tổng cộng' },
    ],
    conversationPractice: {
      situation: 'Tớ với cậu giả vờ đi ăn nhà hàng 🍽️ Một người làm khách, một người làm phục vụ nha!',
      dialogue: [
        { speaker: 'Waiter', line: 'Good evening! What would you like to order?', lineVi: 'Chào buổi tối! Bạn muốn gọi gì ạ?' },
        { speaker: 'Customer', line: "I'd like ___ and ___, please.", lineVi: 'Tôi muốn ___ và ___, cảm ơn.' },
        { speaker: 'Waiter', line: 'And what would you like to drink?', lineVi: 'Bạn muốn uống gì ạ?' },
        { speaker: 'Customer', line: 'A glass of ___, please.', lineVi: 'Một ly ___, cảm ơn.' },
        { speaker: 'Waiter', line: 'Your order will be ready in 10 minutes. Enjoy!', lineVi: 'Đơn của bạn sẽ sẵn sàng trong 10 phút. Chúc ngon miệng!' },
        { speaker: 'Customer', line: 'Can I have the bill, please? Everything was delicious!', lineVi: 'Cho tôi hóa đơn nhé? Mọi thứ đều ngon!' },
      ],
    },
    tips: [
      '💡 Khi tớ với cậu đi ăn, nhớ dùng "Would you like...?" thay vì "Do you want...?" nha — lịch sự hơn nhiều! 😊',
      '💡 "I\'ll have..." cũng rất phổ biến khi gọi món: "I\'ll have the pasta, please."',
      '💡 Tip quan trọng nè: Luôn nói "please" và "thank you" — cậu nhớ nha, phép lịch sự rất được coi trọng!',
    ],
  },
];
