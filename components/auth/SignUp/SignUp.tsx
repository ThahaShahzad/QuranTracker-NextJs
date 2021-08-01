import React from 'react'

import { Redirect, Switch, useRouteMatch, Link, useLocation, Route } from 'react-router-dom'

import FormNav from './FormNav'
import PIForm from './PIForm'
import SIForm from './SIForm'
import ACForm from './ACForm'
import PSSelect from './PSSelect'
import BIForm from './BIForm'
import BCForm from './BCForm'
import FCForm from './FCForm'

const SignUp: React.FC = () => {
  let { path, url } = useRouteMatch()
  let { pathname } = useLocation()

  const Styles = {
    Container: 'h-screen bg-primary-900 text-white font-medium flex justify-center overflow-hidden',
    FlexContainer: 'max-w-most m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex flex-1',
    NavContainer: '',
    FormContainer: 'flex flex-col flex-1 bg-primary-100'
  }
  const FormStepRoutes = [
    {
      component: PIForm,
      url: '/pi',
      nextUrl: '/si'
    },
    {
      component: SIForm,
      url: '/si',
      nextUrl: '/ac',
      prevUrl: '/pi'
    },
    {
      component: ACForm,
      url: '/ac',
      nextUrl: '/cp',
      prevUrl: '/si'
    },
    {
      component: PSSelect,
      url: '/cp',
      nextUrl: '/bi',
      prevUrl: '/ac'
    },
    {
      component: BIForm,
      url: '/bi',
      nextUrl: '/bc',
      prevUrl: '/cp'
    },
    {
      component: BCForm,
      url: '/bc',
      nextUrl: '/fc',
      prevUrl: '/bi'
    },
    {
      component: FCForm,
      url: '/fc',
      prevUrl: '/bc'
    }
  ]
  console.log(path, url, pathname.substring(path.length))
  const routeName = pathname.substring(path.length)
  return (
    <div className={Styles.Container}>
      <div className={Styles.FlexContainer}>
        {/* <div className={Styles.NavContainer}> */}
        <FormNav />
        {/* </div> */}

        <div className={Styles.FormContainer}></div>
      </div>
    </div>
  )
}

export default SignUp
