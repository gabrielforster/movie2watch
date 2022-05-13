import React from "react";

export const MovieModal = ({ show, movie, onClose }) => {

    if(!show) return null

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="close-btn">
                    <button onClick={onClose} className='close'>X</button>
                </div>

                <div className="modal-inner">
                    <div className="poster">
                        {movie.poster_path
                        ?(
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                alt={`${movie.title}Poster`}></img>
                        )
                        :(
                            <div className="empty-poster"></div>
                        )}
                    </div>

                    <div className="infos">
                        <h1>{movie.title}</h1>
                        <h3>{`Lançamento: ${movie.release_date.substring(0,4)}`}</h3>
                        <h3>{`Nota: ${movie.vote_average}`}</h3>
                    </div>

                </div>
                {movie.overview
                ? <div className="movie-description"><p>{movie.overview}</p></div>
                : <div className="no-description"><p>Sem descrição do filme</p></div>
                }
            </div>
        </div>
    )
}