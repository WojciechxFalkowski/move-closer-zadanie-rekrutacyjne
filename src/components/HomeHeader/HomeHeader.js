import React from "react";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img } from "./HomeHeader.css";
import { PageInfo } from "components";
const HomeHeader = ({ menuItems }) => {
  return (
    <Header>
      <Img src={profileImage} alt="Profile face" />
      <PageInfo
        title={"Hi Samuel"}
        text={"Welcome to Home"}
        menuItems={menuItems}
      />
    </Header>
  );
};

export default HomeHeader;
