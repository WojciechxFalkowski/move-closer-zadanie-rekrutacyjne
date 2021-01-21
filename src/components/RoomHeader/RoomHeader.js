import React from "react";
import {
  Header,
  HeaderWrapper,
  Button,
  MeasurementWrapper,
} from "./RoomHeader.css";
import { PageInfo, Measurement } from "components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { RiTempHotLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const RoomHeader = ({ title, text, setIsActiveAddingDevice, menuItems }) => {
  const history = useHistory();
  const measurementInfo = [
    { icon: <RiTempHotLine />, value: "24°C", text: "Temp" },
    { icon: <WiHumidity />, value: "50%", text: "Humidity" },
  ];

  return (
    <Header>
      <HeaderWrapper>
        <Button onClick={() => history.goBack()}>
          <AiOutlineArrowLeft />
        </Button>
        <PageInfo
          title={title}
          text={text}
          menuItems={menuItems}
          onClick={setIsActiveAddingDevice}
        />
        <MeasurementWrapper>
          {measurementInfo.map((measurementItem) => (
            <Measurement key={measurementItem.text} {...measurementItem} />
          ))}
        </MeasurementWrapper>
      </HeaderWrapper>
    </Header>
  );
};

export default RoomHeader;
