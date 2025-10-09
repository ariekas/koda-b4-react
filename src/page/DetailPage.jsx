import { useState, useEffect } from "react";
import { Button } from "../components/Button"
import { CardMenu } from "../components/CardMenu"
import { Icon } from "../components/Icon"

export function DetailPage() {
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
            <div className="pt-25 p-5">
                <div className="flex flex-col items-center gap-2">
                    <img
                        src="/images/coffe.png"
                        alt="coffe main"
                        className="w-full max-w-md"
                    />
                    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                        <img src="/images/coffe.png" alt="" className="w-full object-contain" />
                        <img src="/images/coffe.png" alt="" className="w-full object-contain" />
                        <img src="/images/coffe.png" alt="" className="w-full object-contain" />
                    </div>

                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <div className="py-2 px-2 bg-red-500  text-white rounded-full w-23 flex justify-center">
                        <p className="text-xs font-bold">FLASH SALE!</p>
                    </div>
                    <h1 className="text-2xl font-semibold">
                        Hazelnut Latte
                    </h1>
                    <div className="flex items-center ga-1">
                        <p className="text-red-500 line-through text-sm">IDR 10.000</p>
                        <p className="text-lg text-[#FF8906] ">IDR 20.000</p>
                    </div>
                    <div className="flex gap-1 items-center text-[#FF8906]">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                            </svg>
                        ))}
                        <span className="ml-2 text-black">5.0</span>
                    </div>
                    <div className="flex gap-5 text-[#4F5665] text-sm">
                        <p>200+review</p>
                        <div>
                            |
                        </div>
                        <div className="flex items-center gap-3">
                            <p>Recommendation</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path fill="#FF8906" d="M8.347.631A.75.75 0 0 1 9.123.26l.238.04a3.25 3.25 0 0 1 2.591 4.098L11.494 6h.665a3.25 3.25 0 0 1 3.118 4.167l-1.135 3.859A2.75 2.75 0 0 1 11.503 16H6.586a3.75 3.75 0 0 1-2.184-.702A1.75 1.75 0 0 1 3 16H1.75A1.75 1.75 0 0 1 0 14.25v-6.5C0 6.784.784 6 1.75 6h3.417a.25.25 0 0 0 .217-.127ZM4.75 13.649l.396.33c.404.337.914.521 1.44.521h4.917a1.25 1.25 0 0 0 1.2-.897l1.135-3.859A1.75 1.75 0 0 0 12.159 7.5H10.5a.75.75 0 0 1-.721-.956l.731-2.558a1.75 1.75 0 0 0-1.127-2.14L6.69 6.611a1.75 1.75 0 0 1-1.523.889H4.75ZM3.25 7.5h-1.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H3a.25.25 0 0 0 .25-.25Z" stroke-width="1" stroke="#FF8906" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-[#4F5665] text-sm">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                    <div className="flex items-center gap-5 border border-gray-300 w-30 ">
                        <Button style={"border bg-white flex justify-center border-[#FF8906]"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#000" d="M19 12.998H5v-2h14z" stroke-width="1" stroke="#000" />
                            </svg>
                        </Button>
                        <p>1</p>
                        <Button style={" bg-[#FF8906] flex justify-center "}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" stroke-width="1" stroke="#000" />
                            </svg>
                        </Button>
                    </div>
                    <p className="font-bold text-sm">Choose Size</p>
                    <div className="flex items-center justify-between gap-5">
                        <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                            Regular
                        </Button>
                        <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                            Medium
                        </Button>
                        <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                            Large
                        </Button>
                    </div>
                    <p className="font-bold text-sm">Choose Size</p>
                    <div className="flex items-center justify-between gap-5">
                        <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                            Ice
                        </Button>
                        <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                            Hot
                        </Button>
                    </div>
                    <Button>Buy</Button>
                    <Button style={"border bg-white flex justify-center border-[#FF8906]"}>
                        <div className="flex items-center text-sm text-[#FF8906] gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#FF8906" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                            </svg>
                            Add To Cart
                        </div>
                    </Button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-10 mb-5">Recommendation <span className="text-[#8E6447]">For You</span></h2>
                <div className="grid grid-cols-2 gap-5">
                    {products.map((item) => (
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

            </div>
        </>
    )
}