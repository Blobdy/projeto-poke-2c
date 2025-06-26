import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'
import Viacep from './Viacep'

const App = () => {

  return (
    <Routes>
      <Route index element={<Menu/>} />
      <Route path = "home" element={<Home/>} />
      <Route path = "pokeflex" element={<PokeFlex/>} />
      <Route path = "pokegrid" element={<PokeGrid/>} />
      <Route path= "viacep" element={<Viacep/>} />
    </Routes>
  )
}

export default App
