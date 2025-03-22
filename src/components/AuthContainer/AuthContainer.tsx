import { Logo2WhiteIcon } from "@/assets/svg";
import * as s from "@/components/AuthContainer/AuthContainer.styles";
import type { ReactNode } from "react";

interface AuthContainerProps {
  title?: string;
  desc?: ReactNode;
  children?: ReactNode;
  size?: "medium" | "large";
}

const AuthContainer = ({
  title,
  desc,
  size = "medium",
  children,
}: AuthContainerProps) => {
  return (
    <section css={s.sectionStyle(size)}>
      <div css={s.sideStyle}>
        <Logo2WhiteIcon
          width={62}
          height={38}
          css={{ marginBottom: "3.2rem" }}
        />
        <h1 css={s.titleStyle}>{title}</h1>
        <h2 css={s.descStyle}>{desc}</h2>
      </div>
      <div css={s.childrenStyle(size)}>{children}</div>
    </section>
  );
};

export default AuthContainer;
