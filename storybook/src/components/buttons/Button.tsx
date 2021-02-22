import React from 'react';
import './button.css';

export interface ButtonProps {
  mode: 'primary' | 'secondary' | 'disabled'
  size: 'small' | 'medium' | 'large'
  label: string
  icon: React.ReactElement
}

export const Button: React.FC<ButtonProps> = ({
  mode = 'primary',
  size = 'medium',
  label,
  icon = undefined,
  ...props
}) => {
  const btnMode = `delutb-button--${mode}`
  const btnSize = `delutb-button--${size}`;

  return (
    <button
      type="button"
      className={['delutb-button', btnSize, btnMode].join(' ')}
      {...props}
    >
      {icon && icon}
      {label}
    </button>
  );
};
