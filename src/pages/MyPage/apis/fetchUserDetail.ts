import { tokenInstance } from "@/apis/instance";
import type { UserDetailTypes } from "@/pages/MyPage/types";

export const fetchUserDetail = async (userId: number, page: number) => {
  const response = await tokenInstance
    .get<UserDetailTypes>(`api/v1/users/${userId}`, {
      searchParams: { page },
    })
    .json();

  console.log(response);

  return response;
};
