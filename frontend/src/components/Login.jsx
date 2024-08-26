import React from 'react'
import './Login.css'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import logo from './bg.jpg'
import {useDispatch} from 'react-redux'
import {addUser} from '../features/state/stateSlice'
// import { addUser } from '../../features/users/userSlice'
export default function Login() {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()
    const history = useNavigate()

    const SaveHandler = (e) => {
      e.preventDefault();
      if(name === '' || password === '') return
       
        axios.post('/api/user/login', {username : name, password : password})
        .then((response) => {
          console.log("Done :",response.data)
       
          const {_id, ...user} = response.data.data.data
            dispatch(addUser({
                id : _id,
                ...user
              }))
              history('/home')
        })
        .catch((error) => {
          console.error(error)
        })
      
        setName('')
        setPassword('')
       
    }

    // const SaveHandler = (e) => {
        
    // }


  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={logo} className='w-3/5 sm:w-1/4  mb-5 rounded-full'  alt=""/>
       <form className='flex flex-col' id='userLogin'>
        <h1 className='mb-4 text-4xl'>LOGIN</h1>
        <label className='my-2'>Username :
        <input className='my-2 p-1' type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label> Password :
        <input className='my-2 p-1' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div className='flex justify-center mt-2'>
        <button className=' bg-transparent mx-2' type="submit" onClick={SaveHandler}>Submit</button>
        <Link to="/signup"><button className=' bg-transparent'>Signup</button></Link>
        </div>
      </form>

      <div>
        <br></br>
      </div>
    </div>
  )
}
