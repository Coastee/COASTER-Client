import ChatRoom from "@/pages/DMPage/components/ChatRoom/ChatRoom";
import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";

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
