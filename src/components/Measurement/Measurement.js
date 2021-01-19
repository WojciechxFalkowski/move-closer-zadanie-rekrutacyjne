import React from "react";
import {
  Wrapper,
  Span,
  ValueWrapper,
  ValueParagraph,
  TextParagraph,
} from "./Measurement.css";
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

export default Measurement;
