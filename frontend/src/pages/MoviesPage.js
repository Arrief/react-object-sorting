import React, { useEffect, useState } from 'react';
import Dropdown from "../components/Dropdown";
// import { MyMovies } from "../data/MyMovies";
import { sortBy } from '../functions/Sorting';

export const MoviesPage = () => {
  // state for the sorting option, best ratings by default
  let [selectorMovies, setSelectorMovies] = useState("ratings best");
  let [MyMovies, setMyMovies] = useState([]);

  // * comment lines 9 & 13-17 and uncomment line 3 if you don't want to use backend!
  // fetching the array of objects with movie data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/movies")
    .then((response) => response.json())
    .then((data) => setMyMovies(data))
  }, []);

  /* the HTML output from map will always be the same, no matter the sorting choice, just the order in which the individual cards are displayed changes */
  const mapMoviesOutput = (element, index) => ( 
    <div className="card" key={index}>
      <p>Name: <b>{element.name}</b></p>
      <p>Year of Release: <b>{element.releaseYear}</b></p>
      <p>Duration: <b>{element.duration} hours</b></p>
      <p>IMDb Ratings: &#11088; <b>{element.rating} / 10 </b></p>
    </div>
  )

  return(
  <>
    <h1>Movies:</h1>
    <Dropdown 
      action={(event) => sortBy(event, setSelectorMovies)} 
      op1="ratings best" 
      op2="ratings worst"
      op3="most recent release" 
      op4="oldest release" 
      op5="name a-z"
      op6="name z-a"
    />
    <hr />
    {selectorMovies === "ratings best" &&
    MyMovies.sort((a, b) => b.rating - a.rating).map(mapMoviesOutput)}
    {selectorMovies === "ratings worst" &&
    MyMovies.sort((a, b) => a.rating - b.rating).map(mapMoviesOutput)}
    {selectorMovies === "most recent release" &&
    MyMovies.sort((a, b) => b.releaseYear - a.releaseYear).map(mapMoviesOutput)}
    {selectorMovies === "oldest release" &&
    MyMovies.sort((a, b) => a.releaseYear - b.releaseYear).map(mapMoviesOutput)}
    {selectorMovies === "name a-z" &&
    MyMovies.sort((a, b) => a.name.localeCompare(b.name)).map(mapMoviesOutput)}
    {selectorMovies === "name z-a" &&
    MyMovies.sort((a, b) => b.name.localeCompare(a.name)).map(mapMoviesOutput)}
  </>
  );
}

export default MoviesPage;
