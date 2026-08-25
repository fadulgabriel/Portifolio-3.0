import { motion, useReducedMotion } from 'framer-motion';
import './ProjectDetail.css';

function renderSectionText(text) {
  return text.split('\n\n').filter(p => p.trim()).map((paragraph, i) => (
    <p key={i} className="project-detail__section-text">
      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, j) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={j}>{part.slice(2, -2)}</strong>
          : part
      )}
    </p>
  ));
}

export default function ProjectDetail({ data, onClose }) {
  const prefersReducedMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <article className="project-detail">
      <button type="button" className="project-detail__back" onClick={onClose}>
        ← Voltar para projetos
      </button>

      <header
        className="project-detail__hero"
        style={{ backgroundImage: `url(${data.coverImage})` }}
      >
        <div className="project-detail__hero-overlay">
          <span className="project-detail__eyebrow">{data.category}</span>
          <h1 id="project-detail-modal-title" className="project-detail__title">{data.title}</h1>
          <p className="project-detail__hook">{data.hook}</p>
          {data.tags?.length > 0 && (
            <ul className="project-detail__tags">
              {data.tags.map((tag) => (
                <li key={tag} className="project-detail__tag">{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {data.gallery?.length > 0 && (
        <section className="project-detail__gallery">
          <div className="project-detail__gallery-track">
            {data.gallery.map((src) => (
              <div key={src} className="project-detail__gallery-slide">
                <img src={src} alt="" className="project-detail__gallery-img" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Faixa de métricas — só aparece se o projeto declarar `metrics`.
          Não depende de categoria, só do dado existir. */}
      {data.metrics?.length > 0 && (
        <section className="project-detail__metrics">
          {data.metrics.map((m) => (
            <div key={m.label} className="project-detail__metric-card">
              <span className="project-detail__metric-value">{m.value}</span>
              <span className="project-detail__metric-label">{m.label}</span>
            </div>
          ))}
        </section>
      )}

      {/* Corpo narrativo — lista livre e ordenada. Cada projeto define
          suas próprias seções (nome e quantidade), não é um dicionário fixo. */}
      {data.sections?.length > 0 && (
        <div className="project-detail__body">
          {data.sections.map(({ eyebrow, text, cta, image }, index) => {
            const isClosing = !eyebrow;
            return (
                <motion.section
                key={eyebrow || `closing-${index}`}
                className="project-detail__section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
              >
                {!isClosing && (
                  <span className="project-detail__section-eyebrow">{eyebrow}</span>
                )}
                {renderSectionText(text)}
                {cta && cta.url && (
                  <a
                    href={cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__section-cta"
                  >
                    {cta.label}
                  </a>
                )}
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="project-detail__section-image"
                    loading="lazy"
                  />
                )}
              </motion.section>
            );
          })}
        </div>
      )}

      {/* Bloco de embed genérico — serve tanto pra PDF de relatório quanto
          pra um dashboard (Shiny etc). Só aparece se `data.embed` existir. */}
      {data.embed && (
        <section className="project-detail__embed-block">
          <div className="project-detail__embed-header">
            <span className="project-detail__section-eyebrow">{data.embed.label}</span>
            <a
              href={data.embed.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__embed-link"
            >
              {data.embed.linkText || 'Abrir em nova aba'} ↗
            </a>
          </div>
          <iframe
            src={data.embed.url}
            title={`${data.embed.label} — ${data.title}`}
            className="project-detail__embed-frame"
            loading="lazy"
          />
        </section>
      )}

      {/* Links extras — apenas github no rodapé */}
      {data.githubUrl && data.githubUrl !== '#' && (
        <div className="project-detail__external-links">
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail__external-link"
          >
            Ver código no GitHub ↗
          </a>
        </div>
      )}

      <button type="button" className="project-detail__cta" onClick={onClose}>
        Ver outros projetos
      </button>
    </article>
  );
}
