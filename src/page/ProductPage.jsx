import { useEffect, useState } from "react"
import { CardMenu } from "../components/CardMenu"
import { Icon } from "../components/Icon"
import { Button } from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useNotification } from "../context/NotificationContext"
import { useSelector } from "react-redux"

export function ProductPage() {
    const arr = [1, 2]
    const [showFilter, setShowFilter] = useState(false)
    const [priceRange, setPriceRange] = useState([0, 100000])
    const userLogin = useSelector((state) => state.authReducers.userLogin)
    const { showNotification } = useNotification()
    const navigate = useNavigate()



    function toggleFilter() {
        setShowFilter(!showFilter)
    }

    function handleRangePrice(e) {
        const value = Number(e.target.value)
        setPriceRange([10000, value])
    }

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
    return (
        <>
            <div className="hidden lg:flex relative justify-start items-center pt-20">
                <img src="/productPage.png" alt="" className="w-full" />
                <p className="absolute text-white text-4xl font-semibold text-start z-10 px-40">
                    We Provide Good Coffee and Healthy Meals
                </p>
            </div>

            <div className="pt-22 lg:pt-0 p-5">
                <div className="flex justify-between gap-2 border-b-2 border-[#E8E8E8] pb-3 lg:hidden">
                    <div className="relative flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="absolute m-2">
                            <path fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" stroke-width="1" />
                        </svg>
                        <input type="text" className="border p-3 rounded-lg border-gray-300 pl-8 w-full text-sm" placeholder="Find Product" />
                    </div>
                    <div className="p-3 flex items-center bg-[#FF8906] rounded-lg">
                        <button onClick={toggleFilter}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path fill="#000" d="M22 18.605a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75m0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75m0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75" stroke-width="1" stroke="#000" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 z-5
                 ${showFilter ? "opacity-20 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setShowFilter(false)}
                ></div>
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#0B0909] shadow-sm z-10 transform transition-transform duration-300
                ${showFilter ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="p-5 flex flex-col gap-4 text-white">
                        <div className=" flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-white">Filter</h2>
                            <button onClick={() => setShowFilter(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        d="M6 6l12 12M6 18L18 6"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Search</label>
                            <input type="search" className="py-3 bg-white text-black text-sm p-3 rounded-md" placeholder="Search Your Product" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <label htmlFor="" className="font-bold">Category</label>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Favorite Product</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Coffee</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Non Coffee</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Foods</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Add-On</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label htmlFor="" className="font-bold">Sort By</label>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Buy 1 get 1</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Flash sale</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Birthday Package</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-light">Cheap</label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-5">
                            <label className="font-bold">Price Range</label>
                            <div className="flex justify-between text-sm">
                                <span>Rp {priceRange[0].toLocaleString()}</span>
                                <span>Rp {priceRange[1].toLocaleString()}</span>
                            </div>

                            <input
                                type="range"
                                min="10000"
                                max="100000"
                                step="1000"
                                value={priceRange[1]}
                                onChange={handleRangePrice}
                                className="w-full accent-yellow-400 cursor-pointer"
                            />
                        </div>

                        <Button style={" bg-[#FF8906] flex justify-center "}>
                            Apply Filter
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-4 ">
                    <h1 className="text-2xl font-semibold lg:text-4xl lg:px-10 xl:px-40">Today <span className="text-[#8E6447]">Promo</span></h1>
                    <div className="flex items-center overflow-x-auto gap-4">
                        {arr.map((index) => {
                            return (
                                <>
                                    <div key={index} className="flex bg-[#88B788] rounded-xl p-2 gap-2 items-center min-w-[17.5rem] border border-gray-200">
                                        <img src="/promo.png" alt="" className="" />
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
                    <div className="flex items-center gap-2 lg:px-10 xl:px-40">
                        <div className="py-1 px-3 rounded-full bg-[#FF8906]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                        <div className="p-1 rounded-full bg-[#DDE0E4]"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 my-10 lg:px-10 xl:px-40">
                    <h2 className="text-2xl font-semibold">Our <span className="text-[#8E6447]">Product</span></h2>
                    <div className="lg:grid grid-cols-12 gap-5">
                        <div className="p-5 hidden lg:flex flex-col col-span-3 gap-4 text-white bg-[#0B0909] rounded-xl h-fit ">
                            <div className=" flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-white">Filter</h2>
                                <button onClick={() => setShowFilter(false)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            d="M6 6l12 12M6 18L18 6"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">Search</label>
                                <input type="search" className="py-3 bg-white text-black text-sm p-3 rounded-md" placeholder="Search Your Product" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <label htmlFor="" className="font-bold">Category</label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Favorite Product</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Coffee</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Non Coffee</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Foods</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Add-On</label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <label htmlFor="" className="font-bold">Sort By</label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Buy 1 get 1</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Flash sale</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Birthday Package</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label htmlFor="" className="text-sm font-light">Cheap</label>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-5">
                                <label className="font-bold">Price Range</label>
                                <div className="flex justify-between text-sm">
                                    <span>Rp {priceRange[0].toLocaleString()}</span>
                                    <span>Rp {priceRange[1].toLocaleString()}</span>
                                </div>

                                <input
                                    type="range"
                                    min="10000"
                                    max="100000"
                                    step="1000"
                                    value={priceRange[1]}
                                    onChange={handleRangePrice}
                                    className="w-full accent-yellow-400 cursor-pointer"
                                />
                            </div>

                            <Button style={" bg-[#FF8906] flex justify-center "}>
                                Apply Filter
                            </Button>
                        </div>
                        <div className="col-span-9">
                            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5">
                                {products.map((item) => (
                                    <Link key={item.id} onClick={(e) => {
                                        e.preventDefault();
                                        if (!userLogin) {
                                            showNotification("Silakan login terlebih dahulu untuk melihat detail produk!", "warning");
                                            return;
                                        }
                                        navigate(`/detail-product/${item.id}`)
                                    }}>
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

                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 items-center   justify-center my-10 ">
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#FF8906] rounded-full"}>
                        <h1>1</h1>
                    </Icon>
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>2</h1>
                    </Icon>
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>3</h1>
                    </Icon>
                    <Icon style={"w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full"}>
                        <h1>4</h1>
                    </Icon>
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