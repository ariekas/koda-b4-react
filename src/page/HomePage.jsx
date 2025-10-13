import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { CardMenu } from "../components/CardMenu"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export function HomePage() {
    const [showChat, setShowChat] = useState(false)
    const [products, setProducts] = useState([]);
    async function getDataProduct() {
        try {
            const url = "/data/dataProduct.json"
            const data = await fetch(url)
            const response = await data.json()
            setProducts(response);
        } catch (error) {
            console.log("error :" + error)
        }
    }

    useEffect(() => {
        getDataProduct()
    }, [])

    const handleShowChat = () => {
        setShowChat(!showChat)
    }
    return (
        <>
            <div className="flex flex-col relative mb-15">
                <div className="lg:grid lg:grid-cols-2">
                    <img src="/public/images/home.png" alt="" className="w-full lg:order-2" />
                    <div className="p-5 bg-gradient-to-t from-[#0B0909] from-55% to-[#777C82] text-white px-5 py-10 gap-6 md:gap-8 flex flex-col lg:px-10 xl:px-40 lg:order-1 lg:justify-center">
                        <h1 className="text-2xl xl:text-5xl font-semibold lg:text-3xl">
                            Start Your Day with Coffee and Good Meals
                        </h1>
                        <p className="text-sm xl:w-lg">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                        <div className="flex justify-between gap-20 relative">
                            <Button style={"md:px-10 px-3"}>Get Started</Button>
                            <button onClick={handleShowChat} className="lg:fixed bottom-10 right-10 z-60">
                                <Icon style={"p-2 bg-[#FF8906] rounded-full"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="#000">
                                            <path d="m4 19l-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936l.474-.881l-.317-.17l-.352.07l.195.98zm-3.082-3.147l.93.37l.163-.414l-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.9 8.9 0 0 0 12.471 20zm-8.276 1.98l4.706-.936l-.39-1.961l-4.706.936l.39 1.962zm2.326-5.506A5.6 5.6 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738l1.624-4.083l-1.858-.739z" />
                                            <circle cx="9" cy="12" r="1" />
                                            <circle cx="12.5" cy="12" r="1" />
                                            <circle cx="16" cy="12" r="1" />
                                        </g>
                                    </svg>
                                </Icon>
                            </button>
                            {showChat && (
                                <div className="absolute bottom-full mb-5 md:right-0 bg-white border-t-8 border-[#FF8906] rounded-xl p-4 md:w-xs h-auto flex flex-col justify-between shadow-lg z-50">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
                                            <img src="/public/images/chat1.png" alt="" />
                                            <div className="flex flex-col gap-1">
                                                <h1 className="text-sm text-[#0B132A] font-semibold">Maria Angela</h1>
                                                <p className="text-xs text-[#FF8906]">Admin Support</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-black text-sm gap-5 overflow-y-auto h-[18rem]">
                                            <div className="flex items-center gap-2">
                                                <img src="/public/images/chat1.png" alt="" className="w-[12%]" />
                                                <p className="text-xs bg-gray-100 p-2 rounded-lg text-[#4F5665]">
                                                    Halo, Ada yang bisa kami bantu?
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end gap-2">
                                                <p className="text-xs bg-gray-100 p-2 rounded-lg text-[#4F5665]">
                                                    Halo, Ada yang bisa kami bantu?
                                                </p>
                                                <img src="/public/images/chat1.png" alt="" className="w-[12%]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-lg text-black p-2 text-xs w-full"
                                            placeholder="Entering Message"
                                        />
                                        <div className="p-2 bg-[#FF8906] rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                                <path
                                                    fill="#000"
                                                    d="M474.444 19.857a20.34 20.34 0 0 0-21.592-2.781L33.737 213.8v38.066l176.037 70.414L322.69 496h38.074l120.3-455.4a20.34 20.34 0 0 0-6.62-20.743M337.257 459.693L240.2 310.37l149.353-163.582l-23.631-21.576L215.4 290.069L70.257 232.012L443.7 56.72Z"
                                                    strokeWidth="13"
                                                    stroke="#979797"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between lg:justify-between md:justify-center  md:gap-15">
                            <div className="flex flex-col">
                                <h1 className="text-2xl text-[#FF8906] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                            <div className="w-0.5 opacity-50 bg-white">
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl text-[#FF8906] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                            <div className="w-0.5 opacity-50 bg-white">
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl text-[#FF8906] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-0 lg:grid lg:grid-cols-2">
                    <img src="/public/images/img1.png" alt="" className="w-full lg:order-2" />
                    <div className="flex  flex-col gap-4 p-5 lg:order-1 lg:px-10 xl:px-40 lg:justify-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-2 bg-[#FF8906] h-14">
                            </div>
                            <h1 className="text-2xl lg:text-4xl xl:text-6xl">We Provide <span className="text-[#8E6447]">Good Coffee</span> and <span className="text-[#8E6447]">Healthy Meals</span></h1>
                        </div>
                        <p className="text-sm text-[#4F5665] xl:text-lg">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">High quality beans</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Healthy meals, you can request the ingredients</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Free member card with a minimum purchase of IDR 200.000.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Chat with our staff to get better experience for ordering</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-5 gap-4 lg:gap-10 lg:mt-10">
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-xl font-semibold lg:text-4xl">Here Is People <span className="text-[#8E6447]">Favorite</span></h1>
                        <div className="bg-[#FF8906] w-15 h-1"></div>
                    </div>
                    <p className="text-sm font-normal lg:text-lg lg:text-center">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:px-10 xl:px-40">
                        {products.slice(0, 4).map(
                            (item) => (
                                <Link to={`/detail-product/${item.id}`} key={item.id}>
                                <CardMenu
                                    key={item.id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    diskonPrice={item.diskonPrice}
                                    image={item.image}
                                    isFlashSale={item.isFlashSale}
                                >
                                    <div className="flex gap-1 items-center text-[#FF8906]">
                                        {[...Array(Math.floor(item.rating))].map((_, i) => (
                                            <svg
                                                key={`full-${i}`}
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#FF8906"
                                                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                                                />
                                            </svg>
                                        ))}

                                        {[...Array(5 - Math.floor(item.rating))].map((_, i) => (
                                            <svg
                                                key={`empty-${i}`}
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#4d4d4d"
                                                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                                                />
                                            </svg>
                                        ))}

                                        <span className="ml-2 text-black">{item.rating}</span>
                                    </div>
                                </CardMenu>
                                </Link>
                            )
                        )}
                    </div>
                </div>

                <div className="flex flex-col p-5 gap-4 lg:px-10 xl:px-40">
                    <div className="flex flex-col gap-3 text-center items-center">
                        <h1 className="text-xl font-semibold lg:text-4xl"><span className="text-[#8E6447]">Visit Our People </span>in The Spot on The Map Below</h1>
                        <div className="bg-[#FF8906] w-15 h-1"></div>
                    </div>
                    <p className="text-sm text-[#4F5665] lg:text-lg lg:text-center">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <img src="/public/images/map.png" alt="" />
                </div>

                <div className="p-5 bg-gradient-to-t from-[#0B0909] from-55% to-[#777C82] text-white px-5 py-10 gap-6 flex flex-col lg:px-10 xl:px-40 lg:grid lg:grid-cols-2 mt-5">
                    <img src="/public/images/review.png" alt="" className="w-full" />
                    <div className="flex flex-col gap-5">
                        <h1>
                            TESTIMONIAL
                        </h1>
                        <div className="flex gap-4 items-center">
                            <div className="w-2 bg-[#FF8906] h-14">
                            </div>
                            <h1 className="text-2xl">Viezh Robert</h1>
                        </div>

                        <p>Manager Coffe Shop</p>
                        <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                        <div className="flex gap-1 items-center text-[#FF8906]">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                </svg>
                            ))}
                            <span className="ml-2 text-black">5.0</span>
                        </div>

                        <div className="flex gap-2">
                            <Icon style={"p-2.5 bg-white rounded-full"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z" />
                                </svg>
                            </Icon>
                            <Icon style={"p-2.5 bg-[#FF8906] rounded-full"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
                                </svg>
                            </Icon>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="py-1 px-3 rounded-full bg-[#FF8906]"></div>
                            <div className="p-1 rounded-full bg-white"></div>
                            <div className="p-1 rounded-full bg-white"></div>
                            <div className="p-1 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}