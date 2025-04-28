import React from 'react'
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Singlemovie.css"
const Singlemovie = () => {
  const navigate=useNavigate();
  const {id}=useParams()
  console.log("Id............",id);
  const [movie,setmovie] = useState("");
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=6ee59832&i=${id}`)
    .then(response => response.json())
    .then(data => setmovie(data))
    .catch(error => console.error('Error:', error));
  }, [id]);
  console.log("Movie...........",movie);
  return (
    <>
    <h1 style={{textAlign:"center",fontFamily:"sans-serif"}}>{movie.Title}</h1>
    <div className='single-page-div'>
      <div className='img-div'>
      <img src={movie.Poster} alt="" />
      </div>
      <div className='information-div'>
        
        <div><p><b>Genre:</b>{movie.Genre}</p></div>
       <div><p><b>Released:</b>{movie.Released}</p></div> 
       <div><p><b>Rated:</b>{movie.Rated}</p></div>
       <div><p><b>Country:</b>{movie.Country}</p></div>
       {/* <div><p><b>IMDB Rating:</b>{movie.imdbRating}</p></div> */}
       <div><p><b>Rating:</b>
       {movie.Ratings?.length?movie.Ratings.map((rate)=><p>{rate.Source}:{rate.Value}</p>):"N/A"}
       </p></div>  
       <div><p><b>Director:</b>{movie.Director}</p></div> 
       <div><p><b>Writer:</b>{movie.Writer}</p></div> 
       <div><p><b>Actors:</b>{movie.Actors}</p></div> 
       <div><p><b>Boxoffice:</b>{movie.BoxOffice}</p></div>
      </div>
    </div>
    <div className='movie-plot'>
      <h1 >Plot</h1>
      <p>{movie.Plot}</p>
    </div>
    <hr />
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}
export default Singlemovie;