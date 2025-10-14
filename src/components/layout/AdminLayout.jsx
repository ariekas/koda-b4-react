import { Outlet } from "react-router-dom"

export function AdminLayout() {
    return (
        <>
            <div className=" flex flex-col">
                <Navbar />

                <div className="flex flex-1 relative">
                    <div className=" pl-10 border-r border-gray-300">
                        <SideBarLeft />
                    </div>

                    <main className="flex-1  bg-white p-10">
                        <Outlet />
                    </main>

                    <div className="border-l z-10 absolute right-0 w-auto">
                        {/* <SideBarRight /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export function Navbar() {
    return (
        <>
            <div className="w-full px-10 py-3 flex justify-between border border-gray-300">
                <div>
                    <img src="/public/images/logo.png" alt="" />
                </div>
                <div className="flex gap-5 items-center">
                    <button className="hidden lg:flex bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z" />
                        </svg>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                    </svg>
                    <img src="/public/images/profle.png" alt="" className="w-10 h-10" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transform rotate-180" >
                        <path fill="none" stroke="#3b3a3a" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" stroke-width="1" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export function SideBarLeft() {
    return (
        <>
            <div className="px-2 py-4 w-xs flex flex-col  justify-between h-screen">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#3b3a3a" d="M3.5 3.5h7v7h-7zm1 1v5zm9-1h7v7h-7zm1 1v5zm-11 9h7v7h-7zm1 1v5zm12-1h1v3h3v1h-3v3h-1v-3h-3v-1h3zm-2-9v5h5v-5zm-10 0v5h5v-5zm0 10v5h5v-5z" />
                        </svg>
                        <p>Dashboard</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                            <g fill="none" stroke="#242323" stroke-linejoin="round" stroke-width="2">
                                <path d="M44 14L24 4L4 14v20l20 10l20-10z" />
                                <path stroke-linecap="round" d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19" />
                            </g>
                        </svg>
                        <p>Product</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <g fill="none" stroke="#242323" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                <path d="M6.45 9.23h11.1a1.85 1.85 0 0 1 1.85 1.85v6.472a3.7 3.7 0 0 1-3.7 3.698H8.3a3.7 3.7 0 0 1-3.7-3.698V11.08a1.85 1.85 0 0 1 1.85-1.85" />
                                <path d="M16.625 11.553V7.381a4.62 4.62 0 0 0-2.852-4.278a4.627 4.627 0 0 0-6.398 4.278v4.172" />
                            </g>
                        </svg>
                        <p>Order</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <g fill="none" stroke="#242323" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0" />
                            </g>
                        </svg>
                        <p>User</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9" stroke-width="1" />
                        </svg>
                        <p>Keluar</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export function SideBarRight() {
    return (
        <>
            <div className="px-5 py-3 w-xl border flex flex-col  justify-between h-screen">
                <div className="flex flex-col gap-5">
                    <p>kjlbbjlbjllnlnklnklnklnkl</p>
                    <div className="flex w-full justify-between">
                        <img src="/public/images/logo.png" alt="" />
                        <div className="p-1.5 flex items-center border-2 rounded-full border-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                <path fill="#fb0000" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" stroke-width="1" stroke="#fb0000" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-sm text-[#0B132A] font-semibold">Search Product</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="absolute m-2">
                                <path fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" stroke-width="1" />
                            </svg>
                            <input type="text" className="border p-2 rounded-lg border-gray-300 pl-8 w-full text-sm" placeholder="Find Product" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}