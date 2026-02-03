
import React, { useState } from 'react';
import { SKILL_OPTIONS } from '../constants';
import { Link } from 'react-router-dom';

const Verification: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_OPTIONS[0]);
  const [step, setStep] = useState<'intro' | 'quiz' | 'success'>('intro');

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-white rounded-[48px] p-12 md:p-24 border border-black/[0.04] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <svg className="w-64 h-64 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
        </div>

        {step === 'intro' && (
          <div className="animate-fade-in relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Build Trust.</h1>
            <p className="text-lg text-brand-gray font-medium mb-12 leading-relaxed">
              Verified skills increase your match rate by <span className="text-emerald-500 font-bold">4.5x</span>. Get endorsed by peers or complete a quick skill assessment to earn your verification badge.
            </p>
            
            <div className="space-y-12">
              <div>
                <label className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-6 block">Select Skill to Verify</label>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {SKILL_OPTIONS.slice(0, 6).map(skill => (
                    <button 
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${selectedSkill === skill ? 'bg-black text-white scale-105' : 'bg-brand-offwhite text-brand-gray hover:text-black'}`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button 
                  onClick={() => setStep('quiz')}
                  className="w-full py-6 bg-emerald-500 text-white text-xl font-bold rounded-[32px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200"
                >
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'quiz' && (
          <div className="animate-fade-in relative z-10">
            <h2 className="text-2xl font-black mb-4">Quick Check: {selectedSkill}</h2>
            <p className="text-brand-gray mb-12 font-medium">Answer these 3 technical questions to prove your mastery.</p>
            
            <div className="space-y-8 mb-16">
              {[
                "Explain the most complex challenge you've solved in this field.",
                "Which tools do you use for your professional workflow?",
                "What's one industry trend you're currently following?"
              ].map((q, i) => (
                <div key={i} className="space-y-3">
                  <p className="font-bold text-sm text-brand-black">{q}</p>
                  <textarea className="w-full bg-brand-offwhite border-none rounded-2xl p-6 font-medium text-sm outline-none focus:ring-2 focus:ring-accent/10" rows={2} placeholder="Your answer..." />
                </div>
              ))}
            </div>

            <button 
              onClick={() => setStep('success')}
              className="w-full py-6 bg-emerald-500 text-white font-bold rounded-[32px] shadow-xl hover:bg-emerald-600 transition-all"
            >
              Submit for Review
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="animate-fade-in text-center py-12">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-emerald-200">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-4xl font-black mb-6">Assessment Submitted.</h2>
            <p className="text-lg text-brand-gray font-medium mb-12 max-w-sm mx-auto">
              Our community moderators will review your responses. Expect your badge within 24 hours.
            </p>
            <Link to="/dashboard" className="inline-block px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-all">
              Back to Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
