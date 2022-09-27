import '../CSS/Nav.scss';
import { Routes, Route } from 'react-router-dom';
import Bulbasaur from './Bulbasaur';
import Charmander from './Charmander'

const Nav = () => {
  return (
    <nav>
      <h1 className="app-title">Pokemon Pixel Gallery!</h1>
      <div className="pokemon-btn-div">
        <Routes>
          <Route path="/bulbasaur" element={<Bulbasaur />}/>
          <Route path="/charmander" element={<Charmander />}/>
          <button className="nav-bulbasaur btn">Bulbasaur</button>
          <button className="nav-charmander btn">Charmander</button>
          <button className="nav-squirtle btn">Squirtle</button>
          <button className="nav-pikachu btn">Pikachu</button>
          <button className="nav-lapras btn">Lapras</button>
        </Routes>
      </div>
    </nav>
  )
}

export default Nav;