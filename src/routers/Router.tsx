import App from "@/App";
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
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:serverId/home",
        element: <HomePage />,
      },
      {
        path: "/:serverId/group-chat",
        element: <HomePage />,
      },
      {
        path: "/:serverId/offline-meeting",
        element: <HomePage />,
      },
      {
        path: "/dm",
        element: <HomePage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);
