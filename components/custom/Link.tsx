import NLink from 'next/link'

interface LinkProps {
  to: string
  type?: 'primary' | 'primary-nl' | 'primary-i' | 'primary-i-nl'
  shape?: 'sqaure' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  button?: boolean
  className?: string
  onClick?: () => void
}

export const Link: React.FC<LinkProps> = ({
  to,
  type = 'primary',
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
  }
  const Styles = {
    primary: `${SizeStyles[size]} text-normal border-b-2 border-transparent hover:border-normal`,
    'primary-nl': `${SizeStyles[size]} text-normal`,
    'primary-i': `${SizeStyles[size]} text-inverse border-b-2 border-transparent hover:border-inverse`,
    'primary-i-nl': `${SizeStyles[size]} text-inverse`
  }
  return (
    <NLink href={to} key={to}>
      <a className={`${Styles[type]} ${button ? 'w-full' : 'max-w-max'} ${className} `} {...props}>
        {children}
      </a>
    </NLink>
  )
}
