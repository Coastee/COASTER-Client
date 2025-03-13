import { fetchAllDms } from "@/pages/DMPage/apis/dm";
import { useQuery } from "@tanstack/react-query";

export const useDmList = () => {
  return useQuery({
    queryKey: ["dmList"],
    queryFn: () => fetchAllDms(),
  });
};
