import App, { layoutStyle } from "@/App";
import { ServerHeader } from "@/components";
import { PATH } from "@/constants/path";
import { CoffeeChatListPage, DMPage, GroupChatListPage, HomePage, MyPage, OnboardingPage, SignupPage } from "@/pages";
import ChatPage from "@/pages/ChatPage/ChatPage";
import GlobalChatPage from "@/pages/GlobalChatPage/GlobalChatPage";
import GoogleLogin from "@/pages/OnboardingPage/components/GoogleLogin/GoogleLogin";
import KakaoLogin from "@/pages/OnboardingPage/components/KakaoLogin/KakaoLogin";
import NaverLogin from "@/pages/OnboardingPage/components/NaverLogin/NaverLogin";
import ServerEditPage from "@/pages/ServerEditPage/ServerEditPage";
import CareerAdd from "@/pages/UserSettingPage/components/CareerAdd/CareerAdd";
import CareerEdit from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit";
import CareerSettingList from "@/pages/UserSettingPage/components/CareerSettingList/CareerSettingList";
import ProfileEdit from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit";
import { Suspense } from "react";
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
        path: PATH.ONBOARDING,
        element: <OnboardingPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: PATH.KAKAO,
        element: <KakaoLogin />,
      },
      {
        path: PATH.NAVER,
        element: <NaverLogin />,
      },
      {
        path: PATH.GOOGLE,
        element: <GoogleLogin />,
      },
      {
        path: PATH.SERVER_EDIT,
        element: <ServerEditPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: PATH.DM,
        element: <DMPage />,
      },
    ],
  },
  {
    path: "/",
    element: <App iconMenuHeader={true} />,
    children: [
      {
        path: PATH.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATH.PROFILE_EDIT,
        element: <ProfileEdit />,
      },
      {
        path: PATH.CAREER_SETTING,
        element: <CareerSettingList />,
      },

      {
        path: PATH.CAREER_EDIT,
        element: <CareerEdit />,
      },
      {
        path: PATH.CAREER_ADD,
        element: <CareerAdd />,
      },
    ],
  },
  {
    path: "/:serverId",
    element: <App />,
    children: [
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
      {
        path: PATH.GROUP_CHAT_LIST,
        element: <GroupChatListPage />,
      },
      {
        path: PATH.TEA_TIME_LIST,
        element: <CoffeeChatListPage />,
      },
    ],
  },
  {
    path: "/:serverId",
    element: <App iconMenuHeader={true} />,
    children: [
      {
        path: PATH.GROUP_CHAT,
        element: (
          <Suspense>
            <ChatPage type="groups" />
          </Suspense>
        ),
      },
      {
        path: PATH.TEA_TIME,
        element: (
          <Suspense>
            <ChatPage type="meetings" />
          </Suspense>
        ),
      },
      {
        path: PATH.GLOBAL_CHAT,
        element: <GlobalChatPage />,
      },
    ],
  },
]);
