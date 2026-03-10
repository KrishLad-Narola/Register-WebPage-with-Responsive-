import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='text-center'>
        <h1 className=' text-center mt-5 text-4xl p-6'> Home page</h1>
        {/* <p className='text-center'> This is your web home page.</p> */}
        < Link to='/Register' className='text-purple-600 p-5'>Registration page 📋</Link>
       
    </div>
  )
}

export default Homepage