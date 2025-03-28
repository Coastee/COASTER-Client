import { PlusIcon } from "@/assets/svg";
import { Button } from "@/components";
import { PATH } from "@/constants/path";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import CareerBoxChip from "@/pages/UserSettingPage/components/CareerBoxChip/CareerBoxChip";
import * as s from "@/pages/UserSettingPage/components/CareerSettingList/CareerSettingList.styles";
import { useDeleteExperience } from "@/pages/UserSettingPage/hooks/useDeleteExperience";
import { useNavigate } from "react-router-dom";

const CareerSettingList = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const { data } = useFetchUserDetail(Number(userId));

  const experienceData = data?.experience.experienceList;

  const { mutate: deleteExperience } = useDeleteExperience();

  return (
    <div css={s.pageStyle}>
      <div css={s.fixedLayoutStyle}>
        <h1 css={s.titleStyle}>경력 편집</h1>
        <button
          type="button"
          css={s.plusButtonStyle}
          onClick={() => {
            navigate("/mypage/setting-add-career");
          }}
        >
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      <ul css={s.listStyle}>
        {experienceData?.map((career, index) => (
          <CareerBoxChip
            key={`${career.title}-${index}`}
            {...career}
            css={{ position: "relative" }}
            onDelete={() => deleteExperience(career.id)}
          />
        ))}
      </ul>
      <div css={s.buttonLayoutStyle}>
        <Button variant="tertiary" size="medium" onClick={() => navigate(PATH.MYPAGE)}>
          뒤로 가기
        </Button>
      </div>
    </div>
  );
};

export default CareerSettingList;
