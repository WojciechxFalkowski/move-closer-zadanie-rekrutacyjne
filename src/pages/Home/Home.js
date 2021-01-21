import React, { useState } from "react";
import { Wrapper, CardsWrapper } from "./Home.css";
import { HomeHeader, Card, AddNewRoom } from "components";
const Home = ({ cards, hangleChangeActiveDevices, handleAddRoom }) => {
  const [isActiveAddingRoom, setIsActiveAddingRoom] = useState("Rooms");
  const [isGoToSleep, setIsGoToSleep] = useState(false);
  const handleGoToSleep = () => {
    setIsGoToSleep(!isGoToSleep);
  };
  const menuItems = [
    { text: "Rooms", onClick: setIsActiveAddingRoom },
    { text: "Add room", onClick: setIsActiveAddingRoom },
    { text: "Go to sleep", onClick: handleGoToSleep },
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
            defaultBar={menuItems[0].text}
          />
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
