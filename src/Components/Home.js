import '../CSS/Home.scss';
import pokeball from '../Assets/flat-pokeball.png';


const Home = () => {
  return (
    <div className='home-page-div'>
      <img className="home-page-img" src={pokeball} alt='pokeball'/>
    </div>
  )

}

export default Home;