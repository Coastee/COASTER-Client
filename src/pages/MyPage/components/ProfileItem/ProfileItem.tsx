import { Divider } from "@/components";
import * as s from "@/pages/MyPage/components/ProfileItem/ProfileItem.styles";

interface ProfileItemProps {
  data: {
    img: string;
    name: string;
    intro: string;
    experience: number;
    role: string;
  };
}

const ProfileItem = ({ data }: ProfileItemProps) => {
  return (
    <li css={s.wrapperStyle}>
      <div css={s.itemWrapperStyle}>
        <img src={data.img} alt="프로필" css={s.imgStyle} />
        <div css={s.itemLayoutStyle}>
          <h2 css={s.nameStyle}>{data.name}</h2>
          <div css={s.descLayoutStyle}>
            <p css={[s.descStyle, { maxWidth: "10rem" }]}>{data.intro}</p>
            <p css={s.circleStyle}>·</p>
            <p css={s.descStyle}>{data.experience}년차</p>
            <p css={s.circleStyle}>·</p>
            <p css={s.descStyle}>{data.role}</p>
          </div>
        </div>
      </div>
      <Divider />
    </li>
  );
};

export default ProfileItem;
