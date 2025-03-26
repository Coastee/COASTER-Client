import { fetchUserDetail } from "@/pages/MyPage/apis/fetchUserDetail";
import { useQuery } from "@tanstack/react-query";

export const useFetchUserDetail = (userId: number | null) => {
  return useQuery({
    queryKey: ["fetchUserDetail", userId],
    queryFn: () => {
      if (userId === null) {
        return null;
      }
      return fetchUserDetail(userId, 0);
    },
    enabled: userId !== null,
  });
};
