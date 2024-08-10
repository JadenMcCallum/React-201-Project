import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Search from "./Components/Search";
import MovieView from "./Components/MovieView";
import ErrorPage from "./Components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const performSearch = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=2e2ef159d362786a4af4f37a561252f8`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      });
  };

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} onSearch={performSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
