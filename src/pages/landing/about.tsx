import { useState } from 'react'
import { LandingPageDetails } from 'public/LandingDeatils'

import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import LandingLayout from 'components/layouts/LandingLayout'

const About = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null)
  const { subheading, heading, description, faqs } = LandingPageDetails.FAQ
  const Styles = {
    Container: 'relative',
    ContentWithPaddingXl: 'max-w-screen-xl mx-auto py-20 lg:py-24',
    Column: 'flex flex-col items-center',
    HeaderContent: '',
    Subheading: 'font-bold text-primary mb-4 text-center',
    Heading: 'font-black tracking-wide text-center w-full',
    Description: 'mt-4 lg:text-lg font-medium leading-relaxed text-font max-w-xl w-full text-center',
    FAQSContainer: 'mt-12 max-w-4xl relative',
    FAQ: 'group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300',
    Question: 'flex justify-between items-center',
    QuestionText: 'font-semibold'
  }

  const toggleQuestion = (questionIndex: number) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null)
    else setActiveQuestionIndex(questionIndex)
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.ContentWithPaddingXl}>
        <div className={Styles.Column}>
          <div>
            {subheading && <h5 className={Styles.Subheading}>About</h5>}
            <h2 className={Styles.Heading}>{heading}</h2>
            {description && <p className={Styles.Description}>{description}</p>}
          </div>
          <dl className={Styles.FAQSContainer}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => {
                  toggleQuestion(index)
                }}
                className={Styles.FAQ}
              >
                <dt className={Styles.Question}>
                  <span className={Styles.QuestionText}>{faq.question}</span>
                  <motion.span
                    className='ml-2 transition duration-300'
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial='collapsed'
                    animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <BsChevronDown />
                  </motion.span>
                </dt>
                <motion.dd
                  className='pointer-events-none text-sm sm:text-base leading-relaxed'
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                    collapsed: { opacity: 0, height: 0, marginTop: '0px' }
                  }}
                  initial='collapsed'
                  animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </motion.dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
About.getLayout = LandingLayout
export default About
