import { fetchUserDetail } from "@/pages/MyPage/apis/fetchUserDetail";
import { useQuery } from "@tanstack/react-query";

export const useFetchUserDetail = (userId: number) => {
  return useQuery({
    queryKey: [userId],
    queryFn: () => fetchUserDetail(userId, 0),
  });
};
