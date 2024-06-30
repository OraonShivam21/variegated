const fs = require("fs");

const moviesData = fs.readFileSync("movies.json", "utf-8");
const movies = JSON.parse(moviesData);

// console.log(movies);

// Some operations:

// 1. Find Best Scene Duration per Movie: Write a JavaScript function that iterates through each movie’s bestScenes array and finds the scene with the longest duration. Return an object containing the movie name and the longest scene’s duration. (e.g., { movieName: “The Shawshank Redemption”, longestSceneDuration: 15 })

function findBestScenes(movies) {
  const bestScenes = movies.map((movie) => {
    const longestScene = movie.bestScenes.reduce((prev, curr) => {
      return parseFloat(prev.duration) > parseFloat(curr.duration)
        ? prev
        : curr;
    });

    return {
      movieName: movie.movieName,
      longestSceneDuration: parseFloat(longestScene.duration),
    };
  });

  return bestScenes;
}

const bestScenes = findBestScenes(movies);
console.log(bestScenes);

// 2. Total Duration of Best Scenes: Calculate the total duration of all the “best scenes” across all movies.

function totalBestScenesDuration(movies) {
  const bestScenesDuration = movies.reduce((bestScenes, movie) => {
    return (
      bestScenes +
      movie.bestScenes.reduce((duration, scene) => {
        if (duration < parseFloat(scene.duration))
          duration = parseFloat(scene.duration);
        return duration;
      }, 0)
    );
  }, 0);

  return bestScenesDuration;
}

// const bestScenesDuration = totalBestScenesDuration(movies);
// console.log(bestScenesDuration);

// 3. Find All Unique Actors: Write a JavaScript function that iterates through the movie list and returns a list containing all the unique actors across all movies.

// this is by using Set
// function findUniqueActors(movies) {
//   const uniqueActors = new Set();

//   movies.forEach((movie) => {
//     movie.actors.forEach((actor) => uniqueActors.add(actor));
//   });

//   return Array.from(uniqueActors);
// }

// Now without set
function findUniqueActors(movies) {
  return movies.reduce((actors, movie) => {
    movie.actors.forEach((actor) => {
      if (!actors.includes(actor)) actors.push(actor);
    });
    return actors;
  }, []);
}

// const uniqueActors = findUniqueActors(movies);
// console.log(uniqueActors);

// 4. Average Rating with Reduce: Utilize the reduce method to calculate the average movie rating based on the provided ratings.

function findAverageRating(movies) {
  const totalRatings = movies.reduce(
    (rating, movie) => rating + movie.rating,
    0
  );
  return totalRatings / movies.length;
}

// const averageRating = findAverageRating(movies);
// console.log(averageRating);

// 5. Modify Movie List: How would you modify the JSON structure to include additional information like release year and genre for each movie?

function modifyMovieList(movies) {
  const modifiedMovies = movies.map((movie) => {
    return {
      ...movie,
      releaseDate: null,
      genre: null,
    };
  });

  return modifiedMovies;
}

// const modifiedMovies = modifyMovieList(movies);
// console.log(modifiedMovies);

// 6. Filter by Rating: Create a function that takes the movie list and a specific rating as input. The function should return a new list containing only movies with that particular rating.

function filterByRating(movies, rating) {
  const filteredMovies = movies.filter((movie) => movie.rating === rating);

  return filteredMovies;
}

// const filteredMovies = filterByRating(movies, 4.9);
// console.log(filteredMovies);

// 7. Sort Movie List: Explain how you would achieve sorting the movie list in JavaScript. You can sort by either rating (descending) or movie name (alphabetical).

function sortMoviesList(movies, sortBy) {
  const sortedMovies = movies.sort((movie1, movie2) => {
    return sortBy === "rating"
      ? movie2[sortBy] - movie1[sortBy]
      : movie1[sortBy].localeCompare(movie2[sortBy]);
  });

  return sortedMovies;
}

// const sortedMovies = sortMoviesList(movies, "movieName");
// console.log(sortedMovies);
