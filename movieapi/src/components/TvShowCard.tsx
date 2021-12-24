import React, { useContext, useEffect } from 'react'
import { useModal } from 'react-hooks-use-modal';
import { TvShowContext } from "../api-context/tvshow.context"
import {FaRegWindowClose} from "react-icons/fa"



const TvShowCard = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const { tvshows, getTop10TvShows } = useContext(TvShowContext);

  useEffect(getTop10TvShows, [])

    return (
      <div className="catalog">

      {tvshows.map((tvshows) => (
    <div className = "home-wrapper">
      
      <div className = "home-card-result">
        <div id= "home">
          <div className = "home-item">
            <div className = "home-img">
              <img src ={tvshows.picture} alt = "movie"/>
            </div>
            <div className = "home-name" key={tvshows.id}>
              <h3>{tvshows.name}</h3>
              <a href = "#" className = "home-details-btn" onClick={open}>Get Details</a>
              <Modal>

<div className = "details">

  <button type = "button" className = "btn details-close-btn" id = "details-close-btn" onClick={close}>
<i className="fas fa-times"><FaRegWindowClose/></i>
     </button>

 <div className = "details-content">

     <h2 className = "title">{tvshows.name}</h2>
     <p className = "category">Rating : {tvshows.rating}</p>

       <div className = "instruct">
         <h3>Overview:</h3>
         <p>{tvshows.resume}</p>
       </div>

       <div className = "img">
         <img src ={tvshows.picture} alt = ""/>
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

export default TvShowCard
