import theme from "theme/theme";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Room } from "pages";
import GlobalStyles from "./theme/index.css";
import dummyDataCards from "dummyData/dummyData";
function App() {
  const [cards, setCards] = useState(dummyDataCards);
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
  const handleAddDevice = (newDevice, cardTitleId) => {
    const [filteredCard] = cards.filter((card) => card.id === cardTitleId);
    filteredCard.devices.push(newDevice);
    setCards([...cards]);
  };
  const handleAddRoom = (newCard) => {
    setCards([...cards, newCard]);
  };
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router basename="/move-closer-zadanie-rekrutacyjne">
          <Switch>
            {cards.map((card) => (
              <Route key={card.title} path={`/${card.id}`}>
                <Room
                  card={card}
                  hangleChangeActiveDevices={hangleChangeActiveDevices}
                  handleSlider={handleSlider}
                  handleAddDevice={handleAddDevice}
                />
              </Route>
            ))}
            <Route path="/">
              <Home
                cards={cards}
                hangleChangeActiveDevices={hangleChangeActiveDevices}
                handleAddRoom={handleAddRoom}
              />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
