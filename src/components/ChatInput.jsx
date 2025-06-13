import React, { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-4 bg-[#0b1120]">
      <div className="w-[700px] flex bg-[#1f2937] rounded-2xl overflow-hidden">
        <input
          className="flex-1 p-4 bg-transparent text-white placeholder-gray-400 outline-none"
          placeholder="Ask Larry anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="px-6 bg-blue-600 text-white font-semibold">
          Send
        </button>
      </div>
    </form>
  );
}
