import { useSelector } from "react-redux";
import { useCheckout } from "../context/CheckoutContext";
import { useParams } from "react-router-dom";
export function DetailOrder() {
    const { history } = useCheckout();
    const { id } = useParams();
    const order = history.find((item) => item.id.toString() === id);
    const userLogin = useSelector((state) => state.authReducers.userLogin)
    console.log(order)

    return (
        <>
            <div className="pt-30 p-5 gap-5 flex flex-col lg:px-10 xl:px-40">
                <h1 className="text-2xl">Order <span className="font-semibold">#{order.id}</span> </h1>
                <p className="text-sm text-[#4F5665]">{order.date}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-lg text-[#0B132A] font-semibold">Order Information</h2>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1" />
                                </svg>
                                <p>Full Name</p>
                            </div>
                            <p className="text-sm font-semibold">{userLogin.fullname}</p>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="#000" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
                                    </g>
                                </svg>
                                <p>Address</p>
                            </div>
                            <p className="text-sm font-semibold">{order.delivery.address}</p>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                                <p>Phone</p>
                            </div>
                            <p className="text-sm font-semibold">082116304338</p>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1m1-10H4V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z" />
                                </svg>
                                <p>Payment Method</p>
                            </div>
                            <p className="text-sm font-semibold">{order.payment}</p>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M9 7H5.145a8.5 8.5 0 0 1 8.274-3.387a.5.5 0 0 0 .162-.986A10 10 0 0 0 12 2.5a9.52 9.52 0 0 0-7.5 3.677V2.5a.5.5 0 0 0-1 0v5A.5.5 0 0 0 4 8h5a.5.5 0 0 0 0-1m-1.5 7.5a.5.5 0 0 0-.5.5v3.855a8.5 8.5 0 0 1-3.387-8.274a.5.5 0 0 0-.986-.162a9.52 9.52 0 0 0 3.55 9.081H2.5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 8 20v-5a.5.5 0 0 0-.5-.5M20 16h-5a.5.5 0 0 0 0 1h3.855a8.5 8.5 0 0 1-8.274 3.387a.5.5 0 0 0-.162.986A10 10 0 0 0 12 21.5a9.52 9.52 0 0 0 7.5-3.677V21.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m1.5-12.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V5.14a8.3 8.3 0 0 1 2.358 2.612A8.44 8.44 0 0 1 20.5 12q0 .714-.113 1.419a.499.499 0 1 0 .986.162A10 10 0 0 0 21.5 12a9.44 9.44 0 0 0-1.275-4.747A9.3 9.3 0 0 0 17.828 4.5H21.5a.5.5 0 0 0 0-1" />
                                </svg>
                                <p>Status</p>
                            </div>
                            <div className="px-2 bg-green-100 text-green-500 rounded-full">
                                <p className="text-sm font-semibold">Done</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pb-2">
                            <p className="text-sm">Total Transaksi</p>
                            <p className="text-sm font-semibold text-[#FF8906]">Rp {order.total}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col  w-full">
                        <p className="text-lg">Your Order</p>
                        {order.items.map((items, index) => (
                            <div key={index} className="flex items-center gap-5 bg-gray-100 p-3 rounded-lg flex-col md:flex-row">
                                <img src={items.image} alt={items.name} className="md:w-1/4 w-1/2" />
                                <div className="flex flex-col w-full lg:gap-5 gap-2">
                                    <div className="flex justify-between items-center w-full">
                                        {order.isFlashSale && (
                                            <div className=" bg-red-500  text-white rounded-full flex items-center px-2 py-1 ">
                                                <p className="text-xs font-bold">FLASH SALE!</p>
                                            </div>
                                        )}
                                    </div>
                                    <p className="font-bold">{items.name}</p>
                                    <div className="flex items-center gap-2 text-xs">
                                        <p>{items.quantity}</p>
                                        <p>|</p>
                                        <p>{items.size}</p>
                                        <p>|</p>
                                        <p>{items.temperature}</p>
                                        <p>|</p>
                                        <p>{order.delivery.type}</p>
                                    </div>
                                    {items.diskonPrice ? (
                                        <>
                                            <div className="flex items-center gap-2 ">
                                                <p className="text-red-500 line-through text-sm">
                                                    Rp {items.price.toLocaleString("id-ID")}
                                                </p>
                                                <p className="text-[#FF8906] font-semibold">
                                                    Rp {(items.diskonPrice).toLocaleString("id-ID")}
                                                </p>

                                            </div>
                                        </>
                                    ) : (
                                        <p className="text-[#FF8906] font-semibold">
                                            Rp {items.price.toLocaleString("id-ID")}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}