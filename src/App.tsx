import { MenuHeader, ServerHeader } from "@/components";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const App = ({ iconMenuHeader }: { iconMenuHeader?: boolean }) => {
  return (
    <div css={layoutStyle}>
      <div css={{ display: "flex", borderRadius: "0 2.5rem 2.5rem 0", backgroundColor: theme.color.dark3 }}>
        <ServerHeader />
        <MenuHeader iconOnly={iconMenuHeader} />
      </div>

      <Outlet />
    </div>
  );
};

export default App;

export const layoutStyle = css`
  display: flex;

  overflow: hidden;
`;
