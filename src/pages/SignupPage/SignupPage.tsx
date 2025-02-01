import logo1Img from "@/assets/img/logo1Img.png";
import logo2Img from "@/assets/img/logo2Img.png";
import { useFunnel } from "@/hooks/useFunnel";
import {
  ContactStep,
  InfoStep,
  InterestStep,
  ProfileStep,
} from "@/pages/SignupPage";
import * as s from "@/pages/SignupPage/SignupPage.styles";

import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const Funnel = useFunnel();

  const navigate = useNavigate();

  return (
    <div css={s.wrapperStyle}>
      <img src={logo1Img} alt="로고1" css={s.logo1Style} />
      <img src={logo2Img} alt="로고2" css={s.logo2Style} />
      <Funnel>
        <Funnel.Step name="step1">
          <InfoStep onNext={() => Funnel.setStep("step2")} />
        </Funnel.Step>
        <Funnel.Step name="step2">
          <ProfileStep
            onPrev={() => Funnel.setStep("step1")}
            onNext={() => Funnel.setStep("step3")}
          />
        </Funnel.Step>
        <Funnel.Step name="step3">
          <ContactStep
            onPrev={() => Funnel.setStep("step2")}
            onNext={() => Funnel.setStep("step4")}
          />
        </Funnel.Step>
        <Funnel.Step name="step4">
          {/* 임의로 serverId 부여 */}
          <InterestStep
            onPrev={() => Funnel.setStep("step3")}
            onNext={() => {
              navigate("/:1/home");
              sessionStorage.clear();
            }}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default SignupPage;
