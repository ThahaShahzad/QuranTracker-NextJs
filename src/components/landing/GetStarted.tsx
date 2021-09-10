import React from 'react'

import { Link, Button } from 'components/custom/index'

export type Props = {
  text: string
  primaryLinkText: string
  primaryLinkUrl: string
  secondaryLinkText: string
  secondaryLinkUrl: string
  pushDownFooter: boolean
}
const GetStarted: React.FC<Props> = ({
  text,
  primaryLinkText,
  primaryLinkUrl,
  secondaryLinkText,
  secondaryLinkUrl,
  pushDownFooter
}) => {
  const Styles = {
    Container: 'relative',
    ContentWithPaddingXl: 'max-w-screen-xl mx-auto py-20 lg:py-24',
    PrimaryBackgroundContainer: 'py-20 lg:py-24 bg-primary rounded-lg relative',
    Row: 'px-8 flex items-center justify-between relative z-10 flex-col lg:flex-row text-center lg:text-left',
    TextContainer: 'lg:w-1/2 max-w-xl',
    Text: 'text-bg font-bold',
    LinksContainer: 'flex justify-center lg:justify-end mt-6 lg:mt-0 gap-8 flex-col sm:flex-row'
  }
  return (
    <div className={`${Styles.Container} ${pushDownFooter && 'mb-20 lg:mb-24'}`}>
      <div className={Styles.ContentWithPaddingXl}>
        <div className={Styles.PrimaryBackgroundContainer}>
          <div className={Styles.Row}>
            <div className={Styles.TextContainer}>
              <h4 className={Styles.Text}>{text}</h4>
            </div>
            <div className={Styles.LinksContainer}>
              <Link type='primary-nl' to={primaryLinkUrl}>
                <Button size='lg' shape='circle' type='primary-d'>
                  {primaryLinkText}
                </Button>
              </Link>
              <Link type='primary-nl' to={secondaryLinkUrl}>
                <Button size='lg' shape='circle' type='primary-d'>
                  {secondaryLinkText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
