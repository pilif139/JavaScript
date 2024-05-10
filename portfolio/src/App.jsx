import './App.css'
import ProjectsPage from './routes/ProjectsPage'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/my-projects" element={<ProjectsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
