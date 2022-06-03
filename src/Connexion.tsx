import { useState } from 'react';
import './App.css';
import Sign_in from './Sign_in';
import Sign_up from './Sign_up';
// import { useState } from 'react';
import './Connexion.css';


const Connexion : React.FC<{setUser:Function}>= ({setUser})=>{

    
    var [ isSignIn, setIsSignIn] = useState(true)

    return(
        <>
         <nav className="menu">

            <span 
              className={"menu-item" +(isSignIn?" menu-item-active": "")}
              onClick={()=>{setIsSignIn(true)}}>
                  Sign in
            </span> 

            <span 
                className={"menu-item" +(!isSignIn?" menu-item-active": "")}
                onClick={()=>{setIsSignIn(false)}}>
                Sign up
            </span>

            
         </nav>
          
          {isSignIn? <Sign_in setUser={setUser}/> : <Sign_up/>}
        
        </>

    )
}


export default Connexion