import ApiMovieList from "../models/ApiMovieList";
import ApiMovieResult from "../models/ApiMovieResult";
import Movie from "../models/Movie";
import { formatMovie } from "../utils/transformers";
//import { formatMovie } from "../utils/transformers";

const URL_API = "https://api.themoviedb.org/3";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGNjOTZmMTllNzJiYTgxY2UxNWMxMWRkOWJkZjMxYiIsInN1YiI6IjY2NGNkYTI4YThhNThkY2I3YTZlYjIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bY82hbPJncqfBkEZaG4ZifQPcyUFrYLk-QpIyaKg6Oc";
const mockData = {
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
    {
      adult: false,
      backdrop_path: "/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
      genre_ids: [878, 28, 12],
      id: 823464,
      original_language: "en",
      original_title: "Godzilla x Kong: The New Empire",
      overview:
        "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      popularity: 3365.201,
      poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
      release_date: "2024-03-27",
      title: "Godzilla x Kong: The New Empire",
      video: false,
      vote_average: 7.243,
      vote_count: 2428,
    },
    {
      adult: false,
      backdrop_path: "/otfoeC96neoOdA4HqsX06OWuzE9.jpg",
      genre_ids: [27, 53],
      id: 719221,
      original_language: "en",
      original_title: "Tarot",
      overview:
        "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
      popularity: 2827.301,
      poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
      release_date: "2024-05-01",
      title: "Tarot",
      video: false,
      vote_average: 6.395,
      vote_count: 266,
    },
    {
      adult: false,
      backdrop_path: "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
      genre_ids: [878, 28],
      id: 614933,
      original_language: "en",
      original_title: "Atlas",
      overview:
        "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
      popularity: 2767.737,
      poster_path: "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
      release_date: "2024-05-23",
      title: "Atlas",
      video: false,
      vote_average: 6.737,
      vote_count: 528,
    },
    {
      adult: false,
      backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
      genre_ids: [27],
      id: 437342,
      original_language: "en",
      original_title: "The First Omen",
      overview:
        "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
      popularity: 2029.625,
      poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
      release_date: "2024-04-03",
      title: "The First Omen",
      video: false,
      vote_average: 6.8,
      vote_count: 325,
    },
    {
      adult: false,
      backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
      genre_ids: [28, 35, 80, 9648, 10749],
      id: 746036,
      original_language: "en",
      original_title: "The Fall Guy",
      overview:
        "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
      popularity: 1873.501,
      poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
      release_date: "2024-04-24",
      title: "The Fall Guy",
      video: false,
      vote_average: 7.316,
      vote_count: 954,
    },
    {
      adult: false,
      backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
      genre_ids: [878, 27, 28],
      id: 940721,
      original_language: "ja",
      original_title: "ゴジラ-1.0",
      overview:
        "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
      popularity: 1408.634,
      poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      release_date: "2023-11-03",
      title: "Godzilla Minus One",
      video: false,
      vote_average: 7.7,
      vote_count: 1355,
    },
    {
      adult: false,
      backdrop_path: "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
      genre_ids: [28, 53, 80, 878],
      id: 882059,
      original_language: "en",
      original_title: "Boy Kills World",
      overview:
        "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
      popularity: 1318.736,
      poster_path: "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
      release_date: "2024-04-24",
      title: "Boy Kills World",
      video: false,
      vote_average: 6.802,
      vote_count: 192,
    },
    {
      adult: false,
      backdrop_path: "/iafs5DG5fGq7ef0acl3xlX4BFrs.jpg",
      genre_ids: [18, 10770],
      id: 1219685,
      original_language: "fr",
      original_title: "Un père idéal",
      overview: "",
      popularity: 1232.747,
      poster_path: "/4xJd3uwtL1vCuZgEfEc8JXI9Uyx.jpg",
      release_date: "2024-04-21",
      title: "Un père idéal",
      video: false,
      vote_average: 5.859,
      vote_count: 38,
    },
    {
      adult: false,
      backdrop_path: "/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
      genre_ids: [28, 12, 878],
      id: 786892,
      original_language: "en",
      original_title: "Furiosa: A Mad Max Saga",
      overview:
        "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
      popularity: 1189.714,
      poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      release_date: "2024-05-22",
      title: "Furiosa: A Mad Max Saga",
      video: false,
      vote_average: 7.74,
      vote_count: 621,
    },
    {
      adult: false,
      backdrop_path: "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
      genre_ids: [16, 28, 10751, 35, 14],
      id: 1011985,
      original_language: "en",
      original_title: "Kung Fu Panda 4",
      overview:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      popularity: 1067.045,
      poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      release_date: "2024-03-02",
      title: "Kung Fu Panda 4",
      video: false,
      vote_average: 7.12,
      vote_count: 1860,
    },
    {
      adult: false,
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      genre_ids: [878, 12],
      id: 693134,
      original_language: "en",
      original_title: "Dune: Part Two",
      overview:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      popularity: 1010.609,
      poster_path: "/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
      release_date: "2024-02-27",
      title: "Dune: Part Two",
      video: false,
      vote_average: 8.173,
      vote_count: 4286,
    },
    {
      adult: false,
      backdrop_path: "/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
      genre_ids: [16, 35, 10751, 12],
      id: 748783,
      original_language: "en",
      original_title: "The Garfield Movie",
      overview:
        "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
      popularity: 884.033,
      poster_path: "/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
      release_date: "2024-04-30",
      title: "The Garfield Movie",
      video: false,
      vote_average: 6.527,
      vote_count: 132,
    },
    {
      adult: false,
      backdrop_path: "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
      genre_ids: [27, 9648, 53],
      id: 1041613,
      original_language: "en",
      original_title: "Immaculate",
      overview:
        "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
      popularity: 851.845,
      poster_path: "/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
      release_date: "2024-03-20",
      title: "Immaculate",
      video: false,
      vote_average: 6.246,
      vote_count: 531,
    },
    {
      adult: false,
      backdrop_path: "/qjoX7hl721FOiyeHsDkeQ6rFVLl.jpg",
      genre_ids: [16, 10751, 18, 12, 35],
      id: 1022789,
      original_language: "en",
      original_title: "Inside Out 2",
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      popularity: 823.581,
      poster_path: "/xeqXXTE1Cd3qNaAEOT6qbhhCsgJ.jpg",
      release_date: "2024-06-06",
      title: "Inside Out 2",
      video: false,
      vote_average: 8.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/42rp8MkwOEFA62wwgKcuOpP8Fjb.jpg",
      genre_ids: [28, 36, 18, 10752],
      id: 660360,
      original_language: "ko",
      original_title: "노량: 죽음의 바다",
      overview:
        "In the winter of 1598, the seven-year Imjin War nears an end as the Japanese Wae invaders prepare to withdraw from Joseon. Admiral Yi Sun-shin leads an allied fleet of Joseon and Ming ships to annihilate the Wae army. Joseon, Ming, and Wae forces clash at Noryang Strait, the deadly sea where Admiral Yi fights his last valiant battle.",
      popularity: 775.91,
      poster_path: "/wFAe7gA513Pi2meI4ECwf6YEKR1.jpg",
      release_date: "2023-12-20",
      title: "Noryang: Deadly Sea",
      video: false,
      vote_average: 7.056,
      vote_count: 27,
    },
    {
      adult: false,
      backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 639.0,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.445,
      vote_count: 1397,
    },
    {
      adult: false,
      backdrop_path: "/hvqNAz3cq48sh9GKxu4lPiogfBo.jpg",
      genre_ids: [28, 80, 9648, 53],
      id: 996154,
      original_language: "en",
      original_title: "Black Lotus",
      overview:
        "An ex-special forces operative wages a one man war through the streets of Amsterdam to rescue his friend's daughter from the local crime syndicate.",
      popularity: 624.78,
      poster_path: "/y3AeW200hqGLxoPyHMDHpzudylz.jpg",
      release_date: "2023-04-12",
      title: "Black Lotus",
      video: false,
      vote_average: 6.5,
      vote_count: 108,
    },
    {
      adult: false,
      backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
      genre_ids: [28, 27, 53],
      id: 1096197,
      original_language: "en",
      original_title: "No Way Up",
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      popularity: 624.153,
      poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      release_date: "2024-01-18",
      title: "No Way Up",
      video: false,
      vote_average: 6.441,
      vote_count: 703,
    },
  ],
  total_pages: 44483,
  total_results: 889655,
};

export function getMovies(): Promise<Movie[]> {
  // Construir la URL del endpoint /discover/movie de The Movie DB
  if (!apiKey) {
    throw new Error("apiKey not found");
  }
  //construir url de la API
  const url = `${URL_API}/discover/movie`;

  //debe borrarse
  return new Promise((resolve) => {
    resolve(mockData.results);
  });

  // Realiza una solicitud HTTP GET utilizando fetch y retornar la promesa
  return fetch(`${url}`, {
    method: "GET", // Método de solicitud
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`, // Ejemplo de header de autorización
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: ApiMovieList) => {
      return data.results.map((movie: ApiMovieResult) => formatMovie(movie));
    })

    .catch((error) => {
      console.error("Error fetching movies:", error);
      return [];
    });
}
