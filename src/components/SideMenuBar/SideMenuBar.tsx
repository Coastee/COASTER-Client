import { CloseNavIcon, ProfileIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/components/SideMenuBar/SideMenuBar.styles";
import UserBox from "@/components/UserBox/UserBox";
import { theme } from "@/styles/theme/theme";

const SideMenuBar = () => {
  return (
    <nav css={s.wrapperStyle}>
      <div css={s.closeNavIconWrapperStyle}>
        <CloseNavIcon width={20} height={10} />
        <p>접어두기</p>
      </div>
      <div>
        <ProfileIcon width={15} height={14} />
        <h1>멤버 목록</h1>
      </div>
      <div css={s.listWrapperStyle}>
        {}
        <ul css={s.listStyle}>
          <li css={s.itemStyle}>
            <UserBox name="김철수" />
            <p>김철수</p>
            {length > 1 && index < length - 1 && <Divider css={{ backgroundColor: theme.color.dark5 }} />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideMenuBar;
