import { ProfileIcon } from "@/assets/svg";
import ProfileItem from "@/pages/MyPage/components/ProfileItem/ProfileItem";
import * as s from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles.styles";
import { PROFILE_LIST } from "@/pages/MyPage/constants/dummy";
import { scrollStyle } from "@/styles/scrollStyle";

const RecommendedProfiles = () => {
  return (
    <div css={s.wrapperStyle}>
      <h1 css={s.titleStyle}>
        <ProfileIcon width={21} height={20} />
        추천 프로필
      </h1>
      <div css={s.listWrapperStyle}>
        <ul css={[s.listStyle, scrollStyle]}>
          {PROFILE_LIST.map((profile) => (
            <ProfileItem key={profile.id} data={profile} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendedProfiles;
