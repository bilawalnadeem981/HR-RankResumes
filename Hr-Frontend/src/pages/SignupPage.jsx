import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-violet-50">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 py-32 sm:px-6 lg:px-8 relative overflow-hidden">
                <SignupForm />
            </main>
            <Footer />
        </div>
    );
};

export default SignupPage;