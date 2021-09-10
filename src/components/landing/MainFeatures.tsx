import React from 'react'

export type Props = {
  cards: {
    imageSrc: string
    subtitle: string
    title: string
    description: string
    url: string
  }[]
}

const VerticalWithAlternateImageAndText: React.FC<Props> = ({ cards }) => {
  const Styles = {
    Container: 'relative',
    SingleColumn: 'max-w-screen-xl mx-auto py-20 lg:py-24 tracking-wide',
    HeadingInfoContainer: 'flex flex-col items-center',
    HeadingDescription: 'mt-4 text-center max-w-sm',
    HeadingTitle: 'text-center',
    Content: 'mt-16',
    Card: 'mt-24 flex flex-col lg:flex-row justify-between items-center',
    Image: 'rounded max-w-xl w-full flex-shrink-0 h-36r bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8',
    Details: 'mt-4 md:mt-0 md:max-w-xl mx-4 sm:mx-8 md:mx-4 lg:mx-8',
    Subtitle: '',
    Title: '',
    Description: 'mt-2'
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.SingleColumn}>
        <div className={Styles.HeadingInfoContainer}>
          <h2 className={Styles.HeadingTitle}>Popular Events</h2>
          <p className={Styles.HeadingDescription}>
            Here are some of the most popular events in New York City curated by professionals.
          </p>
        </div>

        <div className={Styles.Content}>
          {cards.map((card, i) => (
            <div className={Styles.Card} key={i}>
              {/* <img className={Styles.Image} src={card.imageSrc} /> */}
              <div className={Styles.Image} style={{ backgroundImage: `url(${card.imageSrc})` }} />

              <div className={Styles.Details}>
                <div className={Styles.Subtitle}>{card.subtitle}</div>
                <h4 className={Styles.Title}>{card.title}</h4>
                <p className={Styles.Description}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VerticalWithAlternateImageAndText
