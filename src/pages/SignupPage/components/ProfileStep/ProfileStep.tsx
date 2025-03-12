import { AuthContainer, Button, Input, Textarea } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import * as s from "@/pages/SignupPage/components/ProfileStep/ProfileStep.styles";
import { useProfileForm } from "@/pages/SignupPage/hooks/useProfileForm";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";

interface ProfileStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ProfileStep = ({ onPrev, onNext }: ProfileStepProps) => {
  const { form, handleFormChange } = useProfileForm();

  const isDisabled = !form.job.trim() || !form.expYears || !form.bio.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
        <div css={s.layoutStyle}>
          <Input
            placeholder={PLACEHOLDER.CAREER}
            value={form.job}
            onChange={(e) => handleFormChange(e, "job")}
            maxLength={MAX_LENGTH.PROFILE_CAREER}
          />
          <Input placeholder={"0"} value={form.expYears} onChange={(e) => handleFormChange(e, "expYears")} />
          <p>년차</p>
        </div>
        <Textarea
          placeholder={PLACEHOLDER.INTRODUCTION}
          maxLength={80}
          value={form.bio}
          onChange={(e) => handleFormChange(e, "bio")}
          css={{ height: "10rem" }}
        />
        <div css={{ display: "flex", gap: "2rem" }}>
          <Button variant="tertiary" onClick={onPrev}>
            이전
          </Button>
          <Button type="submit" disabled={isDisabled}>
            다음
          </Button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default ProfileStep;
