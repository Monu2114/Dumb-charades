import React from 'react';

export default function Card(props) {
  return (
    <div className="w-67 max-w-3xl rounded-lg overflow-hidden shadow-xl m-4 bg-white border border-gray-300 transform hover:scale-105 transition duration-200 ease-in-out">
      <img className="w-full h-64 object-cover" src={props.image} alt={props.movieName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Name: {props.movieName}</div>
        <p className="text-gray-700 text-base">Year: {props.year}</p>
        <p className="text-gray-700 text-base">Actors: {props.actors}</p>
        <p className="text-gray-700 text-base">Director: {props.director}</p>
      </div>
    </div>
  );
}