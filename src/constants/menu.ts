import type { SVGProps } from "react";
import {
  CalendarMenuActiveIcon,
  CalendarMenuIcon,
  ChatIcon,
  CoffeeIcon,
  DmMenuActiveIcon,
  DmMenuIcon,
  HomeIcon,
  ProfileMenuActiveIcon,
  ProfileMenuIcon,
} from "../assets/svg";

export type MenuTypes = {
  id: string;
  name: string;
  icon: React.ElementType<SVGProps<SVGSVGElement>>;
  activeIcon: React.ElementType<SVGProps<SVGSVGElement>>;
};

export const MENUS: MenuTypes[] = [
  {
    id: "home",
    name: "홈",
    icon: HomeIcon,
    activeIcon: HomeIcon,
  },
  {
    id: "group-chat",
    name: "그룹챗",
    icon: ChatIcon,
    activeIcon: ChatIcon,
  },
  {
    id: "tea-time",
    name: "티타임",
    icon: CoffeeIcon,
    activeIcon: CoffeeIcon,
  },
];

export const GLOBAL_MENUS: MenuTypes[] = [
  { id: "dm", name: "DM", icon: DmMenuIcon, activeIcon: DmMenuActiveIcon },
  {
    id: "schedule",
    name: "스케줄",
    icon: CalendarMenuIcon,
    activeIcon: CalendarMenuActiveIcon,
  },
  {
    id: "mypage",
    name: "마이페이지",
    icon: ProfileMenuIcon,
    activeIcon: ProfileMenuActiveIcon,
  },
];
