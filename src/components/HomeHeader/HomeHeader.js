import React from "react";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img } from "./HomeHeader.css";
import { PageInfo } from "components";
const HomeHeader = ({ menuItems, setIsActiveAddingRoom }) => {
  const profileInfo = {
    title: "Hi Samuel",
    text: "Welcome to Home",
  };
  return (
    <Header>
      <Img src={profileImage} alt="Profile face" />
      <PageInfo
        {...profileInfo}
        menuItems={menuItems}
        onClick={setIsActiveAddingRoom}
      />
    </Header>
  );
};

export default HomeHeader;
