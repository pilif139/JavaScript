import './App.css'
import ProjectsPage from './routes/ProjectsPage'
import Home from './routes/Home'
import ProjectCode from './routes/ProjectCode'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/my-projects" element={<ProjectsPage/>}></Route>
        <Route path="/project-code" element={<ProjectCode code=""></ProjectCode>}></Route>
      </Routes>
    </>
  )
}

export default App
