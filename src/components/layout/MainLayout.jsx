import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";
import { SideBar } from "../SideBar";
import { useState } from "react";
import { Footer } from "../Footer";
export function MainLayout() {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation(); 

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };

    const isHome = location.pathname === "/home";

    return (
        <>
            <div className="relative min-h-screen">
                <div
                    className={`absolute top-0 w-full p-5 z-10 transition-colors duration-300 ${isHome ? "bg-black/20" : "bg-[#0B0909]"
                        }`}
                >
                    <Navbar onHamburgerClick={toggleSideBar} />
                </div>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-30
                    ${showSideBar ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <SideBar />
                </div>

                <Outlet />

                {showSideBar && (
                    <div
                        onClick={toggleSideBar}
                        className="fixed inset-0 bg-black/20 z-20"
                    ></div>
                )}

                <Footer />
            </div>
        </>
    );
}
