import React from 'react';
import "./app.css";

import Top from "./components/top";
import "./components/top.css";

import HomeCard from './components/homeCard';
import "./components/homeCard.css";

import NavBar from "./components/NavBar/navbar";
import "./components/NavBar/navbar.css";
import { MovieProvider } from './api-context/movie.context';
import { TvShowProvider } from './api-context/tvshow.context';
import TvShowCard from './components/TvShowCard';



function App() {
  return (
    <> 
    <Top />

     <div className='app'>
       <MovieProvider>
       <TvShowProvider>      
       <NavBar/>
       <TvShowCard/>
      <HomeCard/>
      
      </TvShowProvider>

      </MovieProvider>
     </div>
     

    </>

  );
}

export default App;
