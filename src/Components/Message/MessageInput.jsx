import React, { useState } from 'react';

function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };
  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageInput;
