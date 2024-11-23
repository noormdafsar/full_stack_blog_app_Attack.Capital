import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Blog Platform</h1>
          <p className="text-xl mb-8">Share your thoughts and connect with others</p>
          <div className="space-x-4">
            <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Sign In
            </Link>
            <Link to="/signup" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  };
  