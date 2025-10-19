import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-primary mb-5">Find Us On</h2>
      <div className="flex flex-col">
        {/* Facebook */}
        <button className="btn  w-full justify-start gap-3 hover:bg-blue-600 hover:text-white">
          <FaFacebookF className="text-blue-600 text-lg" />
          <span>Facebook</span>
        </button>

        {/* Twitter */}
        <button className="btn  w-full justify-start gap-3 hover:bg-sky-500 hover:text-white">
          <FaTwitter className="text-sky-500 text-lg" />
          <span>Twitter</span>
        </button>

        {/* Instagram */}
        <button className="btn  w-full justify-start gap-3 hover:bg-pink-500 hover:text-white">
          <FaInstagram className="text-pink-500 text-lg" />
          <span>Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
