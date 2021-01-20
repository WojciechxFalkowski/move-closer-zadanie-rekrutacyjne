import React from "react";
import { Section, CardsWrapper } from "./Room.css";
import { RoomHeader, RoomCard } from "components";
const Room = ({ card, hangleChangeActiveDevices }) => {
  console.log("card", card);
  return (
    <Section>
      <RoomHeader title={card.title} text={card.text} />
      <CardsWrapper>
        {card.devices.map((device) => (
          <RoomCard
            key={device.title}
            {...device}
            cardTitleId={card.id}
            hangleChangeActiveDevices={hangleChangeActiveDevices}
          />
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default Room;
