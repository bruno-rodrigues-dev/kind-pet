import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Kind Pet</h1>
      </div>

      <div className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/animais">Animais</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  )
}

export default Navbar