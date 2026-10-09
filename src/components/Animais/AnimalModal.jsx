import { ArrowUpRight, X } from "lucide-react"

function AnimalModal({ animal, onClose }) {
if (!animal) return null

return ( <div
   className="animal-modal-overlay"
   onClick={onClose}
   role="presentation"
 >
<section
className="animal-modal"
role="dialog"
aria-modal="true"
aria-labelledby="animal-modal-title"
onClick={(event) => event.stopPropagation()}
> <button
       className="animal-modal-close"
       onClick={onClose}
       aria-label="Fechar detalhes"
     > <X size={19} /> </button>

    <div className="animal-modal-image">
      <img src={animal.image} alt={animal.name} />
    </div>

    <div className="animal-modal-content">
      <p className="animal-eyebrow">Disponível para adoção</p>

      <h2 id="animal-modal-title">{animal.name}</h2>

      <p className="animal-modal-meta">
        {animal.type} · {animal.age} · Porte{" "}
        {animal.size.toLowerCase()}
      </p>

      <p className="animal-modal-story">{animal.story}</p>

      <div className="animal-traits">
        {animal.traits.map((trait) => (
          <span key={trait}>{trait}</span>
        ))}
      </div>

      <div className="animal-responsible-note">
        <strong>Adoção responsável</strong>
        <p>
          Vamos conversar sobre a rotina, o ambiente e a adaptação
          antes de qualquer decisão.
        </p>
      </div>

      <a
        href="#contato"
        className="animal-modal-action"
        onClick={onClose}
      >
        Tenho interesse em {animal.name}
        <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
</div>

)
}

export default AnimalModal
