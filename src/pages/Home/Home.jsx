import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Animais from "../../components/Animais/animais"
import ComoAdotar from "../../components/ComoAdotar/ComoAdotar"

function Home() {
  return (
    <main className="home">
      <Hero />
      <Animais />
      <ComoAdotar />

    </main>
  )
}

export default Home