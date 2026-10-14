import { PawPrint, Sparkles, Users, House, Stethoscope } from "lucide-react"

const indicators = [
  {
    value: "1.280",
    label: "adoções realizadas",
    icon: Users,
  },
  {
    value: "340",
    label: "lares temporários",
    icon: House,
  },
  {
    value: "12",
    label: "anos de atuação",
    icon: Stethoscope,
  },
]

function Sobre() {
  return (
    <section id="sobre" className="about-section">
      <PawPrint className="about-decoration" strokeWidth={1} />

      <div className="about-container">
        <div className="about-heading">
          <p className="about-eyebrow">
            <Sparkles size={15} />
            Desde 2014
          </p>

          <h2>Um abrigo é só o começo.</h2>
        </div>

        <div className="about-content">
          <blockquote>
            “Acreditamos em encontros construídos com escuta, respeito e um
            pouco de coragem. Porque todo animal merece ser esperado por
            alguém.”
          </blockquote>

          <p className="about-author">
            — Equipe Patinhas que Transformam
          </p>

          <div className="about-indicators">
            {indicators.map((indicator) => {
              const Icon = indicator.icon

              return (
                <div className="about-indicator" key={indicator.label}>
                  <Icon size={21} className="about-indicator-icon" />
                  <strong>{indicator.value}</strong>
                  <span>{indicator.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre