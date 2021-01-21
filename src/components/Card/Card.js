import React from "react";
import PropTypes from "prop-types";
import { CardWrapper, Title, Paragraph, DevicesNumber } from "./Card.css";
import { SwitchButton } from "components";

//komponent budujacy kazdy pojedynczy kafelek pokoju na stronie glownej
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
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  devices: PropTypes.array,
  hangleChangeActiveDevices: PropTypes.func,
  isGoToSleep: PropTypes.bool,
};
export default Card;
