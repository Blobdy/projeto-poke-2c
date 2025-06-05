import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './Home.css'
import Pokegrid from './Pokegrid'
import Pokeflex from './Pokeflex'
import Menu from './Menu'

const Home = () => {

    return (
        <div>
           <Pokegrid />
           <Pokeflex />
           <Pokegrid />
           <Pokeflex />
        </div>
    )
}
export default Home