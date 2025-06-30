import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <section className="snap-start relative overflow-hidden">
        <Hero />
      </section>
      <section className="snap-start" id="about">
        <About />
      </section>
      <section className="snap-start">
        <TechStack />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
      </section>
      <section className="snap-start" id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App