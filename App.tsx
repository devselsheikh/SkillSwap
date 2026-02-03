
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import ProfileCreation from './pages/ProfileCreation';
import HowItWorks from './pages/HowItWorks';
import Community from './pages/Community';
import Jobs from './pages/Jobs';
import Verification from './pages/Verification';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<ProfileCreation />} />
          <Route path="/login" element={<Navigate to="/dashboard" replace />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
