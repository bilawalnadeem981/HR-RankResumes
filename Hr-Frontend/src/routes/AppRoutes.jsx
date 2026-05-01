import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from '../pages/LandingPage';
import SignupPage from '../pages/auth/SignupPage';
import LoginPage from "../pages/auth/LoginPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import UploadPage from "../pages/dashboard/UploadPage";
import ResumePage from "../pages/dashboard/ResumePage";
import JobPage from "../pages/dashboard/JobPage";
import CandidatesPage from "../pages/dashboard/CandidatesPage";
import AIAnalysisPage from "../pages/dashboard/AIAnalysisPage";
import ShortlistedPage from "../pages/dashboard/ShortlistedPage";
import SettingsPage from "../pages/dashboard/SettingsPage";
import UsersPage from "../pages/dashboard/UsersPage";

import FeatureDetailPage from "../pages/FeatureDetailPage";
import FeaturesListPage from "../pages/FeaturesListPage";
import HowItWorksDetailPage from "../pages/HowItWorksDetailPage";
import HowItWorksListPage from "../pages/HowItWorksListPage";
import ResultDetailPage from "../pages/ResultDetailPage";
import ResultsListPage from "../pages/ResultsListPage";

// Layouts
import PublicLayout from '../components/layout/PublicLayout';
import DashboardLayout from '../components/layout/DashboardLayout';

// Utils
import { useScrollToTop } from "../utils/common/scroll";

import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

const AppRoutes = () => {
    useScrollToTop();

    return (
        <Routes>
            {/* ------------------ PUBLIC ROUTES ------------------ */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<LandingPage />} />

                {/* Signup / Login */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Features pages */}
                <Route path="/features" element={<FeaturesListPage />} />
                <Route path="/features/:id" element={<FeatureDetailPage />} />

                {/* How It Works pages */}
                <Route path="/how-it-works" element={<HowItWorksListPage />} />
                <Route path="/how-it-works/:id" element={<HowItWorksDetailPage />} />

                {/* Results pages */}
                <Route path="/results" element={<ResultsListPage />} />
                <Route path="/results/:id" element={<ResultDetailPage />} />
            </Route>

            {/* ------------------ PROTECTED DASHBOARD ROUTES ------------------ */}
            <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    
                    {/* Admin Only Routes */}
                    <Route element={<AdminRoute />}>
                        <Route path="/upload" element={<UploadPage />} />
                        <Route path="/resumes" element={<ResumePage />} />
                        <Route path="/jobs" element={<JobPage />} />
                        <Route path="/candidates" element={<CandidatesPage />} />
                        <Route path="/analysis" element={<AIAnalysisPage />} />
                        <Route path="/shortlisted" element={<ShortlistedPage />} />
                        <Route path="/users" element={<UsersPage />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};



export default AppRoutes;