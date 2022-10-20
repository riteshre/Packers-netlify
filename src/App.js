import logo from './logo.svg';
import './App.css';
import Home2 from "./pages/home2"
import About from "./pages/about"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Costcalculator from "./pages/costcalculator"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {createContext, useState} from 'react'

export const store=createContext()

function App() {
  const [user,setUser]=useState('')
  const [islogged,setIslogged]=useState(false)
  return (
    <div className="bod">
      <store.Provider value={[user,setUser,islogged,setIslogged]}>
      <Router>
        <Routes>
          <Route path='/' element={<Home2/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/costcalculator'element={<Costcalculator/>}/>
        </Routes>
      </Router>
      </store.Provider>
    </div>
  )
}

export default App;
