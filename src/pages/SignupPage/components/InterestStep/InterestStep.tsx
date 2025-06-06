import { AuthContainer, Button, CheckBox } from "@/components";
import { DESC, TITLE } from "@/constants/signup";
import * as s from "@/pages/SignupPage/components/InterestStep/InterestStep.styles";
import { useFetchServers } from "@/pages/SignupPage/hooks/useFetchServers";
import { useInterestSelection } from "@/pages/SignupPage/hooks/useInterestSelection";

interface InterestStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const InterestStep = ({ onPrev, onNext }: InterestStepProps) => {
  const { selectedIds, handleCheckboxChange, handleReset } = useInterestSelection();

  const { data: serverData } = useFetchServers();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title={TITLE.PROFILE} desc={DESC.INTEREST_INFO} size="large">
        <Button variant="text" css={{ textDecoration: "none" }} onClick={handleReset}>
          초기화
        </Button>
        <div css={s.boxWrapperStyle}>
          {serverData?.result.serverList.map(({ id, title }) => (
            <label key={id} htmlFor={`interest-${id}`} css={s.boxLayoutStyle}>
              <CheckBox
                id={`interest-${id}`}
                isChecked={selectedIds.includes(id)}
                onChange={() => handleCheckboxChange(id)}
              />
              <span css={s.labelStyle}>{title}</span>
            </label>
          ))}
        </div>
        <div css={{ display: "flex", gap: "2.6rem" }}>
          <Button onClick={onPrev} variant="tertiary">
            이전
          </Button>
          <Button type="submit" disabled={selectedIds.length === 0}>
            완료
          </Button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default InterestStep;
