import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import SidebarAvatar from './components/SidebarAvatar';

export default function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userInput) => {
    const userMsg = { sender: 'user', content: userInput };
    setMessages(prev => [...prev, userMsg]);

    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();

    const botMsg = { sender: 'bot', content: data.response };
    setMessages(prev => [...prev, botMsg]);
  };

  return (
    <div className="flex h-screen w-screen bg-[#0b1120] text-white relative justify-start">
      {/* Candid logo */}
      <div className="absolute top-6 right-8 text-white text-xl font-semibold">
        Candid
      </div>

      <SidebarAvatar />

      <div className="flex flex-col">
        <ChatWindow messages={messages} />
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
