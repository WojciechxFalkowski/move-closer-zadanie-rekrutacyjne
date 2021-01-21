import React from "react";
import PropTypes from "prop-types";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./SwitchButton.css";

// komponent do zmiany stanu w Home i w Room (wszystkich urzadzen z remoteControl = true / pojedynczego urzadzenia w pokoju)
const SwitchButton = ({
  cardTitleId,
  isActiveRoom,
  hangleChangeActiveDevices,
  id,
  isGoToSleep,
}) => {
  const handleSwitchToggle = () => {
    if (isGoToSleep) {
      setTimeout(() => {
        hangleChangeActiveDevices(cardTitleId, id, !isActiveRoom);
      }, 15000);
    } else {
      hangleChangeActiveDevices(cardTitleId, id, !isActiveRoom);
    }
  };
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isActiveRoom}
        onChange={handleSwitchToggle}
      />
      <CheckBoxLabel htmlFor={id} isActiveRoom={isActiveRoom} />
    </CheckBoxWrapper>
  );
};
SwitchButton.propTypes = {
  cardTitleId: PropTypes.string,
  isActiveRoom: PropTypes.bool,
  hangleChangeActiveDevices: PropTypes.func,
  id: PropTypes.string,
  isGoToSleep: PropTypes.bool,
};
export default SwitchButton;
