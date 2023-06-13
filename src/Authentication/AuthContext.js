import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [creds, setCreds] = useState({
        username: '',
        password: ''
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreds(prevCreds => ({
          ...prevCreds,
          [name]: value
        }));
  
      };
      
  
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(creds); 
      };

    const key  = "newUser"
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(key)) || {})
  



  const handleLogin = async () => {
    handleSubmit(new Event('submit'));
    console.log(JSON.stringify(creds))
    try {
   
      const response = await fetch("/api/auth/login" , {
      method: 'POST',
      body: JSON.stringify(creds)});

      const userData = await response.json();
      console.log(userData)

      const {encodedToken, foundUser} = userData
      if(encodedToken){
        localStorage.setItem(
          key,
          JSON.stringify({foundUser: foundUser, encodedToken: encodedToken})
        );
        setUser(JSON.parse(localStorage.getItem(key)));
        navigate(location?.state?.from?.pathname)
      };

     
   

    }catch(e){
      console.error(e)
      
      
    }
  }

  const logoutHandler = () => {
    localStorage.removeItem(key);
    setUser({});
    
  }


  const [signUpcreds, setSignUpCreds] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });
  const handleGuestLogin = () => {
    const guestCreds = {
  username: "vinlarose",
  password: "vinlarose",
    };
    setCreds(guestCreds);
    handleLogin();
  };

  const handleSinUpInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpCreds(prevCreds => ({
      ...prevCreds,
      [name]: value
    }));

  };


  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(signUpcreds); // You can perform further actions with the `creds` object here
  };


  const handleSignUp = async () => {
    // handleSignUpSubmit(new Event('submit'));
    try {
   
      const response = await fetch("/api/auth/signup" , {
      method: 'POST',
      body: JSON.stringify(signUpcreds)});

      const userData = await response.json();
      console.log(userData)

      const {encodedToken, createdUser} = userData
      if(encodedToken){
        localStorage.setItem(
          key,
          JSON.stringify({createdUser: createdUser, encodedToken: encodedToken})
        );
        setUser(JSON.parse(localStorage.getItem(key)));
        navigate(location?.state?.from?.pathname)
      };

     
   

    }catch(e){
      console.error(e);
      const errormsg = e.errors;
      console.log(errormsg)
    }
  }

  

  return (
    <AuthContext.Provider  value={{user, handleLogin ,logoutHandler, handleInputChange, handleSubmit, creds,handleGuestLogin,
    handleSignUp, handleSignUpSubmit, handleSinUpInputChange, signUpcreds}}>
      {children}
    </AuthContext.Provider>
  );
}