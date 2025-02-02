import App from "@/App";
import { GroupChatListPage } from "@/pages/GroupChatListPage/GroupChatListPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import MyPage from "@/pages/MyPage/MyPage";
import OnBoardingPage from "@/pages/OnboardingPage/OnboardingPage";
import SignupPage from "@/pages/SignupPage/SignupPage";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <OnBoardingPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
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
        element: <GroupChatListPage />,
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
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/dm",
    element: <HomePage />,
  },
]);
