import "./Hero.css"
import heroImage from "../../assets/hero.png"
import "./Hero.css"

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tag">
            Todo animal merece um recomeço
          </p>

          <h1>
            Um encontro pode mudar <em>duas</em> histórias.
          </h1>

          <p className="hero-description">
            Acolhemos, cuidamos e conectamos cães e gatos a famílias prontas
            para amar de verdade.
          </p>

          <div className="hero-buttons">
            <a href="#animais" className="hero-button-primary">
              Conheça nossos animais
            </a>

            <a href="#ajudar" className="hero-button-secondary">
              Quero ajudar
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>+1.280</strong>
              <span>vidas transformadas</span>
            </div>

            <div className="hero-divider"></div>

            <div>
              <strong>94%</strong>
              <span>adoções responsáveis</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Animais disponíveis para adoção"
            />
          </div>

          <div className="hero-card hero-card-bottom">
            <strong>Eles já têm história.</strong>
            <span>Agora falta o próximo capítulo.</span>
          </div>

          <div className="hero-card hero-card-top">
            <span>Adoções este mês</span>
            <strong>27 felizes</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero