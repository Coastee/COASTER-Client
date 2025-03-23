import { fetchAllServers, fetchMyServers } from "@/components/ServerHeader/apis/server";
import type { ServerResponseTypes } from "@/components/ServerHeader/types/serverTypes";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const useAllServerList = () => {
  return useQuery<ServerResponseTypes>({
    queryKey: ["allServerInfo"],
    queryFn: fetchAllServers as () => Promise<ServerResponseTypes>,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};

export const useMyServerList = () => {
  return useSuspenseQuery<ServerResponseTypes>({
    queryKey: ["myServerInfo"],
    queryFn: fetchMyServers as () => Promise<ServerResponseTypes>,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
