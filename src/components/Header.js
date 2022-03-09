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
                        <Link to="/">Watch List</Link>
                    </li>

                    <li>
                        <Link to="/assistidos">Assistidos</Link>
                    </li>
                    
                    <li>
                        <Link to="/procurar" className='btn'>Procure Filmes</Link>
                    </li>
                 </ul>
            </div>
        </div>

    </header>
  )
}
