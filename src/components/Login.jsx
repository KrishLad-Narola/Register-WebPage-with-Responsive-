import React from 'react'
import Input from './UI/Input'
import { email } from 'zod'

function Login() {
    return (
        <div className=' mt-4 gap-2 text-center'>
            <div className="container grid grid-two-cols">

                <Input
                    label="Email"
                    type="Email"
                    placeholder="Email"
                    required
                />

                <Input
                    label="password"
                    type="password"
                    placeholder="password"
                    required
                />
            </div>
             <div>
                <button onClick={(e) => {email.target.value}} type='LogIn' className=' flex p-4  mt-3 gap-5  mx-auto max-w-sm  items-center gap-x-4 rounded-xl bg-blue-800  shadow-lg outline outline-white border-black text-white'>
                    LogIn
                </button>
             </div>

        </div>
    )
}

export default Login