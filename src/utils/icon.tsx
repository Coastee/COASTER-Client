import { PlusIcon } from "@/assets/svg";
import { domainIcons } from "@/pages/UserSettingPage/constants/icon";

export const getDomainIcon = (url: string) => {
  const matchedDomain = Object.keys(domainIcons).find((domain) => url.includes(domain));
  return matchedDomain ? domainIcons[matchedDomain] : <PlusIcon width={33} height={33} />;
};
