import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import notFoundAnimation from '../assets/lottie/404.json'; // Imported downloaded Lottie file

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            {/* Lottie Animation */}
            <Lottie animationData={notFoundAnimation} loop={true} className="w-80 h-80" />

            {/* 404 Text */}
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-6">
                404 - Page Not Found
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
