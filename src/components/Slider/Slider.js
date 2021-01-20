import React from "react";
import { Wrapper, Range } from "./Slider.css";
const Slider = ({
  min = 0,
  max = 15,
  value,
  cardTitleId,
  device,
  sliderId,
  handleSlider,
}) => {
  return (
    <Wrapper>
      <Range
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) =>
          handleSlider(e.target.value, cardTitleId, device, sliderId)
        }
      />
    </Wrapper>
  );
};

export default Slider;
