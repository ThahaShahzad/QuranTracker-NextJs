import React from 'react'

interface ButtonProps {
  type?: 'primary' | 'primary-d' | 'primary-i' | 'primary-i-d'
  shape?: 'sqaure' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  full?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'md',
  shape = 'round',
  className,
  full = false,
  children,
  ...props
}) => {
  const SizeStyles = {
    sm: 'text-sm sm:text-base px-1 lg:px-2 py-1',
    md: 'px-4 lg:px-6 py-2',
    lg: 'text-xl sm:text-2xl px-6 lg:px-8 py-4'
  }
  const ShapeStyles = {
    sqaure: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const Styles = {
    primary: `${SizeStyles[size]} ${ShapeStyles[shape]} bg-primary text-inverse hover:opacity-90 hover:scale-105  focus:outline-none`,
    'primary-d': `${SizeStyles[size]} ${ShapeStyles[shape]} bg-normal text-inverse hover:opacity-90 hover:scale-105 focus:outline-none`,
    'primary-i': `${SizeStyles[size]} ${ShapeStyles[shape]} bg-inverse text-primary border-2 border-primary hover:bg-primary hover:text-inverse focus:outline-none`,
    'primary-i-d': `${SizeStyles[size]} ${ShapeStyles[shape]} bg-inverse text-normal border-2 border-normal hover:bg-normal hover:text-inverse focus:outline-none`
  }

  return (
    <button
      type='button'
      className={`${Styles[type]} ${SizeStyles[size]} ${className} ${full ? 'w-full' : 'w-auto'}`}
      {...props}
    >
      {children}
    </button>
  )
}
