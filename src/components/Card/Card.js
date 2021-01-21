import React from "react";
import { CardWrapper, Title, Paragraph, DevicesNumber } from "./Card.css";
import { SwitchButton } from "components";
const Card = ({
  id,
  title,
  text,
  devices,
  hangleChangeActiveDevices,
  isGoToSleep,
}) => {
  const isActiveRoom =
    devices.filter((device) => device.active && device.remoteControl).length > 0
      ? true
      : false;

  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <DevicesNumber to={`/${id}`}>
        {devices.length + (devices.length === 1 ? " Device" : " Devices")}
      </DevicesNumber>
      <SwitchButton
        isActiveRoom={isActiveRoom}
        id={id}
        hangleChangeActiveDevices={hangleChangeActiveDevices}
        isGoToSleep={isGoToSleep}
      />
    </CardWrapper>
  );
};

export default Card;
