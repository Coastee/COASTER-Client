import App, { layoutStyle } from "@/App";
import { ServerHeader } from "@/components";
import {
  CoffeeChatListPage,
  DMPage,
  GroupChatListPage,
  HomePage,
  MyPage,
  OnboardingPage,
  SignupPage,
} from "@/pages";
import GroupChatPage from "@/pages/GroupChatPage/GroupChatPage";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const Layout = () => {
  return (
    <div css={layoutStyle}>
      <ServerHeader />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <OnboardingPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dm",
        element: <DMPage />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/:serverId",
    element: <App />,
    children: [
      {
        path: "/:serverId/home",
        element: <HomePage />,
      },
      {
        path: "/:serverId/home/group-chat-list",
        element: <GroupChatListPage />,
      },
      {
        path: "/:serverId/home/coffee-chat-list",
        element: <CoffeeChatListPage />,
      },
      {
        path: "/:serverId/group-chat",
        element: <HomePage />,
      },
      {
        path: "/:serverId/coffee-chat",
        element: <HomePage />,
      },
      {
        path: "/:serverId/group-chat/chat",
        element: <GroupChatPage />,
      },
    ],
  },
]);
