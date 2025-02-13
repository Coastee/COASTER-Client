import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";
import ChatRoom from "@/pages/GroupChatPage/components/ChatRoom/ChatRoom";
import { useState } from "react";

const DMPage = () => {
  const [isChatting, setIsChatting] = useState(false);

  return (
    <>
      <DMList />
      {/* 후에 로직 수정 */}
      {isChatting ? <ChatRoom /> : <EmptyPanel onClick={() => setIsChatting(true)} />}
    </>
  );
};

export default DMPage;
