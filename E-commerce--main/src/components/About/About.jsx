import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className='lead'></p>
                    <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src="./images/about.png" alt="About Us" height='400px' width='400px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About