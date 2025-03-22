export interface DropdownOptionTypes {
  id: string;
  name: string;
}

export const SCHEDULE_FILTERING_OPTIONS = [
  { id: "LAST_3_MONTHS", name: "3개월" },
  { id: "LAST_6_MONTHS", name: "6개월" },
  { id: "LAST_12_MONTHS", name: "1년 이상" },
];

export const GROUP_SORTING_OPTIONS = [
  { id: "default", name: "최신순" },
  { id: "name", name: "이름순" },
];

export const MEETING_SORTING_OPTIONS = [
  { id: "default", name: "최신순" },
  { id: "name", name: "이름순" },
  { id: "remain", name: "마감 임박순" },
];

export const AMPM_OPTIONS = [
  { id: "AM", name: "오전" },
  { id: "PM", name: "오후" },
];

export const HOUR_OPTIONS = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6", name: "6" },
  { id: "7", name: "7" },
  { id: "8", name: "8" },
  { id: "9", name: "9" },
  { id: "10", name: "10" },
  { id: "11", name: "11" },
  { id: "12", name: "12" },
];

export const MINUTE_OPTIONS = [
  { id: "00", name: "00" },
  { id: "10", name: "10" },
  { id: "20", name: "20" },
  { id: "30", name: "30" },
  { id: "40", name: "40" },
  { id: "50", name: "50" },
];
