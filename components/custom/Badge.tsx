interface BadgeProps {
  color?: string
  shape?: 'sqaure' | 'round' | 'circle'
  //   size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-gray-500', shape = 'round' }) => {
  const ShapeStyles = {
    sqaure: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }

  return (
    <span
      className={`${color}  ${ShapeStyles[shape]}  ml-4 px-2`}
      style={{ backgroundColor: `${color === 'bg-primary-d' && '#1afff7'}` }}
    >
      {children}
    </span>
  )
}
