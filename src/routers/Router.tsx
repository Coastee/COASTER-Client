import App from "@/App";
import {
  CoffeeChatListPage,
  GroupChatListPage,
  HomePage,
  MyPage,
  OnboardingPage,
  SignupPage,
} from "@/pages";
import { Outlet, createBrowserRouter } from "react-router-dom";

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
