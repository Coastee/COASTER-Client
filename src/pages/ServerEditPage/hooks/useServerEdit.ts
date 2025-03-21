import { enterServer, exitServer } from "@/pages/ServerEditPage/apis/server";
import { useMutation } from "@tanstack/react-query";

export const useEnterServer = (serverId: number) => {
  return useMutation({
    mutationFn: () => enterServer(serverId),

    // onSuccess: (response) => {
    //   console.log(response);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
};

export const useExitServer = (serverId: number) => {
  return useMutation({
    mutationFn: () => exitServer(serverId),

    // onSuccess: (response) => {
    //   console.log(response);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
};
