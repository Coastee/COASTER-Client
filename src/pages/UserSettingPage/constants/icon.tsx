import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  MediumIcon,
  NotionIcon,
  TistoryIcon,
  VelogIcon,
  XIcon,
} from "@/assets/svg";
import type { ReactElement } from "react";

export const domainIcons: Record<string, ReactElement> = {
  "linkedin.com": <LinkedInIcon width={33} height={33} />,
  "github.com": <GithubIcon width={33} height={33} />,
  "x.com": <XIcon width={33} height={33} />,
  "velog.io": <VelogIcon width={33} height={33} />,
  "tistory.com": <TistoryIcon width={33} height={33} />,
  "medium.com": <MediumIcon width={33} height={33} />,
  "notion.so": <NotionIcon width={33} height={33} />,
  "instagram.com": <InstaIcon width={33} height={33} />,
  "facebook.com": <FacebookIcon width={33} height={33} />,
};
