import React from "react";

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./SwitchButton.css";

const SwitchButton = ({ isActiveRoom, handleChange, id }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isActiveRoom}
        onChange={() => handleChange(id, !isActiveRoom)}
      />
      <CheckBoxLabel
        htmlFor={id}
        isActiveRoom={isActiveRoom}
        onChange={() => handleChange(id, !isActiveRoom)}
      />
    </CheckBoxWrapper>
  );
};

export default SwitchButton;
