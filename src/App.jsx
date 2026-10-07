import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Animais from './pages/Animais/Animais'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animais" element={<Animais/>} />
      </Routes>
    </>
  )
}

export default App