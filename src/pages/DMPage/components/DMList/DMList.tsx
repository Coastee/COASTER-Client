import { Logo4Icon } from "@/assets/svg";
import { Divider } from "@/components";
import DMItem from "@/pages/DMPage/components/DMItem/DMItem";
import { CHAT_LIST } from "@/pages/DMPage/constants/dummy";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMList/DMList.styles";

const DMList = () => {
  return (
    <section css={s.sectionStyle}>
      <header css={s.headerStyle}>
        <Logo4Icon width={164} height={57} />
        <h1>메시지</h1>
        <Divider css={{ backgroundColor: `${theme.color.dark2}` }} />
      </header>
      <ul css={s.listWrapperStyle}>
        {CHAT_LIST.map((item, index) => (
          <DMItem key={`${item.name}-${index}`} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default DMList;
