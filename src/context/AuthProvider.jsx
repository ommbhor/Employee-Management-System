import React, { createContext } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState(null)
    
  return (
    <div>
      <AuthContext.Provider value={"Om"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
