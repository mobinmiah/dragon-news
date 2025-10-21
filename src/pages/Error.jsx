import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fff5f7] text-center px-4">
      <h1 className="text-9xl font-extrabold text-[#D72050] drop-shadow-lg">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-6">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mt-3 max-w-md">
        The page you’re looking for doesn’t exist, has been moved, or is
        temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-[#D72050] text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-[#b01c44] transition duration-300 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
