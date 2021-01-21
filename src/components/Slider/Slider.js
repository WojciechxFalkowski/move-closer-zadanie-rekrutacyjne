import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Range } from "./Slider.css";
// komponent do wywietlania slidera czyli podluznego suwaka i zmieniajaca jego wartosc po przesunieciu
const Slider = ({
  min,
  max,
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
        onChange={
          (e) =>
            handleSlider(Number(e.target.value), cardTitleId, device, sliderId) //wartosc e.targer.value jest typu string, zeby zgadzaly sie wartosci przekazywane to konwertuje na number
        }
      />
    </Wrapper>
  );
};
Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  cardTitleId: PropTypes.string,
  device: PropTypes.string,
  sliderId: PropTypes.string,
  handleSlider: PropTypes.func,
};
export default Slider;
