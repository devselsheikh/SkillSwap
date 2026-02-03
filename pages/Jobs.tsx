
import React, { useState } from 'react';
import { Job } from '../types';
import { SKILL_OPTIONS } from '../constants';

const MOCK_JOBS: Job[] = [
  {
    id: "j1",
    posterId: "user-2",
    posterName: "Lila Chen",
    title: "E-commerce Redesign",
    description: "I have a client project that needs a crisp mobile-first design. I can handle all the React/backend if you do the mockups!",
    skillRequired: "UI/UX Design",
    skillOffered: "React Development",
    timestamp: Date.now() - 3600000
  },
  {
    id: "j2",
    posterId: "user-4",
    posterName: "Sarah Miller",
    title: "Startup Pitch Deck Video",
    description: "Need someone to edit a 2-minute pitch video for a climate tech startup. I can teach you advanced Photography in return!",
    skillRequired: "Video Editing",
    skillOffered: "Photography",
    timestamp: Date.now() - 7200000
  }
];

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [showPostModal, setShowPostModal] = useState(false);
  const [newJob, setNewJob] = useState<Partial<Job>>({
    skillRequired: "UI/UX Design",
    skillOffered: "React Development"
  });

  const handlePost = () => {
    const job: Job = {
      id: Math.random().toString(36),
      posterId: "user-1",
      posterName: "Alex Dev",
      title: newJob.title || "Project Help Needed",
      description: newJob.description || "Looking for a collaboration partner.",
      skillRequired: newJob.skillRequired!,
      skillOffered: newJob.skillOffered!,
      timestamp: Date.now()
    };
    setJobs([job, ...jobs]);
    setShowPostModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h1 className="text-[40px] font-extrabold tracking-tight text-brand-black leading-tight">Job Board</h1>
          <p className="text-brand-gray mt-2 font-medium">Post opportunities. Trade skills. Finish projects.</p>
        </div>
        <button 
          onClick={() => setShowPostModal(true)}
          className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          Post a Gig
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-10 rounded-[40px] border border-black/[0.04] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">{job.title}</h3>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Posted by {job.posterName}</p>
                </div>
                <div className="text-[10px] font-black uppercase text-brand-gray/50 tracking-widest">
                  {new Date(job.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              <p className="text-brand-gray font-medium leading-relaxed mb-10">{job.description}</p>
            </div>
            
            <div className="space-y-6 pt-6 border-t border-black/[0.04]">
              <div className="flex justify-between items-center text-sm font-bold">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <span className="text-brand-gray uppercase tracking-widest text-[10px]">Needs</span>
                  <span className="text-brand-black">{job.skillRequired}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-brand-gray uppercase tracking-widest text-[10px]">Gives</span>
                  <span className="text-brand-black">{job.skillOffered}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-brand-offwhite text-brand-black font-bold rounded-2xl hover:bg-slate-200 transition-all">
                Apply for Swap
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPostModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/20 backdrop-blur-xl p-6">
          <div className="bg-white rounded-[48px] p-12 max-w-xl w-full shadow-2xl animate-fade-in border border-black/[0.04]">
            <h3 className="text-3xl font-black tracking-tight mb-4 text-center">Post an Opportunity</h3>
            <p className="text-brand-gray text-center mb-10 font-medium leading-relaxed">Describe your project and what you're willing to trade in return.</p>
            
            <div className="space-y-6 mb-10">
              <input 
                type="text" 
                placeholder="Gig Title (e.g., Portfolio Redesign)"
                className="w-full bg-brand-offwhite border-none rounded-2xl p-5 font-bold outline-none focus:ring-2 focus:ring-accent/10" 
                onChange={(e) => setNewJob({...newJob, title: e.target.value})}
              />
              <textarea 
                placeholder="Briefly describe the project..."
                className="w-full bg-brand-offwhite border-none rounded-2xl p-5 font-medium outline-none h-32 focus:ring-2 focus:ring-accent/10"
                onChange={(e) => setNewJob({...newJob, description: e.target.value})}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-2 block">Skill You Need</label>
                  <select 
                    className="w-full bg-brand-offwhite border-none rounded-2xl p-4 font-bold outline-none text-sm"
                    onChange={(e) => setNewJob({...newJob, skillRequired: e.target.value})}
                  >
                    {SKILL_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-2 block">Skill You Give</label>
                  <select 
                    className="w-full bg-brand-offwhite border-none rounded-2xl p-4 font-bold outline-none text-sm"
                    onChange={(e) => setNewJob({...newJob, skillOffered: e.target.value})}
                  >
                    {SKILL_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setShowPostModal(false)} className="flex-grow py-5 bg-brand-offwhite text-black font-bold rounded-[24px] hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={handlePost} className="flex-grow py-5 bg-black text-white font-bold rounded-[24px] hover:bg-brand-black/90 transition-all shadow-xl shadow-black/10">Post Gig</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
