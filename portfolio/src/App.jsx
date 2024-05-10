import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/my-projects" element={<Projects/>}></Route>
      </Routes>
    </>
  )
}

export default App
