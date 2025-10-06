import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
export function HistoryPage() {
    return (
        <>
            <div className="pt-30 p-5">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">History Order</p>
                    <div className="px-2 bg-[#E8E8E8] ">
                        <p className="">4</p>
                    </div>
                </div>
                <div className="inline-flex items-center gap-5 bg-gray-100 px-5 mt-5 py-2 rounded-md text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none">
                            <path stroke="#000" stroke-width="1" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" />
                            <path stroke="#000" stroke-linecap="round" stroke-width="1" d="M7 4V2.5M17 4V2.5M2.5 9h19" />
                            <path fill="#000" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        </g>
                    </svg>
                    <span className="text-sm font-medium">January 2023</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024" className="rotate-180">
                        <path fill="#000" d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0" stroke-width="25.5" stroke="#000" />
                    </svg>
                </div>
                <div className="flex gap-2 items-center bg-[#E8E8E899] my-5 p-2">
                    <div className="flex items-center justify-between w-full gap-2">
                        <Button style={"bg-white flex justify-center  text-xs p-3"}>
                            On Progress
                        </Button>
                        <Button style={"bg-white flex justify-center  text-xs p-3"}>
                            Sending Goods
                        </Button>
                        <Button style={"bg-white flex justify-center  text-xs p-3"}>
                            Finish Order
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {[...Array(5)].map((_, i) => (
                        <div className="bg-gray-100 rounded-md p-4 w-full flex flex-col gap-2" key={i}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                                <path d="M14.496 2h-5a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3m-6.5 13h3.429m-3.429-4h8" />
                                                <path d="M15.996 3.5c1.553.047 2.48.22 3.121.862c.88.878.88 2.293.88 5.12V16c0 2.828 0 4.242-.88 5.121c-.878.879-2.293.879-5.12.879h-4c-2.83 0-4.244 0-5.122-.879S3.996 18.828 3.996 16V9.483c0-2.828 0-4.243.879-5.121c.641-.642 1.568-.815 3.121-.862" />
                                            </g>
                                        </svg>
                                        <span>No. Order</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-xs">#12354–09893</p>
                                </div>

                                <div className="text-right flex flex-col gap-2">
                                    <div className="flex items-center gap-1 text-gray-400 text-sm justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#000" d="M10.5 7.25a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-1 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
                                            <path fill="#000" fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v1h7V4a.5.5 0 0 1 1 0v1.003q.367.003.654.026c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v7.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.333.029H8.179c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98C4.5 17.3 4.5 16.862 4.5 16.32V8.68c0-.475 0-.868.02-1.197l.009-.136c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243q.289-.023.655-.026V4a.5.5 0 0 1 .5-.5m-.5 3v-.497a9 9 0 0 0-.573.023c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C5.5 7.736 5.5 8.132 5.5 8.7v.55h13V8.7c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137a9 9 0 0 0-.573-.023V6.5a.5.5 0 0 1-1 0V6h-7v.5a.5.5 0 0 1-1 0m11 3.75h-13v6.05c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C7.236 19 7.632 19 8.2 19h7.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.308.026-.705.026-1.273z" clip-rule="evenodd" />
                                        </svg>
                                        <span>Date</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-xs">23 January 2023</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                <path fill="#000" d="M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H4a2 2 0 0 1-1.995-1.85L2 17V7a2 2 0 0 1 1.85-1.995L4 5zm-2.997 2H6.997L7 7.125A2.875 2.875 0 0 1 4.125 10L4 9.997v4.006L4.125 14A2.875 2.875 0 0 1 7 16.875L6.997 17h10.006L17 16.875a2.875 2.875 0 0 1 2.706-2.87l.232-.004l.062.002V9.997l-.125.003a2.875 2.875 0 0 1-2.87-2.706L17 7.062zm2.872 9a.875.875 0 0 0-.866 1H20v-.991a1 1 0 0 0-.125-.009m-15.75 0a1 1 0 0 0-.125.009V17h.991a.875.875 0 0 0-.866-1M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M4.991 7H4v.991a.875.875 0 0 0 1-.866l-.002-.063zM20 7h-.991a.875.875 0 0 0 .866 1l.063-.002L20 7.99z" />
                                            </g>
                                        </svg>
                                        <span>Total</span>
                                    </div>
                                    <p className="font-bold text-gray-900 text-xs">40.000</p>
                                </div>

                                <div className="text-right flex flex-col gap-2">
                                    <div className="flex items-center gap-1 text-gray-400 text-sm justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#000" d="M6.992 14.502a1 1 0 0 0-1 1v1.782a7.97 7.97 0 0 1-2-5.282a7 7 0 0 1 .052-.88a1 1 0 1 0-1.985-.24a9 9 0 0 0-.067 1.12a9.96 9.96 0 0 0 2.417 6.5H2.992a1 1 0 1 0 0 2h4a.98.98 0 0 0 .794-.422l.037-.043c.007-.01.007-.022.013-.032a1 1 0 0 0 .106-.258a1 1 0 0 0 .032-.156c.003-.03.018-.057.018-.089v-4a1 1 0 0 0-1-1m1.5-8.5H6.709a7.97 7.97 0 0 1 5.283-2a7 7 0 0 1 .88.053a1 1 0 0 0 .24-1.987a9 9 0 0 0-1.12-.066a9.96 9.96 0 0 0-6.5 2.417V3.002a1 1 0 0 0-2 0v4a1 1 0 0 0 .039.195a1 1 0 0 0 .141.346l.012.017a1 1 0 0 0 .244.246c.011.008.017.02.028.028c.014.01.03.013.045.021a1 1 0 0 0 .18.084a1 1 0 0 0 .261.053c.018 0 .032.01.05.01h4a1 1 0 0 0 0-2m11.96 10.804a1 1 0 0 0-.141-.345l-.011-.017a1 1 0 0 0-.245-.246c-.011-.008-.016-.02-.028-.028c-.01-.007-.023-.007-.034-.014a1.2 1.2 0 0 0-.41-.136c-.032-.003-.059-.018-.091-.018h-4a1 1 0 0 0 0 2h1.782a7.97 7.97 0 0 1-5.282 2a7 7 0 0 1-.88-.054a1 1 0 0 0-.24 1.987a9 9 0 0 0 1.12.067a9.96 9.96 0 0 0 6.5-2.417v1.417a1 1 0 0 0 2 0v-4a1 1 0 0 0-.04-.195Zm.54-11.304a1 1 0 0 0 0-2h-4a1 1 0 0 0-.192.039l-.007.001a1 1 0 0 0-.34.14l-.02.013a1 1 0 0 0-.245.244c-.008.01-.02.016-.028.027c-.007.01-.007.023-.014.034a1.2 1.2 0 0 0-.136.413c-.003.03-.018.057-.018.089v4a1 1 0 1 0 2 0V6.719a7.98 7.98 0 0 1 2 5.283a7 7 0 0 1-.053.88a1 1 0 0 0 .872 1.113a1 1 0 0 0 .122.007a1 1 0 0 0 .991-.88a9 9 0 0 0 .068-1.12a9.96 9.96 0 0 0-2.417-6.5Z" />
                                        </svg>
                                        <span>Status</span>
                                    </div>
                                    <span className="bg-orange-100 text-[#FF8906] px-3 py-1 text-xs font-semibold rounded-full">
                                        On Progress
                                    </span>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-[#FF8906] text-sm font-semibold underline underline-offset-2"
                            >
                                Views Order Detail
                            </a>
                        </div>
                    ))}
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
                <div className="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-sm">
                    <img src="/public/icons/icon.png" alt="" className="w-1/6" />
                    <p className="text-lg font-bold text-[#4F5665]">Send Us Message</p>
                    <p className="text-sm">if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</p>
                    <Button style={" bg-[#FF8906]  items-center w-full text-sm "}>

                        Apply Menu
                    </Button>
                </div>
            </div>
        </>
    )
}