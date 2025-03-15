import { fetchUserDetail } from "@/pages/MyPage/apis/fetchUserDetail";

import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchUserDetail = (userId: number) => {
  return useSuspenseQuery({
    queryKey: ["fetchUserDetail"],
    queryFn: () => fetchUserDetail(userId, 0),
  });
};
