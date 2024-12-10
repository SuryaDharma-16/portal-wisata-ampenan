import React from 'react'
import Nav from '../Components/Nav'
import Cta from '../Components/Cta'

const Menu = () => {
  return (
    <>
      <Nav/>
      <div className='flex flex-col items-center gap-4 my-24'>
        <Cta
        link='/Article'
        lable='General Information'/>
        <Cta
        link='/PhotoSpot'
        lable='Rekomendasi Spot Foto'/>
      </div>
    </>
  )
}

export default Menu