import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import UploadPage from "../pages/UploadPage";
import ResumePage from "../pages/ResumePage";
import JobPage from "../pages/JobPage";
import CandidatesPage from "../pages/CandidatesPage";
import AIAnalysisPage from "../pages/AIAnalysisPage";
import ShortlistedPage from "../pages/ShortlistedPage";
import SettingsPage from "../pages/SettingsPage";
import PublicLayout from '../components/layout/PublicLayout';
import DashboardLayout from '../components/layout/DashboardLayout';

import { useScrollToTop } from "../utils/common/scroll";

const AppRoutes = () => {
    useScrollToTop();
    
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/resumes" element={<ResumePage />} />
                <Route path="/jobs" element={<JobPage />} />
                <Route path="/candidates" element={<CandidatesPage/>} />
                <Route path="/analysis" element={<AIAnalysisPage />} />
                <Route path="/shortlisted" element={<ShortlistedPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;