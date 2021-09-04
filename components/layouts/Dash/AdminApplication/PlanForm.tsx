import { LandingPageDetails } from '@/public/LandingDeatils'
import { Container, Heading, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from '@chakra-ui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { useMyColors } from 'styles/colors'

interface props {
  setApplicationForm: Dispatch<SetStateAction<number>>
}

const PlanForm = ({ setApplicationForm }: props) => {
  const [trackerNumber, settrackerNumber] = useState(100)
  const { bgLight } = useMyColors()
  const Styles = {
    HeaderContainer: 'mt-2 w-full flex flex-col items-center',
    PlansContainer:
      'mt-5 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium',
    Plan: 'w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised',
    PlanHeaderNameAndFeaturedContainer: 'flex flex-wrap flex-col sm:flex-row justify-between items-center',
    PlanHeaderName: 'lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3',
    PlanHeaderFeaturedText:
      'text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center',
    PlanHeaderPricingContainer: 'mt-6 flex items-end justify-between',
    PlanHeaderCurrentPrice: 'text-lg font-bold leading-none',
    PlanHeaderBigText: 'text-3xl font-bold',
    PlanHeaderOldPrice: 'text-gray-500 text-lg line-through hidden sm:block',
    PlanHeaderDescription: 'text-left mt-8 font-medium text-gray-700 lg:text-sm xl:text-base',
    PlanFeatures: 'mt-4 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-4 xl:-mx-10 xl:p-6',
    PlanFeaturesFeature: 'flex items-start mt-6 first:mt-0',
    PlanFeaturesIcon: 'w-6 h-6 text-primary-500 flex-shrink-0',
    PlanFeaturesText: 'font-semibold text-primary-900 tracking-wide ml-3',
    PlanAction: 'mt-4',
    ActionButton:
      'px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hover:bg-primary-700 hover:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary-500 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300'
  }
  return (
    <Container h='80%' maxW='container.xl' textAlign='center' bg={bgLight} p='8' rounded='2xl'>
      <Heading mb='4'>Calculate price</Heading>
      <Text size='sm'>Number of Students</Text>
      <Slider
        maxW='container.sm'
        aria-label='slider-ex-1'
        defaultValue={100}
        min={0}
        max={500}
        value={trackerNumber}
        onChange={(val) => settrackerNumber(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text>{trackerNumber}</Text>
      <div className={Styles.PlansContainer}>
        {LandingPageDetails.Pricing.plans.map((plan, index) => (
          <div className={`${Styles.Plan}`} key={index}>
            <div>
              <span className={Styles.PlanHeaderNameAndFeaturedContainer}>
                <span className={Styles.PlanHeaderName}>
                  {plan.name}
                  {/* - 
                  {plan.description} */}
                </span>
                {plan.featured && <span className={Styles.PlanHeaderFeaturedText}>{plan.featured}</span>}
              </span>
              <div className={Styles.PlanHeaderPricingContainer}>
                <span className={Styles.PlanHeaderPricingContainer}>
                  <span className={Styles.PlanHeaderBigText}>{plan.price[0]}</span>
                  {plan.price[1]}{' '}
                </span>
                {plan.oldPrice && <span className={Styles.PlanHeaderOldPrice}>{plan.oldPrice}</span>}
              </div>
              <Text mt='4'>
                Your price: $
                <Text as='span' size='lg'>
                  {trackerNumber * parseInt(plan.price[0].substring(1))}
                </Text>
                /month
              </Text>
            </div>
            <div className={Styles.PlanFeatures}>
              {plan.features.map((feature, index) => (
                <li className={Styles.PlanFeaturesFeature} key={index}>
                  <RiCheckboxCircleFill className={Styles.PlanFeaturesIcon} />
                  <span className={Styles.PlanFeaturesText}>{feature}</span>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Text mt='4' size='sm'>
        Plan selction and pricing will be finizled after contacting us.
      </Text>
      <Button mt='2' size='lg' onClick={() => setApplicationForm((state) => state + 1)}>
        Next
      </Button>
    </Container>
  )
}

export default PlanForm
