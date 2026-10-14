
import { Link as ScrollLink } from "react-scroll"
import "./Navbar.css"
import logo from "../../assets/kind-pet-logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Kind Pet" />
      </div>

      <div className="navbar-links">
        <a href="#inicio">Início</a>
        <ScrollLink to="animais" smooth={true} duration={400}>Animais</ScrollLink>
        <ScrollLink to="adotar" smooth={true} duration={400}>Como Adotar</ScrollLink>
        <ScrollLink to="ajudar" smooth={true} duration={400}>Como Ajudar</ScrollLink>
        <ScrollLink to="sobre" smooth={true} duration={400}>Sobre</ScrollLink>
      </div>
    </nav>
  )
}

export default Navbar
