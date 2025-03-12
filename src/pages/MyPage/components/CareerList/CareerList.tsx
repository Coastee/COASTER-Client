import { EditIcon } from "@/assets/svg";
import { Button } from "@/components";
import CareerBox from "@/pages/MyPage/components/CareerBox/CareerBox";
import * as s from "@/pages/MyPage/components/CareerList/CareerList.styles";
import type { UserDetailTypes } from "@/pages/MyPage/types";
import { useNavigate } from "react-router-dom";

const CareerList = (data: UserDetailTypes) => {
  const navigate = useNavigate();

  const careerListData = data?.experience;

  return (
    <>
      <div css={s.layoutStyle}>
        <h1 css={s.titleStyle}>나의 경력</h1>
        <Button
          variant="secondary"
          size="medium"
          css={{ border: "none" }}
          onClick={() => navigate("/mypage/setting-career")}
        >
          <EditIcon width={16} height={15} />
          경력 편집하기
        </Button>
      </div>
      <ul css={s.listStyle}>
        {careerListData?.experienceList.map((career, index) => (
          <CareerBox key={`${index}-${career.title}`} {...career} />
        ))}
      </ul>
    </>
  );
};

export default CareerList;
