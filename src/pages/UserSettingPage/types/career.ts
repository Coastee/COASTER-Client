export interface CareerContentTypes {
  title: string;
  contentList: string[];
  startDate: string;
  endDate: string | null;
}

export interface ExperienceTypes {
  title: string;
  contentList: string[];
  startDate: number[];
  endDate: number[] | null;
}
