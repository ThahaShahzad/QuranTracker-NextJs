import NLink from 'next/link'
import { Link as ChakaraLink } from '@chakra-ui/react'
import { MouseEventHandler, ReactNode } from 'react'

interface LinkProps {
  to: any
  key?: any
  className?: string
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'line'
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export const Link: React.FC<LinkProps> = ({ to, key, className, children, size, variant, onClick, ...props }) => {
  return (
    <NLink href={to} key={key ?? to} passHref>
      <ChakaraLink className={className} size={size} variant={variant} onClick={onClick} {...props}>
        {children}
      </ChakaraLink>
    </NLink>
  )
}
