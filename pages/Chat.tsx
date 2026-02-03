
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_USERS, CURRENT_USER } from '../constants';
import { Message, UserProfile } from '../types';

const Chat: React.FC = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('user');
  const [targetUser, setTargetUser] = useState<UserProfile | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isScheduling, setIsScheduling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = MOCK_USERS.find(u => u.id === userId) || MOCK_USERS[0];
    setTargetUser(user);
    setMessages([
      { id: '1', senderId: user.id, text: `Hey Alex! Looking to swap some skills?`, timestamp: Date.now() - 5000000 },
      { id: '2', senderId: CURRENT_USER.id, text: `Absolutely. I saw your UI/UX portfolio, it's incredible.`, timestamp: Date.now() - 4000000 },
    ]);
  }, [userId]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: CURRENT_USER.id,
      text: inputText,
      timestamp: Date.now(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        senderId: targetUser!.id,
        text: "Let's make it happen. Are you free this weekend?",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 h-[calc(100vh-56px)] py-10 flex gap-8">
      {/* Sidebar: Message List */}
      <div className="hidden lg:flex flex-col w-96 bg-white rounded-[40px] shadow-sm border border-black/[0.04] overflow-hidden">
        <div className="p-8 border-b border-black/[0.04]">
          <h2 className="text-xl font-bold tracking-tight">Messages</h2>
        </div>
        <div className="flex-grow overflow-y-auto no-scrollbar">
          {MOCK_USERS.slice(0, 5).map(user => (
            <div key={user.id} className={`p-6 flex gap-4 cursor-pointer hover:bg-slate-50 transition-all ${user.id === targetUser?.id ? 'bg-slate-50 border-r-4 border-accent' : ''}`}>
              <img src={user.avatar} className="w-12 h-12 rounded-2xl object-cover grayscale" alt="" />
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[15px] truncate">{user.name}</span>
                  <span className="text-[10px] font-black text-brand-gray uppercase">10:45 AM</span>
                </div>
                <p className="text-xs font-medium text-brand-gray truncate">Sounds like a plan!</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow flex flex-col bg-white rounded-[40px] shadow-sm border border-black/[0.04] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-black/[0.04] flex items-center justify-between glass">
          <div className="flex items-center gap-4">
            <img src={targetUser?.avatar} className="w-10 h-10 rounded-2xl" alt="" />
            <div>
              <h3 className="font-bold text-[17px]">{targetUser?.name}</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Active Now</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsScheduling(true)}
            className="px-6 py-2.5 bg-brand-black text-white text-xs font-bold rounded-full hover:bg-black transition-all"
          >
            Propose Swap
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 no-scrollbar bg-brand-offwhite/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.senderId === CURRENT_USER.id ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-6 py-3.5 rounded-[24px] shadow-sm text-[15px] font-medium leading-relaxed ${
                msg.senderId === CURRENT_USER.id 
                  ? 'bg-accent text-white rounded-tr-none shadow-accent/20' 
                  : 'bg-white text-black rounded-tl-none border border-black/[0.03]'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-black/[0.04] flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center text-brand-gray">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </div>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Write a message..."
            className="flex-grow bg-brand-offwhite border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-accent/10 outline-none font-medium text-sm transition-all"
          />
          <button 
            onClick={handleSend}
            className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </div>

      {/* Scheduler Modal */}
      {isScheduling && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/20 backdrop-blur-xl p-6">
          <div className="bg-white rounded-[40px] p-12 max-w-lg w-full shadow-2xl animate-fade-in border border-black/[0.04]">
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-center">Schedule Swap</h3>
            <p className="text-brand-gray text-center mb-10 font-medium">Propose a time to collaborate with {targetUser?.name}.</p>
            
            <div className="space-y-6 mb-12">
              <input type="datetime-local" className="w-full bg-brand-offwhite border-none rounded-2xl p-5 font-bold outline-none focus:ring-2 focus:ring-accent/10 transition-all" />
              <div className="text-center">
                <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Popular slots</p>
                <div className="flex gap-2 justify-center">
                  <button className="px-4 py-2 bg-brand-offwhite rounded-full text-[11px] font-bold hover:bg-accent hover:text-white transition-colors">SAT 10AM</button>
                  <button className="px-4 py-2 bg-brand-offwhite rounded-full text-[11px] font-bold hover:bg-accent hover:text-white transition-colors">SUN 4PM</button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setIsScheduling(false)}
                className="flex-grow py-4 bg-brand-offwhite text-black font-bold rounded-2xl hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsScheduling(false)}
                className="flex-grow py-4 bg-black text-white font-bold rounded-2xl hover:bg-brand-black/90 transition-all shadow-xl"
              >
                Propose
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
