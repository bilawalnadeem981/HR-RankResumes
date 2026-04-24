import SignupForm from '../../components/auth/SignupForm';


const SignupPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-violet-50">
            <main className="flex-grow flex items-center justify-center px-4 py-32 sm:px-6 lg:px-8 relative overflow-hidden">
                <SignupForm />
            </main>
        </div>
    );
};

export default SignupPage;