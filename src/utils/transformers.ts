import {Movie} from "../models/Movie.ts"

type GenreMap = Map<number, string>;
export function formatMovie(obj: any, genremap:GenreMap ): Movie{

  const name = obj.title || "";
  const img = obj.poster_path || "";
  const genres_num= obj.genre_ids.map((item: number) => {
    return genremap.get(item) || "Unknown";
  })

  let year;
  try {
    const date = new Date(obj.release_date);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
    year = date.getFullYear();
  } catch (error) {
    year = NaN; 
  }

  const movie: Movie = {
    title: name,
    poster_path: `https://image.tmdb.org/t/p/original${img}`,
    year: year,
    genres: genres_num
  };

  return movie;
}

export function formatGenresToMap(array: any): Map<number, string>{
  if(array.length === 0){
    return new Map<number, string>()
  }
  const map = new Map<number, string>()
  array.forEach((element: { id: number,  name: string; }) => {
    map.set(element.id, element.name)
  });
  return map
}

export function formatGenresToOptions(array: any): {value: string, label: string}[]{

  if(array.length === 0){
    return []
  }
  let convertion: { value: string; label: string; }[]= []
    array.forEach((obj: { id: any; name: any; }) => {
      const{id, name} = obj
      const element= {value: id.toString(), label: name}
      convertion.push(element)
    })
    
  return convertion
}




