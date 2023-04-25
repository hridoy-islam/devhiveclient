import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
const MessageSection = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello! I am devHive. How can I help you with?",
      sender: "hasan",
    },
  ]);
  const handleSend = async (messagesend) => {
    const newMessage = {
      message: messagesend,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    //update our user state
    setMessages(newMessages);

    //set a typing indicator
    setTyping(true);

    //process message and post to the server
  };
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              typing ? <TypingIndicator content="hasan is typing" /> : null
            }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput onSend={handleSend} placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default MessageSection;
