'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from './Card';

export default function Home() {
  const movies = [
    { image: "/YVMFront.jpg", movieName: "Yeto Vellipoindi Manasu", year: "2010", actors: "Nani, Samantha", director: "GVM" },
    { image: "/S-O_Sathyamurthy_album_cover.jpg", movieName: "S/o Satyamurthi", year: "2015", actors: "Allu Arjun, Samantha", director: "Trivikram" },
    { image: "/pokiri.jpg", movieName: "Pokiri", year: "2007", actors: "Mahesh Babu, Illeana", director: "Puri Jagannath" },
    {image:"/sitamma.jpeg", movieName:"Sitamma Vakitlo Sirimalle Chettu", year:"2013", actors:"Mahesh Babu, Venkatesh", director:"Srikanth Addala"},    {image:"/sakhi.avif", movieName:"Sakhi", year:"2007", actors:" Madhavan, Shalini", director:"Mani Ratnam"},
    // Add more movies here
    { image: "/oohalu.jpg", movieName: "Oohalu Gusagusalade", year: "2014", actors: "Naga Shaurya, Rashi Khanna", director: "Srinivas Maddula" },
    { image: "/qvbt4yly274zmomafvlwmhkjvkq.jpg", movieName: "Gunturu Kaaram", actors: "Mahesh Babu, Srileela", director: "Trivikram" },
    { image: "/download (10).jpeg", movieName: "Arya 2", year: "2009", actors: "Allu Arjun, Kajal Aggarwal", director: "Sukumar" },
    { image: "/magadheera.jpg", movieName: "Magadheera", year: "2009", actors: "Ram Charan, Anushka Shetty", director: "S. S. Rajamouli" },
    { image: "/kick.avif", movieName: "Kick", year: "2014", actors: "Ravi Teja, Ileana, Jacqueline Fernandez", director: "Sandeep Vanga" },
    { image: "/dookudu.jpeg", movieName: "Dookudu", year: "2011", actors: "Mahesh Babu, Samantha", director: "Srinu Vaitla" },
    { image: "/ala-vaikuntapuramlo.jpg", movieName: "Ala Vaikunthapurramloo", year: "2020", actors: "Allu Arjun, Pooja Hegde", director: "Trivikram" },
  { image: "/bahubali.jpeg", movieName: "Baahubali 2: The Conclusion", year: "2017", actors: "Prabhas, Rana Daggubati, Anushka Shetty", director: "S. S. Rajamouli" },
  { image: "/fidaa.jpeg", movieName: "Fidaa", year: 2017, actors: "Varun Tej, Sai Pallavi", director: "Shekhar Kammula" },
  { image: "/Bommarillu.jpg", movieName: "Bommarillu", year: 2006, actors: "Siddharth, Genelia D'Souza", director: "Bhaskar" },
  { image: "/happydays.jpeg", movieName: "Happy Days", year: 2007, actors: "Nani, Vaani Kapoor", director: "Sekhar Kammula" },
  { image: "/jersey.avif", movieName: "Jersey", year: 2019, actors: "Nani, Shraddha Srinath", director: "Gowtam Tinnanuri" },
  { image: "/oh baby.webp", movieName: "Oh! Baby", year: 2019, actors: "Samantha Ruth Prabhu, Lakshmi", director: "Nandini Reddy" },
  { image: "/rangasthalam.jpg", movieName: "Rangasthalam 1985", year: 2018, actors: "Ram Charan, Samantha Ruth Prabhu", director: "Sukumar" },
   ];
  const [selectedMovies, setSelectedMovies] = useState(movies.slice(0, 3));

  const handleClick = () => {
    const newMovies = [];
    const usedIndices = new Set();
    while (newMovies.length < 3) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      if (!usedIndices.has(randomIndex)) {
        newMovies.push(movies[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }
    setSelectedMovies(newMovies);
  }

  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className = "opacity-40" src="/Untitled design.png" alt="My Image"  layout="fill" objectFit="cover"/>
       <div className="flex min-h-screen flex-row items-start justify-around p-24 mt-[-10vh]">
     {selectedMovies.map((movie) => (
          <Card image={movie.image} movieName={movie.movieName} year={movie.year} actors={movie.actors} director={movie.director}/>
        ))}
      </div>
      <div className="flex items-start justify-center z-10 ">
      <button type="button" className="hover:bg-blue-800  text-white bg-blue-700 text-lg px-6 py-4 mt-[-35vh] rounded-md" onClick={handleClick}>Inka !!</button>
     

  </div>
    </main>
  );
}