import React, { useContext, useState } from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {MovieModal} from './MovieModal.tsx'

export const MovieResultCard = ({movie}) => {

    const [showModal, setShowModal] = useState(false)

    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)

    let storedMovies = watchlist.find(o => o.id === movie.id)
    let storedMovieWatched = watched.find(o=> o.id === movie.id)

    const disableWatchList = storedMovies ? true : storedMovieWatched ? true : false
    const disableWatched = storedMovieWatched ? true : false

  return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title}Poster`}></img>
                ) :(
                    <div className="empty-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className='title'>{movie.title}</h3>    
                    <h4 className='date'>
                        {movie.release_date ? movie.release_date.substring(0,4) : '-'}
                    </h4>
                    <h4 
                        className='description'
                        onClick={() => setShowModal(true) }
                    >
                        Descrição
                    </h4> 
                </div>
                <div className="controls">
                        <button 
                        className='btn' 
                        disabled={disableWatchList} 
                        onClick={()=> addMovieToWatchlist(movie)}
                        >
                            Adicionar a WatchList
                        </button>

                    <button 
                        className='btn' 
                        disabled={disableWatched} 
                        onClick={()=> addMovieToWatched(movie)}
                    >
                        Adicionar a Assistidos
                    </button>
                    <MovieModal show={showModal} movie={movie} onClose={()=>{ setShowModal(false) }} />
                </div>
            </div>    
        </div>
  )
}
