import React from 'react'
import {Link} from 'react-router-dom';


export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
             <div className='brand'>
                 <Link to="/">Movie2Watch</Link></div>

                 <ul className='nav-links'>

                    <li>
                        <Link to="/watchedmovies">Filmes Assistidos</Link>
                    </li>
                    
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>
                    
                    <li>
                        <Link to="/add" className='btn'>+ Adicione a WatchList</Link>
                    </li>
                 </ul>
            </div>
        </div>

    </header>
  )
}
