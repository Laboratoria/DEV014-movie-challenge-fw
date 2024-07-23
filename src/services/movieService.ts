import { token } from "./token";
const getMovieGenres = async (): Promise<{ id: number; name: string }[]> => {
    try {
        const response= await fetch('https://api.themoviedb.org/3/genre/movie/list?', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
            
        })
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
          }
          const data = await response.json();

          if (Array.isArray(data.genres)) {
              return data.genres;
          } else {
              throw new Error('Unexpected response format');
          }

    } catch (error) {
        throw error
    }
    
}

export default getMovieGenres