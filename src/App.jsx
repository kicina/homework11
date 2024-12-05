import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Hobby from './pages/Hobby'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/projects' element={ <Projects /> } />
      <Route path='/hobby' element={ <Hobby /> } />
    </Routes>
  )
}

export default App
