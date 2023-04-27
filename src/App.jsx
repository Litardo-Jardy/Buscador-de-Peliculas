import { useCallback, useEffect, useRef, useState } from 'react';
import '../style.css';
import { Movies } from './components/renderMovies';
import useMovies from './hooks/useMovies';
import debounce from 'just-debounce-it';

export const useSearch = () =>{
       const [search, setSearch] = useState({});
       const [error, setError] = useState(null);
       const idFirsInput = useRef(true);

       useEffect(() =>{
          if (idFirsInput.current){
            idFirsInput.current = search === ''
            return}
          if (search === ''){
            setError('No se puso realizar la busquedacon espacios vacios.');
            return}
          if (search.match(/^\d+$/)){
            setError('No se puede realizar una busqueda con numeros.')
            return}
          if (search.length < 3 ){
            setError('La busqueda debe tener mas de tres caracteres')
            return}
          
          setError(null)
       },[search])

       return [search, setSearch, error]}

const App = () =>{
   const [search, setSearch, error] = useSearch()
   const { movies: mappendMovies, getMovies, loading } = useMovies({ search });

   const setDeboence = useCallback(debounce( search =>{
         getMovies({ search })
   },500),[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        getMovies()};
    const handleChange = (e) =>{
        const newSearch = e.target.value;
        setSearch(newSearch);
        setDeboence(newSearch);
        ;}

     return (

       <div className='container-app'>
        <header>
          <form className='container-form' onSubmit={handleSubmit} >
            <label>Search movie</label>
            <input onChange={handleChange} name="Search" placeholder='The super mario bros movie'/>
            { error &&  <p style={{ color: 'red',fontSize: '13px'}}>{error}</p> }
            <button>Search</button>
          </form>
        </header>

        <main>
                { loading? <p>Loading...</p>: <Movies movies={ mappendMovies } />}
        </main>

       </div>)}
export default App;
