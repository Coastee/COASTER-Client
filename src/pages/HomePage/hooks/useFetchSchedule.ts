import { fetchSchedule } from "@/pages/HomePage/apis/fetchSchedule";
import { useQuery } from "@tanstack/react-query";

export const useFetchSchedule = () => {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: fetchSchedule,
  });
};
