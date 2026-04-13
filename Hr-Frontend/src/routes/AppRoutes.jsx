import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
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

const AppRoutes = () => {
    useScrollToTop();

    return (
        <Routes>
            {/* ------------------ PUBLIC ROUTES ------------------ */}
            <Route element={<PublicLayout />}>
                {/* Landing page with Features preview section */}
                <Route path="/" element={<LandingPage />} />

                {/* Signup / Login */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Features pages */}
                <Route path="/features" element={<FeaturesListPage />} /> {/* Full features list page */}
                <Route path="/features/:id" element={<FeatureDetailPage />} /> {/* Single feature detail page */}

                {/* How It Works pages */}
                <Route path="/how-it-works" element={<HowItWorksListPage />} />
                <Route path="/how-it-works/:id" element={<HowItWorksDetailPage />} />

                {/* Results pages */}
                <Route path="/results" element={<ResultsListPage />} />
                <Route path="/results/:id" element={<ResultDetailPage />} />
            </Route>

            {/* ------------------ DASHBOARD ROUTES ------------------ */}
            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/resumes" element={<ResumePage />} />
                <Route path="/jobs" element={<JobPage />} />
                <Route path="/candidates" element={<CandidatesPage />} />
                <Route path="/analysis" element={<AIAnalysisPage />} />
                <Route path="/shortlisted" element={<ShortlistedPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;