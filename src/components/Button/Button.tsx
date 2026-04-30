import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'text';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button
      className={`${styles.btn} ${variant === 'text' ? styles.text : styles.primary}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
