  'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from './Card';
import Timer from './Timer';

export default function Home() {
   const [selectedMovies, setSelectedMovies] = useState([])

  useEffect(() => {
    getMovies()

  },[]);

const getMovies = () => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(response => setSelectedMovies(response.data))
      .catch(error => console.error("Error while fetching movies", error))
  }
   return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className = "opacity-40" src="/Untitled design.png" alt="My Image"  layout="fill" objectFit="cover"/>
       <div className="flex min-h-screen flex-row items-start justify-around p-24 mt-[-10vh]">
     {selectedMovies.map((movie) => (
          <Card image={movie.image} movieName={movie.movieName} year={movie.year} actors={movie.actors} director={movie.director}/>
        ))}
      </div>
      
      <Timer/>
      <div className="flex items-start justify-center z-10 ">
      <button type="button" className="hover:bg-blue-800 text-white bg-blue-700 text-lg px-6 py-4 mt-[-55vh] rounded-md" onClick={getMovies}>Inka !!</button>     

  </div>
    </main>
  );
}