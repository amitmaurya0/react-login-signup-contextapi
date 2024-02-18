import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user,  logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="p-4">  
      <div>Profile</div>
      <p>Email: {user.email} </p>
      <p>Name: {user.name} </p>
      <button onClick={userLogout}>Logout Me</button>
    </div>
    
  )
}

export default Profile