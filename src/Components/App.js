import Nav from './Nav';
import '../CSS/App.scss';
import '../CSS/Nav.scss';
import Bulbasaur from './Bulbasaur';
import Charmander from './Charmander';
import Home from './Home';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <nav> */}
        {/* <h1 className="app-title">Pokemon Pixel Gallery!</h1> */}
        {/* <div className="pokemon-btn-div"> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/bulbasaur" element={<Bulbasaur />}/>
            <Route path="/charmander" element={<Charmander />}/>
          </Routes>
            {/* <button className="nav-bulbasaur btn">Bulbasaur</button>
            <button className="nav-charmander btn">Charmander</button>
            <button className="nav-squirtle btn">Squirtle</button>
            <button className="nav-pikachu btn">Pikachu</button>
            <button className="nav-lapras btn">Lapras</button> */}
        {/* </div> */}
      {/* </nav> */}
    </div>
  );
}

export default App;
