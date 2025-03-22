import { AuthContainer, Button, CheckBox } from "@/components";
import { DESC } from "@/constants/signup";
import { useFetchServers } from "@/pages/SignupPage/hooks/useFetchServers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ServerEdit.styles";

const ServerEdit = () => {
  const navigate = useNavigate();
  const { data: serverData } = useFetchServers();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title="서버 설정" desc={DESC.INTEREST_INFO} size="large">
        <div css={s.boxWrapperStyle}>
          {serverData?.result.serverList.map(({ id, title }) => (
            <label key={id} htmlFor={`interest-${id}`} css={s.boxLayoutStyle}>
              <CheckBox id={`interest-${id}`} isChecked={selectedIds.includes(id)} />
              <span css={s.labelStyle}>{title}</span>
            </label>
          ))}
        </div>
        <div css={{ display: "flex", gap: "2.6rem" }}>
          <Button type="submit">완료</Button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default ServerEdit;
