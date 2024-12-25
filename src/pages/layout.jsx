import { Outlet } from "react-router-dom";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

function LayoutPages() {
    return ( <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div> );
}

export default LayoutPages;