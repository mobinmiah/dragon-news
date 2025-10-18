import React from 'react';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';

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

export default HomeLayout;