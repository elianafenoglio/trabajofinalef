import React, { useState } from "react";
import MessageList from "../Components/Message/MessageList";
import MessageInput from "../Components/Message/MessageInput";
import Login from "./LoginScreen";

function ChatScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! ¿qué tal?', sender: 'otro' }, 
    { id: 2, text: 'Todo bien, ¿y vos?', sender: 'yo' },
  ]);

  const handleSend = (text) => { //agrego un nuevo mensaje - text es el texto
    const newMessage = {        //que escribio el usuario
      id: Date.now(), // aca se crea un objeto nuevo que representa el nuevo mensaje
      text,           // con Date.now() creo un id unico 
      sender: 'yo',
    };
    //recibe como parametro el valor actual del arreglo, crea una copia de los 
    //mensajes existentes y agrega un nuevo mensaje
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      setMessages((prevMessages) => {
        const respuesta = {
          id: Date.now() + 1,
          text: "Respuesta automática simulada 👋",
          sender: "auto"
        };
        return [...prevMessages, respuesta];
      });
    }, 1000);
  };

  const handleDelete = (id) => {
  setMessages((prev) => {
    const mensaje = prev.find((m) => m.id === id);
    if (!mensaje || String(mensaje.sender).trim().toLowerCase() === "auto") return prev;
    return prev.filter((m) => m.id !== id);
  });
};


  // ✅ Llamada corregida a LoginScreen
  if (!isAuthenticated) {
    return <Login onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <MessageList messages={messages} onDelete={handleDelete} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatScreen;


//Elemento	          Tipo               Rol
//ChatScreen	       Componente	   Representa la pantalla de chat
//isAuthenticated 	  Estado	     Controla si el usuario está logueado
//setIsAuthenticated	Setter	     Cambia el estado de login
//messages            Estado	     Contiene todos los mensajes del chat
//setMessages	        Setter	     Agrega, elimina o modifica mensajes
//handleSend	       Función	     Agrega un nuevo mensaje del usuario y una respuesta automática
//handleDelete	     Función	      Elimina un mensaje (salvo los automáticos)
