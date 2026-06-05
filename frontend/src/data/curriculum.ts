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
    objective: "Mục tiêu 45 Phút: Nắm vững cấu trúc câu cốt lõi trong tiếng Anh học thuật, làm chủ 10 từ vựng Academic tần suất cao nhất, và loại bỏ hoàn toàn thói quen dịch Word-by-Word. Đây là nền móng để xây ngôi nhà IELTS của cậu, Ngọc Anh tập trung nhé!",
    reading: {
      title: "The Transformative Power of Education (Sức mạnh chuyển hóa của Giáo dục)",
      content: "In contemporary society, education is widely acknowledged as an essential pillar for both personal and economic growth. Firstly, it provides individuals with crucial cognitive skills and a broader perspective on global issues. Instead of merely memorizing facts, modern educational institutions emphasize critical thinking and problem-solving abilities.\n\nMoreover, universities and higher education establishments offer advanced knowledge that is highly demanded in today's competitive job market. As a result, students who pursue academic excellence often achieve remarkable success in their future careers. They are better equipped to adapt to technological advancements and industry shifts.\n\nUltimately, a robust educational foundation creates equitable opportunities for everyone, regardless of their socio-economic background. By investing in education, governments not only empower their citizens but also foster a more innovative and resilient society.",
      translation: "Trong xã hội đương đại, giáo dục được công nhận rộng rãi như một trụ cột thiết yếu cho sự phát triển cả về cá nhân lẫn kinh tế. Đầu tiên, nó cung cấp cho các cá nhân những kỹ năng nhận thức quan trọng và một góc nhìn rộng hơn về các vấn đề toàn cầu. Thay vì chỉ ghi nhớ các sự kiện, các cơ sở giáo dục hiện đại nhấn mạnh vào tư duy phản biện và khả năng giải quyết vấn đề.\n\nHơn nữa, các trường đại học và cơ sở giáo dục đại học cung cấp kiến thức nâng cao vốn được yêu cầu rất cao trong thị trường việc làm cạnh tranh ngày nay. Do đó, những sinh viên theo đuổi sự xuất sắc trong học thuật thường đạt được những thành công đáng chú ý trong sự nghiệp tương lai của họ. Họ được trang bị tốt hơn để thích ứng với những tiến bộ công nghệ và sự thay đổi của ngành.\n\nCuối cùng, một nền tảng giáo dục vững chắc tạo ra cơ hội bình đẳng cho tất cả mọi người, bất kể nền tảng kinh tế xã hội của họ. Bằng cách đầu tư vào giáo dục, các chính phủ không chỉ trao quyền cho công dân của họ mà còn thúc đẩy một xã hội đổi mới và kiên cường hơn."
    },
    vocabulary: [
      { word: 'Contemporary', ipa: '/kənˈtem.pər.ər.i/', meaning: '**Nghĩa:** Đương đại, hiện đại.\n\n💡 **Gia sư bật mí:** Thay vì dùng *modern* (quá phổ thông), hãy dùng *contemporary* trong IELTS Writing Task 2. Ví dụ: *In contemporary society...* (Trong xã hội đương đại...).\n\n🔗 **Collocations:** contemporary art (nghệ thuật đương đại), contemporary issues (vấn đề đương đại).', example: 'In contemporary society, stress is a common issue.' },
      { word: 'Acknowledge', ipa: '/əkˈnɒl.ɪdʒ/', meaning: '**Nghĩa:** Công nhận, thừa nhận.\n\n💡 **Gia sư bật mí:** Dùng từ này khi Nàng muốn thể hiện sự đồng tình với một quan điểm khách quan. Dạng bị động *is widely acknowledged as* (được công nhận rộng rãi là) cực kỳ ăn điểm.\n\n⚠️ **Lỗi sai thường gặp:** Đừng quên âm /dʒ/ (chờ) ở cuối từ nhé!', example: 'It is widely acknowledged that smoking causes cancer.' },
      { word: 'Essential', ipa: '/ɪˈsen.ʃəl/', meaning: '**Nghĩa:** Thiết yếu, cực kỳ quan trọng.\n\n💡 **Gia sư bật mí:** Nó mạnh hơn chữ *important* rất nhiều. Nếu thiếu nó thì mọi thứ sẽ sụp đổ. \n\n🔗 **Từ đồng nghĩa:** Crucial, Vital, Indispensable.', example: 'Water is essential for the survival of all living creatures.' },
      { word: 'Crucial', ipa: '/ˈkruː.ʃəl/', meaning: '**Nghĩa:** Quan trọng mang tính quyết định.\n\n💡 **Gia sư bật mí:** Từ này thường đi với giới từ *to* hoặc *for*. \n\n🔗 **Collocations:** play a crucial role in (đóng vai trò quyết định trong việc...).', example: 'Parents play a crucial role in a child’s development.' },
      { word: 'Establishment', ipa: '/ɪˈstæb.lɪʃ.mənt/', meaning: '**Nghĩa:** Sự thành lập / Cơ sở, tổ chức.\n\n💡 **Gia sư bật mí:** Trong bài đọc vừa rồi, *educational establishments* chính là cách Paraphrase cực xịn cho *schools and universities*.\n\n🔗 **Word Family:** Establish (Động từ) -> Establishment (Danh từ).', example: 'Educational establishments need more funding from the government.' },
      { word: 'Pursue', ipa: '/pəˈsjuː/', meaning: '**Nghĩa:** Theo đuổi (mục tiêu, sự nghiệp, đam mê).\n\n💡 **Gia sư bật mí:** Chữ *Pursue* mang sắc thái quyết tâm rất cao. Nàng nhớ đọc là /pəˈsjuː/ chứ không phải là /pơ-su/ nha.\n\n🔗 **Collocations:** pursue a career (theo đuổi sự nghiệp), pursue higher education (học lên cao).', example: 'Many students go abroad to pursue higher education.' },
      { word: 'Achieve', ipa: '/əˈtʃiːv/', meaning: '**Nghĩa:** Đạt được (thường là thành tựu sau khi nỗ lực).\n\n💡 **Gia sư bật mí:** Đừng dùng *get* (lấy được) cho những thứ to tát nhé. Nàng hãy dùng *achieve*.\n\n🔗 **Danh từ:** Achievement (Thành tựu).', example: 'With hard work, you can achieve your wildest dreams.' },
      { word: 'Remarkable', ipa: '/rɪˈmɑː.kə.bəl/', meaning: '**Nghĩa:** Đáng chú ý, xuất chúng.\n\n💡 **Gia sư bật mí:** Thay vì khen *very good* hay *great*, Nàng hãy dùng *remarkable*. Nó mang nghĩa "tốt đến mức ai cũng phải để ý".', example: 'She has made remarkable progress in her English studies.' },
      { word: 'Equipped', ipa: '/ɪˈkwɪpt/', meaning: '**Nghĩa:** Được trang bị (kỹ năng, kiến thức, vũ khí).\n\n💡 **Gia sư bật mí:** Cấu trúc *be better equipped to V* (được trang bị tốt hơn để làm gì) là một cấu trúc "vàng" trong viết luận.\n\n🔗 **Từ gốc:** Equip (Động từ) -> Equipment (Trang thiết bị).', example: 'Graduates today are better equipped to face global challenges.' },
      { word: 'Foster', ipa: '/ˈfɒs.tər/', meaning: '**Nghĩa:** Thúc đẩy, bồi dưỡng, nuôi dưỡng.\n\n💡 **Gia sư bật mí:** Từ này dùng để nói về việc nuôi dưỡng những thứ vô hình (tài năng, sự đổi mới, tinh thần). Rất hay gặp trong IELTS Reading!\n\n🔗 **Collocations:** foster innovation (thúc đẩy đổi mới), foster economic growth.', example: 'Reading aloud helps foster a child’s imagination.' }
    ],
    grammar: [
      {
        rule: 'Cấu trúc xương sống S-V-O (Subject - Verb - Object)',
        explanation: 'Ngọc Anh biết không, điểm khác biệt lớn nhất giữa tiếng Việt và tiếng Anh học thuật là Tiếng Anh ĐÒI HỎI sự rõ ràng tuyệt đối. Một câu LUÔN LUÔN phải có Chủ ngữ (S) và Động từ (V).\n\n💡 **Mẹo của tớ:** Khi viết câu dài, hãy nhắm mắt lại và tự hỏi: "Đứa nào (S) làm cái hành động gì (V) lên ai/cái gì (O)?". Nếu tìm được đủ 3 thành phần này, câu của Nàng không bao giờ bị sai ngữ pháp nặng.',
        examples: [
          '**S-V-O Cơ bản:** \nEducation (S) provides (V) skills (O).',
          '**S-V-O Nâng cao (có cụm từ mở rộng):** \nModern educational establishments (S) offer (V) advanced knowledge (O).',
          '⚠️ **Lỗi sai kinh điển:** "In Vietnam is very hot." (Câu này thiếu S. Phải viết là "The weather in Vietnam (S) is (V) very hot.")'
        ]
      },
      {
        rule: 'Phó từ chỉ mức độ kết hợp Động từ (Adverb + Verb)',
        explanation: 'Để biến một câu 5.0 thành câu 7.0, Nàng đừng chỉ dùng Động từ trần trụi. Hãy đính kèm một Phó từ (đuôi -ly) ngay trước Động từ hoặc Quá khứ phân từ để câu văn "có da có thịt" hơn.',
        examples: [
          'Thay vì: "Education is acknowledged as..."',
          'Hãy viết: "Education is **widely** (rộng rãi) acknowledged as..."',
          'Thay vì: "People rely on cars."',
          'Hãy viết: "People rely **heavily** (nặng nề) on cars."'
        ]
      },
      {
        rule: 'Từ nối học thuật (Transition Words) tạo mạch văn',
        explanation: 'Đây là "chất keo" dính các câu lại với nhau. Giám khảo IELTS sẽ cho điểm tiêu chí Coherence & Cohesion rất cao nếu Nàng biết dùng các từ sau đứng ở ĐẦU CÂU (và phải có dấu phẩy đi theo sau nhé):',
        examples: [
          '**Firstly, / Secondly,**: Mở đầu một loạt các ý tưởng.',
          '**Moreover, / Furthermore,**: Khi Nàng muốn bồi thêm một ý cùng chiều (khen thêm, hoặc chê thêm).',
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
      situation: "Tưởng tượng Nàng đang thi IELTS Speaking Part 3, Giám khảo (Examiner) hỏi Nàng về chủ đề Giáo dục. Hãy bình tĩnh phân tích và đáp lại nhé!",
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
      "💡 Gia sư dặn dò 1: Khi học từ vựng, Nàng đừng chỉ học mỗi từ đó. Hãy đọc cả câu ví dụ tớ đã viết. Não bộ Nàng sẽ tự động ghi nhớ \"hoàn cảnh\" từ đó xuất hiện.",
      "💡 Gia sư dặn dò 2: Trong bài thi IELTS Writing, việc Nàng dùng đúng 1 từ \"crucial\" đắt giá hơn rất nhiều so với việc viết 1 câu siêu dài nhưng dùng từ sai ngữ cảnh.",
      "💡 Gia sư dặn dò 3: Cứ mỗi 15 phút học, Nàng hãy vươn vai một cái nhé. Uống một ngụm nước rồi ấn vào làm bài tập, đừng cố ép não bộ căng thẳng quá!"
    ]
  },
  {
    id: "unit-2-reading-strategies",
    unit: 2,
    title: "Reading Strategies: Skimming & Paraphrasing",
    titleVi: "Chiến thuật Đọc hiểu: Đọc lướt và Từ đồng nghĩa",
    objective: "Mục tiêu 45 Phút: Nắm vững kỹ năng Skimming (Đọc lướt lấy ý chính), nhận diện Paraphrase (từ đồng nghĩa) và làm quen với 10 từ vựng chủ đề Giao Thông Đô Thị (Urban Transport). Đây là 2 vũ khí tối thượng giúp Nàng tiết kiệm 50% thời gian làm bài IELTS Reading.",
    reading: {
      title: "The Evolution of Urban Transport (Sự tiến hóa của Giao thông Đô thị)",
      content: "In recent decades, city transportation has changed significantly due to rapid urbanization and population growth. In the past, citizens relied heavily on private vehicles, which inevitably led to severe environmental degradation and daily gridlocks. Consequently, the quality of urban life deteriorated.\n\nHowever, modern metropolises are actively shifting towards sustainable public transit systems to mitigate these pressing issues. For instance, underground subways, light rail networks, and eco-friendly electric buses have become increasingly prevalent. This crucial transition not only helps alleviate traffic congestion but also substantially reduces carbon footprints.\n\nLooking ahead, urban planners are integrating smart technologies to revolutionize how people commute. Initiatives such as car-pooling apps and dedicated cycling lanes are being implemented globally. Ultimately, a well-structured transport infrastructure is indispensable for fostering a resilient and livable city.",
      translation: "Trong những thập kỷ gần đây, giao thông thành phố đã thay đổi đáng kể do đô thị hóa nhanh chóng và gia tăng dân số. Trong quá khứ, người dân phụ thuộc nặng nề vào phương tiện cá nhân, điều này tất yếu dẫn đến suy thoái môi trường nghiêm trọng và kẹt xe hàng ngày. Hậu quả là, chất lượng cuộc sống đô thị ngày càng giảm sút.\n\nTuy nhiên, các siêu đô thị hiện đại đang tích cực chuyển hướng sang các hệ thống giao thông công cộng bền vững để giảm nhẹ những vấn đề cấp bách này. Ví dụ, tàu điện ngầm, mạng lưới đường sắt nhẹ và xe buýt điện thân thiện với môi trường ngày càng trở nên thịnh hành. Sự chuyển đổi mang tính quyết định này không chỉ giúp làm giảm bớt ùn tắc giao thông mà còn giảm thiểu đáng kể lượng khí thải carbon.\n\nNhìn về tương lai, các nhà quy hoạch đô thị đang tích hợp các công nghệ thông minh để cách mạng hóa cách mọi người đi lại. Các sáng kiến như ứng dụng đi chung xe và làn đường dành riêng cho xe đạp đang được triển khai trên toàn cầu. Rốt cuộc, một cơ sở hạ tầng giao thông được cấu trúc tốt là điều không thể thiếu để nuôi dưỡng một thành phố kiên cường và đáng sống."
    },
    vocabulary: [
      { word: 'Significantly', ipa: '/sɪɡˈnɪf.ɪ.kənt.li/', meaning: '**Nghĩa:** Đáng kể, to lớn.\n\n💡 **Gia sư bật mí:** Từ này sinh ra là để miêu tả sự thay đổi trong IELTS Writing Task 1. Thay vì nói *changed a lot*, hãy nói *changed significantly*.\n\n🔗 **Từ đồng nghĩa:** Considerably, Substantially.', example: 'The cost of living in big cities has increased significantly.' },
      { word: 'Rely on', ipa: '/rɪˈlaɪ ɒn/', meaning: '**Nghĩa:** Phụ thuộc vào, dựa dẫm vào.\n\n💡 **Gia sư bật mí:** Trong IELTS, từ này rất hay được dùng với phó từ *heavily* (Rely heavily on = Phụ thuộc nặng nề vào).\n\n🔗 **Từ đồng nghĩa:** Depend on.', example: 'Many businesses rely heavily on social media marketing.' },
      { word: 'Degradation', ipa: '/ˌdeɡ.rəˈdeɪ.ʃən/', meaning: '**Nghĩa:** Sự suy thoái, sự giảm sút chất lượng.\n\n💡 **Gia sư bật mí:** Đây là từ vựng Band 7.5+ cực xịn cho chủ đề Môi trường. Nàng hãy học thuộc cụm *environmental degradation* nhé.\n\n🔗 **Word Family:** Degrade (Động từ).', example: 'Air pollution is a major cause of environmental degradation.' },
      { word: 'Mitigate', ipa: '/ˈmɪt.ɪ.ɡeɪt/', meaning: '**Nghĩa:** Làm giảm nhẹ, làm dịu bớt (hậu quả, vấn đề).\n\n💡 **Gia sư bật mí:** Giám khảo IELTS cực kỳ thích từ này ở phần kết bài khi Nàng đề xuất giải pháp. *To mitigate the problem, governments should...*\n\n🔗 **Từ đồng nghĩa:** Alleviate, Ease.', example: 'Planting more trees can mitigate the effects of global warming.' },
      { word: 'Prevalent', ipa: '/ˈprev.əl.ənt/', meaning: '**Nghĩa:** Thịnh hành, phổ biến.\n\n💡 **Gia sư bật mí:** Nó sang hơn *common* hay *popular* rất nhiều. Dùng để nói về một xu hướng đang lan rộng.\n\n🔗 **Collocations:** highly prevalent (rất phổ biến).', example: 'Electric cars are becoming increasingly prevalent nowadays.' },
      { word: 'Alleviate', ipa: '/əˈliː.vi.eɪt/', meaning: '**Nghĩa:** Làm giảm bớt (sự đau đớn, nghèo đói, kẹt xe).\n\n💡 **Gia sư bật mí:** Thường đi liền với *pain* (nỗi đau), *poverty* (nghèo đói) hoặc *congestion* (kẹt xe).\n\n🔗 **Từ đồng nghĩa:** Relieve, Mitigate.', example: 'The new bridge will help alleviate traffic congestion.' },
      { word: 'Congestion', ipa: '/kənˈdʒes.tʃən/', meaning: '**Nghĩa:** Sự tắc nghẽn (giao thông).\n\n💡 **Gia sư bật mí:** Paraphrase thần thánh cho *traffic jam*. Nàng hãy viết *traffic congestion* để ẵm điểm từ vựng nhé.\n\n🔗 **Word Family:** Congested (Tính từ - Bị tắc nghẽn).', example: 'Traffic congestion is a daily nightmare in Hanoi.' },
      { word: 'Infrastructure', ipa: '/ˈɪn.frəˌstrʌk.tʃər/', meaning: '**Nghĩa:** Cơ sở hạ tầng (đường xá, cầu cống, trường trạm).\n\n💡 **Gia sư bật mí:** Một từ không thể thiếu khi viết luận về sự phát triển của một quốc gia.\n\n🔗 **Collocations:** improve infrastructure (cải thiện cơ sở hạ tầng).', example: 'The government needs to invest more in public infrastructure.' },
      { word: 'Indispensable', ipa: '/ˌɪn.dɪˈspen.sə.bəl/', meaning: '**Nghĩa:** Không thể thiếu được, hoàn toàn cần thiết.\n\n💡 **Gia sư bật mí:** Từ này tương đương với *absolutely essential*. Dùng để chốt lại tầm quan trọng của một thứ gì đó.\n\n🔗 **Từ đồng nghĩa:** Crucial, Vital.', example: 'Smartphones have become an indispensable part of our lives.' },
      { word: 'Commute', ipa: '/kəˈmjuːt/', meaning: '**Nghĩa:** Đi lại thường xuyên (từ nhà đến chỗ làm/trường học).\n\n💡 **Gia sư bật mí:** Không dùng *go to work*, hãy dùng *commute*. Nàng có thể dùng nó như Danh từ (*the daily commute*).\n\n🔗 **Danh từ chỉ người:** Commuter (Người đi làm xa).', example: 'I have a long daily commute to the office.' }
    ],
    grammar: [
      {
        rule: 'Thì Hiện tại Hoàn thành (Present Perfect) diễn tả sự thay đổi',
        explanation: 'Ngọc Anh lưu ý nhé, thì Hiện tại Hoàn thành (Have/Has + V3) là "đặc sản" của văn học thuật. Người ta KHÔNG dùng nó để kể lể quá khứ, mà dùng nó để NẾN MẠNH MỘT SỰ THAY ĐỔI kéo dài từ quá khứ và VẪN CÒN ĐÚNG ở hiện tại.\n\n💡 **Mẹo của tớ:** Trong Task 1, nếu có mốc thời gian "In recent years" hoặc "Over the last decade", cậu NHẤT ĐỊNH phải dùng thì này!',
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
        explanation: 'Thay vì dùng "And it caused..." (nghe rất chán), Nàng hãy dùng phẩy + **Which** để tóm gọn cả một sự việc phía trước và chỉ ra hậu quả của nó. Đây là cấu trúc câu Phức (Complex Sentence) giúp nâng band điểm ngữ pháp.',
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
      situation: "Chủ đề IELTS Speaking Part 3: Giao thông Đô thị. Giám khảo (Examiner) đang hỏi Nàng về giải pháp cho nạn kẹt xe. Tự tin lên nhé!",
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
      "💡 Gia sư bật mí Skimming: Nàng đừng đọc từng chữ! Hãy lướt nhanh để tìm các danh từ chính (Nouns) và động từ chính (Verbs). Đọc thật kỹ câu ĐẦU TIÊN của mỗi đoạn vì nó chứa ý chính của cả đoạn đó (Topic Sentence).",
      "💡 Gia sư dặn dò: Khi học từ vựng mới, Ngọc Anh nhớ luôn học theo CỤM (Collocations). Đừng học 'alleviate' không, hãy học 'alleviate congestion'. Nó sẽ giúp Nàng phản xạ nhanh gấp đôi khi nói và viết.",
      "💡 Nếu thấy bài học hơi dài, Nàng có thể dừng lại 5 phút ngắm trời mây rồi học tiếp. Học ngoại ngữ là một hành trình lãng mạn, không phải một cuộc chạy đua đâu! 🥰"
    ]
  },
  {
    id: "unit-3-writing-task-1",
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
      "💡 Gia sư bật mí: Đừng bao giờ chép lại nguyên văn câu hỏi đề bài vào câu mở bài của cậu. Luôn dùng từ đồng nghĩa! (Ví dụ đề dùng 'show', cậu dùng 'illustrate').",
      "💡 Để làm bài Task 1 điểm cao, Ngọc Anh nhớ phải có một câu 'Overall' (Nhìn chung) miêu tả xu hướng bao quát nhất của toàn bộ biểu đồ nhé!"
    ]
  }
];
