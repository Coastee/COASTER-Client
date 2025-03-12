import logo1Img from "@/assets/img/logo1Img.png";
import logo2Img from "@/assets/img/logo2Img.png";
import { useFunnel } from "@/hooks/useFunnel";
import { ContactStep, InfoStep, InterestStep, ProfileStep } from "@/pages/SignupPage";
import * as s from "@/pages/SignupPage/SignupPage.styles";
import { useSignup } from "@/pages/SignupPage/hooks/useSignup";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SignupPage = () => {
  const Funnel = useFunnel();
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate } = useSignup();

  const updateStep = (step: string) => {
    setSearchParams({ step });

    Funnel.setStep(`step${step}`);
  };

  const handleSubmit = () => {
    const storedData = sessionStorage.getItem("signup");
    if (!storedData) return;

    const userData = JSON.parse(storedData);

    const formattedData = {
      nickname: userData.nickname,
      urlList: userData.urlList || [],
      headline: userData.headline,
      job: userData.job,
      expYears: Number(userData.expYears) || 0,
      bio: userData.bio || "",
      serverIdList: userData.serverIdList,
    };

    console.log(formattedData);

    mutate(formattedData);
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
          <ProfileStep onPrev={() => updateStep("1")} onNext={() => updateStep("3")} />
        </Funnel.Step>
        <Funnel.Step name="step3">
          <ContactStep onPrev={() => updateStep("2")} onNext={() => updateStep("4")} />
        </Funnel.Step>
        <Funnel.Step name="step4">
          <InterestStep onPrev={() => updateStep("3")} onNext={handleSubmit} />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default SignupPage;
