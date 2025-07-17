// Chat.jsx
import React from "react";
import MessageList from "./Components/Message/MessageList";
import MessageInput from "./Components/Message/MessageInput";

function Chat({ messages, onSend }) {
  return (
    <div className="chat-container">
      <div className="chat-box">
        <MessageList messages={messages} />
        <MessageInput onSend={onSend} />
      </div>
    </div>
  );
}

export default Chat;
