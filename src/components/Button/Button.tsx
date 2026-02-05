import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

// Atributos nativos do botão para permitir propriedades padrão como onClick, type, disabled, etc.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Combinar classes internas com qualquer classe personalizada passada via props
  const buttonClass = `
    ${styles.button} 
    ${variant === 'outline' ? styles['button--outline'] : ''} 
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};
