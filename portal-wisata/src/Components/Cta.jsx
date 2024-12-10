import React from 'react'
import { Link } from 'react-router-dom';


const Cta = ({link, lable}) => {
  return (
    <>
      <Link to={link}><button className='w-fit font-montserrat font-bold bg-blue-800 text-gray-50 rounded-md px-6 py-3 hover:ring-2'>{lable}</button></Link>
    </>
  )
}

export default Cta