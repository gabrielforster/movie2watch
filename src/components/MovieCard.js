import React from 'react'
import {Controls} from './Controls.js'

export const MovieCard = ({movie, type}) => {
  return (
    <>
    <div className='list-movie-card'>
        <div className="overlay"></div>
          {movie.poster_path
            ?(
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={`${movie.title}Poster`}></img>
            )
            :(
              <div className="empty-poster"></div>
          )}
        <Controls type={type} movie={movie}/>
    </div>
    </>
  )
}
