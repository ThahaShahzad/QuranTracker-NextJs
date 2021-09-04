import { Box, Flex, Heading, Text, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

import { RiCheckboxCircleFill } from 'react-icons/ri'
import { useMyColors } from 'styles/colors'

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
  const { primary, bgDark, bg } = useMyColors()
  const { colorMode, toggleColorMode } = useColorMode()
  const Styles = {
    Container: 'relative bg-primary -mx-10 px-10',
    ContentWithPaddingXl:
      'max-w-screen-xl mx-auto py-20 lg:py-24 relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl',
    HeaderContainer: 'mt-8 w-full flex flex-col items-center',
    Subheading: 'text-inverse mb-4',
    Heading: 'text-inverse text-center w-full',
    Description: 'mt-4 text-inverse max-w-xl w-full text-center',
    PlansContainer: 'mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between font-medium',
    Plan: 'w-full max-w-sm rounded-lg shadow-lg py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised',
    PlanHeaderNameAndFeaturedContainer: 'flex flex-wrap flex-col sm:flex-row justify-between items-center',
    PlanHeaderName: 'uppercase font-bold tracking-wider mr-3',
    PlanHeaderFeaturedText: 'px-3 rounded py-1 uppercase mt-4 sm:mt-0 w-full sm:w-auto text-center',
    PlanHeaderPricingContainer: 'mt-6 flex items-end justify-between',
    PlanHeaderCurrentPrice: 'font-bold leading-none',
    PlanHeaderBigText: 'font-bold',
    PlanHeaderOldPrice: 'line-through hidden sm:block',
    PlanHeaderDescription: 'mt-8',
    PlanFeatures: 'mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10',
    PlanFeaturesFeature: 'flex items-start mt-6 first:mt-0',
    PlanFeaturesIcon: 'w-6 h-6 flex-shrink-0',
    PlanFeaturesText: 'font-semibold tracking-wide ml-3',
    PlanAction: 'mt-4',
    ActionButton:
      'px-8 py-3 font-bold rounded bg-primary text-gray-100 hover:bg-primary hover:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary px-6 py-4 rounded hover:bg-primary focus:shadow-outline focus:outline-none transition-colors duration-300',
    WhiteBackgroundOverlay: 'absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 z-0'
  }
  return (
    <Box bg={primary} pos='relative' mx='-10' px='-10' id='Pricing'>
      <div className={Styles.ContentWithPaddingXl}>
        <div className={Styles.HeaderContainer}>
          {subheading && <Heading mb='4'>{subheading}</Heading>}
          <Heading size='3xl' color={bg} textAlign='center'>
            {heading}
          </Heading>
          {description && (
            <Text color={bg} textAlign='center' mt='4'>
              {description}
            </Text>
          )}
        </div>
        <div className={Styles.PlansContainer}>
          {plans.map((plan, index) => (
            <Flex bg={bg} className={Styles.Plan} key={index}>
              <div>
                <span className={Styles.PlanHeaderNameAndFeaturedContainer}>
                  <Heading size='lg' className={Styles.PlanHeaderName}>
                    {plan.name}
                  </Heading>
                  {plan.featured && (
                    // <span className={Styles.PlanHeaderFeaturedText}>
                    <Text size='sm' bg={primary} color={bg} rounded='2xl' p='2'>
                      {plan.featured}
                    </Text>
                    /* </span> */
                  )}
                </span>
                <div className={Styles.PlanHeaderPricingContainer}>
                  <Text as='span' color={bgDark} className={Styles.PlanHeaderBigText}>
                    {plan.price[0]}
                  </Text>
                  {plan.price[1]}{' '}
                  {plan.oldPrice && (
                    <Text as='span' color={bgDark} className={Styles.PlanHeaderOldPrice}>
                      {plan.oldPrice}
                    </Text>
                  )}
                </div>
                <Text color={bgDark} className={Styles.PlanHeaderDescription}>
                  {plan.description}
                </Text>
              </div>
              <Box borderTop='1px' borderColor={bgDark} className={Styles.PlanFeatures}>
                {plan.features.map((feature, index) => (
                  <li className={Styles.PlanFeaturesFeature} key={index}>
                    <RiCheckboxCircleFill
                      color={`${colorMode === 'light' ? 'black' : 'white'}`}
                      className={Styles.PlanFeaturesIcon}
                    />
                    <Text as='span' color={bgDark} ml='3' className={Styles.PlanFeaturesText}>
                      {feature}
                    </Text>
                  </li>
                ))}
              </Box>
              {/* <div className={Styles.PlanAction}> */}
              <Button mt='4' textAlign='center'>
                {primaryButtonText}
              </Button>
              {/* </div> */}
            </Flex>
          ))}
        </div>
      </div>
      <Box bg={primary} className={Styles.WhiteBackgroundOverlay} />
    </Box>
  )
}

export default ThreePlansWithHalfPrimaryBackground
