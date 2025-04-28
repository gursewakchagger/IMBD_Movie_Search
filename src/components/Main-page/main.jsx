import React, { useEffect } from 'react'
import Moviecard from '../Movie-card/movie-card.jsx'
import "./main.css"
import { useState } from "react";
import { useNavigate } from 'react-router';
const main = () => {
  const [data, setdata] = useState("");
  const [first, setfirst] = useState("")
  const [movie, setmovie] = useState([]);
  const navigate=useNavigate()
  const searchmovies = (event) => {
    setdata(event.target.value);
  };
  console.log("first...........",first)
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=6ee59832&s=${data}`)
      .then(response => response.json())
      .then(data => setmovie(data?.Search))
      .catch(error => console.error('Error:', error));
  }, [data])
  console.log("movie........",movie);
const singlepage=(id)=>{
  navigate(`/singlemovie/${id}`)
}
  return (
    <div className='main-div'>
      <div className='search-section'>
        <h1>IMDB MOVIES</h1>
        <form action="">
          <input type="text" placeholder='Enter the movie name' onChange={searchmovies} />
        </form>
      </div>
      <div className='movie-div' style={{fontSize:"25px",margin:"10px"}}>
      {movie?.length>0?movie.map((movie)=>(
        <div className='maincard'  onClick={()=>singlepage(movie?.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div className='myhover'>
          <h1>{movie.Title}</h1>
          <span>{movie.Year}</span>
        </div>
        </div>
      )):
      "No Data.........."}
      </div>
    </div>
  )
}
export default main;
