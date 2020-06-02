import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div><p>Name: {movie.title}</p> <p>Time: {movie.time}</p> 
        {movie.genres.map(genre => <ul><li>{genre}</li></ul>)}</div>)}
    </div>
  );
};

export default Movies;
