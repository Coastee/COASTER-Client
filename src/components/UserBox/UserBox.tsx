import * as s from "@/components/UserBox/UserBox.styles";
import { getInitials } from "@/utils/getInitials";
import type { ComponentPropsWithoutRef } from "react";

interface UserBoxProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  size?: "medium" | "large";
}

const UserBox = ({ name, size = "large" }: UserBoxProps) => {
  return <div css={s.wrapperStyle(size)}>{getInitials(name)}</div>;
};

export default UserBox;
