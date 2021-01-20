import React from "react";
import { Header, Button, MeasurementWrapper } from "./RoomHeader.css";
import { PageInfo, Measurement } from "components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { RiTempHotLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const RoomHeader = ({ title, text }) => {
  const history = useHistory();
  const profileInfo = {
    title,
    text,
    menuItems: [{ id: "new", text: "Dodaj przedmiot" }],
  };
  const measurementInfo = [
    { icon: <RiTempHotLine />, value: "24°C", text: "Temp" },
    { icon: <WiHumidity />, value: "50%", text: "Humidity" },
  ];

  return (
    <Header>
      <Button onClick={() => history.goBack()}>
        <AiOutlineArrowLeft />
      </Button>
      <PageInfo {...profileInfo} />
      <MeasurementWrapper>
        {measurementInfo.map((measurementItem) => (
          <Measurement key={measurementItem.text} {...measurementItem} />
        ))}
      </MeasurementWrapper>
    </Header>
  );
};

export default RoomHeader;
