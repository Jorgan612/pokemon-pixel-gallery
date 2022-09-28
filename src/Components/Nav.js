import '../CSS/Nav.scss';
import App from './App';
import { Link } from 'react-router-dom';
import Bulbasaur from './Bulbasaur';
import Charmander from './Charmander'

const Nav = () => {
  return (
    <nav>
      <h1 className="app-title">Pokemon Pixel Gallery!</h1>
      <div className="pokemon-btn-div">
        <Link to='/' className='home'>
          <button className='nav-home btn'>Home</button>
        </Link>
        <Link to='/bulbasaur'>
          <button className="nav-bulbasaur btn">Bulbasaur</button>
        </Link>
        <Link to='/charmander'>
          <button className="nav-charmander btn">Charmander</button>
        </Link>
        <Link to='/squirtle'>
            <button className="nav-squirtle btn">Squirtle</button>
        </Link>
        <Link to='/pikachu'>
            <button className="nav-pikachu btn">Pikachu</button>
        </Link>
        <Link to='/lapras'>
            <button className="nav-lapras btn">Lapras</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;