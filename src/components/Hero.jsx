import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const subtitles = ["Estatístico", "Cientista de Dados", "Analista de Dados"];

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  // Parallax for image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    // Calculate values from -4 to 4 based on mouse position relative to center
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    mouseX.set(x);
    mouseY.set(y);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-wrapper">
            <div className="hero-text-section">


              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="hero-greeting text-gradient">Olá, sou o</span>
                <span className="hero-name text-gradient-primary">Gabriel Fadul</span>
              </motion.h1>

              <div className="hero-subtitle-container">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={subtitleIndex}
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {subtitles[subtitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button
                  className="btn btn-primary btn-with-icon"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Projetos
                  <span className="btn-icon"><FaArrowRight /></span>
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Entre em Contato
                </button>
              </motion.div>
            </div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ x: parallaxX, y: parallaxY }}
            > 
              <div className="hero-image-wrapper">
                <div className="hero-image-ring"></div>
                <img
                  src="foto-perfil2.png"
                  alt="Gabriel Fadul"
                  className="hero-image"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => scrollToSection('about')}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero