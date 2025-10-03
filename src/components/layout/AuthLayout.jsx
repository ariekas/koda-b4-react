import { Outlet, useMatches } from "react-router-dom"
import { TitleAuth } from "../TitleAuth"
export function AuthLayout(){
    const matches = useMatches()
    const current = matches[matches.length -1]
    const { title, desc} = current.handle
    return(
        <>
         {title && desc && <TitleAuth title={title} desc={desc}/>}
        <Outlet/>
        </>
    )
}