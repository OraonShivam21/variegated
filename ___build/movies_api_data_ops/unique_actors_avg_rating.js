const movieData = [
  {
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman"],
    rating: 9.3,
  },
  {
    movieName: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino"],
    rating: 9.2,
  },
  {
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger"],
    rating: 9.0,
  },
];

function findUniqueActors(movieData) {
  const allActors = movieData.flatMap((movie) => movie.actors);

  const uniqueActors = new Set(allActors);

  return Array.from(uniqueActors);
}

function findAverageRating(movieData) {
    const totalRating = movieData.reduce((acc, movie) => acc + movie.rating, 0);

    return movieData.length > 0 ? totalRating / movieData.length : 0;
}

console.log(`Unique Actors: ${findUniqueActors(movieData)}`);
console.log(`Average Rating: ${findAverageRating(movieData)}`);
