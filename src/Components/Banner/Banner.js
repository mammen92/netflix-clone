import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';
  
function Banner() {
  const [movie, setMovie] = useState()
  
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(
        (response) => {
          let i = Math.floor(Math.random() * response.data.results.length)
          // console.log(i)
          setMovie(response.data.results[i].title? response.data.results[i] : response.data.results[i+1])
        })
  },[]);


  return (
    <div
      style={{backgroundImage: `url(${movie ?imageUrl+movie.backdrop_path : ''})`}}
      className='banner'>
      <div className='banner-gradient'>

        <div className="banner-content">

          <h1 className='banner-title'>{movie ? movie.title : ''}</h1>

          <div className='banner-buttons'>

            <div className="play-group">  
              <button className='btn-play'><i class="fa-solid fa-play icon-spaces"></i>Play</button>
              
            </div>

            <div className="more-info-group">
              <button className='btn-more-info'><i class="fa-solid fa-circle-info icon-spaces"></i>More Info</button>
              
            </div>
            
          </div>
          <p className='banner-description'> {movie? movie.overview:""}</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default Banner