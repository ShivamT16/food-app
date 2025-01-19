import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [location, setLocation] = useState(null)

    const [newSignInEntry, setNewSignInEntry] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
        });
    const [signInRecord, setSignInRecord] = useState([])
    const [loginEntry, setLoginEntry] = useState({
      email: "",
      password: ""
    })
    
    const handleSignInChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setNewSignInEntry({...newSignInEntry, [name] : value})
    }

    const handleLoginChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setLoginEntry({...loginEntry, [name]: value }) 
    }

    return(
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, newSignInEntry, setNewSignInEntry, signInRecord, setSignInRecord, handleSignInChange, loginEntry, setLoginEntry, handleLoginChange, location, setLocation }} >
            {children}
        </AuthContext.Provider>
    )
}