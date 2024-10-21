import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password) 
        setEmail('')
        setPassword('')
    }
    
  return (
    <>
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-3xl'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                className='flex flex-col items-center justify-center'
                >
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder='Enter Your Email'
                    className='border-2 border-emerald-600 rounded-full py-3 px-7 outline-none bg-transparent placeholder:text-gray-400'
                    required
                     />

                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="password"
                    placeholder='Enter Your Password'
                    className='border-2 border-emerald-600 rounded-full py-3 mt-5 px-7 outline-none bg-transparent placeholder:text-gray-400'
                    required
                     />

                     <button
                     className='border-none bg-emerald-600 rounded-full mt-7 py-3 px-24 outline-none hover:bg-emerald-700 transition duration-350 ease-linear placeholder:text-gray-400'
                     >Login

                     </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login