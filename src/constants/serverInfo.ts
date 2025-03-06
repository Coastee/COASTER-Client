import type { SVGProps } from "react";
import {
  BeautyServerIcon,
  CalendarMenuActiveIcon,
  CalendarMenuIcon,
  DmMenuActiveIcon,
  DmMenuIcon,
  HealthServerIcon,
  HomeIcon,
  HomeLivingServerIcon,
  HrLawServerIcon,
  MobilityServerIcon,
  ProfileMenuActiveIcon,
  ProfileMenuIcon,
} from "../assets/svg";

export type ServerInfoTypes = {
  id: number;
  name: string;
  icon: React.ElementType<SVGProps<SVGSVGElement>>;
};

export type GlobalMenuTypes = {
  id: string;
  icon: React.ElementType<SVGProps<SVGSVGElement>>;
  activeIcon: React.ElementType<SVGProps<SVGSVGElement>>;
};

export const SERVERINFO: ServerInfoTypes[] = [
  { id: 0, name: "광고/마케팅", icon: HomeIcon },
  { id: 1, name: "금융/보험/핀테크", icon: HomeIcon },
  { id: 2, name: "모빌리티/교통", icon: MobilityServerIcon },
  { id: 3, name: "부동산/건설", icon: HomeIcon },
  { id: 4, name: "AI/딥테크/블록체인", icon: HomeIcon },
  { id: 5, name: "여행/레저", icon: HomeIcon },
  { id: 6, name: "인사/법률", icon: HrLawServerIcon },
  { id: 7, name: "커머스/비즈니스", icon: HomeIcon },
  { id: 8, name: "통신/데이터", icon: HomeIcon },
  { id: 9, name: "푸드/농업", icon: HomeIcon },
  { id: 10, name: "홈리빙/펫", icon: HomeLivingServerIcon },
  { id: 11, name: "스포츠", icon: HomeIcon },
  { id: 12, name: "교육", icon: HomeIcon },
  { id: 13, name: "게임", icon: HomeIcon },
  { id: 14, name: "물류", icon: HomeIcon },
  { id: 15, name: "뷰티/화장품", icon: BeautyServerIcon },
  { id: 16, name: "소셜미디어/커뮤니티", icon: HomeIcon },
  { id: 17, name: "유아/출산", icon: HomeIcon },
  { id: 18, name: "제조/하드웨어", icon: HomeIcon },
  { id: 19, name: "콘텐츠/예술", icon: HomeIcon },
  { id: 20, name: "패션", icon: HomeIcon },
  { id: 21, name: "환경/에너지", icon: HomeIcon },
  { id: 22, name: "헬스케어/바이오", icon: HealthServerIcon },
  { id: 23, name: "기타", icon: HomeIcon },
];

export const GLOBAL_MENUS: GlobalMenuTypes[] = [
  { id: "dm", icon: DmMenuIcon, activeIcon: DmMenuActiveIcon },
  {
    id: "schedule",
    icon: CalendarMenuIcon,
    activeIcon: CalendarMenuActiveIcon,
  },
  {
    id: "mypage",
    icon: ProfileMenuIcon,
    activeIcon: ProfileMenuActiveIcon,
  },
];
