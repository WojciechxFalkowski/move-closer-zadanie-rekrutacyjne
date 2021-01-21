import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Wrapper,
  Span,
  DataWrapper,
  Title,
  Paragraph,
} from "./RoomCard.css";
import { SwitchButton, Slider } from "components";

//komponent wyswietlajacy pojedyncze urzadzenie w pokoju
const RoomCard = ({
  id,
  icon,
  title,
  sliderSettings,
  active,
  cardTitleId,
  hangleChangeActiveDevices,
  handleSlider,
}) => {
  return (
    <Container>
      <Wrapper>
        <Span>{icon}</Span>
        <DataWrapper>
          <div>
            <Title>{title}</Title>
            <Paragraph>
              {sliderSettings.map(
                (slider) =>
                  `${
                    id === "camera"
                      ? `${slider.text + slider.value}°`
                      : `${slider.value + slider.text}`
                  }`
              )}
            </Paragraph>
          </div>
          <SwitchButton
            isActiveRoom={active}
            hangleChangeActiveDevices={hangleChangeActiveDevices}
            id={id}
            cardTitleId={cardTitleId}
          />
        </DataWrapper>
      </Wrapper>
      {sliderSettings.map((slider) => (
        <Slider
          key={slider.id}
          min={slider.min}
          max={slider.max}
          value={slider.value}
          cardTitleId={cardTitleId}
          device={id}
          sliderId={slider.id}
          handleSlider={handleSlider}
        />
      ))}
    </Container>
  );
};
RoomCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  sliderSettings: PropTypes.array,
  active: PropTypes.bool,
  cardTitleId: PropTypes.string,
  hangleChangeActiveDevices: PropTypes.func,
  handleSlider: PropTypes.func,
};
export default RoomCard;
