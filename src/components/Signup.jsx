import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { user, error, signup } = useContext(AuthContext)

    function handleSignup (e) {
        e.preventDefault();
        signup({ email, password })
        
    }

    useEffect(() => {
        if(user) {
          navigate('/profile/')
        }
      }, [user])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <form className="" onSubmit={handleSignup}>
          <h2 className="text-2xl mb-4">Signup</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          { error && <p className='p-1 m-2 text-xs bg-red-300 text-red-600 border-red-600 border rounded' >{error}</p> }
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Signup
          </button>
        </form>
        <hr className='mt-2' />
        <Link to="/">Go to Login</Link>
      </div>
    </div>
  )
}

export default Signup;