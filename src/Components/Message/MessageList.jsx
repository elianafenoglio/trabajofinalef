import React from 'react';


function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${
            msg.sender === 'yo'
              ? 'sent'
              : msg.sender === 'auto'
              ? 'auto-response'
              : 'received'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
