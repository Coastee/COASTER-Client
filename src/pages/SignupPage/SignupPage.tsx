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
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignupPage = () => {
  const Funnel = useFunnel();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateStep = (step: string) => {
    setSearchParams({ step });

    Funnel.setStep(`step${step}`);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const currentStep = searchParams.get("step");

    if (currentStep) {
      Funnel.setStep(`step${currentStep}`);
    }
  }, [searchParams]);

  return (
    <div css={s.wrapperStyle}>
      <img src={logo1Img} alt="로고1" css={s.logo1Style} />
      <img src={logo2Img} alt="로고2" css={s.logo2Style} />
      <Funnel>
        <Funnel.Step name="step1">
          <InfoStep onNext={() => updateStep("2")} />
        </Funnel.Step>
        <Funnel.Step name="step2">
          <ProfileStep
            onPrev={() => updateStep("1")}
            onNext={() => updateStep("3")}
          />
        </Funnel.Step>
        <Funnel.Step name="step3">
          <ContactStep
            onPrev={() => updateStep("2")}
            onNext={() => updateStep("4")}
          />
        </Funnel.Step>
        <Funnel.Step name="step4">
          <InterestStep
            onPrev={() => updateStep("3")}
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
