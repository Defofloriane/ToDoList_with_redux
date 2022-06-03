import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Sign_in.css'
import { User } from './types/User';


type PropsType={
    setUser: Function
}

const Sign_in: React.FC<PropsType>= ({setUser})=>
{
    const [email,setEmail]=useState<string|null>(null);
    const [password,setPassword]=useState<string|null>(null);
    
    return(
        
        <div className='sign-card'>
            
            <h2 className='signup'>Sign up</h2>
            <div className='input-item'>
                <div>
                    <i className="bi bi-envelope iMessage"></i>
                <span className='span3'> Enter your Email  :</span> 
                
                </div>
                <input 
                type="email" 
                placeholder='Email' 
                onChange={({target:{value}})=>{
                    if(value)
                     setEmail(value)
                }}
                />
           
            </div>
            
           
            <div className='input-item'>
                <div>
                    <i className="bi bi-eye-slash iPassword"></i>
                <span className='span5'> Enter your Password  :</span>
                
                </div>
                <input 
                    type="passeword" 
                    placeholder='Password'
                    onChange={({target:{value}})=>{
                        if(value)
                         setPassword(value)
                    }} 
                />
            </div>
           
            <button 
                type="button" 
                onClick={()=>{
                    console.group("signin")
                    console.log(email,password)
                    console.groupEnd()
                    if(email&&password){

                        const res= User.signin({
                            email,
                            password
                        })
                        if(res)
                          setUser(res);
                    }
                }}
                className="btn btn-primary btn-lg btn-block buttonConnect"
            >
                    CONNEXION
            </button>

        </div>

    )



    
}
export default Sign_in