import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//59a07f0
//http://www.omdbapi.com/?i=tt3896198&apikey=59a07f0
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=59a07f0";
const App = () => {
  //useState Hook
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  //useEffect Hook
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    //main block with className app
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
