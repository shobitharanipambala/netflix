//  step -3


import "./Banner.css";
import {useState, useEffect} from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
    const [movie, setMovie] = useState({});
  
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await axios.get(requests.fetchTrending);
          const movies = response.data.results;
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          setMovie(randomMovie);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMovie();
    }, []);
  
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    // setBackdrop_path(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
   
    return (
      <header
        className="banner"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <p className="banner__description">{movie.overview}</p>
        </div>
      </header>
    );
  };
  
  export default Banner;