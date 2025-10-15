import { Outlet, useMatches, useLocation } from "react-router-dom"
import { TitleAuth } from "../TitleAuth"

export function AuthLayout() {
    const matches = useMatches()
    const current = matches[matches.length - 1]
    const { title, desc } = current.handle

    const location = useLocation();

    const getImageByPath = () => {
        if (location.pathname.includes("login")) {
            return "/login.png";
        } else if (location.pathname.includes("register")) {
            return "/register.png";
        } else if (location.pathname.includes("forget-password")) {
            return "/forget-password.png";
        } else {
            return "/default.png";
        }
    };

    const imageSrc = getImageByPath();

    return (
        <>
            <div className="w-full h-screen p-5 lg:p-0 flex flex-col md:flex-row gap-5  justify-center md:justify-between ">
                <img
                    src={imageSrc}
                    alt="auth visual"
                    className="hidden lg:flex w-1/3 h-full object-cover"
                />
                <div className="flex flex-col w-full justify-center xl:max-w-5xl lg:max-w-xl  md:mx-auto gap-5">
                    {title && desc && <TitleAuth title={title} desc={desc} />}
                    <Outlet />
                </div>
            </div>

        </>
    )
}