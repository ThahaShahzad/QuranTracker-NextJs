interface BadgeProps {
  color?: string;
  shape?: 'square' | 'round' | 'circle';
  className?: string;
  //   size?: 'sm' | 'md' | 'lg'
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color = 'bg-gray-500',
  shape = 'round'
}) => {
  const ShapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  };

  return (
    <span
      className={`${className} ${color}  ${ShapeStyles[shape]}  ml-4 px-2`}
      style={{ backgroundColor: `${color === 'bg-primary-d' && '#01a2fd'}` }}
    >
      {children}
    </span>
  );
};
