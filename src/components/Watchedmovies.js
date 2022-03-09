import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watchedmovies = () => {

  const {watched} = useContext(GlobalContext)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className='heading'>Filmes assistidos</h1>
          <span className="count-movies">{watched.length} {watched.length === 1 ? 'Filme' : 'Filmes'}</span>
        </div>

        {watched.length > 0 ? (
            <div className="movie-grid">
            {watched.map((movie) =>(
              <MovieCard movie={movie} type='watched'/>
            ))}
            </div>
          )
        :
            <h2 className="no-movies">Nenhum filme assistido</h2>  
        }
        
      </div>
    </div>
  )
}
