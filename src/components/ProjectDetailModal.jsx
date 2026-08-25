import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ProjectDetail from './ProjectDetail';
import { getProjectBySlug } from '../data/projects';
import './ProjectDetailModal.css';

export default function ProjectDetailModal({ slug, onClose }) {
  const prefersReducedMotion = useReducedMotion();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerElementRef = useRef(null);

  const data = slug ? getProjectBySlug(slug) : null;

  useEffect(() => {
    if (!slug) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [slug]);

  useEffect(() => {
    if (slug) {
      triggerElementRef.current = document.activeElement;
      closeButtonRef.current?.focus();
    } else {
      triggerElementRef.current?.focus?.();
    }
  }, [slug]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {slug && (
        <motion.div
          className="project-detail-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="project-detail-modal__content"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-modal-title"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.96 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="project-detail-modal__close"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
            >
              ✕
            </button>
            <ProjectDetail data={data} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
