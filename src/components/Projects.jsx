import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('Todos')
  
  // State para guardar quais os cartões que estão visíveis e acender as bolinhas
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2])

  // Filtro 100% dinâmico extraindo de data/projects.js
  const projectTypes = ['Todos', ...new Set(projects.map((p) => p.type))]

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((project) => project.type === filter)

  // Função para as setas do carrossel
  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.project-card')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 32
        const scrollAmount = cardWidth + gap

        const { scrollLeft } = scrollRef.current
        const scrollTo = direction === 'left' 
          ? scrollLeft - scrollAmount 
          : scrollLeft + scrollAmount
        
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
      }
    }
  }

  // Função para pular directamente para o projecto ao clicar na bolinha
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.project-card')
      if (cards[index]) {
        const scrollLeft = cards[index].offsetLeft - scrollRef.current.offsetLeft
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }

  // Função espiã para saber quais os projectos que estão na tela
  const handleScroll = () => {
    if (!scrollRef.current) return
    const cards = scrollRef.current.querySelectorAll('.project-card')
    const containerRect = scrollRef.current.getBoundingClientRect()
    const newVisible = []

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      if (rect.left >= containerRect.left - 50 && rect.right <= containerRect.right + 50) {
        newVisible.push(index)
      }
    })

    setVisibleIndices((prev) => {
      if (prev.join(',') === newVisible.join(',')) return prev
      return newVisible
    })
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [filteredProjects])

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projetos Realizados
        </motion.h2>

        {/* --- FILTRO MAGIC MOVE (Segmented Control) --- */}
        <motion.div
          className="project-filters glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
              onClick={() => {
                setFilter(type)
                if(scrollRef.current) scrollRef.current.scrollTo({left: 0, behavior: 'smooth'})
              }}
            >
              {filter === type && (
                <motion.div
                  layoutId="filter-pill"
                  className="filter-pill-bg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="filter-btn-text">{type}</span>
            </button>
          ))}
        </motion.div>

        <div className="carousel-wrapper">
          <button className="nav-btn prev" onClick={() => scroll('left')} aria-label="Anterior">
            <FiChevronLeft size={30} strokeWidth={1.5} />
          </button>

          <div className="projects-slider" ref={scrollRef} onScroll={handleScroll}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  className="project-card glass-card clickable-card"
                  onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                  initial={{ opacity: 0.2, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ 
                    root: scrollRef, 
                    amount: 0.1, 
                    once: true 
                  }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.4) }}
                >
                {/* --- HEADER EM CAMADAS (IMAGEM + OVERLAYS) --- */}
                <div className="project-image-container">
                  <img
                    src={project.image || '/api/placeholder/400/220'}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-image-gradient"></div>
                  
                  <span className="project-type-floating glass-chip-small">{project.type}</span>
                  
                  <div className="project-links-floating">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link-glass"
                        aria-label="Ver código no GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={14} />
                      </a>
                    )}
                    {project.link && (
                      <span className="glass-chip-small view-project-chip">
                        Ver projeto ↗
                      </span>
                    )}
                  </div>
                </div>

                {/* --- CONTEÚDO DO CARD --- */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies?.map((tech, techIndex) => (
                      <span key={techIndex} className="glass-chip-small">{tech}</span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="project-footer-link">
                      Ver projeto <span className="arrow"><FaArrowRight /></span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          <button className="nav-btn next" onClick={() => scroll('right')} aria-label="Próximo">
            <FiChevronRight size={30} strokeWidth={1.5} />
          </button>
        </div>

        {/* --- BOLINHAS DE PAGINAÇÃO --- */}
        <div className="carousel-dots">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`dot ${visibleIndices.includes(index) ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects