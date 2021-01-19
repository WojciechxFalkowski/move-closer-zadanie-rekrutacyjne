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
const PageInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      <ProfileWrapperInfo>
        <H1>Hi Samuel</H1>
        <Paragraph>Welcome to Home</Paragraph>
      </ProfileWrapperInfo>
      <SettingsWrapper>
        <Button onClick={handleShowMenu}>
          <AiOutlineSetting />
        </Button>
        <DropdownContent isVisible={isVisible}>
          <MenuItem href="/new">Dodaj pokój</MenuItem>
        </DropdownContent>
      </SettingsWrapper>
    </Wrapper>
  );
};

export default PageInfo;
