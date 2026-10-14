import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Animais from "../../components/Animais/animais"
import ComoAdotar from "../../components/ComoAdotar/ComoAdotar"
import ComoAjudar from "../../components/ComoAjudar/ComoAjudar"
import Sobre from "../../components/SobreNos/Sobre"

function Home() {
  return (
    <main className="home">
      <Hero />
      <Animais />
      <ComoAdotar />
      <ComoAjudar />
      <Sobre />

    </main>
  )
}

export default Home