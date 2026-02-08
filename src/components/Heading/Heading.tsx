import React, { type ReactNode } from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, as: Tag = 'h1', className }) => {
  return (
    <Tag className={`${styles.heading} ${className || ''}`}>
      {children}
    </Tag>
  );
};
