export interface ScheduleBlockProps {
  id: number;
  title: string;
  location: string;
  locationDetail: string;
  date: string;
  startTime: string;
  endTime: string;
}
interface PageInfo {
  lastPage: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
}

interface Period {
  startDate: number[];
  endDate: number[];
}

interface Address {
  location: string;
  details: string;
}

export interface ScheduleTypes {
  id: number;
  title: string;
  period: Period;
  address: Address;
}

export interface ScheduleResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    pageInfo: PageInfo;
    scheduleList: ScheduleTypes[];
  };
}
