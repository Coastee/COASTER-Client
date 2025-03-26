import { getLinkedInVerify } from "@/pages/UserSettingPage/apis/getLinkedInVerify";
import { useQuery } from "@tanstack/react-query";

export const useVerifyLinkedIn = (code: string) => {
  return useQuery({
    queryKey: ["verify-linkedin", code],
    queryFn: () => getLinkedInVerify(code),
    enabled: !!code,
  });
};
