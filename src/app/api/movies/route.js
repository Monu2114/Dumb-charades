import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET() {

  const page = Math.random() * 10;

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=te`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mzk2YThmOWMyOGM5YmZhMzBkMDZlZTRjZWZlYzFkZCIsInN1YiI6IjY2NWJmY2Q4Mzg4MjZiYmVlYTcxYzA2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuCHyJVL2Jkd1JWe9bjkL1Ajc0pkAoItcJKBHBerMQY'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const movies = data.results.map(movie => ({
       title: movie.title,
      image: movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:null,
      year:movie.release_date.substring(0,4),
      id:movie.id
    }));
    const moviesWithActors = await Promise.all(movies.map(async (movie) => {
      const creditResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, options);
      const creditsData = await creditResponse.json();
      const actors = creditsData.cast.map(actor => actor.name).slice(0, 2).join(', ');
      const director = creditsData.crew.find(member => member.job === 'Director')?.name || 'Unknown';
      // Get top 2 actors
      return { ...movie, actors,director};
    }));
    return new Response(JSON.stringify({ status: "success", data: getRandomMovies(moviesWithActors) }), { status: 200 });
    
    
    // return NextResponse.json({ status: 'success', data: getRandomMovies(movies) });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to fetch data', error: error.message });
  }
}


function getRandomMovies(movies) {
  const newMovies = [];
  const usedIndices = new Set();
  
  while (newMovies.length < 3 && movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    if (!usedIndices.has(randomIndex)) {
      newMovies.push(movies[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }
  
  return newMovies;
}

