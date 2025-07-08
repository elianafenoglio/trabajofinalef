import React, { useState } from "react";
import './style.css';
import Login from "./Login";
import Chat from "./Chat";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! ¿Cómo estás?', sender: 'otro' },
    { id: 2, text: 'Todo bien, ¿y vos?', sender: 'yo' },
  ]);

  const handleLogin = (password) => {
    if (password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Clave incorrecta");
    }
  };

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

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <Chat messages={messages} onSend={handleSend} />;
}

export default App;
