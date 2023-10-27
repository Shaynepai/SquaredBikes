/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
   <>
     <div className="grid grid-cols-1 text-center mt-[10rem]">
     <h1 className="-mt-[5rem] text-4xl font-bold">Login</h1>

<div className="justify-around p-5 w-[28rem] h-[24rem] border rounded-2xl mx-auto text-xl font-semibold shadow-md">

    <h1 className="mt-[1rem] mb-3">Email</h1>
    <input className=" rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 " type="email" placeholder="Email"/>
    <h1 className="mt-3 mb-3">Password</h1>
    <input className="mb-3 rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 " type="password" placeholder="Password"/>
        
        <button className="focus:outline mt-5 hover:mt-3 duration-300 ease-in-out hover:mb-2 hover:text-2xl rounded-2xl border w-full p-3 bg-rose-500 text-white hover:bg-rose-600">
        <h1>Log in</h1>
</button>

<div className="flex gap-1 justify-center mt-3">
<div>
<p>Don't have account? </p>
</div>

<Link to="/LoginPage/SignupPage" className="cursor-pointer duration-300 ease-in-out hover:font-bold underline hover:text-2xl hover:-mt-1">Register.</Link>
</div>
</div>
     </div>
   </>
  )
}
