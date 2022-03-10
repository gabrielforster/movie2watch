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
                        <Link to="/movie2watch/">Watch List</Link>
                    </li>

                    <li>
                        <Link to="/movie2watch/assistidos">Assistidos</Link>
                    </li>
                    
                    <li>
                        <Link to="/movie2watch/procurar" className='btn'>Procure Filmes</Link>
                    </li>
                 </ul>
            </div>
        </div>

    </header>
  )
}
