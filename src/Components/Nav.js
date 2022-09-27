import '../CSS/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <h1 className="app-title">Pokemon Pixel Gallery!</h1>
      <div className="pokemon-btn-div">
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