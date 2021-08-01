import Image from 'next/image'

import { Link } from '../custom/index'

export type Props = {
  links: {
    linkText: string
    linkRoute: string
  }[]
  logo: {
    logoText: string
    logoImg: any
  }
  socialLinks: {
    linkIcon: any
    linkHref: string
  }[]
}

const Footer: React.FC<Props> = ({ links, logo, socialLinks }) => {
  const Styles = {
    Container: 'relative bg-gray-900 text-gray-100 -mx-10 -mb-10',
    Content: 'max-w-screen-xl mx-auto py-20 lg:py-24',
    Row: 'flex items-center justify-center flex-col px-8',
    LogoContainer: 'flex items-center justify-center md:justify-start',
    LogoImg: 'w-8',
    LogoText: 'ml-2 font-black tracking-wider',
    LinksContainer: 'mt-8 font-medium flex flex-wrap gap-4 justify-center items-center flex-col sm:flex-row',
    Link: 'border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4',
    SocialLinksContainer: 'mt-10',
    SocialLink: 'cursor-pointer inline-block text-inverse hover:text-gray-500 transition duration-300 mx-4',
    SocialLinkIcon: 'w-5 h-5',
    CopyrightText: 'text-center mt-10 font-medium tracking-wide text-gray-600'
  }
  return (
    <div className={Styles.Container}>
      <div className={Styles.Content}>
        <div className={Styles.Row}>
          <div className={Styles.LogoContainer}>
            <Image src={logo.logoImg} alt='logo' />
            <h4 className={Styles.LogoText}>{logo.logoText}</h4>
          </div>
          <div className={Styles.LinksContainer}>
            {links.map((link, index) => (
              <Link key={index} to={link.linkRoute} type='primary-i' onClick={() => window.scrollTo(0, 0)}>
                {link.linkText}
              </Link>
            ))}
          </div>
          <div className={Styles.SocialLinksContainer}>
            {socialLinks.map((socialLink, index) => (
              <a key={index} className={Styles.SocialLink} href={socialLink.linkHref} target='_blank' rel='noreferrer'>
                <Image src={socialLink.linkIcon} alt='img' />
              </a>
            ))}
          </div>
          <p className={Styles.CopyrightText}>&copy; Copyright 2020, QuranTracker Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
