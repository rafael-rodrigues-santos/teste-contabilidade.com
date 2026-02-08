import React, { useState } from 'react';
import { Button } from '../../components/Button';
import styles from './Home.module.scss';
import thumbnailImage from '../../assets/img-quanto-custa.webp';

export const Home: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Quanto custa<br />
              a contabilidade<br />
              online em {currentYear}?
            </h1>

            <p className={styles.description}>
              Descubra os preços médios do mercado e veja como a contabilidade.com oferece planos acessíveis, abertura grátis e suporte completo para o seu CNPJ.
            </p>

            <div className={styles.actions}>
              <Button onClick={() => console.log('Planos')}>
                Planos e Preços
              </Button>

              <Button variant="outline" onClick={() => console.log('Especialista')}>
                Falar com Especialista
              </Button>
            </div>

            <p className={styles.footerText}>CRC SP-2SP038830/O-1</p>
          </div>

          <div className={styles.videoThumbnailWrapper} onClick={handleOpenVideo} role="button" aria-label="Assistir vídeo">
            <picture>
              <img
                src={thumbnailImage}
                alt="Thumbnail do vídeo - Quanto custa a contabilidade online"
                width="560"
                height="315"
              />
            </picture>

            <div className={styles.playButton}>
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Vídeo */}
      {isVideoOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseVideo}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseVideo} aria-label="Fechar vídeo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/2RnnraJoW4w?autoplay=1"
                title="Contabilidade Online: o que é, como funciona e quanto custa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
