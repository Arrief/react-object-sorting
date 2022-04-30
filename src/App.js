import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import MoviesPage from './pages/MoviesPage';
import FlightsPage from './pages/FlightsPage';

function App() {
  let [displaySection, setDisplaySection] = useState("Movies");

  const handleDisplay = (section) => setDisplaySection(section);

  return (
    <div className="App">
      <h1>Sort Movies & Flights</h1>
      <Button action={() => handleDisplay("Movies")} style="btn-section" text="Movies" />
      <Button action={() => handleDisplay("Flights")} style="btn-section" text="Flights" />

      {displaySection === "Movies" && <MoviesPage />}
      {displaySection === "Flights" && <FlightsPage />}
    </div>
  );
}

export default App;
