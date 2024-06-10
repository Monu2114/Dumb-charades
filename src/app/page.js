'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from './Card';
import Timer from './Timer';
import Movies from './api/movies/movies.json';
export const dynamic = 'force-dynamic';

export default function Home() {
  const [selectedMovies, setSelectedMovies] = useState([
    { image: "/YVMFront.jpg", title: "Yeto Vellipoindi Manasu", year: "2010", actors: "Nani, Samantha", director: "GVM" },
    { image: "/S-O_Sathyamurthy_album_cover.jpg", title: "S/o Satyamurthi", year: "2015", actors: "Allu Arjun, Samantha", director: "Trivikram" },
    { image: "/pokiri.jpg", title: "Pokiri", year: "2007", actors: "Mahesh Babu, Illeana", director: "Puri Jagannath" }
  ]);

  const processMovieCredits = async (movie, options) => {
    try {
      const creditResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, options);
      if (!creditResponse.ok) {
        throw new Error(`Failed to fetch credits for movie ID ${movie.id}`);
      }
      const creditsData = await creditResponse.json();
      const actors = creditsData.cast.slice(0, 2).map(actor => actor.name).join(', ');
      const director = creditsData.crew.find(member => member.job === 'Director')?.name || 'Unknown';

      return { ...movie, actors, director };
    } catch (error) {
      console.error(`Error fetching credits for movie ID ${movie.id}:`, error);
      return { ...movie, actors: 'N/A', director: 'N/A' };
    }
  };

  const processMovies = async (movies, options) => {
    const processedMovies = movies.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null,
      year: movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown'
    }));

    return await Promise.all(processedMovies.map(movie => processMovieCredits(movie, options)));
  };

  const processLocalData = (localData) => {
    return localData.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null,
      year: movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown',
      actors: 'N/A',
      director: 'N/A'
    }));
  };

  const getRandomMovies = (movies) => {
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
  };

  const getMovies = async () => {
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
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      const randomMovies = getRandomMovies(data.results);

      const moviesWithCredits = await processMovies(randomMovies, options);
      setSelectedMovies(moviesWithCredits);
  
    } catch (error) { 
      console.error('Error fetching data:', error);
      const movies = getRandomMovies(processLocalData(Movies));
      setSelectedMovies(movies);
    }
  }

  useEffect(() => {
     getMovies();
  },[]);

  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className = "opacity-40" src="/Untitled design.png" alt="My Image"  layout="fill" objectFit="cover"/>
       <div className="md flex min-h-screen flex-row items-start justify-around p-24 mt-[-10vh]">
     {selectedMovies.map((movie) => (
          <Card key={movie.id} image={movie.image} movieName={movie.title} year={movie.year} actors={movie.actors} director={movie.director}/>
        ))}
      </div>
      
      <Timer/>
      <div className="flex items-start justify-center z-10 ">
      <button type="button" className="hover:bg-blue-800 text-white bg-blue-700 text-lg px-6 py-4 mt-[-58vh] rounded-md" onClick={getMovies}>Inka !!</button>     
  </div>
    </main>
  );
}
