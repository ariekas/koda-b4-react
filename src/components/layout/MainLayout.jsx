import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import { SideBar } from "../SideBar"
import { useState } from "react"

export function MainLayout() {
    const [showSideBar, setShowSideBar] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }
    return (
        <>
            <div className="relative min-h-screen bg-gray-100">
                {/* Navbar */}
                <div className="absolute top-0 w-full p-5 z-1">
                    <Navbar onHamburgerClick={toggleSideBar} />
                </div>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-3
                    ${showSideBar ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <SideBar />
                </div>

                {/* Konten utama */}
                <Outlet />

                {showSideBar && (
                    <div
                        onClick={toggleSideBar}
                        className="fixed inset-0 bg-black/20 z-1"
                    ></div>
                )}
            </div>

        </>
    )
}