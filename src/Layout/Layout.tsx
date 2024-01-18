import { Outlet } from "react-router-dom"
// import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Layout = () => {
    return (
        <div className="bg-[#ebe8e3]">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout