import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Oops! The page you're looking for seems to have floated away like a bubble.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                        Return Home
                    </Link>
                </div>
                <div className="mt-6">
                    <img
                        src="/assets/images/logo.png"
                        alt="Bubble House Rentals"
                        className="mx-auto h-12 w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound; 