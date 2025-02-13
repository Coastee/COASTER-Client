export const CHAT_LIST = [
  {
    name: "홍길동",
    latestMessage:
      "안녕하세요! 오랜만이에요. 요즘 어떻게 지내세요? 저는 요즘 새로운 프로젝트를 시작해서 바쁘게 지내고 있어요. 조만간 만나서 이야기 나누면 좋겠어요! 😊",
    sentTime: "5",
    isRead: false,
  },
  {
    name: "김철수",
    latestMessage: "오늘 저녁 뭐 먹을까요?",
    sentTime: "15",
    isRead: true,
  },
  {
    name: "이영희",
    latestMessage:
      "회의 자료 공유해 드릴게요. 문서 확인하시고 수정할 부분 있으면 알려주세요. 오늘 중으로 피드백 주시면 감사하겠습니다!",
    sentTime: "30",
    isRead: false,
  },
  {
    name: "박민수",
    latestMessage: "고마워요! 덕분에 잘 해결됐어요. 😊",
    sentTime: "45",
    isRead: true,
  },
  {
    name: "최은지",
    latestMessage: "내일 일정 관련해서 이야기 나누고 싶은데, 가능하신 시간 있으신가요? 일정 조율이 필요할 것 같아요!",
    sentTime: "60",
    isRead: false,
  },
  {
    name: "이서준",
    latestMessage: "파일 확인해 보셨나요? 의견 있으시면 알려주세요!",
    sentTime: "75",
    isRead: true,
  },
  {
    name: "강지훈",
    latestMessage: "오늘 너무 피곤하네요. 커피 한 잔 마셔야겠어요 ☕",
    sentTime: "90",
    isRead: false,
  },
  {
    name: "윤아름",
    latestMessage: "이번 주말에 시간 괜찮으세요? 같이 영화 보러 갈 사람 찾고 있어요!",
    sentTime: "105",
    isRead: true,
  },
  {
    name: "오승민",
    latestMessage: "어제 보낸 메일 확인해 주세요. 답변 기다리겠습니다!",
    sentTime: "120",
    isRead: false,
  },
  {
    name: "정하영",
    latestMessage: "ㅋㅋㅋㅋ 이거 진짜 대박이에요! 한번 봐보세요!",
    sentTime: "135",
    isRead: true,
  },
  {
    name: "신도윤",
    latestMessage: "방금 전에 이야기한 내용 정리해서 다시 보내드릴게요. 확인 부탁드립니다.",
    sentTime: "150",
    isRead: false,
  },
  {
    name: "한지민",
    latestMessage: "배고파요… 뭐 먹을까요?",
    sentTime: "165",
    isRead: true,
  },
  {
    name: "이준호",
    latestMessage: "팀 회의는 내일 오전 10시에 진행됩니다. 시간 맞춰서 참석 부탁드려요!",
    sentTime: "180",
    isRead: false,
  },
];

export const DM_MESSAGES = [
  {
    isUser: true,
    userName: "김철수",
    message: "안녕하세요! 잘 지내시나요?",
    time: "오후 2:30",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "안녕하세요! 네, 잘 지내고 있어요.\n요즘 어떻게 지내세요?",
    time: "오후 2:31",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "요즘 새로운 프로젝트 시작해서\n바쁘게 지내고 있어요. 😅",
    time: "오후 2:32",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "오! 어떤 프로젝트인가요?\n궁금하네요!",
    time: "오후 2:33",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "React랑 Next.js 기반으로 개발하는\n웹 서비스예요.\n조만간 보여드릴게요!",
    time: "오후 2:34",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "와! 기대되네요.\n필요하면 제가 도와드릴게요. 😊",
    time: "오후 2:35",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "고마워요!\n그럼 다음 주에 한번 만나서 이야기 나눠요!",
    time: "오후 2:36",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "좋아요!\n시간 되는 날 알려주세요~",
    time: "오후 2:37",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "이번 프로젝트는 AI 기반 추천 시스템도 들어가 있어서\n조금 복잡하긴 해요.\n그래도 재미있을 것 같아요!",
    time: "오후 2:38",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "오! AI 기반이라니 흥미롭네요!\n데이터 학습 같은 것도 직접 하시나요?",
    time: "오후 2:39",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "네, 머신러닝 모델도 일부 적용하려고 준비 중이에요.\n데이터 수집이 제일 어렵네요. 😅",
    time: "오후 2:40",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "그렇죠, 데이터가 많아야 좋은 모델이 나오죠.\n필요한 거 있으면 언제든 말해주세요!",
    time: "오후 2:41",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "정말 고마워요!\n그럼 제가 정리해서 몇 가지 요청 드릴게요.",
    time: "오후 2:42",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "네! 기대할게요. ☺️",
    time: "오후 2:43",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "그나저나 요즘 날씨가 점점 추워지네요.\n감기 안 걸리게 조심하세요!",
    time: "오후 2:44",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "맞아요, 갑자기 추워졌어요.\n따뜻하게 입고 다니세요!",
    time: "오후 2:45",
  },
  {
    isUser: true,
    userName: "김철수",
    message: "네! 그럼 이따 다시 이야기 나눠요!",
    time: "오후 2:46",
  },
  {
    isUser: false,
    userName: "이영희",
    message: "네! 좋은 하루 보내세요! ☀️",
    time: "오후 2:47",
  },
];
