import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Authentication from './Authentication'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Authentication sign={true} />} />
        <Route path='/login' element={<Authentication />} />
      </Routes>
    </>
  )
}

export default App
