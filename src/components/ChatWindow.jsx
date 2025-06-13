import React from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages }) {
  return (
    <div className="flex flex-col w-[700px] h-[75vh] bg-[#111827] rounded-2xl p-6 space-y-4 overflow-y-auto shadow-xl">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} sender={msg.sender} content={msg.content} />
      ))}
    </div>
  );
}
