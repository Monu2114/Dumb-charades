'use client';
import { useState } from 'react';

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
    </main>
  );
}