
import React, { useState, useMemo } from 'react';
import { UserProfile, MatchResult } from '../types';
import { MOCK_USERS, CURRENT_USER } from '../constants';
import { getMatchInsight } from '../geminiService';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [selectedMatch, setSelectedMatch] = useState<MatchResult | null>(null);
  const [insight, setInsight] = useState<string>("");
  const [loadingInsight, setLoadingInsight] = useState(false);
  const navigate = useNavigate();

  const matches: MatchResult[] = useMemo(() => {
    return MOCK_USERS.map(user => {
      const commonOffered = user.skillsOffered.filter(s => CURRENT_USER.skillsNeeded.includes(s));
      const commonNeeded = user.skillsNeeded.filter(s => CURRENT_USER.skillsOffered.includes(s));
      const score = commonOffered.length + commonNeeded.length;
      return { user, score, commonOffered, commonNeeded };
    }).sort((a, b) => b.score - a.score);
  }, []);

  const handleConnect = async (match: MatchResult) => {
    setSelectedMatch(match);
    setLoadingInsight(true);
    const result = await getMatchInsight(CURRENT_USER, match.user);
    setInsight(result);
    setLoadingInsight(false);
  };

  const handleRequestSwap = (match: MatchResult) => {
    const exchangeStr = match.commonOffered[0] && match.commonNeeded[0] 
      ? `Hey ${match.user.name}! I noticed a perfect synergy. I'd love to swap my ${match.commonNeeded[0]} expertise for your help with ${match.commonOffered[0]}. Are you free to collaborate?`
      : `Hey ${match.user.name}! I saw your profile on SkillSwap and I'm really impressed by your work. Let's connect and see how we can help each other grow!`;
    
    navigate(`/chat?user=${match.user.id}&msg=${encodeURIComponent(exchangeStr)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h1 className="text-[40px] font-extrabold tracking-tight text-brand-black leading-tight">Recommended<br />for you</h1>
          <p className="text-brand-gray mt-2 font-medium">Synergies detected within your campus network.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/verify" className="bg-emerald-50 text-emerald-600 px-5 py-2.5 rounded-full text-xs font-bold border border-emerald-100 hover:bg-emerald-100 transition-all shadow-sm">
            Get Verified
          </Link>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-black text-brand-black">{CURRENT_USER.name}</div>
              <div className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Lvl. 5 Creator</div>
            </div>
            <img src={CURRENT_USER.avatar} className="w-12 h-12 rounded-2xl border-2 border-white shadow-xl" alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          {matches.map((match) => (
            <div key={match.user.id} className="bg-white rounded-[40px] border border-black/[0.04] transition-all hover:shadow-2xl hover:shadow-black/[0.03] overflow-hidden group">
              {/* Synergy Header */}
              <div className="px-10 py-4 bg-slate-50 border-b border-black/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-[10px] font-black text-brand-gray uppercase tracking-[0.2em]">High Synergy Match</span>
                </div>
                <div className="text-xs font-bold text-accent">
                  {Math.round((match.score / 10) * 100) + 70}% Compatible
                </div>
              </div>

              <div className="p-10">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="relative shrink-0">
                    <img src={match.user.avatar} className="w-28 h-28 rounded-3xl object-cover shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700" alt={match.user.name} />
                    {match.user.verified && (
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-black tracking-tight mb-1">{match.user.name}</h3>
                        <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">{match.user.sessionsCompleted} Swaps Completed</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-brand-black">{match.user.rating}</div>
                        <div className="text-[9px] font-black text-brand-gray uppercase tracking-widest">Platform Rating</div>
                      </div>
                    </div>
                    
                    {/* Synergy Summary Block */}
                    <div className="mb-8 p-6 bg-accent/5 rounded-[32px] border border-accent/10 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-[10px] font-black text-brand-gray uppercase tracking-wider mb-2">You Give</p>
                          <span className="text-sm font-bold px-3 py-1.5 bg-white border border-black/5 rounded-xl block">
                            {match.commonNeeded[0] || 'Any Skill'}
                          </span>
                        </div>
                        <svg className="w-5 h-5 text-accent opacity-30 mt-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        <div className="text-center">
                          <p className="text-[10px] font-black text-brand-gray uppercase tracking-wider mb-2">They Give</p>
                          <span className="text-sm font-bold px-3 py-1.5 bg-accent text-white rounded-xl block shadow-lg shadow-accent/10">
                            {match.commonOffered[0] || 'Expertise'}
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:block h-12 w-px bg-accent/20 mx-6"></div>
                      <div className="hidden md:block">
                        <p className="text-[10px] font-black text-brand-gray uppercase tracking-wider mb-1">Exchange Logic</p>
                        <p className="text-xs font-medium text-brand-black max-w-[140px]">Balanced swap based on your current project needs.</p>
                      </div>
                    </div>

                    <p className="text-brand-gray text-lg font-medium leading-relaxed mb-8 max-w-xl">{match.user.bio}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black/[0.04]">
                      <button 
                        onClick={() => handleRequestSwap(match)}
                        className="flex-grow py-5 bg-accent text-white rounded-[24px] font-black text-base transition-all hover:bg-accent/90 active:scale-95 shadow-2xl shadow-accent/20"
                      >
                        Request Instant Swap
                      </button>
                      <button 
                        onClick={() => handleConnect(match)}
                        className="flex-grow py-5 bg-brand-black text-white rounded-[24px] font-black text-base transition-all hover:bg-black/90 active:scale-95 shadow-xl"
                      >
                        Synergy AI Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insight Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-8">
          <div className="bg-black rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-all duration-1000"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/50">Exchange Intelligence</h3>
              </div>
              
              {selectedMatch ? (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-4 mb-10">
                    <img src={selectedMatch.user.avatar} className="w-16 h-16 rounded-3xl border-2 border-white/10" alt="" />
                    <div>
                      <div className="text-xl font-black">{selectedMatch.user.name}</div>
                      <div className="text-xs font-bold text-accent">Synergy Verified</div>
                    </div>
                  </div>
                  
                  {loadingInsight ? (
                    <div className="space-y-4">
                      <div className="h-3 bg-white/10 rounded-full animate-pulse w-full"></div>
                      <div className="h-3 bg-white/10 rounded-full animate-pulse w-5/6"></div>
                      <div className="h-3 bg-white/10 rounded-full animate-pulse w-4/6"></div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p className="text-[17px] font-medium leading-relaxed text-white/90 italic">
                        "{insight}"
                      </p>
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Strategy Advice</p>
                        <p className="text-xs font-medium text-white/70">Start by proposing a 30-min discovery call to align your project goals.</p>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => handleRequestSwap(selectedMatch)}
                    className="w-full mt-10 py-5 bg-white text-black rounded-[24px] font-black text-sm hover:bg-slate-100 transition-all shadow-2xl"
                  >
                    Send Proposal
                  </button>
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                    <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <p className="text-sm font-bold text-white/30 leading-relaxed px-8">
                    Select a match to unlock Gemini-powered collaboration strategies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
