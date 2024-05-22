import React , {useState} from 'react'
// import logo from "../../assets/images/Header.png"
import { FaEye , FaEyeSlash } from "react-icons/fa";    
import axios from "axios"
import "./login.scss"
import { toast } from 'react-toastify'
 

const API = "https://fakestoreapi.com/auth/login"

function Login() {
    const [showPassword , setShowPassword] = useState(false)
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username.trim() || !password.trim()) {
            return toast.warn("Malumotni togri kiriting")
        }
        axios
            .post(API, { username, password })
            .then((res) => {
                const data = res.data
                if (data.message === "Error") {
                    console.log("username or password is incorrect");
                } else {
                    console.log(data);
                    localStorage.setItem("token", data.token)
                    window.open("/admin", "_self")
                    toast.success("Welcome")
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("username or password is incorrect")
            })
    }
  return (
    <div className='login'>
        {/* <div className="login__logo">
            <img src={logo} alt="" />
        </div> */}
        <form onSubmit={handleSubmit} action="">
            <div className='login__input-1'>
                <label htmlFor="">Email Address*</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} required type="text" placeholder='Enter Your Email' />
            </div>
            <div className='login__input-2'>
                <label htmlFor="">Password*</label>
                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required type={showPassword ? "text" : "password"} placeholder='Enter Your password' />
                    {
                        password ? <button onClick={()=> setShowPassword(p => !p)} type='button'>
                        {showPassword ? <FaEye /> : <FaEyeSlash /> }
                    </button> : <></>
                    }
                </div>
            </div>
            <div className="login__password">
                <div>
                    <input type="checkbox" />
                    <h2>Remember Me</h2>
                </div>
                <h3>Forgot Password?</h3>
            </div>
            <div className="login__end">
                <button type='submit' className='login__button'>Login</button>
                <button className='signup'>Signup?</button>
            </div>
        </form>
    </div>
  )
}

export default Login