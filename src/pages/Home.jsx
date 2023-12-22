import React from "react";
import Header from "../components/Header/index";
import PopularMenuList from "../components/PopularMenuList/index";
import ChooseUs from "../components/ChooseUs/index";
import MenuList from "../components/MenuList/index";
import TestImonials from "../components/TestImonials/index";
import DownloadSection from "../components/DownloadSection/index";

const Home = () => {
  return (
    <>
      <Header />
      <PopularMenuList />
      <ChooseUs />
      <MenuList />
      <TestImonials />
      <DownloadSection />
    </>
  );
};

export default Home;
