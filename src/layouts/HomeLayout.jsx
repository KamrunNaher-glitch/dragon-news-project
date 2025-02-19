import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom"; // Import Outlet

const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
           </header>
           <nav className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
           </nav>
           <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
               <aside className="left col-span-3">
                   <LeftNavbar></LeftNavbar>
               </aside>

               <section className="col-span-6">
                   {/* Main content dynamically rendered here */}
                   <Outlet /> {/* Add Outlet to display child routes */}
               </section>

               <aside className="right col-span-3">
                   <RightNav></RightNav>
               </aside>
           </main>
        </div>
    );
};

export default HomeLayout;

