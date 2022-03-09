import React from 'react'

export const MovieCard = ({movie, type}) => {
  return (
    <div className='movie-card'>
        <div className=""></div>
        {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title}Poster`}></img>
                ) :(
                    <div className="empty-poster"></div>
                )}
    </div>
  )
}
