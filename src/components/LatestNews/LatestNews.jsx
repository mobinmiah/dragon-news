import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 p-4 bg-base-200">
      <p className="text-base-100 font-semibold bg-secondary px-6 py-2">
        Latest
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="px-6 py-2 font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fuga
          error voluptate soluta nisi saepe numquam laboriosam molestias minus
          temporibus iure deleniti quidem ad
        </p>
        <p className="px-6 py-2 font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fuga
          error voluptate soluta nisi saepe numquam laboriosam molestias minus
          temporibus iure deleniti quidem ad
        </p>
        <p className="px-6 py-2 font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fuga
          error voluptate soluta nisi saepe numquam laboriosam molestias minus
          temporibus iure deleniti quidem ad
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
