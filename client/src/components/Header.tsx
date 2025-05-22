import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../css/components.css"
import TaskManager from "./TaskManager";

const Header = () => {
  const mobMenu = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  const [searchInput, setSearchInput] = useState("")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [showTaskManager, setShowTaskManager] = useState(false)

  return ( 
    <div className='bg-secondary text-white flex justify-center'>

      <div className="w-full flex flex-col max-w-[110rem]">
        <div className="flex justify-between items-center px-[10px] h-full py-[9px] ">
          <div className="left flex justify-center items-center gap-[14px]">
            <div 
              className="menu flex justify-center items-center cursor-pointer"
            onClick={() => setShowMobileMenu(prev => !prev)}
            >
              <i className="fa-solid fa-bars text-[24px]"></i>
            </div>
            <div className="logo  flex justify-center items-center gap-[3px]">
              <i className="fa-solid fa-link text-[24px] text-unique"></i>
              <span className=" text-[24px] font-primary">connect</span>
            </div>
                {/* Search box */}
            <div className="w-[19rem] 2xl:w-[27rem] rounded-[5px] bg-white hidden xl:flex xl:justify-between xl:items-center mx-[5px] text-black">
              <input type="search" name='search' className="pl-[1rem] py-[.4rem] flex-1 outline-none border-none rounded-[5px]" autoComplete='off' value={searchInput} placeholder="Search for your friends." onChange={(e) => setSearchInput(e.target.value)} /> 

              <div className="buttons flex justify-center items-center gap-2 px-2">
                <i className="fa-solid fa-magnifying-glass text-black text-[20px]"></i>
                <button type="button" className="text-white text-[12px] px-2 py-0 bg-black">Filter</button>
              </div> 
            </div>

            <div className="notification flex flex-col justify-center items-center ml-[10px] cursor-pointer" onClick={() => setShowTaskManager(prev => !prev)}>
              <i className="fa-solid fa-list-check"></i>
              <span className="text-[13px]">Tasks</span>
              
            </div>
          </div>
          <div className="right flex justify-center items-center gap-[14px]">
            <div className="search cursor-pointer xl:hidden"
              onClick={() => setShowSearchBox(prev => !prev)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="btn px-[10px] py-[5px]">
              Login
            </button>
          </div>
        </div>
        <div className={` ${showSearchBox ? 'flex':'hidden'} text-black mobile-search-box my-[5px] gap-[5px] mx-[.8rem] xl:hidden pl-[4px]`}>
          <div className="rounded-[5px] overflow-hidden bg-white xl:hidden flex flex-1 justify-between items-center px-[1rem]">
            <input type="text" value={searchInput} autoComplete='false' name='searchBox' className=" py-[.4rem] w-[80%] text-[15px] md:text-[16px] outline-none border-none" placeholder="search for friends" onChange={(e) => setSearchInput(e.target.value)} /> 
            <div className="buttons flex-center text-black cursor-pointer">
              <i className="fa-solid fa-magnifying-glass text-black text-[20px]"></i>
            </div> 
          </div>
        </div>

      </div>

      <div className={` ${showMobileMenu ? 'flex':'hidden'} flex mobile-menu min-w-[100vw] min-h-screen fixed top-0 z-50 bg-[#1a17177a] justify-start items-center`} onClick={(e) => {
        if(!mobMenu.current?.contains(e.target as Node)){
          setShowMobileMenu(false)
        }
      }} >

      <div className={`${showMobileMenu ? 'translate-x-[0px]':'-translate-x-full'} mob-menu slidin left-0 absolute z-[777] top-0 glass-bg flex flex-col min-h-[100vh] min-w-[16rem] text-white overflow-auto`} ref={mobMenu} >

        <div className="close-menu flex-center max-w-[9rem] gap-[4px] px-[2px] py-[4px] mx-[14px] my-[10px] md:my-[15px] lg:my-[20px] cursor-pointer glass-bg-dark bg-secondary-light rounded-[20px]" onClick={() => setShowMobileMenu(false)}>
          <i className="fa-solid fa-arrow-left text-[16px]"></i>
          <span className='text-[14px] font-primary flex-center'>Close menu</span>
        </div>

          <div className="more md:hidden block my-[5px] glass-bg-dark py-[10px] ">
            <div className="more flex justify-start items-center gap-[20px] mx-[14px]">
              <div className="random flex flex-col text-white justify-center items-center cursor-pointer text-unique-hover ">
                <i className="fa-solid fa-shuffle  text-[18px]"></i>
                <p className='text-[12px] '>Random</p>
              </div>
              <div className="language-selector flex flex-col justify-center items-center ">
                <p className='text-white text-[12px]'>Language</p>
              </div>
            </div>
          </div>

          <div className="navigation">
            <nav>
              <ul className='nav-links flex flex-col '>
                <li className='nav-link text-unique-hover' onClick={() => {navigate('/'); setShowMobileMenu(false)}}>Latest Updates</li>
                <li className='nav-link text-unique-hover' onClick={() => {navigate('/trending'); setShowMobileMenu(false)}}>Dashboard</li>
                <li className='nav-link text-unique-hover' onClick={() => {navigate('/tv'); setShowMobileMenu(false)}}>Friends</li>
                <li className='nav-link text-unique-hover' onClick={() => {navigate('/movies'); setShowMobileMenu(false)}}>Club</li>
                <li className='nav-link text-unique-hover' onClick={() => {navigate('/ovas'); setShowMobileMenu(false)}}>House</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className={`task-manager w-screen h-screen fixed bg-[#1a17177a] justify-center items-center ${showTaskManager ? "flex": "hidden"}`}>
        <div className="task-container bg-secondary w-full h-[30rem] max-w-[30rem] rounded-[10px] relative">
          <div className="close-task bg-unique cursor-pointer w-[30px] flex-center aspect-square text-black rounded-full absolute right-[-8px] top-[-8px]" onClick={() => setShowTaskManager(false)}>
            <i className="fa-solid fa-xmark text-[20px]"></i>
          </div>

          <TaskManager />

        </div>
      </div>

    </div>
  )
}

export default Header
