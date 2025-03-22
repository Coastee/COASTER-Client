import noDataBackground from "@/assets/img/noDataBackground.png";
import { RotateLogoIcon } from "@/assets/svg";
import { NO_DATA } from "@/constants/noData";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import * as s from "./NoDataContainer.styles";

interface AuthContainerProps {
  id: string;
  width?: string;
  height?: string;
  padding?: string;
  logoSize?: number;
  navPath?: string;
}

const NoDataContainer = ({ id, width, height, padding, logoSize = 50, navPath }: AuthContainerProps) => {
  const data = NO_DATA.find((data) => data.id === id);
  const navigate = useNavigate();

  return (
    <section
      css={[
        s.sectionStyle(noDataBackground),
        css`
          width: ${width};
          height: ${height};
          padding: ${padding};
        `,
      ]}
      onClick={() => {
        navPath && navigate(navPath);
      }}
      onKeyDown={() => {
        navPath && navigate(navPath);
      }}
    >
      <RotateLogoIcon width={logoSize} />
      <div css={s.textLayoutStyle}>
        <div css={s.titleLayoutStyle}>
          <h1 css={s.titleStyle}>{data?.title}</h1>
          <div css={s.underBarStyle} />
        </div>
        <p css={s.descStyle}>{data?.desc}</p>
      </div>
    </section>
  );
};

export default NoDataContainer;
