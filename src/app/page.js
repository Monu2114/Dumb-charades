'use client';
import { useState } from 'react';
import Image from 'next/image';
import Card from './Card';
function Movies(){
  const arr = ["Cheli","Badri","Animal","Michael Madana Kamaraju","Sakhi","100% love", "Bommarillu","Andala Rakshasi","Nachavule","Athithi","Pokiri","Ready","RRR","Attarintiki Daredi","Akasamantha"];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleClick = () => {
    setSelectedMovie(Movies());
  }

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className = "opacity-40" src="/Untitled design.png" alt="My Image"  layout="fill" objectFit="cover"/>
      <div className="flex min-h-screen flex-row items-center justify-around p-24">
      <Card image="/YVMFront.jpg" movieName="Yeto Vellipoindi Manasu" year="2010" actors="Nani, Samantha" director="GVM"/>
      <Card image="/S-O_Sathyamurthy_album_cover.jpg" movieName="S/o Satyamurthi" year ="2015" actors="Allu Arjun, Samantha" director="Trivikram"/>
      <Card image="/pokiri.jpg" movieName = "Pokiri" year="2007" actors = "Mahesh Babu, Illeana" director = "Puri Jagannath"/>
      </div>
      {/* <Image src="/Screenshot 2024-05-23 143402.png" alt="My Image"  layout="fill" objectFit="cover"/>
      
      <div className="">
      <h1 className="text-4xl font-bold">Hello Dumb-Charades</h1>
      <div className = "text-2xl ">
      <div className="flex items-between justify-center flex-grow">
        <p className="text-2xl">
          Wanna have fun with your friends? Let's play Dumb-Charades!
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl mt-4 p-2 rounded transition duration-200" onClick={handleClick}>
        Click here !!
      </button>
      {selectedMovie && <p className="text-2xl mt-4">{selectedMovie}</p>}
      </div>
      </div> */}
    </main>
  );
}