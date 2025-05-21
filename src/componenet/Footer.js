import React from 'react'

function Footer() {
  return (
    <div>
      <h1 className='text-center mt-8 font-bold text-2xl'>SHOPPER</h1>
      <div className='flex text-center justify-center text-lg gap-8 mt-5'>
        <h4>Company</h4>
        <h4>Products</h4>
        <h4>Offices</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <div className='flex justify-center mt-6 gap-8'>
      <img className='w-5' src='image/insta.jpg'></img>
        <img className='w-5' src='image/pinteres.jpg'></img>
        <img className='w-5'  src='image/whats.jpg'></img>
      </div>
      <hr className='mt-10'/>
   <p className='text-center mt-7'>Copyright @ 2023 -All Right Reserved </p>
    </div>
  )
}

export default Footer
