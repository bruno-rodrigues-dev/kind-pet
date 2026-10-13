import { Heart, HandHeart, Gift, Share2, ArrowUpRight } from "lucide-react"

const formasDeAjudar = [
{
id: 1,
icon: HandHeart,
title: "Seja voluntário",
description: "Doe seu tempo e carinho para ajudar os animais que mais precisam.",
link: "Quero participar",
},
{
id: 2,
icon: Gift,
title: "Faça uma doação",
description: "Contribua com alimentos, medicamentos e outros itens essenciais.",
link: "Quero doar",
},
{
id: 3,
icon: Share2,
title: "Compartilhe",
description: "Divulgue os animais disponíveis e ajude a encontrar um novo lar.",
link: "Quero divulgar",
},
]

function ComoAjudar() {
return ( <section id="ajudar" className="help-section"> <div className="help-container"> <div className="help-heading"> <p className="help-eyebrow"> <Heart size={15} />
Toda ajuda faz diferença </p> <h2>
Existem muitas formas de <em>transformar vidas.</em> </h2> <p className="help-description">
Você não precisa adotar para fazer parte dessa história.
Pequenas atitudes podem mudar o futuro de um animal. </p> </div>

```
    <div className="help-grid">
      {formasDeAjudar.map((forma) => {
        const Icon = forma.icon

        return (
          <article className="help-card" key={forma.id}>
            <div className="help-card-icon">
              <Icon size={25} />
            </div>
            <h3>{forma.title}</h3>
            <p>{forma.description}</p>
            <a href="#contato" className="help-link">
              {forma.link}
              <ArrowUpRight size={17} />
            </a>
          </article>
        )
      })}
    </div>
  </div>
</section>

)
}

export default ComoAjudar
