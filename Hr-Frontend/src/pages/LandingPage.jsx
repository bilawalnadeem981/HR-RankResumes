import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Workflow from '../components/landing/Workflow';
import CTA from '../components/landing/CTA';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div id="hero"><Hero /></div>
            <div id="features"><Features /></div>
            <div id="how-it-works"><Workflow /></div>
            <div id="results"><CTA /></div>
            <Footer />
        </div>
    );
};

export default LandingPage;
