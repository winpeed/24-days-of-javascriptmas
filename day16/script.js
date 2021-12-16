const ageSelector = document.getElementById("age-selector");
const genreSelector = document.getElementById("genre-selector");

const btn = document.getElementById("btn");
const suggestedMovie = document.getElementById("suggested-movie");

const moviesArr = [
  {
    name: "Die Hard",
    age: "18+",
    genre: "Action",
  },
  {
    name: "Love Actually",
    age: "18+",
    genre: "Romance",
  },
  {
    name: "The Polar Express",
    age: "PG",
    genre: "Action",
  },
  {
    name: "Shrek",
    age: "PG",
    genre: "Romance",
  },
];

function selectMovie() {
  const selectedMovie = moviesArr.find(
    (movie) =>
      movie.age == ageSelector.value && movie.genre == genreSelector.value
  );

  suggestedMovie.textContent = selectedMovie.name;
}

btn.addEventListener("click", selectMovie);

//Stretch Goal
genreSelector.addEventListener("change", selectMovie);
ageSelector.addEventListener("change", selectMovie);
