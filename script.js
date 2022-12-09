
const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   privat : false
};


const a = prompt('Один из просмотренный фильмов?' , ''),
      b = prompt('Как вы его оцените?'),
      c = prompt('Один из просмотренный фильмов?' , ''),
      d = prompt('Как вы его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);