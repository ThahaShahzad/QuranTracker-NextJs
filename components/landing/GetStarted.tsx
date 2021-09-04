import React from 'react'

import { Link } from '@/components/custom/index'
import { Box, Heading, Button } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

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
  const { primary, bg } = useMyColors()
  const Styles = {
    Container: 'relative',
    ContentWithPaddingXl: 'max-w-screen-xl mx-auto py-20 lg:py-24',
    PrimaryBackgroundContainer: 'py-20 lg:py-24  rounded-xl relative',
    Row: 'px-8 flex items-center justify-between relative z-10 flex-col lg:flex-row text-center lg:text-left',
    TextContainer: 'lg:w-1/2 max-w-xl',
    Text: 'text-inverse font-bold',
    LinksContainer: 'flex justify-center lg:justify-end mt-6 lg:mt-0 gap-8 flex-col sm:flex-row'
  }
  return (
    <div className={`${Styles.Container} ${pushDownFooter && 'mb-20 lg:mb-24'}`}>
      <div className={Styles.ContentWithPaddingXl}>
        <Box bg={primary} className={Styles.PrimaryBackgroundContainer}>
          <div className={Styles.Row}>
            <div className={Styles.TextContainer}>
              <Heading color={bg}>{text}</Heading>
            </div>
            <div className={Styles.LinksContainer}>
              <Link to={primaryLinkUrl}>
                <Button size='lg' rounded='2xl' p='8'>
                  {primaryLinkText}
                </Button>
              </Link>
              <Link to={secondaryLinkUrl}>
                <Button size='lg' rounded='2xl' p='8'>
                  {secondaryLinkText}
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default GetStarted
