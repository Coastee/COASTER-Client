import GlobalChatRoom from "@/pages/GlobalChatPage/components/GlobalChatRoom/GlobalChatRoom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const GlobalChatPage = () => {
  const [isChatting, setIsChatting] = useState(false);
  const location = useLocation();
  const { chat } = location.state || {};
  return (
    <>
      <GlobalChatRoom chat={chat} />
    </>
  );
};

export default GlobalChatPage;
