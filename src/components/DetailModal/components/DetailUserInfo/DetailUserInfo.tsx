import { UserBox } from "@/components";
import * as s from "./DetailUserInfo.styles";

interface DetailUserInfoProps {
  nickname: string;
  expYears: number;
  job: string;
}

const DetailUserInfo = ({ nickname, expYears, job }: DetailUserInfoProps) => {
  return (
    <div css={s.userStyle}>
      <UserBox name={nickname} />
      <div css={{ display: "flex", flexDirection: "column", gap: "0.34rem" }}>
        <div css={s.userInfoTopStyle}>
          <h1>{nickname}</h1>
          <div>방장</div>
        </div>
        <div css={s.userInfoBottomStyle}>
          <p>{expYears}년차</p>
          <div />
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailUserInfo;
