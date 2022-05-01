import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FlightsPage from './pages/FlightsPage';
import MoviesPage from './pages/MoviesPage';
import LandingPage from './pages/LandingPage';

function App() {
  let [displaySection, setDisplaySection] = useState("Welcome");

  const handleDisplay = (section) => setDisplaySection(section);

  return (
    <div className="App">
      <h1>Sort Movies & Flights</h1>
      {displaySection === "Welcome" && <LandingPage />}
      <Button action={() => handleDisplay("Movies")} style="btn-section" text="Movies" />
      <Button action={() => handleDisplay("Flights")} style="btn-section" text="Flights" />

      {displaySection === "Movies" && <MoviesPage />}
      {displaySection === "Flights" && <FlightsPage />}
    </div>
  );
}

export default App;
