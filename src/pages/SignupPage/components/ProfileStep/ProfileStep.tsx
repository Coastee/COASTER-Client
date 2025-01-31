import { AuthContainer, Button, Input, Textarea } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import { useProfileForm } from "@/pages/SignupPage/hooks/useProfileForm";

interface ProfileStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ProfileStep = ({ onPrev, onNext }: ProfileStepProps) => {
  const { form, handleFormChange } = useProfileForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prev = JSON.parse(sessionStorage.getItem("signup") || "{}");

    const data = {
      ...prev,
      belonging: form.belonging,
      introduction: form.introduction,
    };

    sessionStorage.setItem("signup", JSON.stringify(data));

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
        <Input
          placeholder={PLACEHOLDER.BELONGING}
          value={form.belonging}
          onChange={(e) => handleFormChange(e, "belonging")}
        />
        <Textarea
          placeholder={PLACEHOLDER.INTRODUCTION}
          maxLength={80}
          value={form.introduction}
          onChange={(e) => handleFormChange(e, "introduction")}
          css={{ height: "10rem" }}
        />
        <div css={{ display: "flex", gap: "2rem" }}>
          <Button variant="tertiary" onClick={onPrev}>
            이전
          </Button>
          <Button type="submit">다음</Button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default ProfileStep;
