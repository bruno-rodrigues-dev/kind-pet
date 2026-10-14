import { ArrowUpRight, HandHeart, Heart, House, Megaphone } from "lucide-react"
import caoegatoImage from "../../assets/caoegato.png"
import "./ComoAjudar.css"

const assistanceOptions = [
{
title: "Faça uma doação",
copy: "Sua contribuição cuida de alimentação, vacinas e atendimentos veterinários.",
icon: Heart,
tone: "donation",
},
{
title: "Seja voluntário",
copy: "Dedique algumas horas para socialização, feiras e muito carinho.",
icon: HandHeart,
tone: "volunteer",
},
{
title: "Ofereça lar temporário",
copy: "Abra espaço por um tempo e ajude um animal a florescer com segurança.",
icon: House,
tone: "temporary-home",
},
{
title: "Ajude a divulgar",
copy: "Compartilhe histórias e aumente as chances de um encontro especial.",
icon: Megaphone,
tone: "sharing",
},
]

function ComoAjudar() {
return ( <section id="ajudar" className="help-section"> <div className="help-layout"> <div className="help-grid">
{assistanceOptions.map((option) => {
const Icon = option.icon

        return (
          <a
            href="/fale-conosco"
            key={option.title}
            className={`help-card ${option.tone}`}
          >
            <span className="help-card-icon">
              <Icon size={22} />
            </span>
            <h3>{option.title}</h3>
            <p>{option.copy}</p>
            <ArrowUpRight className="help-card-arrow" size={17} />
          </a>
        )
      })}
    </div>

    <div className="help-content">
      <p className="help-eyebrow">
        <HandHeart size={15} />
        Toda ajuda encontra um caminho
      </p>

      <h2>
        Seu apoio vira cuidado <em>de verdade.</em>
      </h2>

      <p className="help-description">
        Você não precisa adotar para mudar uma vida. Cada forma de
        participação mantém a nossa rede de proteção em movimento.
      </p>

      <div className="help-image">
        <img
          src={caoegatoImage}
          alt="Cão e gato resgatados descansando juntos"
        />
        <span>Uma rede de cuidado começa com você.</span>
      </div>
    </div>
  </div>
</section>

)
}

export default ComoAjudar
