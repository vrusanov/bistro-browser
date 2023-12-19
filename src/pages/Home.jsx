import React, { Fragment } from "react";
import Header from "../components/header/Header";
import PopularMenuList from "../components/PopularMenuList/PopularMenuList";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <PopularMenuList />
    </Fragment>
  );
};

export default Home;
