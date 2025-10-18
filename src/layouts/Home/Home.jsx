import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Header></Header>
        <section>
            <LatestNews></LatestNews>
        </section>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Home;
