import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid(){    
    useEffect(( ) => [
        fetch("https://api.themoviedb.org/3/discover/movie", {
            hearders: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzczOTk4YWFiMWIyOTNkNzQ5NWNhMmU5OTIwZWY5ZCIsInN1YiI6IjYxYmFhNjk0OTQ1ZDM2MDA0MzJlMjM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77NjieODGIgPfhkZwZioL-LAhXWj2G-kL7tWQCNu6B8",
                 "Content-Type" : "application/json;charset=utf-8",
            },
        })
    ])
    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                   <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )    
}