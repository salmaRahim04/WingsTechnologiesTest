import React from 'react';
import { useForm } from "react-hook-form";
import './login.css';
function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  
    const onFormSubmit  = data => {
       localStorage.setItem('user',JSON.stringify(data))
       window.location.reload()
    };
 
  return (
    <div className='loginCard '>
    <h2>Login</h2>
        <form >
       <label htmlFor="email">Email</label>
       <input id="email" name="email" placeholder='email@example.com' type='text' 
       {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address "
          }
        })}/>        
        <div>
        {errors.email && <div className='errorMessage'>{errors.email.message}</div> }
        </div>            
       <label htmlFor='password'>Password</label>
       <input id="password" name='password' placeholder='password' type='password'   {...register("password", {
          validate: value => value.length >= 6 || "The password should be at least 6 characters"
        })}/>
             <div>
        {errors.password &&  <div className='errorMessage'>{errors.password.message}</div>}
        </div>            
       <button id="password" className='submit' onClick={handleSubmit(onFormSubmit)}>Login</button>
    </form>
    </div>
  )
}

export default Login