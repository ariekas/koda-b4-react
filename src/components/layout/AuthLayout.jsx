import { Outlet, useMatches } from "react-router-dom"
import { TitleAuth } from "../TitleAuth"
export function AuthLayout(){
    const matches = useMatches()
    const current = matches[matches.length -1]
    const { title, desc} = current.handle
    return(
        <>
        <div className="container mx-auto p-5">
            <div className="flex flex-col gap-5 h-screen justify-center ">
            {title && desc && <TitleAuth title={title} desc={desc}/>}
            <Outlet/>
            </div>
        
        </div>
        </>
    )
}