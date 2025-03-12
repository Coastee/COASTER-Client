import { fetchUserDetail } from "@/pages/MyPage/apis/fetchUserDetail";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchUserDetail = (userId: number) => {
  return useSuspenseQuery({
    queryKey: [userId],
    queryFn: () => fetchUserDetail(userId, 0),
  });
};
