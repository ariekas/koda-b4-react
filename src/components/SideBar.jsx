import { useDispatch, useSelector } from "react-redux"
import { Button } from "./Button"
import { authLogout } from "../redux/reducers/auth"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
export function SideBar({ handelSideBar }) {
    const userLogin = useSelector((state) => state.authReducers.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")

    function handleLogout() {
        dispatch(authLogout(null))
        navigate("/login")
    }

    function handleSearch(e) {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/product?search=${searchQuery}`)
            handelSideBar()
            setSearchQuery("")
        }
    }

    return (
        <>
            <div className="px-5 py-3 flex flex-col  justify-between h-screen">
                <div className="flex flex-col gap-5">
                    <div className="flex w-full justify-between">
                        <img src="/logo.png" alt="" />
                        <div className="p-1.5 flex items-center border-2 rounded-full border-red-500" onClick={handelSideBar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                <path fill="#fb0000" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" stroke-width="1" stroke="#fb0000" />
                            </svg>
                        </div>
                    </div>
                    <form onSubmit={handleSearch} className="flex flex-col gap-2">
                        <label htmlFor="" className="text-sm text-[#0B132A] font-semibold">Search Product</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="absolute m-2">
                                <path fill="none" stroke="#979797" strokeLinecap="round" strokeLinejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" strokeWidth="1" />
                            </svg>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border p-2 rounded-lg border-gray-300 pl-8 w-full text-sm"
                                placeholder="Find Product"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/"
                            className={` text-lg text-black pb-1 ${location.pathname === "/"
                                ? "border-b-2 border-[#FF8906] "
                                : "border-b-2 border-gray-300"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/product"
                            className={`text-lg text-black pb-1 ${location.pathname === "/product"
                                ? "border-b-2 border-[#FF8906]"
                                : "border-b-2 border-gray-300"
                                }`}
                        >
                            Product
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {userLogin ? (
                        <Button style={"bg-white border-black border-1 py-2"} onClick={handleLogout}>
                            Sign Out
                        </Button>
                    ) : (
                        <>
                            <Button style={"bg-white border-black border-1 py-2"} onClick={() => navigate("/login")}>
                                Sign In
                            </Button>
                            <Button style={"py-2"} onClick={() => navigate("/register")}>
                                Sign Up
                            </Button>
                        </>
                    )}


                </div>
            </div>
        </>
    )
}