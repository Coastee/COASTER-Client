import { fetchServers } from "@/pages/SignupPage/apis/fetchServers";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchServers = () => {
  return useSuspenseQuery({
    queryKey: ["fetch-server"],
    queryFn: () => fetchServers(),
  });
};
