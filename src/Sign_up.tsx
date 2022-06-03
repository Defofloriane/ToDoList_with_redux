import React, { useState } from 'react';
import './App.css';
import './Sign_up.css';
import { User } from './types/User';

function Sign_up(){
    const [name,setName]=useState<string|null>(null);
    const [email,setEmail]=useState<string|null>(null);
    const [phone,setPhone]=useState<string|undefined>(undefined);
    const [password,setPassword]=useState<string|null>(null);
    return(
        <div className='sign-card'>
            
            <h2 className='signup'>Sign up</h2>
            <div className='input-item'>
                <div>
                    <i className="bi bi-person iMessage"></i>
                <span className='span3'> Enter your name  :</span> 
                
                </div>
                <input 
                type="name" 
                placeholder='Nom complet' 
                onChange={({target:{value}})=>{
                    if(value)
                     setName(value)
                }}
                />
           
            </div>
            
            <div className='input-item'>
                <div>
                    <i className="bi bi-envelope iMessage"></i>
                    <span className='span4'> Enter your Email  :</span> 
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
            <div className='input-item'>
                <div>
                    <i className="bi bi-telephone itel"></i>
                <span className='spa6'> Enter your number  :</span>
                
                </div>
                <input 
                    type="tel" 
                    placeholder='Numero de telephone'
                    onChange={({target:{value}})=>{
                        if(value)
                         setPhone(value)
                    }}
                />
            </div>
            <button 
                type="button" 
                onClick={()=>{
                    if(name&&email&&password){

                        const u = new User(name,email,password,phone);
                        u.save();
                        alert("sin_up was succesul");
                    }
                }}
                className="btn btn-primary btn-lg btn-block buttonConnect"
            >
                    INSCRIPTION
            </button>

        </div>

        
    )
}


export default Sign_up