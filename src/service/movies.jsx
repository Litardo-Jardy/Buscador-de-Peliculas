

export const SearchMovies = async ({ search }) =>{
       if(search === '') return
       if(search){
        const response = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`);
        const data = await response.json();
      
        const movies = data.Search;
        return movies?.map(movie =>({
                     id: movie.imdbID,
                     year: movie.Year,
                     title: movie.Title,
                     poster: movie.Poster}));}}