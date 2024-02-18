import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { checkLogin } from '../apis';

function AuthGaurd() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const email = checkLogin();
        if(!email) {
            navigate('/')
        }
    }, [])
  return (
    <div>
        <p>Header</p>
        <Outlet />
        <p>Footer</p>
    </div>
  )
}

export default AuthGaurd