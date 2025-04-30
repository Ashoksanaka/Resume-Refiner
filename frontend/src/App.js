import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashBoard';
import CoverLetterGenerationPage from './components/GenerateCoverLetter';
import ResumeGenerationPage from './components/GenerateResume';
import ProfileUpdatePage from './components/ProfileUpdate';
import UserProfilePage from './components/ViewProfile';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate-cover-letter" element={<CoverLetterGenerationPage />} />
            <Route path="/generate-resume" element={<ResumeGenerationPage />} />
            <Route path="/profile-update" element={<ProfileUpdatePage />} />
            <Route path="/view-profile" element={<UserProfilePage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
    );
};

export default App;
