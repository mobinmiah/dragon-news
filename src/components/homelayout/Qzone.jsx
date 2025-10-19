import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-semibold text-xl text-primary mb-5">Qzone</h2>
      <div className="">
        <img className="w-full" src={swimmingImg} alt="" />
        <img className="w-full" src={classImg} alt="" />
        <img className="w-full" src={playGroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
