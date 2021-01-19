import React, { useState } from "react";
import { Section, CardsWrapper } from "./Home.css";
import { HomeHeader, Card } from "components";
const Home = () => {
  const [cards, setCards] = useState([
    {
      id: "living-room",
      title: "Living Room",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
        {
          icon: "",
          title: "Air Conditioner",
          text: "24°C Temperature",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "Fridge",
          text: "5°C Temperature",
          remoteControl: false,
          active: true,
        },
        {
          icon: "",
          title: "CCTV Cam.",
          text: "Left/Right 96,4 ° & Up/Down: 86.2°",
          remoteControl: true,
          active: false,
        },
      ],
    },
    {
      id: "bed-room",
      title: "Bed Room",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
      ],
    },
    {
      id: "guest-room",
      title: "Guest Room",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
      ],
    },
    {
      id: "kitchen",
      title: "Kitchen",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
      ],
    },
    {
      id: "kids-room",
      title: "Kids Room",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
      ],
    },
    {
      id: "balcony",
      title: "Balcony",
      text: "3 family members have access",
      devices: [
        {
          icon: "",
          title: "CCTV Cam.",
          text: "Left/Right 96,4 ° & Up/Down: 86.2°",
          remoteControl: true,
          active: false,
        },
        {
          icon: "",
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
      ],
    },
  ]);
  const handleChange = (id, toggle) => {
    const [filteredCard] = cards.filter((card) => card.id === id);
    filteredCard.devices.forEach((device) => {
      if (device.remoteControl) {
        device.active = toggle;
      }
    });
    setCards([...cards]);
  };
  return (
    <Section>
      <HomeHeader />
      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.title} {...card} handleChange={handleChange} />
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default Home;
