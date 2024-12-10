import React from 'react'
import Header from '../Components/Header'
import WelcomeContent from '../Components/WelcomeContent'

const Landing = () => {
  return (
    <>
      <Header/>
      <div className="my-24">
        <WelcomeContent
        location='Kota Tua Ampenan'
        link='/Menu'
        />
      </div>
    </>
  )
}

export default Landing