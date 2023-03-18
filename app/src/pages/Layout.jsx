import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
      <Navbar />
    </div>

      <Outlet />
    </div>
  )
};

export default Layout;