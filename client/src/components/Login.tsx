import { useRef, useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleForgotPassword = () => {

  }
  return (
    <div className="w-full px-[35px] flex flex-col gap-[20px] justify-center items-center">
      <h2 className="text-[24px] text-primary font-bold">Wellcome <span className="text-unique">B</span>ack!</h2>
      <div className="inputs w-full flex flex-col  gap-[10px] ">
        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input type="email" placeholder='"name@gmail.com"' className={` border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px] bg-white text-black`} onChange={(e) => setEmail(e.target.value) } />
        </div>
        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>PASSWORD <span className='text-[10px]'>( minimum 6 charecter)</span></span>
          <div className={`input-box flex items-center gap-[10px] w-[100%] rounded-[5px] overflow-hidden bg-white text-black`}>

            <input name="password" type={`${showPassword ? "text":"password"}`} placeholder='"asix3d"' className=' border-none outline-none  py-[6px] px-[10px] text-[14px] w-[90%]' onChange={(e) => setPassword(e.target.value)} value={password} />
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} cursor-pointer `} onClick={() => setShowPassword(prev =>!prev)}></i>
          </div>
          <span className='text-unique text-[11px] cursor-pointer text-right' onClick={() => handleForgotPassword()}>Forget Password?</span>
        </div>
      </div>
      <button className="w-full rounded-[5px] bg-unique text-black text-[16px] font-bold text-primary py-[8px]">
        Login
      </button>
    </div>
  )
}

export default Login
