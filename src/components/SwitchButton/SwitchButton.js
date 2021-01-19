import React from "react";

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./SwitchButton.css";

const SwitchButton = ({ isActiveRoom, hangleChangeActiveDevices, id }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isActiveRoom}
        onChange={() => hangleChangeActiveDevices(id, !isActiveRoom)}
      />
      <CheckBoxLabel
        htmlFor={id}
        isActiveRoom={isActiveRoom}
        onChange={() => hangleChangeActiveDevices(id, !isActiveRoom)}
      />
    </CheckBoxWrapper>
  );
};

export default SwitchButton;
