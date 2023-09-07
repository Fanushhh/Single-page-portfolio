import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Experience } from "./components/experience"


function App() {
  
  return (
    <main className="pt-5 sm:pt-0">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

export default App

