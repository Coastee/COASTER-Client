import GlobalChatRoom from "@/pages/GlobalChatPage/components/GlobalChatRoom/GlobalChatRoom";
import { useState } from "react";

const GlobalChatPage = () => {
  const [isChatting, setIsChatting] = useState(false);

  return (
    <>
      <GlobalChatRoom />
    </>
  );
};

export default GlobalChatPage;
