import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

// Atributos nativos do botão para permitir propriedades padrão como onClick, type, disabled, etc.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  width?: string | number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  width = '217px', // Largura padrão
  className = '',
  style,
  ...props
}) => {
  // Combina classes internas com qualquer classe personalizada passada via props
  const buttonClass = `
    ${styles.button} 
    ${variant === 'outline' ? styles['button--outline'] : ''} 
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      style={{ width, ...style }} // Aplica largura passada via props ao estilo inline
      {...props}
    >
      {children}
    </button>
  );
};
