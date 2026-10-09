import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Animais from "../../components/Animais/Animais"

function Home() {
  return (
    <main className="home">
      <Hero />
      <Animais />
    </main>
  )
}

export default Home