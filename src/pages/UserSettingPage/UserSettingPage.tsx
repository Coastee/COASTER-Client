import CareerSettingList from "@/pages/UserSettingPage/components/CareerSettingList/CareerSettingList";
import ProfileEdit from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit";
import { useLocation } from "react-router-dom";

const UserSettingPage = () => {
  const { pathname } = useLocation();

  const isProfileEdit = pathname === "/mypage/setting-profile";
  const isCareerEdit = pathname === "/mypage/setting-career";

  return (
    <>
      {isProfileEdit && <ProfileEdit />}
      {isCareerEdit && <CareerSettingList />}
    </>
  );
};

export default UserSettingPage;
