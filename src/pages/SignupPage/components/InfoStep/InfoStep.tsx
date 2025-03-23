import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { useInfoForm } from "@/pages/SignupPage/hooks/useInfoForm";

interface InfoStepProps {
  onNext: () => void;
}

const InfoStep = ({ onNext }: InfoStepProps) => {
  const { handleInfoChange, form, isNickNameError } = useInfoForm();

  const isButtonDisabled = !form.nickname;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
        <Input
          placeholder={PLACEHOLDER.NAME}
          onChange={(e) => handleInfoChange(e, "nickname")}
          value={form.nickname}
          isError={isNickNameError}
          supportingText={SUPPORTING_TEXT.NICKNAME}
        />
        <Button type="submit" disabled={isButtonDisabled} css={{ marginTop: "8.1rem" }}>
          다음
        </Button>
      </AuthContainer>
    </form>
  );
};

export default InfoStep;
