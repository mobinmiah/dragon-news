import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, category_id } = news;

  return (
    <div className="border border-base-300 p-8 rounded-xl">
      <div>
        <img
          className="w-full h-[350px] rounded-xl object-cover"
          src={image_url}
          alt=""
        />
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-3xl text-primary">{title}</h2>
      </div>

      <div className="mt-2">
        <p>{details}</p>
      </div>

      <div className="mt-8">
        <Link
          to={`/categories/${category_id}`}
          className="bg-secondary text-white text-xl px-6 py-3 font-medium hover:bg-[#b01c44] transition duration-300 flex items-center gap-2 max-w-fit"
        >
          <FaArrowLeftLong />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
