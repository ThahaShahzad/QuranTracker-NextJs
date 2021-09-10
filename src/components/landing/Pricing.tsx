import React from 'react'

import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Button } from '../custom/index'

export type Props = {
  subheading: string
  heading: string
  description: string
  plans: {
    name: string
    price: string[]
    oldPrice: string
    description: string
    features: string[]
    url: string
    featured?: string
  }[]
  primaryButtonText: string
}

const ThreePlansWithHalfPrimaryBackground: React.FC<Props> = ({
  subheading,
  heading,
  description,
  plans,
  primaryButtonText
}) => {
  const Styles = {
    Container: 'relative bg-primary -mx-10 px-10',
    ContentWithPaddingXl:
      'max-w-screen-xl mx-auto py-20 lg:py-24 relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl',
    HeaderContainer: 'mt-10 w-full flex flex-col items-center',
    Subheading: 'text-bg mb-4',
    Heading: 'text-bg text-center w-full',
    Description: 'mt-4 text-bg max-w-xl w-full text-center',
    PlansContainer:
      'mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium',
    Plan: 'w-full max-w-sm bg-bg rounded-lg shadow-lg py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised',
    PlanHeaderNameAndFeaturedContainer: 'flex flex-wrap flex-col sm:flex-row justify-between items-center',
    PlanHeaderName: 'uppercase font-bold tracking-wider mr-3',
    PlanHeaderFeaturedText: 'px-3 rounded py-1 uppercase bg-primary mt-4 sm:mt-0 w-full sm:w-auto text-center',
    PlanHeaderPricingContainer: 'mt-6 flex items-end justify-between',
    PlanHeaderCurrentPrice: 'font-bold leading-none',
    PlanHeaderBigText: 'font-bold',
    PlanHeaderOldPrice: 'text-gray-500 line-through hidden sm:block',
    PlanHeaderDescription: 'mt-8 font-medium text-gray-700 ',
    PlanFeatures: 'mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10',
    PlanFeaturesFeature: 'flex items-start mt-6 first:mt-0',
    PlanFeaturesIcon: 'w-6 h-6 flex-shrink-0',
    PlanFeaturesText: 'font-semibold tracking-wide ml-3',
    PlanAction: 'mt-4',
    ActionButton:
      'px-8 py-3 font-bold rounded bg-primary text-gray-100 hover:bg-primary hover:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary px-6 py-4 rounded hover:bg-primary focus:shadow-outline focus:outline-none transition-colors duration-300',
    WhiteBackgroundOverlay: 'absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0'
  }
  return (
    <div className={Styles.Container} id='Pricing'>
      <div className={Styles.ContentWithPaddingXl}>
        <div className={Styles.HeaderContainer}>
          {subheading && <h5 className={Styles.Subheading}>{subheading}</h5>}
          <h2 className={Styles.Heading}>{heading}</h2>
          {description && <p className={Styles.Description}>{description}</p>}
        </div>
        <div className={Styles.PlansContainer}>
          {plans.map((plan, index) => (
            <div className={Styles.Plan} key={index}>
              <div>
                <span className={Styles.PlanHeaderNameAndFeaturedContainer}>
                  <h3 className={Styles.PlanHeaderName}>{plan.name}</h3>
                  {plan.featured && (
                    <span className={Styles.PlanHeaderFeaturedText}>
                      <small>{plan.featured}</small>
                    </span>
                  )}
                </span>
                <div className={Styles.PlanHeaderPricingContainer}>
                  <span className={Styles.PlanHeaderBigText}>{plan.price[0]}</span>
                  {plan.price[1]} {plan.oldPrice && <span className={Styles.PlanHeaderOldPrice}>{plan.oldPrice}</span>}
                </div>
                <p className={Styles.PlanHeaderDescription}>{plan.description}</p>
              </div>
              <div className={Styles.PlanFeatures}>
                {plan.features.map((feature, index) => (
                  <li className={Styles.PlanFeaturesFeature} key={index}>
                    <RiCheckboxCircleFill className={Styles.PlanFeaturesIcon} />
                    <span className={Styles.PlanFeaturesText}>{feature}</span>
                  </li>
                ))}
              </div>
              <div className={Styles.PlanAction}>
                <Button full={true}>{primaryButtonText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.WhiteBackgroundOverlay} />
    </div>
  )
}

export default ThreePlansWithHalfPrimaryBackground
