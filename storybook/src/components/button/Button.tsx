import React from 'react';
import './button.css';

export interface ButtonProps {
  mode: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large'
  label: string
  icon?: React.ReactElement
  iconPosition?: string
  backgroundColor?: string  // for storybook
}

export const Button: React.FC<ButtonProps> = ({
  mode = 'primary',
  size = 'medium',
  label,
  icon = undefined,
  iconPosition = 'left',
  backgroundColor, // for storybook
  ...props
}) => {
  const btnMode = `delutb-button--${mode}`
  const btnSize = `delutb-button--${size}`;
  const btnIcon = !!icon && 'delutb-button--icon';

  return (
    <button
      type="button"
      className={['delutb-button', btnIcon, btnSize, btnMode].join(' ')}
      style={{backgroundColor}}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
};
