  'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from './Card';
import Timer from './Timer';

export default function Home() {
   const [selectedMovies, setSelectedMovies] = useState([{ image: "/YVMFront.jpg", movieName: "Yeto Vellipoindi Manasu", year: "2010", actors: "Nani, Samantha", director: "GVM" },
    { image: "/S-O_Sathyamurthy_album_cover.jpg", movieName: "S/o Satyamurthi", year: "2015", actors: "Allu Arjun, Samantha", director: "Trivikram" },
    { image: "/pokiri.jpg", movieName: "Pokiri", year: "2007", actors: "Mahesh Babu, Illeana", director: "Puri Jagannath" }])

  // useEffect(() => {
  //    getMovies()
  // },[]);

const getMovies = async () => {
    try {
      const response = await fetch('/api/movies');
      const data = await response.json();

      setSelectedMovies(data.data);
    } catch (error) {
      console.error("Error while fetching movies", error);
    }
  }


   return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className = "opacity-40" src="/Untitled design.png" alt="My Image"  layout="fill" objectFit="cover"/>
       <div className="flex min-h-screen flex-row items-start justify-around p-24 mt-[-10vh]">
     {selectedMovies.map((movie) => (
          <Card image={movie.image} movieName={movie.title} year={movie.year} actors={movie.actors} director={movie.director}/>
        ))}
      </div>
      
      <Timer/>
      <div className="flex items-start justify-center z-10 ">
      <button type="button" className="hover:bg-blue-800 text-white bg-blue-700 text-lg px-6 py-4 mt-[-58vh] rounded-md" onClick={getMovies}>Inka !!</button>     

  </div>
    </main>
  );
}