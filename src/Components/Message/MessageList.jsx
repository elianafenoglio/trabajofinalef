function MessageList({ messages, onDelete }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          onDoubleClick={() => onDelete(msg.id)}
          className={`message ${msg.sender === "yo" ? "sent" : msg.sender === "auto" ? "auto-response" : "received"}`}
          title="Doble clic para eliminar"
        >
          {msg.sender === "auto" && <span>🔒 </span>}
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
