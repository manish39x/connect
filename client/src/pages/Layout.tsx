import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div className="bg-primary w-screen h-screen overflow-x-hidden text-white">
        <Header />
      <div className="dashboard-container flex-center">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
