import "./Footer.css"
import icon from "../../../public/kind-pet-favicon.png"

function Footer() {
  return (
    <footer className="footer">
      <img
        src={icon}
        alt="Kind Pet"
        className="footer-image"
      />

      <p>© Feito com carinho pelos animais.</p>
    </footer>
  )
}

export default Footer