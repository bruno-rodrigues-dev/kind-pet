
import { useEffect, useState } from "react"
import {
  Mail,
  CalendarDays,
  MessageSquareText,
  Inbox,
} from "lucide-react"

import "./Mensagens.css"

function Mensagens() {
  const [mensagens, setMensagens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    async function carregarMensagens() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/messages"
        )

        if (!response.ok) {
          throw new Error("Não foi possível carregar as mensagens.")
        }

        const dados = await response.json()
        setMensagens(dados)
      } catch (error) {
        setErro("Não foi possível conectar ao servidor.")
        console.error(error)
      } finally {
        setCarregando(false)
      }
    }

    carregarMensagens()
  }, [])

  if (carregando) {
    return (
      <main className="messages-page">
        <div className="messages-feedback">
          Carregando mensagens...
        </div>
      </main>
    )
  }

  if (erro) {
    return (
      <main className="messages-page">
        <div className="messages-feedback">
          <h2>Não foi possível carregar</h2>
          <p>{erro}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="messages-page">
      <header className="messages-header">
        <span className="messages-eyebrow">
          Kind Pet <span aria-hidden="true">/</span> Caixa de entrada
        </span>

        <h1>
          Mensagens
          <span className="messages-title-accent">recebidas</span>
        </h1>

        <p className="messages-description">
          Cada mensagem é uma oportunidade de aproximar pessoas
          da causa animal. Aqui você encontra os contatos recebidos
          pelo Kind Pet.
        </p>

        <div className="messages-count">
          <Inbox size={17} strokeWidth={1.7} />
          <span>
            {mensagens.length === 1
              ? "1 mensagem recebida"
              : `${mensagens.length} mensagens recebidas`}
          </span>
        </div>
      </header>

      {mensagens.length === 0 ? (
        <div className="messages-feedback">
          <Inbox
            className="messages-empty-icon"
            size={38}
            strokeWidth={1.3}
          />

          <h2>Nenhuma mensagem por aqui</h2>

          <p>
            Quando alguém entrar em contato, a mensagem aparecerá aqui.
          </p>
        </div>
      ) : (
        <section
          className="messages-list"
          aria-label="Lista de mensagens recebidas"
        >
          {mensagens.map((mensagem) => (
            <article className="message-card" key={mensagem.id}>
              <header className="message-card-header">
                <span className="message-card-index">
                  #{String(mensagem.id).slice(-4)}
                </span>

                <h2>{mensagem.nome}</h2>

                <p className="message-date">
                  <CalendarDays size={14} strokeWidth={1.7} />

                  <time dateTime={mensagem.data}>
                    {new Date(mensagem.data).toLocaleString("pt-BR")}
                  </time>
                </p>
              </header>

              <div className="message-details">
                <div className="message-detail">
                  <span className="message-label">
                    <Mail size={14} strokeWidth={1.8} />
                    E-mail
                  </span>

                  <a
                    className="message-value message-email"
                    href={`mailto:${mensagem.email}`}
                  >
                    {mensagem.email}
                  </a>
                </div>

                <div className="message-detail">
                  <span className="message-label">
                    <MessageSquareText size={14} strokeWidth={1.8} />
                    Assunto
                  </span>

                  <span className="message-value">
                    <span className="message-subject">
                      {mensagem.assunto}
                    </span>
                  </span>
                </div>
              </div>

              <div className="message-body">
                <span className="message-body-label">
                  Mensagem
                </span>

                <p className="message-content">
                  {mensagem.mensagem}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Mensagens
