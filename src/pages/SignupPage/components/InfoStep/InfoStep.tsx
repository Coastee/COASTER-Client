import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import { SUPPORTING_TEXT } from "@/pages/SignupPage/constants/supportingText";
import { useInfoForm } from "@/pages/SignupPage/hooks/useInfoForm";
import { formatDate } from "@/pages/SignupPage/utils/date";

interface InfoStepProps {
  onNext: () => void;
}

const InfoStep = ({ onNext }: InfoStepProps) => {
  const { handleInfoChange, info, isNickNameError, isBirthError } =
    useInfoForm();

  const isButtonDisabled = !info.name || isNickNameError || isBirthError;

  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input
        placeholder={PLACEHOLDER.NAME}
        onChange={(e) => handleInfoChange(e, "name")}
        value={info.name}
      />
      <Input
        placeholder={PLACEHOLDER.NICKNAME}
        onChange={(e) => handleInfoChange(e, "nickName")}
        value={info.nickName}
        isError={isNickNameError}
        supportingText={SUPPORTING_TEXT.NICKNAME}
      />
      <Input
        placeholder={PLACEHOLDER.BIRTH}
        onChange={(e) => handleInfoChange(e, "birth")}
        value={formatDate(info.birth)}
        isError={isBirthError}
        supportingText={SUPPORTING_TEXT.BIRTH}
      />

      <Button onClick={onNext} disabled={isButtonDisabled}>
        다음
      </Button>
    </AuthContainer>
  );
};

export default InfoStep;
