// Importar funciones

import { getMovies } from "../services/APIService";


test('getMovies devuelve una lista de películas', async () => {
  //llama a la función getMovies de forma asíncrona y espera a que se complete.
    const películas = await getMovies();
  //verificar que el valor de la variable películas es una instancia de un array.
    expect(películas).toBeInstanceOf(Array); // Comprobar si es un array
  //expect de Jest para verificar que la longitud del array películas es mayor que cero. si es cero, la prueba fallará.
    expect(películas.length).toBeGreaterThan(0); // Comprobar si hay películas
});

let mockData = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        genre_ids: [878, 12, 28],
        id: 653346,
        original_language: "en",
        original_title: "Kingdom of the Planet of the Apes",
        overview:
          "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        popularity: 10276.252,
        poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        release_date: "2024-05-08",
        title: "Kingdom of the Planet of the Apes",
        video: false,
        vote_average: 6.954,
        vote_count: 753,
      },
      {
        adult: false,
        backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
        genre_ids: [10752, 28, 18],
        id: 929590,
        original_language: "en",
        original_title: "Civil War",
        overview:
          "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
        popularity: 3984.463,
        poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        release_date: "2024-04-10",
        title: "Civil War",
        video: false,
        vote_average: 7.139,
        vote_count: 1194,
      },
    ]}
//caso de prueba para funcion getMovies
//async indica que esta es una prueba asíncrona, ya que espera una promesa
test('getMovies lanza un error si los datos ficticios están vacíos', async () => {
    //guardar una copia de los datos ficticios originales antes de modificarlos.
    const datosFicticiosOriginales = mockData;
    //modifica la propiedad results de la variable mockData y le asigna un array vacío.
    mockData.results = [];
  
    try {
        //lama a la función getMovies de forma asíncrona y espera a que se complete.
      await getMovies();
      //catch que se ejecutará si se produce un error dentro del bloque try.
    } catch (error) {
        //verificar que el objeto de error capturado (error) sea igual a un nuevo objeto de error con el mensaje "Formato de datos inesperado".
      expect(error).toEqual(new Error('Formato de datos inesperado')); // Modificar el mensaje de error si es necesario
    //bloque finally que se ejecutará siempre, independientemente de si la prueba pasa o falla.
    } finally {
      // Restaurar los datos ficticios
      //restaura la variable mockData a su valor original (datosFicticiosOriginales).
      mockData = datosFicticiosOriginales;
    }
  });
  