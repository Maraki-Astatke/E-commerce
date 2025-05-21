import React from 'react'

function Signup() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
   
   <div className="bg-slate-300 w-[550px] h-[420px] space-y-5 flex flex-col items-center justify-center p-4 rounded-md shadow-md">
     <h3 className="text-lg font-semibold mt-2 text-left">Sign Up</h3>
     <input className="border border-gray-300 p-2 rounded w-full" placeholder="Your Name" />
     <input className="border border-gray-300 p-2 rounded w-full" placeholder="Email address" />
     <input className="border border-gray-300 p-2 rounded w-full" placeholder="Password" type="password" />
     <button className="bg-red-400 text-white px-4 py-2 rounded">Continue</button>
     <p>Already have an account? <span className='text-red-400'>Login here</span></p>
     <div className="flex items-center">
       <input type="checkbox" />
       <span className="ml-2">By continuing, I agree to the terms of use & privacy policy.</span>
     </div>
   </div>
 </div>
    </div>
  )
}

export default Signup
