
import React, { useState } from 'react';
import { SKILL_OPTIONS } from '../constants';
import { useNavigate } from 'react-router-dom';

const ProfileCreation: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [offered, setOffered] = useState<string[]>([]);
  const [needed, setNeeded] = useState<string[]>([]);
  const [bio, setBio] = useState("");

  const toggleSkill = (skill: string, list: string[], setList: (s: string[]) => void) => {
    if (list.includes(skill)) {
      setList(list.filter(s => s !== skill));
    } else {
      if (list.length < 5) {
        setList([...list, skill]);
      }
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
      <div className="bg-white rounded-[48px] p-10 md:p-20 border border-black/[0.04] shadow-2xl relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-offwhite">
          <div 
            className="h-full bg-accent transition-all duration-700 ease-in-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center mb-16">
          <div className="text-[10px] font-black text-brand-gray uppercase tracking-[0.3em]">Step 0{step} of 03</div>
          {step > 1 && (
            <button onClick={prevStep} className="text-xs font-bold text-brand-gray hover:text-black transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              Go Back
            </button>
          )}
        </div>

        {step === 1 && (
          <div className="animate-fade-in space-y-12">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Tell your story.</h1>
              <p className="text-lg text-brand-gray font-medium leading-relaxed">
                Your bio isn't just a summary—it's how matches understand your professional philosophy. 
                <span className="text-accent"> Clearer bios lead to 3x higher swap success rates.</span>
              </p>
            </div>
            
            <textarea 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="e.g., I'm a computer science student passionate about building accessible web apps. I can help with architecture in exchange for visual polish..."
              className="w-full bg-brand-offwhite border-none rounded-[32px] p-8 min-h-[200px] focus:ring-4 focus:ring-accent/5 outline-none font-medium text-lg leading-relaxed shadow-inner"
            />
            
            <div className="pt-8">
              <button 
                onClick={nextStep}
                disabled={bio.length < 10}
                className="w-full py-6 bg-brand-black text-white text-xl font-bold rounded-[32px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continue to Skills
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in space-y-12">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Your Mastery.</h1>
              <p className="text-lg text-brand-gray font-medium leading-relaxed">
                Choose up to 5 skills you're confident sharing. These act as your currency on SkillSwap.
                <span className="text-accent"> Mastery attracts quality matches.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {SKILL_OPTIONS.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill, offered, setOffered)}
                  className={`px-6 py-4 rounded-full text-sm font-bold transition-all ${
                    offered.includes(skill) 
                      ? 'bg-black text-white scale-105 shadow-xl' 
                      : 'bg-brand-offwhite text-brand-gray hover:text-black hover:bg-slate-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="pt-8">
              <button 
                onClick={nextStep}
                disabled={offered.length === 0}
                className="w-full py-6 bg-brand-black text-white text-xl font-bold rounded-[32px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Set Your Goals
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in space-y-12">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Your Needs.</h1>
              <p className="text-lg text-brand-gray font-medium leading-relaxed">
                What expertise do you need to reach your next milestone? We use this to calculate synergy with other creators.
                <span className="text-accent"> Be specific for better results.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {SKILL_OPTIONS.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill, needed, setNeeded)}
                  className={`px-6 py-4 rounded-full text-sm font-bold transition-all ${
                    needed.includes(skill) 
                      ? 'bg-accent text-white scale-105 shadow-xl shadow-accent/20' 
                      : 'bg-brand-offwhite text-brand-gray hover:text-black hover:bg-slate-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="pt-8">
              <button 
                onClick={() => navigate('/dashboard')}
                disabled={needed.length === 0}
                className="w-full py-6 bg-brand-black text-white text-xl font-bold rounded-[32px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Enter the Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCreation;
