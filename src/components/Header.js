import React from 'react'
import {Link} from 'react-router-dom';
import logoGithub from './img/githubicon.svg'

export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
             <div className='brand'>
                 <Link to="/movie2watch/">Movie2Watch</Link></div>

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

                    <li>
                        <a href="https://github.com/gabrielforster/movie2watch" target='_blank' rel="noreferrer" className='btn'><img className='githublogo' src={logoGithub} alt='github logo'></img></a>
                    </li>
                 </ul>
            </div>
        </div>

    </header>
  )
}
