import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDivs = actors.map(actor => {
    return(
      <div>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { actorDivs }
    </div>
  );
};

export default Actors;
