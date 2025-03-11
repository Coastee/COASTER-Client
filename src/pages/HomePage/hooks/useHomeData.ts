import { fetchServerHome } from "@/components/ServerHeader/apis/server";
import { useQuery } from "@tanstack/react-query";

export const useHomeData = (serverId: number) => {
  return useQuery({
    queryKey: ["serverHome", serverId],
    queryFn: () => fetchServerHome(serverId),
    enabled: !!serverId,
  });
};
