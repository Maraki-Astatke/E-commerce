import React from 'react'

function WomensData(props) {
  return (
    <div>
       <div>
      <img className='popular-image rounded-md' src={props.imageUrl}></img>
      <p className='text-sm'>{props.description}</p>
   <h3 className='font-bold'>{props.price}</h3>
       </div>
    </div>
  )
}

export default WomensData
