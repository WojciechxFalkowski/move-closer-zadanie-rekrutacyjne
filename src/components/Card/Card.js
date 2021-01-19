import React from "react";
import { CardWrapper, Title, Paragraph, DevicesNumber } from "./Card.css";
import { SwitchButton } from "components";
const Card = ({ id, title, text, devices, handleChange }) => {
  const isActiveRoom =
    devices.filter((device) => device.active && device.remoteControl).length > 0
      ? true
      : false;
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <DevicesNumber href={`/${id}`}>{devices.length} Devices</DevicesNumber>
      <SwitchButton
        isActiveRoom={isActiveRoom}
        id={id}
        handleChange={handleChange}
      />
    </CardWrapper>
  );
};

export default Card;
