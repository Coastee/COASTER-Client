import { PlusIcon } from "@/assets/svg";
import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

import * as s from "@/pages/SignupPage/components/ContactStep/ContactStep.styles";
import { useUrlForm } from "@/pages/SignupPage/hooks/useUrlForm";

interface ContactStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ContactStep = ({ onPrev, onNext }: ContactStepProps) => {
  const { urls, handleAddInput, handleChange } = useUrlForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
        <div css={s.urlLayoutStyle}>
          {urls?.map((url, index) => (
            <Input
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              placeholder={PLACEHOLDER.URL}
              value={url}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <PlusIcon width={16} height={16} css={{ cursor: "pointer", flexShrink: "0" }} onClick={handleAddInput} />
        <div css={s.btnLayoutStyle}>
          <Button variant="tertiary" onClick={onPrev}>
            이전
          </Button>
          <Button type="submit">다음</Button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default ContactStep;
