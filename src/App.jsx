import React, { useState } from "react"
import MessageList from "./Components/Message/MessageList"
import MessageInput from "./Components/Message/MessageInput"
import './style.css' 

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! ¿Cómo estás?', sender: 'otro' },
    { id: 2, text: 'Todo bien, ¿y vos?', sender: 'yo' },
  ])

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'yo',
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  
    setTimeout(() => {
      setMessages((prevMessages) => {
        const respuesta = {
          id: prevMessages.length + 1,
          text: "Respuesta automática simulada 👋",
          sender: "auto"
        };
        return [...prevMessages, respuesta];
      });
    }, 1000);
  };
  


return (
  <div className="chat-container">
    <div className="chat-box">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  </div>
);

};
export default App;




