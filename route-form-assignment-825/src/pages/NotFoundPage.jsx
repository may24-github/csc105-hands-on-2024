import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-900">404 Page Not Found</h1>
            <p className="mt-4 text-gray-600">Go back to the home page.</p>
            <Link
              to="/"
              className="mt-6 inline-block px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Home Page
            </Link>
          </div>
        </div>
      );
    
}

export default NotFoundPage;