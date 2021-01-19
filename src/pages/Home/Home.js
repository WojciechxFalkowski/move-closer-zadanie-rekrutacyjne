import React from "react";
import { Section, CardsWrapper } from "./Home.css";
import { HomeHeader, Card } from "components";
const Home = ({ cards, hangleChangeActiveDevices }) => {
  return (
    <Section>
      <HomeHeader />
      <CardsWrapper>
        {cards.map((card) => (
          <Card
            key={card.title}
            {...card}
            hangleChangeActiveDevices={hangleChangeActiveDevices}
          />
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default Home;
