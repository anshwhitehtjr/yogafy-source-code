import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

const Signup = () => {
   const [signCredentials, setSignCredentials] = useState({ c_email: '', c_password: '', c_confirmPassword: '', c_name: '' })
   let history = useHistory()

   const handleSignup = async (e) => {
      e.preventDefault()
      if (signCredentials.c_confirmPassword != signCredentials.c_password) {
         return alert('Invalid Credentials')
      }

      const response = await fetch('http://localhost:5000/api/auth/createuser', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ email: signCredentials.c_email, password: signCredentials.c_password, name: signCredentials.c_name })
      })
      const json = await response.json()
      console.log("working")
      history.push('/login')
   }

   const onChange = (e) => {
      setSignCredentials({ ...signCredentials, [e.target.name]: e.target.value })
   }

   return (
      <>
         <div className="container">
            <form onSubmit={ handleSignup }>
               <div className="mb-3">
                  <label htmlFor="c_name" className="form-label">Name</label>
                  <input type="c_name" className="form-control" value={ signCredentials.c_name } onChange={ onChange } id="c_name" name="c_name" aria-describedby="emailHelp" />
               </div>
               <div className="mb-3">
                  <label htmlFor="c_email" className="form-label">Email address</label>
                  <input type="c_email" className="form-control" value={ signCredentials.c_email } onChange={ onChange } id="c_email" name="c_email" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div className="mb-3">
                  <label htmlFor="c_password" className="form-label">Password</label>
                  <input type="password" className="form-control" value={ signCredentials.c_password } onChange={ onChange } name="c_password" id="c_password" />
               </div>
               <div className="mb-3">
                  <label htmlFor="c_confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" value={ signCredentials.c_confirmPassword } onChange={ onChange } name="c_confirmPassword" id="c_confirmPassword" />
               </div>
               <button type="submit" className="btn mx-1 btn-primary">Create Account</button>
               <Link to="/login" type="button" className="btn mx-1 btn-primary">Login</Link>
            </form>
         </div>
      </>
   )
}

export default Signup
