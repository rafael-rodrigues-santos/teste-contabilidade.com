import React from 'react';
import styles from './PlansSection.module.scss';
import { PlanCard } from '../PlanCard/PlanCard';
import { Button } from '../Button/Button';
import imageWomanLaptop from '../../assets/img-mulher-laptop.png';
import iconCashOff from '../../assets/icon-cash-off.svg';
import iconCertificate from '../../assets/icon-certificate.svg';
import iconNotes from '../../assets/icon-notes.svg';
import iconLaptop from '../../assets/icon-laptop.svg';
import iconSupportAgent from '../../assets/icon-support-agent.svg';

// Dados para os cards de benefícios/planos
const CARDS_DATA = [
  {
    icon: <img src={iconCashOff} alt="Abertura grátis" width={48} height={48} />,
    description: "Abertura de empresa grátis (sem taxas de honorários).",
    bg: "#FFFFFF"
  },
  {
    icon: <img src={iconCertificate} alt="Certificado digital" width={48} height={48} />,
    description: "Certificado digital incluso no 1º ano.",
    bg: "#E0E1E2"
  },
  {
    icon: <img src={iconNotes} alt="Emissor de notas" width={48} height={48} />,
    description: "Emissor de notas fiscais integrado.",
    bg: "#C6C8CB"
  },
  {
    icon: <img src={iconLaptop} alt="Plataforma online" width={48} height={48} />,
    description: "Plataforma contábil online com fluxo de caixa, lançamentos, relatórios e controle de impostos.",
    bg: "#D4FFD1"
  },
  {
    icon: <img src={iconSupportAgent} alt="Atendimento personalizado" width={48} height={48} />,
    description: "Atendimento personalizado (WhatsApp, telefone, e-mail e vídeo)",
    bg: "#83E87C"
  }
];

export const PlansSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>
            Na contabilidade.com,<br />
            você tem planos a partir<br />
            de <span className={styles.boldText}>R$ 159/mês</span>, já com:
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img src={imageWomanLaptop} alt="Empreendedora sorrindo usando notebook" />
          </div>

          <div className={styles.cardsWrapper}>
            {/* Iteração sobre os dados dos cards para renderizar cada componente PlanCard */}
            {CARDS_DATA.map((card, index) => (
              <PlanCard
                key={index}
                icon={card.icon}
                description={card.description}
                bg={card.bg}
                className={styles.stackedCard}
              />
            ))}
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Button variant="primary" width={337}>
            Conheça os planos e preços
          </Button>
        </div>
      </div>
    </section>
  );
};

