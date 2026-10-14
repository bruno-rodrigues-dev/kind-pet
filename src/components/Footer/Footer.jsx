import { Heart, Instagram, ArrowUp } from "lucide-react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Kind Pet
            <Heart size={18} fill="currentColor" />
          </a>

          <p>
            Cada vida importa. Cada gesto transforma.
            Juntos, podemos construir um futuro melhor
            para os animais.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <a href="/#inicio">Início</a>
          <a href="/#animais">Nossos animais</a>
          <a href="/#adotar">Como adotar</a>
          <a href="/#ajudar">Como ajudar</a>
          <a href="/#sobre">Sobre nós</a>
        </div>

        <div className="footer-contact">
          <h3>Entre em contato</h3>

          <a href="/fale-conosco">Fale conosco</a>

          <a href="mailto:oi@patinhas.org">
            oi@patinhas.org
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kind Pet.
          Feito com carinho pelos animais.
        </p>

        <a href="/#inicio" className="footer-back-top">
          Voltar ao topo
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer