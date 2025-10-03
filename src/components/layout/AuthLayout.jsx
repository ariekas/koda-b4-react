import { Outlet } from "react-router-dom"
import { TitleAuth } from "../TitleAuth"
export function AuthLayout(){
    return(
        <>
        <TitleAuth/>
        <Outlet/>
        </>
    )
}