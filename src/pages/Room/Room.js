import React, { useState } from "react";
import { Section, CardsWrapper } from "./Room.css";
import { RoomHeader, RoomCard, AddNewDevice } from "components";
const Room = ({
  card,
  hangleChangeActiveDevices,
  handleSlider,
  handleAddDevice,
}) => {
  const menuItems = ["Devices", "Add device"];
  const [isActiveAddingDevice, setIsActiveAddingDevice] = useState(
    menuItems[0]
  );

  return (
    <Section>
      <RoomHeader
        cardTitleId={card.id}
        title={card.title}
        text={card.text}
        isActiveAddingDevice={isActiveAddingDevice}
        setIsActiveAddingDevice={setIsActiveAddingDevice}
        menuItems={menuItems}
      />
      <CardsWrapper>
        {isActiveAddingDevice === "Devices" ? (
          card.devices.map((device) => (
            <RoomCard
              key={device.title}
              {...device}
              cardTitleId={card.id}
              hangleChangeActiveDevices={hangleChangeActiveDevices}
              handleSlider={handleSlider}
            />
          ))
        ) : (
          <AddNewDevice
            devices={card.devices}
            cardTitleId={card.id}
            handleAddDevice={handleAddDevice}
            setIsActiveAddingDevice={setIsActiveAddingDevice}
            defaultRoom={menuItems[0]}
          />
        )}
      </CardsWrapper>
    </Section>
  );
};

export default Room;
