import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [newSignInEntry, setNewSignInEntry] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
        });
    const [signInRecord, setSignInRecord] = useState([])
    
    const handleSignInChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setNewSignInEntry({...newSignInEntry, [name] : value})
    }

    const handleSignInSubmit = (e) => {
     e.preventDefault()

     if ( !newSignInEntry.firstName || !newSignInEntry.lastName || !newSignInEntry.email 
        || !newSignInEntry.password || !newSignInEntry.confirmPassword) 
      { 
        console.log("Fill the mandatory details")        
      } else {
        if(newSignInEntry.password === newSignInEntry.confirmPassword) {
            const newUser = { ...newSignInEntry, id: new Date().getTime().toString() }
            setSignInRecord([...signInRecord, newUser])
            setNewSignInEntry({
               firstName: "",
               lastName: "",
               email: "",
               password: "",
               confirmPassword: ""
              })
        console.log(signInRecord);
          } else {
            console.log("Passwords does not match !!")
          }
      }     
    }

    const [loginEntry, setLoginEntry] = useState({
        email: "",
        password: ""
    })

    const handleLoginChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setLoginEntry({...loginEntry, [name]: value }) 
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        console.log(loginEntry)
        if( !loginEntry.email || !loginEntry.password) {
          console.log("Fill the mandatory details")
        } else {
         if ( signInRecord.find(({email, password}) => email === loginEntry.email && password === loginEntry.password) ) {
            console.log("Welcome")
            setLoginEntry({email: "", password: ""})
         } else {
            console.log("Credentials Invalid")
         }
        }
    }

    const handleGuestLogin = (e) => {
        e.preventDefault()
        setLoginEntry({email: "example.com", password: "demoPassword"})
    }

    return(
        <AuthContext.Provider value={{ newSignInEntry, setNewSignInEntry, signInRecord, setSignInRecord, handleSignInChange, handleSignInSubmit, loginEntry, handleLoginChange, handleLoginSubmit, handleGuestLogin }} >
            {children}
        </AuthContext.Provider>
    )
}