import React from "react";
import MessageSection from "./Components/MessageSection";
import LeftChatNav from "./Components/LeftChatNav";

const Chat = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-12 flex justify-center lg:col-span-4">
        <LeftChatNav></LeftChatNav>
      </div>
      <div className="col-span-0 hidden lg:block lg:col-span-8">
        <MessageSection></MessageSection>
      </div>
    </div>
  );
};

export default Chat;
