// src/App.tsx
//define peliculas y pasa a componentes.

import React from 'react';
import Home from './page/Home';

//app es un componente de tipo funcion de reactx
const App: React.FC = () => {
  return (
    <>
    <Home></Home>
    </>
  );
}

export default App;
