import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { APIService } from "./services/APIService";
import { MovieCard } from "./components/MovieCard";

function App() {
  const [count, setCount] = useState(0);
  new APIService().getMovies().then((movieList) => {
    console.log(movieList);
  });

  return (
    <>
      <MovieCard
        movie={{
          title: "no way",
          poster: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
          year: "02/10/2012",
          overview: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ",
          rating: 10,
        }}
      >
      </MovieCard>
    </>
  );
}

export default App;
