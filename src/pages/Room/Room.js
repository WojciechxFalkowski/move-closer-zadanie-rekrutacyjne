import React from "react";
import { Section } from "./Room.css";
import { RoomHeader } from "components";
const Room = ({ card }) => {
  console.log("card", card);
  return (
    <Section>
      <RoomHeader title={card.title} text={card.text} />
    </Section>
  );
};

export default Room;
