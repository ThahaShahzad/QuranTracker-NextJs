import Image from 'next/image'
import React from 'react'

export type Props = {
  testimonials: {
    imageSrc: any
    quote: string
    customerName: string
  }[]
  heading: string
  subheading: string
}

const ThreeColumnWithProfileImage: React.FC<Props> = ({ subheading, heading, testimonials }) => {
  const Styles = {
    Container: 'relative',
    ContentWithPaddingXl: 'max-w-screen-xl mx-auto py-20 lg:py-24',
    Subheading: 'font-bold text-primary text-center',
    Heading: 'font-black tracking-wide text-center',
    Testimonials: 'flex flex-col lg:flex-row items-center lg:items-stretch',
    TestimonialContainer: 'mt-16 lg:w-1/3',
    Testimonial: 'px-4 text-center max-w-xs mx-auto flex flex-col items-center',
    Image: 'w-20 h-20 rounded-full',
    Quote: 'mt-5 text-gray-600 font-medium leading-loose',
    CustomerName: 'mt-5 text-gray-900 font-semibold uppercase tracking-wide'
  }
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContentWithPaddingXl}>
        {subheading && <h5 className={Styles.Subheading}>{subheading}</h5>}
        <h2 className={Styles.Heading}>{heading}</h2>
        <div className={Styles.Testimonials}>
          {testimonials.map((testimonial, index) => (
            <div className={Styles.TestimonialContainer} key={index}>
              <div className={Styles.Testimonial}>
                <Image className={Styles.Image} src={testimonial.imageSrc} alt='profile pic' width={512} height={512} />
                <blockquote className={Styles.Quote}>&quot;{testimonial.quote}&quot;</blockquote>
                <p className={Styles.CustomerName}>- {testimonial.customerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThreeColumnWithProfileImage
