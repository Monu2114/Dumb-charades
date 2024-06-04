import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic';
const { MongoClient } = require('mongodb');

 export async function GET(request,response) {
  { 
    const client = new MongoClient('mongodb+srv://monunanabala:ja67CG2n9ethRQFj@telugumovies.dz1otbp.mongodb.net/')
    await client.connect();
    const db = client.db('Movies');
   const movies = await db.collection('telugu_movies').find().toArray();
   await client.close();
  
    return NextResponse.json({"status":"success","data": getRandomMovies(movies)});
}

function getRandomMovies(movies) {
 
  const newMovies = [];
    const usedIndices = new Set();
    while (newMovies.length < 3) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      if (!usedIndices.has(randomIndex)) {
        newMovies.push(movies[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }
   return newMovies;
 }

}

