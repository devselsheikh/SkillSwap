
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HandshakeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3h5v5" />
    <path d="M8 21H3v-5" />
    <path d="M15 22 9 12" />
    <path d="M19 13l-4-3c-.7-.5-1.5-.5-2.2 0l-3.8 2.6c-.7.5-1.5.5-2.2 0l-4-3" />
    <path d="m5 11 6 10" />
    <path d="m11 2 4 10" />
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isAuth = location.pathname === '/signup' || location.pathname === '/login';

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', private: true },
    { name: 'Jobs', path: '/jobs', private: true },
    { name: 'Community', path: '/community', private: false },
    { name: 'How it works', path: '/how', private: false },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30">
      <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-14 items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white transition-all group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-black/10">
                <HandshakeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">SkillSwap</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-[13px] font-medium transition-colors ${location.pathname === link.path ? 'text-black' : 'text-brand-gray hover:text-black'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              {!isAuth && (
                <div className="flex items-center gap-6 border-l border-black/[0.08] pl-6">
                  {location.pathname !== '/' && location.pathname !== '/how' && location.pathname !== '/community' && location.pathname !== '/jobs' ? (
                    <>
                      <Link to="/chat" className={`text-[13px] font-medium transition-colors ${location.pathname === '/chat' ? 'text-black' : 'text-brand-gray hover:text-black'}`}>Messages</Link>
                      <Link to="/profile" className="flex items-center gap-2">
                        <img src="https://picsum.photos/seed/alex/100/100" className="w-6 h-6 rounded-full grayscale hover:grayscale-0 transition-all" alt="Profile" />
                        <span className="text-[13px] font-semibold">Alex</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="text-[13px] font-medium text-brand-gray hover:text-black transition-colors">Sign In</Link>
                      <Link to="/signup" className="bg-black text-white px-5 py-1.5 rounded-full text-[13px] font-semibold hover:bg-brand-black/90 transition-all">
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-14 pb-24 md:pb-12">
        {children}
      </main>

      {/* Mobile Dock */}
      {!isLanding && !isAuth && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex md:hidden">
          <div className="glass dock-shadow border border-black/[0.06] rounded-full px-6 py-3 flex items-center gap-8">
             <Link to="/dashboard" className={`transition-colors ${location.pathname === '/dashboard' ? 'text-accent' : 'text-brand-gray'}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </Link>
             <Link to="/jobs" className={`transition-colors ${location.pathname === '/jobs' ? 'text-accent' : 'text-brand-gray'}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </Link>
             <Link to="/chat" className={`transition-colors ${location.pathname === '/chat' ? 'text-accent' : 'text-brand-gray'}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
             </Link>
             <Link to="/profile" className={`transition-colors ${location.pathname === '/profile' ? 'text-accent' : 'text-brand-gray'}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
             </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-black/[0.04] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white">
                <HandshakeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-black">SkillSwap</span>
            </div>
            <p className="text-brand-gray max-w-sm mx-auto md:mx-0 text-sm leading-relaxed font-medium">
              Trading expertise directly for growth. Zero financial barriers for the next generation of builders.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.2em] text-brand-black">Product</h4>
            <ul className="space-y-4 text-brand-gray text-[13px] font-semibold">
              <li><Link to="/how" className="hover:text-black transition-colors">How it works</Link></li>
              <li><Link to="/community" className="hover:text-black transition-colors">University Hubs</Link></li>
              <li><Link to="/jobs" className="hover:text-black transition-colors">Job Board</Link></li>
              <li><Link to="/verify" className="hover:text-black transition-colors">Verify Skills</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.2em] text-brand-black">Company</h4>
            <ul className="space-y-4 text-brand-gray text-[13px] font-semibold">
              <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-24 text-center text-brand-gray/30 text-[10px] font-black tracking-[0.3em] uppercase">
          Designed for the next generation of builders.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
