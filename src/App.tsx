import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { MovieDetailView } from "./views/MovieDetailView";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          //placeholder -  a esta ruta a parte va a contar con otro parametro
          path="/movie-detail/:id"
          element={<MovieDetailView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
