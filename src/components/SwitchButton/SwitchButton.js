import React from "react";

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./SwitchButton.css";

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

export default SwitchButton;
