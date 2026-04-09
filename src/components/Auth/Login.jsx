import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email is",email)
        console.log("Password is",password)
        setemail("")
        setpassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className="border-2 border-emerald-600 p-20 rounded-xl">

            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>

                <input
                value={email}
                onChange={(e) => {setemail(e.target.value)}} 
                required 
                className='text-black mb-5 bg-transparent outline-none border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your Email' />

                <input 
                value={password}
                onChange={(e)=> {setpassword(e.target.value)}}
                required 
                className=' bg-transparent outline-none border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400' type="password"  placeholder='Enter Password'/>

                <button className='text-white mt-5 border-none outline-none border-2 bg-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400'>Log In</button>

            </form>

        </div>

    </div>
  )
}

export default Login
