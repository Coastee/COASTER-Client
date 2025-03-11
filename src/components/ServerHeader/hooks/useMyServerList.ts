import { fetchMyServers } from "@/components/ServerHeader/apis/server";
import type { ServerResponseTypes } from "@/components/ServerHeader/types/serverTypes";
import { useQuery } from "@tanstack/react-query";

export const useMyServerList = () => {
  return useQuery<ServerResponseTypes>({
    queryKey: ["myServerInfo"],
    queryFn: fetchMyServers,
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
