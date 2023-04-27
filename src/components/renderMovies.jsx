
export const ListOfMovies = ( {movies} ) =>{
      return(
            <div className='container-map'>
                  {movies.map(movie =>(
                  <div key={movie.imdbID}> 
                     <h2>{movie.title}</h2> 
                     <p>{movie.year}</p>
                     <img src={movie.poster} />
                  </div>))}
            </div>)}

export const NoMoviesResults = () => {
      return(<p>No se encontraron peliculas para esta busqueda</p>)}


export const Movies = ({ movies }) =>{
      const hasMovie = movies?.length > 0;

      return (
        hasMovie
           ? <ListOfMovies movies={movies}/>
           : <NoMoviesResults />)}

