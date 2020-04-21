function movies(input){
    let movies = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('addMovie')) {
            let movieName = input[i].replace(/addMovie\s*/, '');
            if (!movies.hasOwnProperty(movieName)) {
                movies[movieName] = { name: movieName };
            }
        } else if (input[i].includes('onDate')) {
            let [movieName, date] = input[i].split(/\s*onDate\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['date'] = date;
            }
        } else if (input[i].includes('directedBy')) {
            let [movieName, director] = input[i].split(/\s*directedBy\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['director'] = director;
            }
        }
    }
    for (let movieName in movies) {
        let movie = movies[movieName];
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('date') &&
            movie.hasOwnProperty('director')
        ) {
            console.log(JSON.stringify(movie));
        }
    }
}



movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);

/*Movies
Write a function that stores information about movies. The info will be name, director, date. 

You can receive several types on input:
"addMovie {movie name}" – add the movie
"{movie name} directedBy {director}" – check if the movie exists and then add the director
"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.
Examples
Input	
[
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]	



Output
{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}

*/