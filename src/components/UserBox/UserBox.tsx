import * as s from "@/components/UserBox/UserBox.styles";
import { getInitials } from "@/utils/getInitials";
import type { ComponentPropsWithoutRef } from "react";

interface UserBoxProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline";
}

const UserBox = ({ name, size = "large", variant = "outline" }: UserBoxProps) => {
  return <div css={s.wrapperStyle(size, variant)}>{getInitials(name)}</div>;
};

export default UserBox;
