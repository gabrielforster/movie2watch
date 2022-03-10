import React, {useState} from 'react'
import { MovieResultCard } from './MovieResultCard';

export const Search = () => {

  const[search, setSearch] = useState("");
  const[movies, setMovies] = useState([])

  let apiKey = '80b5bde829cf84ab43064490f20c934e'

  const searchMovies=(evt) => {
    if(evt.key === "Enter")
    {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&page=1&include_adult=false&query=${search}`)
      .then(res=> res.json())
      .then(data=>{
    if(!data.errors){
      setMovies(data.results)
    }
    else{
      setMovies([])
    }
    })}
  }

  return (
    <div>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
              <div className="search-movie">
                <input type="text" 
                placeholder='Pesquise um filme' 
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
                onKeyPress={searchMovies} />  
              </div>
              {movies.length>0 &&
                <ul className="results">
                  {movies.map(movies=>(
                    <li key={movies.id}>
                      <MovieResultCard movie={movies}/>
                    </li>
                  ))}  
                </ul>
              }
          </div>
        </div>
      </div>
    </div>
  )
}
