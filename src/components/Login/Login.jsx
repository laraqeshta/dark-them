import React from 'react';
import useLocalStorage from 'use-local-storage';

//style
import './Login.css';

const Login = () => {
    const [theme , setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    const check = () =>{
        console.log("checked")
    }
  return (
    <div className='app' data-theme={theme}>
        <div className='login'>
            <h1>Login</h1>
        </div>

        <div className='container'>

            <div className='top'>
                <i className='fab fa-google'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-apple'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-linkedin'></i>
           </div>

           <p className='divider'>
               <span>Or</span>
           </p>

           <form action='' className='form'>
               <label>Email</label>
               <input type='email' placeholder='Enter your email'/>

               <label>Password</label>
               <input type='password'placeholder='Enter your password' />

               <div className='remember'>
                   <input type='checkbox' checked="checked" onChange={check} />
                   <p>Remember Me</p>
               </div>

               <button className='btn'>Login In</button>

           </form>

           <div className='bottom'>
               <p>Forget Password ?</p>
               <a href='/'>Reset Password</a>
           </div>

           <button className='btn'>Create Account</button>



        </div>

        <div className='theme-toggle'>
            <i onClick={switchTheme} className='fas fa-toggle-on'></i>
        </div>
    </div>
  )
}

export default Login