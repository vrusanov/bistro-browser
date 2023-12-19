import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import PopularMenuList from "../components/PopularMenuList/PopularMenuList";
import ChooseUs from "../components/ChooseUs/ChooseUs";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <PopularMenuList />
      <ChooseUs />
    </Fragment>
  );
};

export default Home;
