
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Define your identity",
      description: "List what you can offer and what you need to grow. Our system processes your portfolio and skills to find the perfect synergistic partner.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      )
    },
    {
      title: "Intelligent Matching",
      description: "Powered by Gemini AI, we don't just match keywords—we analyze synergy. We find creators whose needs perfectly align with your mastery.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: "Schedule & Swap",
      description: "Use our integrated workspace to suggest times and confirm sessions. No money ever changes hands—only knowledge and expertise.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      )
    }
  ];

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[48px] md:text-[80px] leading-tight font-extrabold tracking-[-0.04em] text-brand-black mb-10">
            Design Meets Logic.
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray font-medium max-w-2xl mx-auto leading-relaxed">
            A frictionless ecosystem where skills are the only currency. Here's the blueprint for how we build together.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-12 rounded-[48px] border border-black/[0.04] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-brand-black tracking-tight">{step.title}</h3>
              <p className="text-brand-gray font-medium leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence Highlight */}
      <section className="py-32 px-6 bg-white border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 space-y-8">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4">The Intelligence Engine</div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-black">Powered by Synergy Analysis.</h2>
            <p className="text-lg text-brand-gray font-medium leading-relaxed">
              We use Gemini's deep reasoning capabilities to understand the nuance of your craft. It goes beyond simple tags to evaluate how a designer’s vision can fuel a developer’s architecture. 
            </p>
            <div className="pt-6">
               <div className="glass p-8 rounded-[32px] border border-black/[0.04] inline-block">
                 <div className="flex items-center gap-4">
                   <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                   <span className="text-sm font-bold text-brand-black italic">"Analyzing compatible skill structures..."</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] bg-brand-offwhite rounded-[52px] border border-black/[0.04] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
             <div className="relative z-10 grid grid-cols-2 gap-4 p-12">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-accent font-black">AI</div>
                <div className="w-24 h-24 bg-black rounded-3xl shadow-2xl flex items-center justify-center text-white font-black">USER</div>
                <div className="w-24 h-24 bg-black rounded-3xl shadow-2xl flex items-center justify-center text-white font-black">USER</div>
                <div className="w-24 h-24 bg-accent rounded-3xl shadow-2xl flex items-center justify-center text-white font-black animate-pulse">MATCH</div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Ready to swap?</h2>
        <Link to="/signup" className="inline-block px-14 py-6 bg-brand-black text-white text-lg font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl">
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;
