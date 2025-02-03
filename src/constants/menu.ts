import { ChatIcon, CoffeeIcon, HomeIcon } from "../assets/svg"; // 임시 아이콘

export const MENU = [
  {
    id: "home",
    name: "홈",
    icon: HomeIcon,
    path: "home", // 상대 경로
  },
  {
    id: "group-chat",
    name: "그룹챗",
    icon: ChatIcon,
    path: "group-chat",
  },
  {
    id: "coffee-chat",
    name: "커피챗",
    icon: CoffeeIcon,
    path: "coffee-chat",
  },
];
