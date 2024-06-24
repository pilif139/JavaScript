import './App.css'
import ProjectsPage from './routes/ProjectsPage'
import Home from './routes/Home'
<<<<<<< HEAD
=======
import ProjectCode from './routes/ProjectCode'
>>>>>>> 0d19f6fc1379de550211299fd2f1f5200faf78fc
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/my-projects" element={<ProjectsPage/>}></Route>
<<<<<<< HEAD
=======
        <Route path="/project-code" element={<ProjectCode code=""></ProjectCode>}></Route>
>>>>>>> 0d19f6fc1379de550211299fd2f1f5200faf78fc
      </Routes>
    </>
  )
}

export default App
