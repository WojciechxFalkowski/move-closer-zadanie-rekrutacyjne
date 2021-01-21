import React, { useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, CardsWrapper } from "./Home.css";
import { HomeHeader, Card, AddNewRoom } from "components";
const Home = ({ cards, hangleChangeActiveDevices, handleAddRoom }) => {
  const [isActiveAddingRoom, setIsActiveAddingRoom] = useState("Rooms"); // sluzy do zamiany komponentow (lista pokoi / dodaj nowy pokoj) na podstawie menu
  const [isGoToSleep, setIsGoToSleep] = useState(false); //
  //Funkcja 'Go to sleep' - opóźnienie wyłączenia wszystkich pomieszczeń po 15 sekundach
  //wedlug wiadomosci zrozumialem, ze tylko w panelu home (panel wszystkich pomieszczen) ma byc opozniona aktywacja/dezaktywacja
  const handleGoToSleep = () => {
    setIsGoToSleep(!isGoToSleep);
  };
  // opcje w menu wraz z przypisanymi do nich funkcjami
  const menuItems = [
    { text: "Rooms", onClick: setIsActiveAddingRoom },
    { text: "Add room", onClick: setIsActiveAddingRoom },
    {
      text: isGoToSleep ? "Wake up" : "Go to sleep", //operator trojargumentowy
      onClick: handleGoToSleep,
    },
  ];
  return (
    <Wrapper>
      <HomeHeader menuItems={menuItems} />
      <CardsWrapper>
        {isActiveAddingRoom === menuItems[0].text ? (
          cards.map((card) => (
            <Card
              key={card.title}
              {...card}
              hangleChangeActiveDevices={hangleChangeActiveDevices}
              isGoToSleep={isGoToSleep}
            />
          ))
        ) : (
          <AddNewRoom
            cards={cards}
            handleAddRoom={handleAddRoom}
            setIsActiveAddingRoom={setIsActiveAddingRoom}
            defaultBar={menuItems[0].text} // po kliknieciu dodania pokoju pozwala wrocic do strony glownej z wszystkimi pokojami
          />
        )}
      </CardsWrapper>
    </Wrapper>
  );
};
Home.propTypes = {
  cards: PropTypes.array,
  hangleChangeActiveDevices: PropTypes.func,
  handleAddRoom: PropTypes.func,
};
export default Home;
