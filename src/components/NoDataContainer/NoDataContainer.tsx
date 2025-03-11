import noDataBackground from "@/assets/img/noDataBackground.png";
import { RotateLogoIcon } from "@/assets/svg";
import { NO_DATA } from "@/constants/noData";
import { css } from "@emotion/react";
import * as s from "./NoDataContainer.styles";

interface AuthContainerProps {
  id: string;
  height?: string;
}

const NoDataContainer = ({ id, height }: AuthContainerProps) => {
  const data = NO_DATA.find((data) => data.id === id);

  return (
    <section
      css={[
        s.sectionStyle,
        css`
          height: ${height};
        `,
      ]}
    >
      <img src={noDataBackground} css={s.backgroundStyle} alt="데이터 없을 때 배경" />
      <RotateLogoIcon width={50} />
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
