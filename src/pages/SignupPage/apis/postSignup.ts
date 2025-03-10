import { tokenInstance } from "@/apis/instance";
import type { SignUpFormTypes } from "@/pages/SignupPage/types/signupFormTypes";

export const postSignup = async (userData: SignUpFormTypes) => {
  const response = await tokenInstance
    .post("api/v1/signup", {
      json: {
        ...userData,
      },
    })
    .json();

  console.log("Response", response);
  return response;
};
