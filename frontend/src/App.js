import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import UserDashboard from "./components/DashBoard";
import ProfileUpdatePage from "./components/ProfileUpdate";
import UserProfilePage from "./components/ViewProfile";
import ResumeGenerationPage from "./components/GenerateResume";
import CoverLetterGenerationPage from "./components/GenerateCoverLetter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />} />
        <Route path="/view-profile" element={<UserProfilePage />} />
        <Route path="/generate-resume" element={<ResumeGenerationPage />} />
        <Route path="/generate-cover-letter" element={<CoverLetterGenerationPage />} />
      </Routes>
    </Router>
  );
};

export default App;