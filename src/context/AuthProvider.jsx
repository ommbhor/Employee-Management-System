import React, { createContext } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useEffect } from 'react'



export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
// localStorage.clear()
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setuserData(employees)

  }, [])



  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
