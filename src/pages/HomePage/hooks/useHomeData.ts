import { fetchServerHome } from "@/components/ServerHeader/apis/server";
import { useQuery } from "@tanstack/react-query";

export const useHomeData = (serverId?: number) => {
  return useQuery({
    queryKey: ["serverHome", serverId],
    queryFn: async () => {
      if (serverId === undefined) {
        return Promise.reject(new Error("serverId is undefined"));
      }
      return fetchServerHome(serverId);
    },
    staleTime: 10 * 60 * 1000,
  });
};
