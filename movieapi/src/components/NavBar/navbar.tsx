import React, { useState, useEffect, useContext } from "react";
import { MoviesContext, MovieProvider } from "../../api-context/movie.context";
import { searchMovies } from "../../api-context/services.movie";
import { FaSearch } from "react-icons/fa";

import useDebounced from "../../debounce/useDebounnced";
import useDidMountEffect from "../../debounce/useDidMountEffect";

  
const Navbar = () => {
    const [search, setSearchbar] = useState("")
    const debouncedSearch = useDebounced<string>(search, 1000)

    const { updateMovies, getTop10Movies } = useContext(MoviesContext);


    const handleSearch = (search: string) => {      
        if (search) {
            searchMovies(search).then((movies) => {
              updateMovies(movies);
            });
        }
    }
    


    const handleOnSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      handleSearch(search)
    };

    useDidMountEffect(() => {
        if (debouncedSearch && debouncedSearch.length >= 3) {
          handleSearch(debouncedSearch)
        }
  
        if (!debouncedSearch) {
            getTop10Movies()
          }
         }, [debouncedSearch])


    return ( 
      <div className='wrapper'>
            
      <div className='butons'>
          <button id="btn-tvshow">Tv Show</button>
          <button id="btn-movies">Movies</button>

      </div>
      <div className='search-box'>
        <form name="form" onSubmit={(e) => handleOnSubmit(e)} noValidate>
        <input type = "text" className = "search-control" placeholder="Enter the name" id = "search-input" onChange={(e) => setSearchbar(e.target.value)}/>
       
        </form>
      </div>
      </div>
    );
  };

export default Navbar;

            