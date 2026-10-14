
import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { ArrowRight, Menu, X } from "lucide-react"
import "./Navbar.css"
import logo from "../../assets/kind-pet-logo.png"

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" aria-label="Kind Pet - Início">
        <img src={logo} alt="Kind Pet" />
      </a>

      <button
        type="button"
        className="navbar-menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
        aria-controls="navbar-links"
      >
        {menuAberto ? <X size={25} /> : <Menu size={25} />}
      </button>

      <div id="navbar-links" className={`navbar-links ${menuAberto ? "menu-aberto" : ""}`}>
        <a href="/" className="inicio" onClick={fecharMenu}>Início</a>
        <ScrollLink to="animais" smooth duration={400} onClick={fecharMenu}>Animais</ScrollLink>
        <ScrollLink to="adotar" smooth duration={400} onClick={fecharMenu}>Como Adotar</ScrollLink>
        <ScrollLink to="ajudar" smooth duration={400} onClick={fecharMenu}>Como Ajudar</ScrollLink>
        <ScrollLink to="sobre" smooth duration={400} onClick={fecharMenu}>Sobre</ScrollLink>

        <a href="/fale-conosco" className="navbar-contact navbar-contact-mobile" onClick={fecharMenu}>
          Fale Conosco <ArrowRight size={18} />
        </a>
      </div>

      <a href="/fale-conosco" className="navbar-contact navbar-contact-desktop">
        Fale Conosco <ArrowRight size={18} />
      </a>
    </nav>
  )
}

export default Navbar
