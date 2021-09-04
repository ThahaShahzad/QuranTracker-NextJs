import { Link, Image } from '@/components/custom/index'
import { Heading, Button } from '@chakra-ui/react'
import { Fragment } from 'react'
//import { Link } from '../../index'

export type Props = {
  logo: {
    logoText: string
    logoImg: any
  }
  links: {
    linkText: string
    linkRoute: string
    primary?: boolean
    secondary?: boolean
  }[]
}

const DesktopNav: React.FC<Props> = ({ logo, links }) => {
  const Styles = {
    nav: 'hidden flex-1 justify-between items-center px-4 lg:flex',
    logo: 'flex items-center ml-3',
    logoText: 'ml-8',
    navLinks: 'flex items-center gap-8',
    actionLink: 'ml-8'
  }
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.logo} to='/landing'>
        <Image src={logo.logoImg} alt='logo' />
        <Heading size='lg' ml='2'>
          {logo.logoText}
        </Heading>
      </Link>
      <div className={Styles.navLinks}>
        {links.map((link, index) => (
          <Fragment key={index}>
            {link.primary ? (
              <Link to={link.linkRoute}>
                <Button>{link.linkText}</Button>
              </Link>
            ) : (
              <Link variant='line' className={`${link.linkText === 'Login' && Styles.actionLink}`} to={link.linkRoute}>
                {link.linkText}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  )
}

export default DesktopNav
