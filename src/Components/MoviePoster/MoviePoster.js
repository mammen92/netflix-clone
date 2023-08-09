import React, { useEffect,useState } from 'react'
import './MoviePoster.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube';


export default function MoviePoster(props) {
  const [movieposter, setMoviePoster] = useState([])
  const [youtubeid, setYoutubeid] = useState('')

  
  useEffect(
    () => {
      axios
        .get(props.urls)
        .then(
          response => {
            console.log(response.data.results)
              setMoviePoster(response.data.results)
          })
    }, [MoviePoster])
  

   const opts = {
      height: '390',
     width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
  };



  const playvideo = (id) => {

    let tvshow = props.title === "Netflix Originals" ? 'tv' : 'movie';
    
    const options = {
      method: 'GET',
      
        url: `https://api.themoviedb.org/3/${tvshow}/${id}/videos?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGQ3MWE4MmI5MTgyZjNkMjExOTdkOTVhMGZjZTI0NiIsInN1YiI6IjY0Y2E3MzJmZDM3MTk3MDEzOTc4YmZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AUfXmoABR1-KBhhano_p4KbRSf3GsYiFSI56mBqXEyk'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          if (response.data.results && response.data.results.length !== 0) {
            const trailers = response.data.results.filter(result => result.type === "Trailer");
            console.log(trailers);
            setYoutubeid(trailers[0]);
          }
          else {
            console.log('No trailer found')
          }
        })
        .catch(function (error) {
          console.error(error);
        });
  
    } 
    
  return (
        <div>
        <div className='movie-posters'>
          <h3 className='movie-name'>{props.title}</h3>
          <div className="movie-images">
            
            
          {movieposter.map((obj) => (
            <>
            <div className='movie-title-group'>  
            <img onClick={()=>playvideo(obj.id)} className = { props.isSmall ? 'movie-image-small' : 'movie-image' } src = { props.isSmall ? `${imageUrl + obj.poster_path}` : `${imageUrl + obj.backdrop_path}` } alt = '' />
             {/* <h3>{obj.title}</h3> */}
            </div>
            </>
          )
      
            
        // <img className={props.isSmall ? 'movie-image-small' : 'movie-image'} src={props.isSmall ? `${imageUrl + obj.poster_path}` : `${imageUrl + obj.backdrop_path}`} alt='' />
        //     <h1 className='movie-title'></h1>
              
            
          )}
      
        </div>
        
        {youtubeid && <YouTube videoId={youtubeid.key} opts={opts} />}
      </div>
      </div>
      )
    }