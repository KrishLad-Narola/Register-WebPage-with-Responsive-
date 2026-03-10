import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='text-center'>
        <h1 className=' text-center  text-3xl p-4'> Home page</h1>
        {/* <p className='text-center'> This is your web home page.</p> */}
        < Link to='/Register'>Registration page</Link>
       
    </div>
  )
}

export default Homepage