import 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experiences />
        <Footer />
      </main>
    </div>
  )
}

export default App