import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/kind-pet-logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Kind Pet" />
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