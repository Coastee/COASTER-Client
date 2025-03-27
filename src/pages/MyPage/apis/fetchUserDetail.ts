import { tokenInstance } from "@/apis/instance";
import type { UserDetailResponseTypes } from "@/pages/MyPage/types";

export const fetchUserDetail = async (userId: number | null, page: number) => {
  const response = await tokenInstance
    .get<UserDetailResponseTypes>(`api/v1/users/${userId}`, {
      searchParams: { page },
    })
    .json();

  return response.result;
};
