import { useEffect, useState } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Link } from "react-router-dom";
import { CardMenu } from "../components/CardMenu";
import { useSelector } from "react-redux";
export function CheckoutPage() {
    const payments = [
        { id: 1, img: "/public/images/payment.png", alt: "PayPal" },
        { id: 2, img: "/public/images/gopay.png", alt: "GoPay" },
        { id: 3, img: "/public/images/ovo.png", alt: "OVO" },
        { id: 4, img: "/public/images/bri.png", alt: "BRI" },
        { id: 5, img: "/public/images/bca.png", alt: "BCA" },
        { id: 6, img: "/public/images/dana.png", alt: "Dana" },
    ];

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

    const dataCart = useSelector(state => state.checkoutReducers.data)
    useEffect(() => {
        getDataProduct()
    }, [])

    return (
        <>


            <div className="pt-30 p-5">
                {Array.isArray(dataCart) && dataCart.length > 0 ? (
                    dataCart.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-3"
                        >
                            {/* Gambar produk */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />

                                <div>
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-600">{item.category}</p>

                                    <div className="text-sm mt-1 text-gray-700">
                                        <p>Size: {item.size || "-"}</p>
                                        <p>Temp: {item.temperature || "-"}</p>
                                        <p>Qty: {item.quantity}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Harga */}
                            <div className="text-right">
                                {item.diskonPrice ? (
                                    <>
                                        <p className="text-gray-500 line-through text-sm">
                                            Rp {item.price.toLocaleString("id-ID")}
                                        </p>
                                        <p className="text-[#FF8906] font-semibold">
                                            Rp {(item.price - item.diskonPrice).toLocaleString("id-ID")}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-[#FF8906] font-semibold">
                                        Rp {item.price.toLocaleString("id-ID")}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 mt-4">Your cart is empty.</p>
                )}
                <h1 className="text-2xl font-semibold">Payment Details</h1>
                <div className="flex items-center justify-between  w-full my-5">
                    <p className="w-full text-lg ">Your Order</p>
                    <Button style={" bg-[#FF8906] flex justify-center items-center w-1/2 text-xs "}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                        </svg>
                        Apply Menu
                    </Button>
                </div>
                <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-2 xl:grid-cols-4 xl:col-span-2">
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
                    <div className="bg-gray-100 p-4 rounded-lg gap-3 hidden lg:flex flex-col lg:mt-0 mt-5 text-sm">
                        <p className="text-lg font-bold my-5">Total</p>
                        <div className="flex justify-between">
                            <p>Order</p>
                            <p className="font-bold">Rp 40.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Tax</p>
                            <p className="font-bold">Rp 5.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p className="font-bold">Rp 10.000</p>
                        </div>

                        <hr className="my-2 border-gray-400" />

                        <div className="flex justify-between font-semibold">
                            <p>Subtotal</p>
                            <p className="font-bold">Rp 55.000</p>
                        </div>

                        <button className="bg-[#FF8906] w-full text-black font-semibold py-2 rounded-md mt-4">
                            Checkout
                        </button>

                        <p className="text-sm mt-4 mb-2 font-medium">We Accept</p>

                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {payments.map((pay) => (
                                <button
                                    key={pay.id}
                                    className="min-w-[70px] h-[50px] bg-white rounded-xl flex items-center justify-center shadow-md"
                                >
                                    <img
                                        src={pay.img}
                                        alt={pay.alt}
                                        className="w-10 h-10 object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                        <p className="opacity-40">*Get Discount if you pay with BCA</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 my-5 lg:my-10 lg:max-w-1/2 xl:max-w-1/3">
                    <p className="text-lg ">Payment & Info Delivery</p>
                    <div className="flex flex-col gap-5">
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
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-sm ">Delivery</p>
                            <div className="flex items-center justify-between md:justify-start gap-2">
                                <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                                    Dine in
                                </Button>
                                <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                                    Door Delivery
                                </Button>
                                <Button style={"border bg-white flex justify-center border-gray-300 hover:border-[#FF8906] text-sm p-3"}>
                                    Pick Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg gap-3 lg:hidden flex flex-col mt-5 text-sm">
                    <p className="text-lg font-bold my-5">Total</p>
                    <div className="flex justify-between">
                        <p>Order</p>
                        <p className="font-bold">Rp 40.000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Tax</p>
                        <p className="font-bold">Rp 5.000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping</p>
                        <p className="font-bold">Rp 10.000</p>
                    </div>

                    <hr className="my-2 border-gray-400" />

                    <div className="flex justify-between font-semibold">
                        <p>Subtotal</p>
                        <p className="font-bold">Rp 55.000</p>
                    </div>

                    <button className="bg-[#FF8906] w-full text-black font-semibold py-2 rounded-md mt-4">
                        Checkout
                    </button>

                    <p className="text-sm mt-4 mb-2 font-medium">We Accept</p>

                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {payments.map((pay) => (
                            <button
                                key={pay.id}
                                className="min-w-[70px] h-[50px] bg-white rounded-xl flex items-center justify-center shadow-md"
                            >
                                <img
                                    src={pay.img}
                                    alt={pay.alt}
                                    className="w-10 h-10 object-contain"
                                />
                            </button>
                        ))}
                    </div>
                    <p className="opacity-40">*Get Discount if you pay with BCA</p>
                </div>

            </div>
        </>
    )
}