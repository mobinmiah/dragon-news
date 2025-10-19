import React from "react";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import LeftAside from "../../components/homelayout/LeftAside";
import RightAside from "../../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="mt-16 grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
