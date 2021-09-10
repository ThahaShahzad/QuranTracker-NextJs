import NLink from 'next/link';

interface LinkProps {
  to: string;
  icon?: any;
  type?: 'primary' | 'primary-nl' | 'primary-i' | 'primary-i-nl';
  shape?: 'square' | 'round' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  button?: boolean;
  className?: string;
  onClick?: () => void;
}
export const Link: React.FC<LinkProps> = ({
  to,
  type = 'primary',
  icon,
  size = 'md',
  shape = 'round',
  button = false,
  className,
  children,
  ...props
}) => {
  const SizeStyles = {
    sm: 'text-sm sm:text-base ',
    md: '',
    lg: 'text-xl sm:text-2xl'
  };
  const Styles = {
    primary: `hover:underline`,
    'primary-nl': ``,
    'primary-i': `text-bg hover:underline`,
    'primary-i-nl': `text-bg`
  };
  return (
    <>
      <NLink href={to} key={to}>
        <a
          className={`${icon && 'flex gap-2'} ${SizeStyles[size]} ${Styles[type]} ${
            button ? 'w-full' : 'max-w-max'
          } ${className}`}
          {...props}
        >
          {icon}
          {children}
        </a>
      </NLink>
    </>
  );
};
