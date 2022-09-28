import Nav from './Nav';
import '../CSS/App.scss';
import '../CSS/Nav.scss';
import Bulbasaur from './Bulbasaur';
import Charmander from './Charmander';
import Squirtle from './Squirtle';
import Pikachu from './Pikachu';
import Lapras from './Lapras';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bulbasaur' element={<Bulbasaur />}/>
        <Route path='/charmander' element={<Charmander />}/>
        <Route path='/squirtle' element={<Squirtle />}/>
        <Route path='/pikachu' element={<Pikachu />}/>
        <Route path='/lapras' element={<Lapras />}/>
      </Routes>
    </div>
  );
}

export default App;
