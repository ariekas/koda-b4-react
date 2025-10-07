import { useState } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
export function Profile() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="pt-30 p-5 gap-5 flex flex-col">
                <h1 className="text-2xl font-semibold">Profile</h1>
                <div className="flex flex-col items-center gap-4 border border-gray-200 rounded-md p-3">
                    <h2 className="text-[#0B132A] text-lg">Ghaluh Wizard</h2>
                    <p className="text-sm">ghaluhwizz@gmail.com</p>
                    <img src="/public/images/profle.png" alt="profile image" />
                    <Button style={" bg-[#FF8906]  items-center w-full text-sm py-3"}>
                        Upload New Photo
                    </Button>
                    <p className="text-sm text-[#4F5665]">Since 20 January 2022</p>
                </div>
                <form className="flex flex-col items-center gap-3 border border-gray-200 rounded-md p-2">
                    <Input
                        label="Fullname"
                        name="fullname"
                        type="fullname"
                        placeholder="Enter Your fullname"
                        leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#000" d="M12 11.385q-1.237 0-2.119-.882T9 8.385t.881-2.12T12 5.386t2.119.88t.881 2.12t-.881 2.118t-2.119.882m-7 6.192v-.608q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v.608q0 .44-.299.74q-.299.298-.74.298H6.04q-.441 0-.74-.299t-.3-.74m1 .039h12v-.647q0-.332-.215-.625q-.214-.292-.593-.494q-1.234-.598-2.546-.916T12 14.616t-2.646.318t-2.546.916q-.38.202-.593.494Q6 16.637 6 16.97zm6-7.231q.825 0 1.413-.588T14 8.384t-.587-1.412T12 6.384t-1.412.588T10 8.384t.588 1.413t1.412.587m0 7.232" stroke-width="1" stroke="#000" />
                            </svg>
                        }
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill="#000" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" />
                            </svg>
                        }
                    />
                    <Input
                        label="Phone"
                        name="phone"
                        type="phone"
                        placeholder="082116304338"
                        leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#000" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" />
                            </svg>
                        }
                    />
                    <div className="w-full ">
                    <p className="text-end text-sm text-[#FF8906]">Set New Password</p>
                    <Input
                        label="Password"
                        name="password"
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
                    </div>
                    <Input
                            label="Address"
                            name="address"
                            type="address"
                            placeholder="Enter Your address"
                            leftIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
                                    <path fill="#000" d="m25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7zM25 8c-6.1 0-11 4.9-11 11c0 6.4 8.4 17.2 11 20.4c2.6-3.2 11-14 11-20.4c0-6.1-4.9-11-11-11" stroke-width="1.5" stroke="#000" />
                                    <path fill="#000" d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3" stroke-width="1.5" stroke="#000" />
                                </svg>
                            }
                        />
                    <Button style={" bg-[#FF8906]  items-center w-full text-sm py-3"}>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}