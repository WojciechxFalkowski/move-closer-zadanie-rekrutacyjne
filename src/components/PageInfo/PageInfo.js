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
const PageInfo = ({ title, text, menuItems, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };
  const handleMenuItem = (menuItem) => {
    setIsVisible(!isVisible);
    onClick(menuItem);
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
            <MenuItem key={menuItem} onClick={() => handleMenuItem(menuItem)}>
              {menuItem}
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
