
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import MoviePoster from './Components/MoviePoster/MoviePoster';
import React from 'react';
import { action,originals,trending,HorrorMovies,RomanceMovies,Documentaries } from './Components/urls';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MoviePoster urls={originals} title="Netflix Originals" />
      <MoviePoster urls={trending} title="Trending" isSmall />
      <MoviePoster urls={action} title="Action" isSmall />
      {/* <MoviePoster urls={ComedyMovies} title="Comedy" isSmall /> */}
      <MoviePoster urls={HorrorMovies} title="Horror" isSmall />
      <MoviePoster urls={RomanceMovies} title="Romance" isSmall />
      <MoviePoster urls={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
