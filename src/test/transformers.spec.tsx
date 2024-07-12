import { formatMovie } from "../utils/transformers";
import { Movie, MovieResponse } from "../models/Movie";

describe("formatMovie function", () => {
  it("Deberia transformar los datos de formatMovie a movie", () => {
    const movieData: MovieResponse = {
      adult: false,
      backdrop_path: "/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
      genre_ids: [28, 12, 878],
      id: 786892,
      original_language: "en",
      original_title: "Furiosa: A Mad Max Saga",
      overview:
        "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
      popularity: 1122.616,
      poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      release_date: "2024-05-22",
      title: "Furiosa: A Mad Max Saga",
      video: false,
      vote_average: 7.665,
      vote_count: 802,
    };
    const expectedMovie: Movie = {
      id: 786892,
      title: "Furiosa: A Mad Max Saga",
      poster: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      releseaDate: 2024,
    };
    const result = formatMovie(movieData);

    expect(result).toEqual(expectedMovie);
  });
});
