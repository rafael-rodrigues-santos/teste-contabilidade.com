import React, { type ReactNode } from 'react';
import styles from './PlanCard.module.scss';

interface PlanCardProps {
  icon: ReactNode;
  description: string;
  bg: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PlanCard: React.FC<PlanCardProps> = ({ icon, description, bg, className, style }) => {
  return (
    <div
      className={`${styles.card} ${className || ''}`}
      style={{ backgroundColor: bg, ...style }}
    >
      <div className={styles.icon}>
        {icon}
      </div>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};
