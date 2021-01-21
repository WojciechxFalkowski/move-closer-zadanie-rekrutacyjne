import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Span,
  ValueWrapper,
  ValueParagraph,
  TextParagraph,
} from "./Measurement.css";
// Komponent wyświetlajacy temperature i wilgotnosc
const Measurement = ({ icon, value, text }) => {
  return (
    <Wrapper>
      <Span>{icon}</Span>
      <ValueWrapper>
        <ValueParagraph>{value}</ValueParagraph>
        <TextParagraph>{text}</TextParagraph>
      </ValueWrapper>
    </Wrapper>
  );
};
Measurement.propTypes = {
  icon: PropTypes.element,
  value: PropTypes.string,
  text: PropTypes.string,
};
export default Measurement;
