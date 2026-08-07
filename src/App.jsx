import Header from './components/Header'
import Hero from './components/Hero'

import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Hero />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

