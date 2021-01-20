import theme from "theme/theme";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Room } from "pages";
import GlobalStyles from "./index.css";
import { GiFlexibleLamp } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { BiFridge, BiCctv, BiWind } from "react-icons/bi";
function App() {
  const [cards, setCards] = useState([
    {
      id: "living-room",
      title: "Living Room",
      text: "3 family members have access",
      devices: [
        {
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          sliderSettings: [
            {
              id: "brightness",
              text: "% brightness",
              min: 0,
              max: 100,
              value: 65,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
          remoteControl: true,
          active: false,
        },
        {
          id: "airconditioner",
          icon: <BiWind />,
          title: "Air Conditioner",
          sliderSettings: [
            {
              id: "temperaute",
              text: "°C Temperature",
              min: -20,
              max: 20,
              value: 24,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "fridge",
          icon: <BiFridge />,
          title: "Fridge",
          sliderSettings: [
            {
              id: "temperature",
              text: "°C Temperature",
              min: -10,
              max: 10,
              value: 5,
            },
          ],
          remoteControl: false,
          active: true,
        },
        {
          id: "camera",
          icon: <BiCctv />,
          sliderSettings: [
            {
              id: "leftright",
              text: "Left/Right ",
              min: 0,
              max: 180,
              value: 96,
            },
            { id: "updown", text: " & Up/Down ", min: 0, max: 180, value: 96 },
          ],
          title: "CCTV Cam.",
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          sliderSettings: [
            {
              id: "brightness",
              text: "% brightness",
              min: 0,
              max: 100,
              value: 65,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          sliderSettings: [
            {
              id: "brightness",
              text: "% brightness",
              min: 0,
              max: 100,
              value: 65,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          sliderSettings: [
            {
              id: "brightness",
              text: "% brightness",
              min: 0,
              max: 100,
              value: 65,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          sliderSettings: [
            {
              id: "brightness",
              text: "% brightness",
              min: 0,
              max: 100,
              value: 65,
            },
          ],
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
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
          id: "camera",
          icon: <BiCctv />,
          sliderSettings: [
            {
              id: "leftright",
              text: "Left/Right ",
              min: 0,
              max: 180,
              value: 96,
            },
            { id: "updown", text: " & Up/Down ", min: 0, max: 180, value: 96 },
          ],
          title: "CCTV Cam.",
          remoteControl: true,
          active: false,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          sliderSettings: [
            { id: "volume", text: "% Volume", min: 0, max: 100, value: 37 },
          ],
          remoteControl: true,
          active: false,
        },
      ],
    },
  ]);
  const hangleChangeActiveDevices = (cardTitleId = "", id, toggle) => {
    if (cardTitleId === "") {
      const [filteredCard] = cards.filter((card) => card.id === id);
      filteredCard.devices.forEach((device) => {
        if (device.remoteControl) {
          device.active = toggle;
        }
      });
    } else {
      const [filteredCard] = cards.filter((card) => card.id === cardTitleId);
      const [filteredDevice] = filteredCard.devices.filter(
        (card) => card.id === id
      );
      filteredDevice.active = toggle;
    }
    setCards([...cards]);
  };
  const handleSlider = (value, cardTitleId, device, sliderId) => {
    const [filteredCard] = cards.filter((card) => card.id === cardTitleId);
    const [filteredDevices] = filteredCard.devices.filter(
      (card) => card.id === device
    );
    const [filteredDevice] = filteredDevices.sliderSettings.filter(
      (device) => device.id === sliderId
    );
    filteredDevice.value = value;
    setCards([...cards]);
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/new">
              <div>Dodaj pokój</div>
            </Route>
            {cards.map((card) => (
              <Route key={card.title} path={`/${card.id}`}>
                <Room
                  card={card}
                  hangleChangeActiveDevices={hangleChangeActiveDevices}
                  handleSlider={handleSlider}
                />
              </Route>
            ))}
            <Route path="/">
              <Home
                cards={cards}
                hangleChangeActiveDevices={hangleChangeActiveDevices}
              />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
