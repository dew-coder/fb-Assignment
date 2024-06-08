// import React, { createContext, useContext, useEffect, useState } from 'react'

// const AuthContext = createContext()

// const AuthContextProvider = ({ children }) => {

//     const [auth, setAuth] = useState(true)  ; //by default user is Logged in
    
//     const login=()=>{
//         setAuth(true);
//     }

//     const logout=()=>{
//       setAuth(false)
//     }
    

//     return (
//         <AuthContext.Provider value={{auth, setAuth,login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// const UserAuth = () => {
//     return useContext(AuthContext)
// }

// export default AuthContextProvider
// export { UserAuth }
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(true); // by default user is Logged in
  
  const login = () => {
    setAuth(true);
  }

  const logout = () => {
    setAuth(false);
  }
  
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthContextProvider;
export { useAuth };
