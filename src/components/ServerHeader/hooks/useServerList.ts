import { fetchAllServers, fetchMyServers } from "@/components/ServerHeader/apis/server";
import type { ServerResponseTypes } from "@/components/ServerHeader/types/serverTypes";
import { useQuery } from "@tanstack/react-query";

export const useMyServerList = () => {
  return useQuery<ServerResponseTypes>({
    queryKey: ["myServerInfo"],
    queryFn: fetchMyServers as () => Promise<ServerResponseTypes>,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export const useAllServerList = () => {
  return useQuery<ServerResponseTypes>({
    queryKey: ["allServerInfo"],
    queryFn: fetchAllServers as () => Promise<ServerResponseTypes>,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
