
import React from 'react';
import { Link } from 'react-router-dom';
import UniversityLogo from '../components/UniversityLogo';

const Landing: React.FC = () => {
  // Using stable, high-resolution official logos from trusted public sources
  const universities = [
    { 
      name: "AUC", 
      fullName: "The American University in Cairo",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/AUC_Logo.svg/512px-AUC_Logo.svg.png" 
    },
    { 
      name: "GUC", 
      fullName: "German University in Cairo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/GUC_logo.png/512px-GUC_logo.png" 
    },
    { 
      name: "CU", 
      fullName: "Cairo University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Cairo_University_Logo.png/512px-Cairo_University_Logo.png" 
    },
    { 
      name: "TKH", 
      fullName: "The Knowledge Hub / Coventry University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Coventry_University_logo.svg/512px-Coventry_University_logo.svg.png" 
    }
  ];

  return (
    <div className="bg-brand-offwhite">
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-[52px] md:text-[88px] leading-[1.0] font-extrabold tracking-[-0.05em] text-brand-black">
              Swap Skills.<br />
              <span className="text-brand-gray">No Money Needed.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-brand-gray font-medium leading-tight">
              A peer-to-peer platform for designers, developers, and creators to trade expertise and grow — zero financial barriers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-accent text-white text-[17px] font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-accent/25">
                Join the Waitlist
              </Link>
              <Link to="/how" className="text-[17px] font-semibold text-brand-black hover:text-accent flex items-center gap-2 transition-colors">
                See How It Works 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Product Preview Card */}
          <div className="mt-28 relative max-w-5xl mx-auto">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-violet-400/5 blur-[120px] rounded-full"></div>
            <div className="relative glass border border-black/[0.04] rounded-[48px] shadow-2xl overflow-hidden p-3 md:p-6 bg-white/40">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
                alt="Creatives working" 
                className="w-full h-[300px] md:h-[600px] object-cover rounded-[40px] opacity-95 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-12 left-12 right-12 flex justify-center">
                <div className="glass px-8 py-5 rounded-3xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5M8 21H3v-5M15 22 9 12M19 13l-4-3c-.7-.5-1.5-.5-2.2 0l-3.8 2.6c-.7.5-1.5.5-2.2 0l-4-3M5 11l6 10M11 2l4 10"/></svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-black">New Match!</div>
                      <div className="text-xs text-brand-gray font-semibold">Lila wants to swap UI/UX for React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Cloud */}
      <section className="py-24 border-y border-black/[0.03] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/community" className="inline-block mb-16 text-[10px] font-black text-brand-gray uppercase tracking-[0.3em] hover:text-accent transition-colors">Empowering Builders From</Link>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {universities.map(uni => (
              <div key={uni.name} className="relative group cursor-help transition-all duration-300">
                <UniversityLogo src={uni.logo} name={uni.name} />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-4 py-2 bg-brand-black text-white text-[12px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-20 shadow-2xl transform group-hover:translate-y-0 translate-y-2">
                  {uni.fullName}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple How It Works */}
      <section id="how" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-black">Exchange skills.<br /><span className="text-brand-gray">No transaction fees.</span></h2>
              <div className="space-y-6">
                <p className="text-lg text-brand-gray font-medium leading-relaxed">
                  Join a community of builders trading mastery for growth. SkillSwap allows you to barter your expertise with peers on campus, creating value without capital.
                </p>
                <div className="flex gap-4">
                  <Link to="/signup" className="px-8 py-4 bg-accent text-white font-bold rounded-full transition-all hover:scale-105">Join the Network</Link>
                  <Link to="/how" className="px-8 py-4 bg-brand-offwhite text-brand-black font-bold rounded-full transition-all hover:bg-slate-200">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
