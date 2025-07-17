import React from 'react';

function MessageList({ messages, onDelete }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          onDoubleClick={() =>
            msg.sender !== "auto" ? onDelete(msg.id) : null
          }
          className={`message ${
            msg.sender === 'yo'
              ? 'sent'
              : msg.sender === 'auto'
              ? 'auto-response'
              : 'received'
          }`}
          title={msg.sender !== "auto" ? "Doble clic para eliminar" : ""}
        >
          {msg.sender === "auto" && <span>🔒 </span>}
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
