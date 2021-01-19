import React from "react";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img } from "./HomeHeader.css";
import { PageInfo } from "components";
const HomeHeader = () => {
  const profileInfo = {
    title: "Hi Samuel",
    text: "Welcome to Home",
    menuItems: [{ id: "new", text: "Dodaj pokój" }],
  };
  return (
    <Header>
      <Img src={profileImage} alt="Profile face" />
      <PageInfo {...profileInfo} />
    </Header>
  );
};

export default HomeHeader;
