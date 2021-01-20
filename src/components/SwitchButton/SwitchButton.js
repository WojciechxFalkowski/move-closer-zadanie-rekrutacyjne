import React from "react";

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./SwitchButton.css";

const SwitchButton = ({
  cardTitleId,
  isActiveRoom,
  hangleChangeActiveDevices,
  id,
}) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isActiveRoom}
        onChange={() =>
          hangleChangeActiveDevices(cardTitleId, id, !isActiveRoom)
        }
      />
      <CheckBoxLabel htmlFor={id} isActiveRoom={isActiveRoom} />
    </CheckBoxWrapper>
  );
};

export default SwitchButton;
