import Courses from "../components/Courses"
import Profile from "../components/Profile"


const Dashboard = () => {
  return ( 
      <div className="dashboard p-[10px] rounded-[8px] w-full flex test flex-wrap gap-[10px]">
        <div className="user-details  flex-center">
          <Profile />
        </div>
        <div className="stats flex-center flex-1">
          <Courses />
        </div>
      </div>
  )
}

export default Dashboard
