import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const API_URL = "https://api.themoviedb.org/3/";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: import.meta.env.VITE_REACT_APP_MOVIE_API_KEY,
        query: searchKey,
      },
    });
    setSelectedMovie(results[0]);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () => {
    return movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={setSelectedMovie} />
    ));
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <div>
      {/*HEADER SECTION */}
      <header>
        <div className="flex justify-between items-center max-w-screen-lg ml-auto mr-auto p-4">
          <h1 className="text-2xl font-bold">Trail Mix</h1>
          <form onSubmit={searchMovies}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>

      {/*HIGHLIGHTED MOVIE SECTION */}
      <div
        className="min-h-[500px] bg-cover flex items-end relative pb-12"
        style={{
          backgroundImage: `url('${BACKDROP_PATH}${selectedMovie.backdrop_path}')`,
        }}
      >
        <div className="w-10/12 max-w-screen-lg m-auto px-4">
          <button
            className="my-[20px] text-white cursor-pointer uppercase tracking-wide border-solid border-white border py-[10px] px-[15px] 
          transition-shadow hover:shadow-md bg-[#0F1014]"
          >
            Play Trailer
          </button>
          <h1 className="text-[82px] mt-0 mb-4 leading-none font-bold">
            {selectedMovie.title}
          </h1>
          {selectedMovie.overview ? <p>{selectedMovie.overview}</p> : null}
        </div>
      </div>

      {/*LIST OF MOVIES SECTION */}
      <div className="grid grid-cols-4 gap-4 bg-[#0F1014] p-4">
        {renderMovies()}
      </div>
    </div>
  );
};

export default Home;
