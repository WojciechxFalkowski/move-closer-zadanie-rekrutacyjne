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
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          text: "37% Volume",
          remoteControl: true,
          active: false,
        },
        {
          id: "airconditioner",
          icon: <BiWind />,
          title: "Air Conditioner",
          text: "24°C Temperature",
          remoteControl: true,
          active: true,
        },
        {
          id: "fridge",
          icon: <BiFridge />,
          title: "Fridge",
          text: "5°C Temperature",
          remoteControl: false,
          active: true,
        },
        {
          id: "camera",
          icon: <BiCctv />,
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
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
          id: "lamp",
          icon: <GiFlexibleLamp />,
          title: "Lamp",
          text: "65% brightness",
          remoteControl: true,
          active: true,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
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
          id: "camera",
          icon: <BiCctv />,
          title: "CCTV Cam.",
          text: "Left/Right 96,4 ° & Up/Down: 86.2°",
          remoteControl: true,
          active: false,
        },
        {
          id: "tv",
          icon: <FiMonitor />,
          title: "TV",
          text: "37% Volume",
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
