import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <form action="#" id='regForm'>
        <h3>Register</h3>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Your Name..."/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="someone@example.com"/>
        </div>
        <div className="form-group">
            <label htmlFor="name">Password</label>
            <input type="password" className="form-control" placeholder="Your Password..."/>
        </div>
        <button className="btn btn-info">Register</button>
        <p>Already Registered? <Link href="/login">Login Here</Link></p>
    </form>
  )
}

export default Register