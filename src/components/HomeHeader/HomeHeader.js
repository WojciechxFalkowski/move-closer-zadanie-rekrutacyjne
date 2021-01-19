import React from "react";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img, H1, Paragraph } from "./HomeHeader.css";
const HomeHeader = () => {
  return (
    <Header>
      <Img src={profileImage} alt="Profile face" />
      <H1>Hi Samuel</H1>
      <Paragraph>Welcome to Home</Paragraph>
    </Header>
  );
};

export default HomeHeader;
