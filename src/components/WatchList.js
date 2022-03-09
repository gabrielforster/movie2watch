import React, { useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import { MovieCard } from './MovieCard.js'

export const WatchList = () => {
  const {watchlist} = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className='heading'>Minha WatchList</h1>

          <span className="count-movies">{watchlist.length} {WatchList.length === 1 ? 'Filme' : 'Filmes'}</span>
        </div>

        {watchlist.length > 0 ? (
            <div className="movie-grid">
            {watchlist.map((movie) =>(
              <MovieCard movie={movie} type='watchlist'/>
            ))}
            </div>
          )
        :
            <h2 className="no-movies">Nenhum filme na sua lista, procure e adicione filmes</h2>  
        }
        
      </div>
    </div>
  )
}
