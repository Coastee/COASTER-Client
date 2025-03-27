import * as s from "@/components/UserBox/UserBox.styles";
import { getInitials } from "@/utils/getInitials";
import type { ComponentPropsWithoutRef } from "react";

interface UserBoxProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline";
  profileImage?: string;
}

const UserBox = ({ name, size = "large", variant = "outline", profileImage }: UserBoxProps) => {
  return (
    <div css={s.wrapperStyle(size, variant)}>
      {profileImage !== null ? <img src={profileImage} alt={`${name} 프로필`} css={s.imageStyle} /> : getInitials(name)}
    </div>
  );
};

export default UserBox;
