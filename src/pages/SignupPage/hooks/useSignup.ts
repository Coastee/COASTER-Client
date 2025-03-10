import { PATH } from "@/constants/path";
import { postSignup } from "@/pages/SignupPage/apis/postSignup";
import type { SignUpFormTypes } from "@/pages/SignupPage/types/signupFormTypes";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: SignUpFormTypes) => postSignup(userData),

    onSuccess: (response) => {
      console.log(response);
      const storedData = sessionStorage.getItem("signup");

      if (!storedData) return;

      const parsedData = JSON.parse(storedData);
      navigate(PATH.HOME.replace(":serverId", String(parsedData.serverIdList[0])));

      sessionStorage.clear();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
