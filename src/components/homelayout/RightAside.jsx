import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import Adds from "./Adds";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <Adds></Adds>
    </div>
  );
};

export default RightAside;
