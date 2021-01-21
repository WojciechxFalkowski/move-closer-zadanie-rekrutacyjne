import React, { useState } from "react";
import PropTypes from "prop-types";
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
// Komponent wyswietlajacy podstawowe dane o stronie (nazwa pokoju / przywitania wraz z menu)
const PageInfo = ({ title, text, menuItems }) => {
  const [isVisible, setIsVisible] = useState(false); // sluzy do otwierania menu
  //funkcja do otwierania menu, robi tylko jedna czynnos wiec mozna bylo przypiac setIsVisible(!isVisible) do buttona jako funkcje strzalkowa
  //ale wole zapis funkcji "handle..."(wydaje mi sie, ze jest lepsza czytelnosc)
  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };
  //funkcja, ktora wykonuje sie po kliknieciu w dany przycisk w menu (zamyka menu i cos jeszcze w zaleznosci od kliknietego przycisku)
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
PageInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  menuItems: PropTypes.array,
};
export default PageInfo;
