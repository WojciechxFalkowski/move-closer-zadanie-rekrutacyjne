import React, { useState } from "react";
import PropTypes from "prop-types";
import { Section, CardsWrapper } from "./Room.css";
import { RoomHeader, RoomCard, AddNewDevice } from "components";
const Room = ({
  card,
  hangleChangeActiveDevices,
  handleSlider,
  handleAddDevice,
}) => {
  const [isActiveAddingDevice, setIsActiveAddingDevice] = useState("Devices"); // sluzy do zamiany komponentow (lista urzadzen / dodaj nowe urzadzenie) na podstawie menu
  // opcje w menu wraz z przypisanymi do nich funkcjami (tutaj akurat sa takie same funkcje ale latwa mozliwosc dalszego rozwoju)
  const menuItems = [
    { text: "Devices", onClick: setIsActiveAddingDevice },
    { text: "Add device", onClick: setIsActiveAddingDevice },
  ];

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
            defaultRoom={menuItems[0].text}
          />
        )}
      </CardsWrapper>
    </Section>
  );
};
RoomCard.propTypes = {
  card: PropTypes.object,
  hangleChangeActiveDevices: PropTypes.func,
  handleSlider: PropTypes.func,
  handleAddDevice: PropTypes.func,
};
export default Room;
