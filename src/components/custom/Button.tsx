import React from 'react'

interface ButtonProps {
  submitType?: 'button' | 'submit' | 'reset'
  type?: 'primary' | 'primary-d' | 'primary-i' | 'primary-i-d'
  color?: string
  icon?: any
  shape?: 'square' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  full?: boolean
  disabled?: boolean
  onClick?: any
}

export const Button: React.FC<ButtonProps> = ({
  submitType = 'button',
  type = 'primary',
  color,
  icon,
  size = 'md',
  shape = 'round',
  className,
  full = false,
  disabled = false,
  children,
  ...props
}) => {
  const SizeStyles = {
    sm: 'text-sm sm:text-base px-1 lg:px-2 py-1',
    md: 'px-4 lg:px-6 py-2',
    lg: 'text-xl sm:text-2xl px-6 lg:px-8 py-4'
  }
  const ShapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const Styles = {
    primary: `bg-primary text-bg hover:opacity-90 focus:outline-none`,
    'primary-d': `bg-font text-bg hover:opacity-90 focus:outline-none`,
    'primary-i': `bg-bg text-primary border-2 border-primary hover:bg-primary hover:text-bg focus:outline-none`,
    'primary-i-d': `bg-bg text-font border-2 border-font hover:bg-font hover:text-bg focus:outline-none`
  }

  return (
    <button
      type={submitType}
      className={`${Styles[type]} ${SizeStyles[size]} ${ShapeStyles[shape]} ${className} ${full ? 'w-full' : 'w-auto'}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
