
const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   privat : false
};



for (let i = 0; i < 2; i++){
   const a = prompt('Один из просмотренный фильмов?' , ''),
         b = prompt('Как вы его оцените?');        
         
         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else { 
            console.log('error');
            i--;
  }
}


console.log(personalMovieDB);