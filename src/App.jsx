import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Pokeflex from "./Pokeflex"
import Pokegrid from "./Pokegrid"
import Menu from './Menu'

const App = () => {
  
  return (
    <Routes>
      <Route path index element = {<Menu/>} />
      <Route path = "home" element = {<Home/>} />
      <Route path="pokeflex" element = {<Pokeflex/>} />
      <Route path="pokegrid" element = {<Pokegrid/>} />
    </Routes>
  )
}

export default App