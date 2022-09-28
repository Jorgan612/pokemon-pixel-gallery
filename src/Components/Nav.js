import '../CSS/Nav.scss';
import App from './App';
import { Routes, Route, NavLink } from 'react-router-dom';
import Bulbasaur from './Bulbasaur';
import Charmander from './Charmander'

const Nav = () => {
  return (
    <nav>
      <h1 className="app-title">Pokemon Pixel Gallery!</h1>
      <div className="pokemon-btn-div">
      <NavLink to='/' className='home'>Home</NavLink>
        <Routes>
          <Route path="/bulbasaur" element={<Bulbasaur />}/>
          <Route path="/charmander" element={<Charmander />}/>
        </Routes>
          <button className="nav-bulbasaur btn">Bulbasaur</button>
          <button className="nav-charmander btn">Charmander</button>
          <button className="nav-squirtle btn">Squirtle</button>
          <button className="nav-pikachu btn">Pikachu</button>
          <button className="nav-lapras btn">Lapras</button>
      </div>
    </nav>
  )
}

export default Nav;