import { BookmarkIcon, ChatMenuIcon, HamburgerIcon, LeaveIcon } from "@/assets/svg";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import * as s from "./HamburgerMenu.styles";

const HamburgerMenu = ({ isVisible, setIsVisible }: SideModalProps) => {
  return (
    <>
      <HamburgerIcon width={33} height={23} onClick={() => setIsVisible(!isVisible)} />
      {isVisible && (
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
      )}
    </>
  );
};

export default HamburgerMenu;
