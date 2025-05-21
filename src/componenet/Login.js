


import React from 'react';
import Navbar from './Navbar';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
   
      <div className="bg-slate-300 w-[550px] h-[400px] space-y-7 flex flex-col items-center justify-center p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold">Login</h3>
        <input className="border border-gray-300 p-2 rounded w-full" placeholder="Email address" />
        <input className="border border-gray-300 p-2 rounded w-full" placeholder="Password" type="password" />
        <button className="bg-red-300 text-white px-4 py-2 rounded">Continue</button>
        <p>Create an account? Click here</p>
        <div className="flex items-center">
          <input type="checkbox" />
          <span className="ml-2">By continuing, I agree to the terms of use & privacy policy.</span>
        </div>
      </div>
    </div>
  );
}

export default Login;