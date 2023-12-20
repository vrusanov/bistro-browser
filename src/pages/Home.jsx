import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import PopularMenuList from "../components/PopularMenuList/PopularMenuList";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import MenuList from "../components/MenuList";
import TestImonials from "../components/TestImonials/TestImonials";
import DownloadSection from "../components/DownloadSection/DownloadSection";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <PopularMenuList />
      <ChooseUs />
      <MenuList />
      <TestImonials />
      <DownloadSection />
    </Fragment>
  );
};

export default Home;
