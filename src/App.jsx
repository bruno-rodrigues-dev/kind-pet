import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import FaleConosco from "./pages/FaleConosco/FaleConosco"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
    </>
  )
}

export default App