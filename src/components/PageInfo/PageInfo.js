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
} from "./PageInfo.css";
import { AiOutlineSetting } from "react-icons/ai";
const PageInfo = ({ title, text, menuItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShowMenu = () => {
    setIsVisible(!isVisible);
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
            <MenuItem key={menuItem.id} href={`/${menuItem.id}`}>
              {menuItem.text}
            </MenuItem>
          ))}
        </DropdownContent>
      </SettingsWrapper>
    </Wrapper>
  );
};

export default PageInfo;
