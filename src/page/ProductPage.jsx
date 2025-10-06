import { CardMenu } from "../components/CardMenu"
import { Icon } from "../components/Icon"
export function ProductPage() {
    const arr = [1, 2]
    return (
        <>
            <div className="pt-22 p-5">
                <div className="flex justify-between gap-2 border-b-2 border-[#E8E8E8] pb-3">
                    <div className="relative flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="absolute m-2">
                            <path fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" stroke-width="1" />
                        </svg>
                        <input type="text" className="border p-3 rounded-lg border-gray-300 pl-8 w-full text-sm" placeholder="Find Product" />
                    </div>
                    <div className="p-3 flex items-center bg-[#FF8906] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="#000" d="M22 18.605a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75m0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75m0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75" stroke-width="1" stroke="#000" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                    <h1 className="text-2xl font-semibold">Today <span className="text-[#8E6447]">Promo</span></h1>
                    <div className="flex items-center overflow-x-auto gap-4">
                        {arr.map((index) => {
                            return (
                                <>
                                    <div key={index} className="flex bg-[#88B788] rounded-xl p-2 gap-2 items-center min-w-[17.5rem] border border-gray-200">
                                        <img src="/public/images/promo.png" alt="" className="" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-bold max-w-[10rem]">HAPPY MOTHER’S DAY!</p>
                                            <p className="text-sm max-w-[10rem]">Get one of our favorite menu for free!</p>
                                            <p className="text-sm text-white max-w-[10rem]">Klaim Kupon</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="py-1 px-3 rounded-full bg-[#FF8906]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 my-10">
                    <h2 className="text-2xl font-semibold">Our <span className="text-[#8E6447]">Product</span></h2>
                    <div className="grid grid-cols-2 gap-5">
                        <CardMenu>
                            <div className="flex gap-1 items-center text-[#FF8906]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-black">5.0</span>
                            </div>

                        </CardMenu>
                        <CardMenu>
                            <div className="flex gap-1 items-center text-[#FF8906]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-black">5.0</span>
                            </div>

                        </CardMenu >
                    </div>
                </div>

                <div className="flex gap-5 items-center   justify-center my-10 ">
                    {/* 1 */}
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#FF8906] rounded-full"}>
                        <h1>1</h1>
                    </Icon>
                    {/* 2 */}
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>2</h1>
                    </Icon>
                    {/* 3 */}
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>3</h1>
                    </Icon>
                    {/* 4 */}
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>4</h1>
                    </Icon>
                    {/* panah */}
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#FF8906] rounded-full"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
                        </svg>
                    </Icon>
                </div>

            </div>
        </>
    )
}