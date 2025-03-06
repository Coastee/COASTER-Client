import { MenuHeader, ServerHeader } from "@/components";
import { theme } from "@/styles/theme/theme";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div css={{ display: "flex", overflow: "hidden" }}>
      <div css={{ display: "flex", borderRadius: "0 2.5rem 2.5rem 0", backgroundColor: theme.color.dark3 }}>
        <ServerHeader />
        <MenuHeader />
      </div>

      <Outlet />
    </div>
  );
};

export default App;
