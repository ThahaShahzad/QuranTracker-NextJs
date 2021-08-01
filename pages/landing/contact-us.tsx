import Image from 'next/image'
import React, { ReactElement } from 'react'

import EmailIllustrationSrc from '@/public/images/email-illustration.svg'
import LandingLayout from '@/components/layouts/LandingLayout'

export type Props = {
  subheading?: string
  heading?: ReactElement
  description?: string
  submitButtonText?: string
}
const ContactUs = ({
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span>get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  submitButtonText = 'Contact Me'
}: Props) => {
  const Styles = {
    Container: 'relative',
    TwoColumn: 'flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24',
    Column: 'w-full max-w-md mx-auto md:max-w-none md:mx-0',
    ImageColumn: 'w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto',
    TextColumn:
      'w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first',
    Image: 'rounded bg-contain bg-no-repeat bg-center h-full',
    TextContent: 'lg:py-8 text-center md:text-left',
    Subheading: 'font-bold text-primary text-center md:text-left',
    Heading: 'font-black tracking-wide text-center mt-4 font-black md:text-left leading-tight',
    Description: 'mt-4 text-center md:text-left font-medium leading-relaxed text-normal',
    Form: 'mt-8 md:mt-10 flex flex-col lg:flex-row',
    Input: 'border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary',
    SubmitButton:
      'px-8 py-3 font-bold rounded bg-primary text-gray-100 hocus:bg-primary hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block lg:ml-6 mt-6 lg:mt-0'
  }
  return (
    <div className={Styles.Container}>
      <div className={Styles.TwoColumn}>
        <div className={Styles.ImageColumn}>
          <Image className={Styles.Image} src={EmailIllustrationSrc} />
        </div>
        <div className={Styles.TextColumn}>
          <div className={Styles.TextContent}>
            {subheading && <h5 className={Styles.Subheading}>{subheading}</h5>}
            <h2 className={Styles.Heading}>{heading}</h2>
            <p className={Styles.Description}>{description}</p>
            <form className={Styles.Form}>
              <input type='email' className={Styles.Input} name='email' placeholder='Your Email Address' />
              <button type='submit' className={Styles.SubmitButton}>
                {submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactUs.getLayout = LandingLayout

export default ContactUs
