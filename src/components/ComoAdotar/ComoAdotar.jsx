
import { Heart, ArrowUpRight, Check } from "lucide-react"
import "./ComoAdotar.css"

const etapas = [
  {
    number: "01",
    title: "Conheça",
    copy: "Escolha um perfil, leia a história e preencha seu interesse."
  },
  {
    number: "02",
    title: "Converse",
    copy: "Nossa equipe tira dúvidas e entende a rotina da sua família."
  },
  {
    number: "03",
    title: "Acolha",
    copy: "Com tudo alinhado, você prepara a chegada do novo melhor amigo."
  }
]

const lembretes = [
  "Ter 21 anos ou responsável legal",
  "Ter espaço e tempo para adaptação",
  "Concordar com acompanhamento"
]

function ComoAdotar() {
  return (
    <section id="adotar" className="adotar-section">
      <div className="adotar-container">
        <div className="adotar-intro">
          <p className="adotar-eyebrow">
            <Heart size={15} />
            Adoção com propósito
          </p>

          <h2>
            Amor é escolha. <em>Cuidar</em> é compromisso.
          </h2>

          <p className="adotar-description">
            A adoção responsável respeita o tempo de cada animal e prepara a
            família para uma vida inteira de parceria.
          </p>

          <a href="#contato" className="adotar-button">
            Quero conversar sobre adoção
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="adotar-etapas">
          {etapas.map((etapa) => (
            <div className="adotar-card" key={etapa.number}>
              <span className="adotar-number">{etapa.number}</span>

              <div>
                <h3>{etapa.title}</h3>
                <p>{etapa.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="adotar-lembretes">
        <span className="adotar-lembretes-title">
          Antes de adotar, lembre-se:
        </span>

        {lembretes.map((lembrete) => (
          <span className="adotar-lembrete" key={lembrete}>
            <Check size={15} />
            {lembrete}
          </span>
        ))}
      </div>
    </section>
  )
}

export default ComoAdotar