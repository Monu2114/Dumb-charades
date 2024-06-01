import { NextResponse } from 'next/server'
export async function GET(request,response) {
  { 
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
    return NextResponse.json({"status":"success","data": getRandomMovies(movies, 3)});
}
function getRandomMovies(movies,count) {
 
  
   let randomMovies = [];
   for (let i = 0; i < count; i++) {
     let randomIndex = Math.floor(Math.random() * movies.length);
     randomMovies.push(movies[randomIndex]);
     movies.splice(randomIndex, 1); // remove selected movie from array
   }
   return randomMovies;
 }
}

