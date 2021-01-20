import React, { useState } from "react";
import { Section, CardsWrapper } from "./Home.css";
import { HomeHeader, Card, AddNewRoom } from "components";
const Home = ({ cards, hangleChangeActiveDevices, handleAddRoom }) => {
  const menuItems = ["Rooms", "Add room"];
  const [isActiveAddingRoom, setIsActiveAddingRoom] = useState(menuItems[0]);
  return (
    <Section>
      <HomeHeader
        menuItems={menuItems}
        setIsActiveAddingRoom={setIsActiveAddingRoom}
      />
      <CardsWrapper>
        {isActiveAddingRoom === menuItems[0] ? (
          cards.map((card) => (
            <Card
              key={card.title}
              {...card}
              hangleChangeActiveDevices={hangleChangeActiveDevices}
            />
          ))
        ) : (
          <AddNewRoom
            cards={cards}
            handleAddRoom={handleAddRoom}
            setIsActiveAddingRoom={setIsActiveAddingRoom}
            defaultBar={menuItems[0]}
          />
        )}
      </CardsWrapper>
    </Section>
  );
};

export default Home;
