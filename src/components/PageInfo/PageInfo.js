import React, { useState } from "react";
import {
  ProfileWrapperInfo,
  Wrapper,
  H1,
  Paragraph,
  SettingsWrapper,
  Button,
  DropdownContent,
  MenuItem,
  InvisibleWrapper,
} from "./PageInfo.css";
import { AiOutlineSetting } from "react-icons/ai";
const PageInfo = ({ title, text, menuItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };
  const handleMenuItem = (menuItem) => {
    setIsVisible(!isVisible);
    menuItem.onClick(menuItem.text);
  };
  return (
    <Wrapper>
      <ProfileWrapperInfo>
        <H1>{title}</H1>
        <Paragraph>{text}</Paragraph>
      </ProfileWrapperInfo>
      <SettingsWrapper>
        <Button onClick={handleShowMenu}>
          <AiOutlineSetting />
        </Button>
        <DropdownContent isVisible={isVisible}>
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.text}
              onClick={() => handleMenuItem(menuItem)}
            >
              {menuItem.text}
            </MenuItem>
          ))}
        </DropdownContent>
        <InvisibleWrapper
          isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        />
      </SettingsWrapper>
    </Wrapper>
  );
};

export default PageInfo;
