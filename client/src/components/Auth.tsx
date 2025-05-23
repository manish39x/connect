import { useState } from 'react'
import { cover } from '../assets'
import Register from './Register'
import Login from './Login'

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(false)
  return (
    <div>
      <div className="cover-image absolute top-0 left-0 opacity-80 rounded-[10px]">
        <img src={cover} alt="" className='' />
      </div>
      <div className="secondary-layer w-[100%] h-[100%] absolute bottom-0 rounded-[10px]"></div>
      <div className=" w-full h-full text-white z-20 absolute flex-center flex-col">
        {
          isNewUser ? <Register /> : <Login />
        }
        {
          isNewUser ? 
          <span className='text-[15px] '>Already have an account? <span className='text-unique cursor-pointer' onClick={() => setIsNewUser(prev => !prev)}>Login!</span></span>
          :
          <span className='text-[15px] '>Don't have an account? <span className='text-unique cursor-pointer' onClick={() => setIsNewUser(prev => !prev)}>Register!</span></span>
        }
        
      </div>
    </div>
  )
}

export default Auth
