import { MenuHeader, ServerHeader } from "@/components";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div css={layoutStyle}>
      <ServerHeader />
      <MenuHeader />
      <Outlet />
    </div>
  );
};

export default App;

export const layoutStyle = css`
  display: flex;

  overflow: hidden;
`;
