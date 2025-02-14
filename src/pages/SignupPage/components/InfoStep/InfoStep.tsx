import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { useInfoForm } from "@/pages/SignupPage/hooks/useInfoForm";
import { formatDate } from "@/pages/SignupPage/utils/date";

interface InfoStepProps {
  onNext: () => void;
}

const InfoStep = ({ onNext }: InfoStepProps) => {
  const { handleInfoChange, form, isNickNameError, isBirthError } =
    useInfoForm();

  const isButtonDisabled = !form.name || isNickNameError || isBirthError;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
        <Input
          placeholder={PLACEHOLDER.NAME}
          onChange={(e) => handleInfoChange(e, "name")}
          value={form.name}
        />
        <Input
          placeholder={PLACEHOLDER.NICKNAME}
          onChange={(e) => handleInfoChange(e, "nickName")}
          value={form.nickName}
          isError={isNickNameError}
          supportingText={SUPPORTING_TEXT.NICKNAME}
        />
        <Input
          placeholder={PLACEHOLDER.BIRTH}
          onChange={(e) => handleInfoChange(e, "birth")}
          value={formatDate(form.birth)}
          isError={isBirthError}
          supportingText={SUPPORTING_TEXT.BIRTH}
        />

        <Button type="submit" disabled={isButtonDisabled}>
          다음
        </Button>
      </AuthContainer>
    </form>
  );
};

export default InfoStep;
