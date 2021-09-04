import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { IconType } from 'react-icons'

export type Props = {
  cards: {
    imageSrc: IconType
    title: string
    description: string
    url: string
  }[]
  heading: string
  description: string
}

const ThreeColSimple: React.FC<Props> = ({ cards, heading, description }) => {
  const Styles = {
    Container: 'relative',
    ContentWithPaddingXl: 'py-20 lg:py-24',
    ThreeColumnContainer:
      'mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-xl mx-auto',
    Column: 'lg:w-1/3',
    Subheading: 'font-bold text-primary text-center mb-3',
    Heading: 'text-center',
    Description: 'mt-4 max-w-xl  mx-auto',
    Card: 'flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded cursor-pointer transform hover:scale-105',
    CardImageContainer: 'text-center rounded-full p-4',
    CardImage: 'w-8 h-8',
    CardTitle: 'mt-4',
    CardDescription: 'mt-4 font-medium'
  }
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContentWithPaddingXl}>
        {heading && (
          <Heading size='xl' textAlign='center'>
            {heading}
          </Heading>
        )}
        {description && (
          <Text textAlign='center' mt='4'>
            {description}
          </Text>
        )}
        <div className={Styles.ThreeColumnContainer}>
          {cards.map((card, i) => (
            <div className={Styles.Column} key={i}>
              <div className={Styles.Card}>
                <span className={Styles.CardImageContainer}>
                  <card.imageSrc className={Styles.CardImage} />
                </span>
                <h4 className={Styles.CardTitle}>{card.title}</h4>
                <p className={Styles.CardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThreeColSimple
