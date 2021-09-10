import React, { useState } from 'react'
import Image from 'next/image'

import { Link, Button } from '../custom/index'
import { BsArrowRight, BsFillPlayFill } from 'react-icons/bs'
//import { AiOutlineClose } from 'react-icons/ai'

//import ReactModalAdapter from './helpers/ReactModalAdapter.js'
//import ResponsiveVideoEmbed from './helpers/ResponsiveVideoEmbed.js'

export type Props = {
  heading: string
  description: string
  primaryButtonText: string
  primaryButtonUrl: string
  watchVideoButtonText: string
  watchVideoYoutubeUrl: string
  imageSrc: any
}
const TwoColumnWithVideo: React.FC<Props> = ({
  heading,
  description,
  primaryButtonText,
  primaryButtonUrl,
  watchVideoButtonText,
  watchVideoYoutubeUrl,
  imageSrc
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  const Styles = {
    Container: 'relative',
    TwoColumn: 'flex flex-col xl:flex-row md:items-center justify-center max-w-screen-xl mx-auto py-20 md:py-24',
    LeftColumn: 'relative xl:w-6/12 xl:pr-12 flex-shrink-0 text-center xl:text-left',
    RightColumn: 'relative mt-12 xl:mt-0 flex flex-col justify-center',
    Heading: 'max-w-3xl',
    Description: 'font-bold my-5',
    Actions: 'flex flex-col items-center sm:flex-row justify-center xl:justify-start mt-8 gap-4',
    PrimaryButtonIcon: 'stroke-1 w-8 h-8 text-bg',
    WatchVideoButtonPlayIcon: 'stroke-1 w-8 h-8 text-primary group-hover:text-bg',
    WatchVideoButtonPlayText: '',
    IllustrationContainer: 'flex justify-center xl:justify-end items-center relative max-w-2xl',
    CloseModalButton: 'absolute top-0 right-0 mt-8 mr-8 hover:text-primary',
    mainHeroModal__overlay: 'fixed inset-0 z-50',
    mainHeroModal__content:
      'xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none',
    StyledModalContent: 'w-full lg:p-16'
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.TwoColumn}>
        <div className={Styles.LeftColumn}>
          <h1 className={Styles.Heading}>{heading}</h1>
          <p className={Styles.Description}>{description}</p>
          <div className={Styles.Actions}>
            <Button size='lg'>
              <div className='flex items-center gap-4'>
                <BsArrowRight className={Styles.PrimaryButtonIcon} />
                <Link to={primaryButtonUrl} type='primary-nl'>
                  {primaryButtonText}
                </Link>
              </div>
            </Button>
            <Button type='primary-i' size='lg' onClick={toggleModal}>
              <div className='flex items-center gap-4'>
                {/* <span className='playIconContainer'> */}
                <BsFillPlayFill className={Styles.WatchVideoButtonPlayIcon} />
                {/* </span> */}
                <span className={Styles.WatchVideoButtonPlayText}>{watchVideoButtonText}</span>
              </div>
            </Button>
          </div>
        </div>
        <div className={Styles.RightColumn}>
          <div className={Styles.IllustrationContainer}>
            <Image src={imageSrc} alt='Hero' />
          </div>
        </div>
      </div>
      {/* <ReactModalAdapter
        closeTimeoutMS={300}
        contentClassName={Styles.mainHeroModal__content}
        overlayClassName={Styles.mainHeroModal__overlay}
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <button className={Styles.CloseModalButton} onClick={toggleModal}>
          <AiOutlineClose tw='w-6 h-6' />
        </button>
        <div className={Styles.StyledModalContent}>
          <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw='w-full' />
        </div>
      </ReactModalAdapter> */}
    </div>
  )
}

export default TwoColumnWithVideo
