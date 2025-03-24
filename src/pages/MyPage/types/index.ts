interface UserIntro {
  headline: string;
  job: string;
  expYears: number;
}

interface PageInfo {
  lastPage: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
}

interface Experience {
  id: number;
  title: string;
  contentList: string[];
  startDate: [number, number, number, number, number, number, number];
  endDate: [number, number, number, number, number, number, number];
}

interface ExperienceData {
  pageInfo: PageInfo;
  experienceList: Experience[];
}

export interface UserDetailTypes {
  id: number;
  profileImage: string;
  nickname: string;
  linkedInVerify: boolean;
  userIntro: UserIntro;
  bio: string;
  urlList: string[];
  dmRoomId: number;
  experience: ExperienceData;
}

export interface UserDetailResponseTypes {
  result: {
    id: number;
    profileImage: string;
    nickname: string;
    linkedInVerify: boolean;
    userIntro: UserIntro;
    bio: string;
    urlList: string[];
    dmRoomId: number;
    experience: ExperienceData;
  };
}
