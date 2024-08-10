import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailURL = `/movies/${movie.id}`
    const noImgURL = `https://via.placeholder.com/500x750?text=No+Image+Available`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img 
                src={posterURL} 
                className="card-img-top" 
                alt="Movie poster"
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = noImgURL; 
                  }}  />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailURL} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
  }


const Search = ({ keyword, searchResults }) => {
    const title = `You are seraching for ${keyword}`
    

    const resultsHtml = searchResults.length > 0 ? (
        searchResults.map((obj, i) => {
            return <MovieCard movie={obj} key={i} />
        })
    ) : 
        <div className="container">
            <h3 className="text-center">No results found for "{keyword}".</h3>
        </div>

    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
              <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
              </div>
            }
        </>
    )
}


export default Search;