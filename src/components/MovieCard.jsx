import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img src={`${IMAGE_PATH}${movie.poster_path}`} />
      ) : (
        <div className="text-black bg-white min-h-[359px]">No Image Found</div>
      )}
      <h5>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
