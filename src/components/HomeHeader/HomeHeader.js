import React from "react";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img } from "./HomeHeader.css";
import { PageInfo } from "components";
const HomeHeader = () => {
  return (
    <Header>
      <Img src={profileImage} alt="Profile face" />
      <PageInfo />
    </Header>
  );
};

export default HomeHeader;
