import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import FaleConosco from "./pages/FaleConosco/FaleConosco"
import Mensagens from "./pages/Mensagens/Mensagens"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/mensagens" element={<Mensagens />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App