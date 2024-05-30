// src/App.tsx
//define peliculas y pasa a componentes.

import React from 'react';
import MovieList from './components/movielist';

//app es un componente de tipo funcion de reactx
const App: React.FC = () => {
  return (
    <div>
      <h1>Cinema Paraíso</h1>
      <MovieList />
    </div>
  );
}

export default App;
