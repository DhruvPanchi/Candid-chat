import React from 'react';

export default function SidebarAvatar() {
  return (
    <div className="w-42 flex flex-col items-center justify-center bg-[#0b1120] p-6 border-r border-[#1f2937]">
      <img 
        src="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Larry_Agran.jpg" 
        alt="Larry" 
        className="rounded-xl w-30 h-auto mb-4 shadow-lg"
      />
    </div>
  );
}
