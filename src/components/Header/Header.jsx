import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-12">
      <img className="mx-auto max-w-96" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="font-bold text-accent">{format(new Date(),'eeee, MMMM MM, yyyy ')}</p>
    </div>
  );
};

export default Header;
