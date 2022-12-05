import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const alert = msg ? <div class="notification is-danger">
      <button class="delete"></button>
      {msg}
    </div> : null;
  const Auth = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:4000/login',{
        email: email,
        password: password,
      })
      navigate('/dashboard')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg)
      }
    }
  }
  return (
    <section className="hero has-background-grey is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className="box" onSubmit={Auth}>
                  {alert}
                    <div className="field mt-5">
                        <label className="label">Email or Username</label>
                        <div className="controls">
                            <input required type="text" className='input' placeholder='Email or Username' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input required type="password" className='input' placeholder='********' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
