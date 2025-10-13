import { useState } from "react";
import { Input } from "../components/Input"
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../redux/reducers/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Loginschema = yup.object().shape({
    email: yup
        .string()
        .required("Email wajib diisi")
        .email("Format email tidak valid"),
    password: yup
        .string()
        .required("Password wajib diisi")
        .min(6, "Password minimal 6 karakter"),
});
export function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const dataUser = useSelector(state => state.authReducers.dataUser)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(Loginschema),
    });

    function onsubmit(data) {
        const findUser = dataUser.find((user) => user.email === data.email && user.password === data.password)

        if (findUser) {
            dispatch(authLogin(findUser))
            window.alert("User login")
            navigate("/home")

        } else {
            window.alert("User tidak di temukan")
        }

    }

    return (
        <>
            <div className="flex flex-col gap-5">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onsubmit)}>
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter Your Email"
                        leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill="#000" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" />
                            </svg>
                        }
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                    <Input
                        label="Password"
                        name="password"
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" stroke="#000" stroke-width="1">
                                    <path stroke-linecap="round" d="M18 10.997c-.392-.8-1.452-1.975-3.63-1.925c0 0-1.727-.075-3.68-.075c-1.952 0-2.866.045-4.43.075c-1.001-.025-2.904.2-3.78 2.275c-.576 1.75-.6 5.427-.25 7.277c.075.95.576 2.276 2.128 2.976c.95.5 2.478.3 3.63.4M5.984 8.196c-.05-2.375-.15-4.25 2.603-5.801c.926-.375 2.303-.7 4.005.1c1.777 1.075 1.999 2.213 2.153 2.5c.425 1.126.2 2.726.25 3.376" />
                                    <path d="M15.5 19.735a2.23 2.23 0 0 1-2.245 2.23c-1.236 0-2.255-.986-2.255-2.23a2.25 2.25 0 0 1 2.255-2.244c1.236 0 2.245 1 2.245 2.244Z" />
                                    <path stroke-linecap="round" d="m15.225 17.79l1.99-1.942m4.785 0l-1.627-1.54c-.773-.739-1.423-.093-1.747.183l-1.41 1.357m0 0l1.61 1.546" />
                                </g>
                            </svg>
                        }
                        rightIcon={
                            <svg
                                onClick={() => setShowPassword(!showPassword)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-5 cursor-pointer"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path fill="#000" d="M3.05 9.31a1 1 0 1 1 1.914-.577c2.086 6.986 11.982 6.987 14.07.004a1 1 0 1 1 1.918.57a9.5 9.5 0 0 1-1.813 3.417L20.414 14A1 1 0 0 1 19 15.414l-1.311-1.311a9.1 9.1 0 0 1-2.32 1.269l.357 1.335a1 1 0 1 1-1.931.518l-.364-1.357c-.947.14-1.915.14-2.862 0l-.364 1.357a1 1 0 1 1-1.931-.518l.357-1.335a9.1 9.1 0 0 1-2.32-1.27l-1.31 1.312A1 1 0 0 1 3.585 14l1.275-1.275c-.784-.936-1.41-2.074-1.812-3.414Z" />
                                        </g>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#000" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9" />
                                    </svg>
                                )}
                            </svg>
                        }
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                    <a href="/forget-password" className="text-[#FF8906] text-sm flex justify-end">Forget Password?</a>
                    <Button type={"submit"}>Login</Button>
                </form>
                <p className="text-sm text-[#4F5665] flex items-center justify-center">Not Have Account? <a href="/register" className="text-[#FF8906] pl-1">Register</a></p>
                <div className="flex items-center gap-5">
                    <div className="bg-[#DEDEDE] w-full h-0.5"></div>
                    <p className="text-[#AAAAAA] text-xs">Or</p>
                    <div className="bg-[#DEDEDE] w-full h-0.5"></div>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <Icon style={"p-5 bg-white  shadow-lg"}>
                        <div className="flex items-center gap-2">
                            <img src="/public/icons/google.png" alt="" />
                            <p className="hidden md:flex">Google</p>
                        </div>
                    </Icon>
                    <Icon style={"p-5 bg-white  shadow-lg"}>
                        <div className="flex items-center gap-2">
                            <img src="/public/icons/facebook.png" alt="" />
                            <p className="hidden md:flex">Facebook</p>
                        </div>
                    </Icon>
                </div>
            </div>
        </>

    )
}
