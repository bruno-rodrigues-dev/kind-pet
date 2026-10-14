import { useState } from "react"
import { Check, Mail, MapPin, Phone, Send } from "lucide-react"
import "./BoxFaleConosco.css"

function FaleConosco() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-panel">
        <div className="contact-information">
          <p className="contact-eyebrow">
            <Mail size={15} />
            Vamos conversar
          </p>

          <h1>
            Toda grande história começa com um <em>oi.</em>
          </h1>

          <p className="contact-description">
            Quer adotar, contribuir ou saber mais? Deixe uma
            mensagem. Nossa equipe responde com carinho.
          </p>

          <div className="contact-details">
            <a href="mailto:oikindpet@gmail.com.br">
              <span className="contact-detail-icon">
                <Mail size={17} />
              </span>
              oikindpet@gmail
            </a>

            <a href="tel:+5511998765432">
              <span className="contact-detail-icon">
                <Phone size={17} />
              </span>
              (11) 99876-5432
            </a>

            <div className="contact-address">
              <span className="contact-detail-icon">
                <MapPin size={17} />
              </span>
              Rua das Acácias, 145 · São Paulo, SP
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          {submitted ? (
            <div className="contact-success">
              <span className="contact-success-icon">
                <Check size={30} />
              </span>

              <h2>Mensagem recebida!</h2>

              <p>
                Obrigado por se aproximar da nossa causa.
                Em breve, alguém da equipe falará com você.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Seu nome
                </label>

                <input
                  id="contact-name"
                  name="nome"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Seu e-mail
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Como quer ajudar?
                </label>

                <select
                  id="contact-subject"
                  name="assunto"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>

                  <option value="adocao">
                    Quero adotar
                  </option>

                  <option value="doacao">
                    Quero fazer uma doação
                  </option>

                  <option value="voluntariado">
                    Quero ser voluntário
                  </option>

                  <option value="lar-temporario">
                    Quero oferecer lar temporário
                  </option>

                  <option value="outro">
                    Outro assunto
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Sua mensagem
                </label>

                <textarea
                  id="contact-message"
                  name="mensagem"
                  rows={3}
                  placeholder="Conte um pouco mais..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Enviar mensagem
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default FaleConosco