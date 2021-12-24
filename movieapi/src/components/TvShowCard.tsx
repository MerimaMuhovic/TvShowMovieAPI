import React, { useContext, useEffect } from 'react'
import { useModal } from 'react-hooks-use-modal';
import { TvShowContext } from "../api-context/tvshow.context"



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
              <h3>{tvshows.title}</h3>
              <a href = "#" className = "home-details-btn" onClick={open}>Get Details</a>
              <Modal>

<div className = "details">

  <button type = "button" className = "btn details-close-btn" id = "details-close-btn" onClick={close}>
     </button>

 <div className = "details-content">

     <h2 className = "title">Meals Name Here</h2>
     <p className = "category">Category Name</p>

       <div className = "instruct">
         <h3>Instructions:</h3>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo blanditiis quis accusantium natus! Porro, reiciendis maiores molestiae distinctio veniam ratione ex provident ipsa, soluta suscipit quam eos velit autem iste!</p>
       </div>

       <div className = "img">
         <img src = "food.jpg" alt = ""/>
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
