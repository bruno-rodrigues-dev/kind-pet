import { useState } from "react"
import { PawPrint } from "lucide-react"
import AnimalCard from "./AnimalCard"
import AnimalModal from "./AnimalModal"
import "./Animais.css"
import ana from "../../assets/ana.png"
import asta from "../../assets/asta.png"
import caio from "../../assets/caio.png"
import lisa from "../../assets/lisa.png"
import luna from "../../assets/luna.png"
import rulk from "../../assets/rulk.png"
import thor from "../../assets/thor.png"

const animals = [
{
id: 1,
name: "Thor",
type: "Cachorro",
age: "3 anos",
size: "Médio",
tag: "Brincalhão ao extremo",
image: thor,
story:
"Thor chegou tímido, mas descobriu rápido que colo, passeio e petisco são partes importantes de uma boa vida. Ele procura uma família que ame brincadeiras tranquilas e finais de tarde ao ar livre.",
traits: ["Vacinado", "Castrado", "Carinhoso", "Ama passeios"],
color: "animal-tone-yellow",
},
{
id: 2,
name: "Luna",
type: "Gato",
age: "2 anos",
size: "Pequeno",
tag: "Especialista em colo",
image: luna,
story:
"Luna é curiosa, afetuosa e tem uma paixão especial por janelas ensolaradas. Ela se adapta bem a apartamentos e espera um lar tranquilo para revelar sua personalidade delicada.",
traits: ["Vacinada", "Castrada", "Usa caixa", "Dócil"],
color: "animal-tone-green",
},
{
id: 3,
name: "Hulk",
type: "Cachorro",
age: "1 ano",
size: "Médio",
tag: "Energia boa",
image: rulk,
story:
"Hulk é aquele amigo que faz qualquer passeio parecer uma aventura. Jovem e muito inteligente, pequeno, porém forte! Ele busca uma rotina com espaço para brincar, aprender e receber carinho.",
traits: ["Vacinado", "Castrado", "Brincalhão", "Sociável"],
color: "animal-tone-rose",
},
{
id: 4,
name: "Asta",
type: "Gato",
age: "2 meses",
size: "Pequeno",
tag: "Imparável",
image: asta,
story:
"Asta tem olhar sereno e um ronronar que conquista na primeira visita. Brincalhão, agitado e companheiro.",
traits: ["Vacinado", "Castrado", "Enérgico", "Companheiro"],
color: "animal-tone-beige",
},
]

const filters = ["Todos", "Cachorro", "Gato"]

function Animais() {
const [activeFilter, setActiveFilter] = useState("Todos")
const [selectedAnimal, setSelectedAnimal] = useState(null)

const visibleAnimals =
activeFilter === "Todos"
? animals
: animals.filter((animal) => animal.type === activeFilter)

return ( <section id="animais" className="animals-section"> <div className="animals-container"> <div className="animals-heading"> <div className="animals-heading-copy"> <p className="animal-eyebrow"> <PawPrint size={15} />
Esperando por você </p>

        <h2>
          Encontre uma <em>amizade</em> para chamar de sua.
        </h2>
      </div>

      <div className="animal-filters" aria-label="Filtrar animais">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              activeFilter === filter
                ? "animal-filter active"
                : "animal-filter"
            }
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter === "Cachorro"
              ? "Cachorros"
              : filter === "Gato"
                ? "Gatos"
                : filter}
          </button>
        ))}
      </div>
    </div>

    <div className="animals-grid">
      {visibleAnimals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onSelect={setSelectedAnimal}
        />
      ))}
    </div>

    <p className="animals-footer">
      Não encontrou seu par ideal?{" "}
      <a href="#contato">
        Conte para a gente o que procura.
      </a>
    </p>
  </div>

  <AnimalModal
    animal={selectedAnimal}
    onClose={() => setSelectedAnimal(null)}
  />
</section>

)
}

export default Animais
