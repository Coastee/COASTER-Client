import { LeaveIcon } from "@/assets/svg";
import { useEnterChatRoom } from "@/components/DetailModal/hooks/useEnterChatRoom";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";

interface HamburgerMenuProps extends SideModalProps {
  serverId: number;
  chatRoomType: string;
  selectedItemId: number;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

export const HamburgerMenu = ({
  serverId,
  chatRoomType,
  selectedItemId,
  isVisible,
  setIsVisible,
}: HamburgerMenuProps) => {
  const { mutate: enterRoom } = useEnterChatRoom();

  const handleIconClick = () => {
    console.log("서버 입장 시도");
    enterRoom({ serverId, chatRoomType, groupId: selectedItemId });
    setIsVisible(!isVisible);
  };

  return (
    <>
      <LeaveIcon width={33} height={23} onClick={handleIconClick} />
      {/* {isVisible && (
        <div css={s.hamburgerLayoutStyle}>
          <div css={s.extendedMenuStyle}>
            <ChatMenuIcon width={96} height={49} />
            <div css={s.rectangleStyle}>
              <LeaveIcon width={28} height={28} css={{ padding: "0.5rem" }} />
              <div css={{ width: "0.1rem", height: "2.6rem", backgroundColor: "#4a6285" }} />
              <BookmarkIcon width={27} height={28} css={{ padding: "0.5rem" }} />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default HamburgerMenu;
