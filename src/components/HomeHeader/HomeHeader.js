import React from "react";
import PropTypes from "prop-types";
import profileImage from "images/home/profile-image.jpg";
import { Header, Img } from "./HomeHeader.css";
import { PageInfo } from "components";

// Header strony glownej (pages->Home) -> zdjecie,przywitanie, menu
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
HomeHeader.propTypes = {
  menuItems: PropTypes.array,
};
export default HomeHeader;
