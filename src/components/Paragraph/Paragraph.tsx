import React, { type ReactNode } from 'react';
import styles from './Paragraph.module.scss';

interface ParagraphProps {
  children: ReactNode;
  as?: 'p' | 'span' | 'div';
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, as: Tag = 'p', className }) => {
  return (
    <Tag className={`${styles.paragraph} ${className || ''}`}>
      {children}
    </Tag>
  );
};
