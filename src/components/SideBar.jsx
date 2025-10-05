import { Button } from "./Button"
export function SideBar() {
    return (
        <>
            <div className="px-5 py-3 flex flex-col  justify-between h-screen">
                <div className="flex flex-col gap-5">
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
                    <ul className="flex flex-col gap-3">
                        <li className="border-b border-gray-300 hover:border-[#FF8906]">Home</li>
                        <li className="border-b border-gray-300 hover:border-[#FF8906]">Product</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <Button style={"bg-white border-black border-1 py-2"}>
                        Sign In
                    </Button>
                    <Button style={"py-2"}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </>
    )
}