import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-4">
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
