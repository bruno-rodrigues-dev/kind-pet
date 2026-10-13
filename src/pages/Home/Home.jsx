import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Animais from "../../components/Animais/animais"
import ComoAdotar from "../../components/ComoAdotar/ComoAdotar"
import ComoAjudar from "../../components/ComoAjudar/ComoAjudar"

function Home() {
  return (
    <main className="home">
      <Hero />
      <Animais />
      <ComoAdotar />
      <ComoAjudar />

    </main>
  )
}

export default Home