import { TitleAuth } from "../TitleAuth"
import { LoginPage } from "../../page/LoginPage"
export function AuthLayout(){
    return(
        <>
        <TitleAuth/>
        <LoginPage/>
        </>
    )
}