
import React from 'react';

const Community: React.FC = () => {
  const hubs = [
    { 
      name: "The American University in Cairo", 
      acronym: "AUC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/AUC_Logo.svg/512px-AUC_Logo.svg.png",
      members: "1.2k+"
    },
    { 
      name: "German University in Cairo", 
      acronym: "GUC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/GUC_logo.png",
      members: "2.4k+"
    },
    { 
      name: "Cairo University", 
      acronym: "CU",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Cairo_University_Logo.png/512px-Cairo_University_Logo.png",
      members: "3.1k+"
    },
    { 
      name: "Coventry University (TKH)", 
      acronym: "TKH",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Coventry_University_logo.svg/512px-Coventry_University_logo.svg.png",
      members: "800+"
    }
  ];

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[48px] md:text-[80px] leading-tight font-extrabold tracking-[-0.04em] text-brand-black mb-10">
            Power in Peers.
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray font-medium max-w-2xl mx-auto leading-relaxed">
            The largest network of students and freelancers in Cairo. One community, zero barriers.
          </p>
        </div>
      </section>

      {/* University Hubs Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map(hub => (
              <div key={hub.acronym} className="bg-white p-12 rounded-[48px] border border-black/[0.04] flex flex-col md:flex-row items-center gap-12 group hover:shadow-2xl transition-all duration-500">
                <div className="w-32 h-32 shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={hub.logo} alt={hub.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="text-[11px] font-black uppercase tracking-widest text-accent mb-2">ACTIVE HUB</div>
                  <h3 className="text-2xl font-bold mb-2 text-brand-black">{hub.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="text-brand-gray font-bold text-sm uppercase tracking-widest">{hub.members} Members</span>
                    <span className="w-1 h-1 rounded-full bg-brand-gray/30"></span>
                    <span className="text-emerald-500 text-xs font-black uppercase tracking-widest">Growing Fast</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-white border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-[64px] font-black tracking-tighter text-brand-black mb-4">5,000+</div>
            <div className="text-brand-gray text-xs font-black uppercase tracking-[0.3em]">Global Creators</div>
          </div>
          <div>
            <div className="text-[64px] font-black tracking-tighter text-accent mb-4">12k+</div>
            <div className="text-brand-gray text-xs font-black uppercase tracking-[0.3em]">Swaps Completed</div>
          </div>
          <div>
            <div className="text-[64px] font-black tracking-tighter text-brand-black mb-4">98%</div>
            <div className="text-brand-gray text-xs font-black uppercase tracking-[0.3em]">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Real-time Feed Simulation */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">Latest Swaps</h2>
          <div className="space-y-6">
            {[
              { user: "Omar (GUC)", action: "UI/UX for Video Editing", time: "2 min ago" },
              { user: "Sarah (AUC)", action: "React for SEO Strategy", time: "15 min ago" },
              { user: "Khaled (CU)", action: "Translation for Branding", time: "1h ago" }
            ].map((swap, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border border-black/[0.03] flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
                  <div>
                    <div className="font-bold text-brand-black">{swap.user}</div>
                    <div className="text-sm text-brand-gray font-medium">{swap.action}</div>
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-gray/50">{swap.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
