import { MenuHeader, ServerHeader } from "@/components";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const App = ({ iconMenuHeader }: { iconMenuHeader?: boolean }) => {
  return (
    <div css={layoutStyle}>
      <div css={headerStyle}>
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

export const headerStyle = css`
  display: flex;
  border-radius: 0 2.5rem 2.5rem 0;
  background-color: ${theme.color.dark3};
`;
