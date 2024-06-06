import { NextResponse } from 'next/server';
const Movies = require('./movies.json');

export async function GET() {
  const totalPages = 144;
  const page = Math.floor(Math.random() * totalPages) + 1;
  
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
    const data = await response.json();
    const movies = await processData(data, options);
    
    return NextResponse.json({ status: "success", data: getRandomMovies(movies) });
  } 
  catch (error) { 
    console.error('Error fetching data:', error);
    const movies = await processData(Movies, options); // Fallback to local data
    return NextResponse.json({ status: 'error but json', message: 'Failed to fetch data', error: error.message, data: getRandomMovies(movies) });
  }
}

async function processData(data, options) {
  const movies = data.results.map(movie => ({
    title: movie.title,
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null,
    year: movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown', // Check if release_date exists
    id: movie.id
  }));

  const moviesWithActors = await Promise.all(movies.map(async (movie) => {
    const creditResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, options);
    const creditsData = await creditResponse.json();
    const actors = creditsData.cast.slice(0, 2).map(actor => actor.name).join(', ');
    const director = creditsData.crew.find(member => member.job === 'Director')?.name || 'Unknown';

    return { ...movie, actors, director };
  }));

  return moviesWithActors;
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
