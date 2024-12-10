import React from 'react'
import { Link } from 'react-router-dom';


const WelcomeContent = ({location, link}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className='text-h4 text-center font-montserrat font-bold'>Selamat Datang <br /> di {location}</h1>
        <Link to={link}><button className='bg-blue-800 text-gray-50 text-h6 rounded-md px-4 py-1'>Mulai</button></Link>
      </div>
    </>
  )
}

export default WelcomeContent