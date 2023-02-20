import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "740",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        // .catch((error) => console.log(error));
    }
  };

  window.addEventListener("movie", handleClick);
  return (
          <div className="row">
           <h2>{title}</h2>
          <div className="row__posters">
            {movies.map((movie) => (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
                

              
            ))}
            {trailerUrl && (
            <YouTube
            videoId={trailerUrl}
            opts={opts}
            className="youtube" // defaults -> null
        />
      )}{" "}
          </div>
        </div>

        
      );
    };
export default Row;

  


