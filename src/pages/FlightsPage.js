import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";
import { MyFlights } from "../data/MyFlights";
import { sortBy } from '../functions/Sorting';

export const FlightsPage = () => {
  let [selectorFlights, setSelectorFlights] = useState("price lowest");

  const mapFlightsOutput = (element, index) => ( 
    <div className="card" key={index}>
      <p>From: <b>{element.from}</b> --- To: <b>{element.to}</b></p>
      <p>Flight duration: <b>{element.duration} hours</b></p>
      <p>Price: <b>{element.price} EUR</b></p>
    </div>
  )

  return(
  <>
    <h1>Flights:</h1>
    <Dropdown 
      action={(event) => sortBy(event, setSelectorFlights)}
      op1="price lowest" 
      op2="price highest" 
      op3="duration shortest" 
      op4="duration longest"
    />
    <hr />
    {selectorFlights === "price lowest" && 
      MyFlights.sort((a, b) => a.price - b.price).map(mapFlightsOutput)}
    {selectorFlights === "price highest" && 
      MyFlights.sort((a, b) => b.price - a.price).map(mapFlightsOutput)}
    {selectorFlights === "duration shortest" && 
      MyFlights.sort((a, b) => a.duration - b.duration).map(mapFlightsOutput)}
    {selectorFlights === "duration longest" && 
      MyFlights.sort((a, b) => b.duration - a.duration).map(mapFlightsOutput)}
  </>
  );
}

export default FlightsPage;
