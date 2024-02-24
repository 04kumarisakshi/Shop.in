
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { Navbar } from './Components/Navbar'

function App() {
  
  return (
    <div className="">
     <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
