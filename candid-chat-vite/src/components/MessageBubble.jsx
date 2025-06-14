import React from 'react';
import { motion } from 'framer-motion';

export default function MessageBubble({ sender, content }) {
  const isUser = sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[75%] ${
        isUser ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-gray-700 text-white'
      }`}
    >
      {content}
    </motion.div>
  );
}
