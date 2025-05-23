import { useState } from "react"

const tempData = [
  {
    title: "Code for 45min",
    time: "08:00 PM"
  },
  {
    title: "Hit Gym before 07:00 PM",
    time: "07:00 PM"
  },
  {
    title: "Practice Math",
    time: "10:00 PM"
  },
  {
    title: "GA Assignment",
    time: "05:00 PM"
  },
  {
    title: "Code for 45min",
    time: "08:00 PM"
  },
  {
    title: "Hit Gym before 07:00 PM",
    time: "07:00 PM"
  },
  {
    title: "Practice Math",
    time: "10:00 PM"
  },
  {
    title: "GA Assignment",
    time: "05:00 PM"
  }
]

const TaskManager = () => {
  const [searchInput, setSearchInput] = useState("")

  return (
    <div className=" w-full h-full flex flex-col  gap-[10px] items-center px-[15px] py-[12px] max-h-[35rem]">
      <h3 className="text-[28px] font-extrabold font-primary">
        <span className="text-unique font-extrabold">T</span>ASKS
      </h3>
      <div className="add-task w-full flex items-center gap-[10px]">
        <div className="rounded-[5px] w-full overflow-hidden bg-white flex flex-1 justify-between items-center px-[1rem]">
          <input type="text" value={searchInput} autoComplete='false' name='searchBox' className=" text-black py-[.4rem] w-[80%] text-[13px] md:text-[14px] outline-none border-none" placeholder="Create a Task" onChange={(e) => setSearchInput(e.target.value)} /> 
          
        </div>
        <div className="add-btn bg-unique text-black h-[34px] aspect-square flex-center rounded-[5px] cursor-pointer gap-[4px] text-[12px] font-bold px-[6px] ">
          <i className="fa-solid fa-plus text-[16px]"></i>
          <span>Create</span>
        </div>
        <div className="filter bg-[#5a5a5c] text-white h-[34px] aspect-square flex-center rounded-[5px] cursor-pointer">
          <i className="fa-solid fa-filter text-[18px]"></i>
        </div>
      </div>

      <div className="task-list flex-1 flex flex-col overflow-auto gap-[8px] w-full mt-[1rem]">
        <>
          {
            tempData.map(task => (
              <div className="task text-white px-[15px] py-[10px] w-full bg-[#42424b] rounded-[5px] flex justify-between items-center gap-[10px]">
                <div className="icon bg-unique text-black text-[20px] w-[38px] aspect-square rounded-full flex-center">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="task-main flex flex-col flex-1">
                  <div className="title font-bold text-[14px]">
                    {task.title}
                  </div>
                  <span className="text-[12px] text-[gray] ">{task.time}</span>
                </div>

                <div className="details flex items-center justify-center gap-[10px]">
                    <span className=" hover:bg-[#50515e] w-[30px] aspect-square flex-center rounded-[5px] cursor-pointer">  
                      <i className="fa-solid fa-check text-[22px] "></i>
                    </span>
                    <span className=" hover:bg-[#50515e] w-[30px] aspect-square flex-center rounded-[5px] cursor-pointer">
                      <i className="fa-solid fa-trash text-[18px] "></i>
                    </span>
                </div>
              </div>
            ))
          }
        </>
      </div>
    </div>
  )
}

export default TaskManager
