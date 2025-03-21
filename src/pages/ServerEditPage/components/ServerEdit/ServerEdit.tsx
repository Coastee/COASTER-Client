import { AuthContainer, Button, CheckBox } from "@/components";
import type { ServerTypes } from "@/components/ServerHeader/types/serverTypes";
import { DESC } from "@/constants/signup";
import ServerConfirmModal from "@/pages/ServerEditPage/components/ServerConfirmModal/ServerConfirmModal";
import { useFetchServers } from "@/pages/SignupPage/hooks/useFetchServers";
import { useCloseModal, useModalType, useOpenModal } from "@/stores/useModal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./ServerEdit.styles";

const ServerEdit = () => {
  const navigate = useNavigate();
  const { data: serverData } = useFetchServers();
  const [selectedItem, setSelectedItem] = useState<ServerTypes | null>(null);
  const openModal = useOpenModal();
  const closeModal = useCloseModal();
  const modalType = useModalType();

  const location = useLocation();
  const myServers = location.state?.myServers ?? [];

  const matchedIds = serverData.result.serverList
    .filter(({ id }) => myServers.some((server: { id: number }) => server.id === id))
    .map(({ id }) => id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleItemClick = (item: ServerTypes) => {
    console.log("item: ", item);
    setSelectedItem(item);

    if (matchedIds.includes(item.id)) {
      openModal("server-exit");
    } else {
      openModal("server-enter"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} css={{ zIndex: 1 }}>
      <AuthContainer title="서버 설정" desc={DESC.INTEREST_INFO} size="large">
        <div css={s.boxWrapperStyle}>
          {serverData?.result.serverList.map((item) => (
            <label key={item.id} htmlFor={`server-${item.id}`} css={s.boxLayoutStyle}>
              <CheckBox
                id={`server-${item.id}`}
                isChecked={matchedIds.includes(item.id)}
                onChange={() => handleItemClick(item)}
              />
              <span css={s.labelStyle}>{item.title}</span>
            </label>
          ))}
        </div>
        <div css={{ display: "flex", gap: "2.6rem" }}>
          <Button type="submit">완료</Button>
        </div>
      </AuthContainer>
      {(modalType === "server-enter" || modalType === "server-exit") && (
        <ServerConfirmModal item={selectedItem} closeModal={closeModal} />
      )}
    </form>
  );
};

export default ServerEdit;
