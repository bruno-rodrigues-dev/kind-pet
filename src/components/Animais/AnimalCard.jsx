import { ArrowUpRight, Cat, Dog, PawPrint } from "lucide-react"

function AnimalCard({ animal, onSelect }) {
const AnimalIcon = animal.type === "Cachorro" ? Dog : Cat

return ( <article className="animal-card">
<div className={`animal-card-image ${animal.color}`}>
<img
src={animal.image}
alt={`${animal.name}, ${animal.type.toLowerCase()} disponível para adoção`}
/> <span className="animal-tag">{animal.tag}</span> <span className="animal-paw"> <PawPrint size={18} /> </span> </div>

  <div className="animal-card-content">
    <div className="animal-card-heading">
      <div>
        <h3>{animal.name}</h3>
        <p>
          {animal.type} · {animal.age} · Porte{" "}
          {animal.size.toLowerCase()}
        </p>
      </div>

      <AnimalIcon className="animal-type-icon" size={19} />
    </div>

    <button
      className="animal-card-link"
      onClick={() => onSelect(animal)}
    >
      Conhecer {animal.name}
      <ArrowUpRight size={16} />
    </button>
  </div>
</article>

)
}

export default AnimalCard
