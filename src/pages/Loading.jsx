import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#D72050]">
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-8 border-t-[#D72050] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-3 rounded-full border-4 border-[#D72050] opacity-30"></div>
      </div>

      <h2 className="text-2xl font-semibold tracking-wide animate-pulse">
        Loading Dragon News...
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Please wait while we breathe fire 🔥
      </p>
    </div>
  );
};

export default Loading;
