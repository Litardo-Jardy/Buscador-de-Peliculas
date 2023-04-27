import { useCallback, useRef, useState } from 'react';
import { SearchMovies } from '../service/movies';

const useMovies = ( { search }) =>{ 
      const [movies, setMovies] = useState([])
      const [loading, setLoading] = useState(false)
      const previusSearch = useRef(search)

               const getMovies = useCallback( async ({ search }) =>{
                     if(search === previusSearch.current) return
                      console.log("Hola")
                try{
                     setLoading(true)
                     previusSearch.current = search
                     const newMovies = await SearchMovies( {search} );
                     setMovies(newMovies)} finally { setLoading(false) }},[])
             
               return { movies, getMovies, loading }}
export default useMovies;