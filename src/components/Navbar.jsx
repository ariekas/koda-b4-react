import { Button } from "./Button"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authLogout } from "../redux/reducers/auth"
export function Navbar({ onHamburgerClick }) {
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(authLogout(null))
        navigate("/login")

    }
    const userLogin = useSelector((state) => state.authReducers.userLogin)
    return (
        <>
            <div className="flex justify-between items-cente lg:px-10 xl:px-40">
                <div className="flex lg:items-center lg:gap-20">
                    <img src="/logo-white.png" alt="logo" className="h-10" />
                    <Link
                        to="/home"
                        className={`hidden lg:flex text-lg text-white pb-1 ${location.pathname === "/home"
                            ? "border-b-2 border-[#FF8906]"
                            : "border-b-2 border-transparent hover:border-[#FF8906]"
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/product"
                        className={`hidden lg:flex text-lg text-white pb-1 ${location.pathname === "/product"
                            ? "border-b-2 border-[#FF8906]"
                            : "border-b-2 border-transparent hover:border-[#FF8906]"
                            }`}
                    >
                        Product
                    </Link>
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                    <button className="hidden lg:flex bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z" />
                        </svg>
                    </button>
                    {/* Icon keranjang */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#fff" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                    </svg>


                    {/* Hamburger button */}
                    <button onClick={onHamburgerClick} className="flex lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                            <path fill="#fff" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
                        </svg>
                    </button>

                    {userLogin ? (
                        <Button style={"hidden lg:flex px-5 py-2"} onClick={handleLogout}>
                            Sign Out
                        </Button>
                    ) : (
                        <>
                            <Button style={"hidden lg:flex px-5 py-2 bg-transparent border border-white text-white"} onClick={()=> {
                                navigate("/login")
                            }}>
                                Sign In
                            </Button>
                            <Button style={"hidden lg:flex px-5 py-2"} onClick={()=>{
                                navigate("/register")
                            }}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}
