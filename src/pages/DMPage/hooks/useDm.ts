import { fetchAllDms, fetchDmLogs } from "@/pages/DMPage/apis/dm";
import { useQuery } from "@tanstack/react-query";

export const useDmList = () => {
  return useQuery({
    queryKey: ["dmList"],
    queryFn: () => fetchAllDms(),
  });
};

export const useDmLogs = (roomId: number | null) => {
  return useQuery({
    queryKey: ["dmLogs", roomId],
    queryFn: () => roomId !== null ? fetchDmLogs(roomId) : Promise.reject("roomId is null"),
    enabled: !!roomId
  });
};
