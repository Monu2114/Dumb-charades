import React from 'react';

export default function Card(props) {
  return (
    <div className="w-80 max-w-3xl rounded-lg overflow-auto shadow-xl m-4 bg-white border border-gray-700 transform hover:scale-105 transition duration-200 ease-in-out max-h-[400px]">
      <img className="w-full h-64 object-cover max-h-[250px]" src={props.image} alt={props.movieName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-overflow-auto whitespace-normal">
          {props.movieName}
        </div>
        <p className="text-gray-900 text-base">Year: {props.year}</p>
        <p className="text-gray-700 text-base">Actors: {props.actors}</p>
        <p className="text-gray-700 text-base">Director: {props.director}</p>
      </div>
    </div>
  );
}
