import React from "react";
import { Wrapper, Span, DataWrapper, Title, Paragraph } from "./RoomCard.css";
import { SwitchButton } from "components";
const RoomCard = ({
  id,
  icon,
  title,
  text,
  active,
  cardTitleId,
  hangleChangeActiveDevices,
}) => {
  return (
    <Wrapper>
      <Span>{icon}</Span>
      <DataWrapper>
        <div>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </div>
        <SwitchButton
          isActiveRoom={active}
          hangleChangeActiveDevices={hangleChangeActiveDevices}
          id={id}
          cardTitleId={cardTitleId}
        />
      </DataWrapper>
    </Wrapper>
  );
};

export default RoomCard;
