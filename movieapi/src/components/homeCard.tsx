import React, { useContext, useEffect } from 'react'
import { useModal } from 'react-hooks-use-modal';
import { MoviesContext } from "../api-context/movie.context"
import {FaRegWindowClose} from "react-icons/fa"


const HomeCard = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const { movies, getTop10Movies } = useContext(MoviesContext);

  useEffect(getTop10Movies, [])

    return (
      <div className="catalog">

      {movies.map((movie) => (
    <div className = "home-wrapper">
      
      <div className = "home-card-result">
        <div id= "home">
          <div className = "home-item">
            <div className = "home-img">
              <img src ={movie.picture} alt = "movie"/>
            </div>
            <div className = "home-name" key={movie.id}>
              <h3>{movie.title}</h3>
              <a href = "#" className = "home-details-btn" onClick={open}>Get Details</a>
              <Modal>

<div className = "details">

  <button type = "button" className = "btn details-close-btn" id = "details-close-btn" onClick={close}>
<i className="fas fa-times"><FaRegWindowClose/></i>
     </button>

 <div className = "details-content">

     <h2 className = "title">{movie.title}</h2>
     <p className = "category">{movie.rating}</p>

       <div className = "instruct">
         <h3>Overview:</h3>
         <p>{movie.resume}</p>
       </div>

       <div className = "img">
         <img src = {movie.picture} alt = ""/>
       </div>

       <div className = "details-link">
         <a href = "#" target = "_blank">Watch Video</a>  
       </div> 
   </div>
 </div>

   </Modal>
    
   </div>
            </div>
          </div> 

      
        </div>
      </div>

      
       
))}
      </div>

    
    )
}

export default HomeCard
