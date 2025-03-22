import type { SVGProps } from "react";
import {
  BeautyServerIcon,
  HealthServerIcon,
  HomeIcon,
  HomeLivingServerIcon,
  HrLawServerIcon,
  MobilityServerIcon,
} from "../assets/svg";

export type ServerInfoTypes = {
  id: number;
  title: string;
  icon: React.ElementType<SVGProps<SVGSVGElement>>;
};
export const SERVERINFO: ServerInfoTypes[] = [
  { id: 1, title: "광고/마케팅", icon: HomeIcon },
  { id: 2, title: "부동산/건설", icon: HomeIcon },
  { id: 3, title: "인사/법률", icon: HrLawServerIcon },
  { id: 4, title: "푸드/농업", icon: HomeIcon },
  { id: 5, title: "교육", icon: HomeIcon },
  { id: 6, title: "뷰티/화장품", icon: BeautyServerIcon },
  { id: 7, title: "제조/하드웨어", icon: HomeIcon },
  { id: 8, title: "환경/에너지", icon: HomeIcon },
  { id: 9, title: "금융/보험/핀테크", icon: HomeIcon },
  { id: 10, title: "AI/딥테크/블록체인", icon: HomeIcon },
  { id: 11, title: "커머스/비즈니스", icon: HomeIcon },
  { id: 12, title: "홈리빙/펫", icon: HomeLivingServerIcon },
  { id: 13, title: "게임", icon: HomeIcon },
  { id: 14, title: "소셜미디어/커뮤니티", icon: HomeIcon },
  { id: 15, title: "콘텐츠/예술", icon: HomeIcon },
  { id: 16, title: "헬스케어/바이오", icon: HealthServerIcon },
  { id: 17, title: "모빌리티/교통", icon: MobilityServerIcon },
  { id: 18, title: "여행/레저", icon: HomeIcon },
  { id: 19, title: "통신/데이터", icon: HomeIcon },
  { id: 20, title: "스포츠", icon: HomeIcon },
  { id: 21, title: "물류", icon: HomeIcon },
  { id: 22, title: "유아/출산", icon: HomeIcon },
  { id: 23, title: "패션", icon: HomeIcon },
];

