import { useState, useEffect } from "react";
import { Button } from "../components/Button"
import { CardMenu } from "../components/CardMenu"
import { Icon } from "../components/Icon"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/reducers/checkout";
import { useNotification } from "../context/NotificationContext"

export function DetailPage() {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState()
    const { id } = useParams()
    const { showNotification } = useNotification()
    const [quantiyProduct, setQuantiyProduct] = useState(0)
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedTemp, setSelectedTemp] = useState("")
    const [cart, setCart] = useState(0)
    const [dataCartItems, setDataCartItems] = useState([])
    const [mainImage, setMainImage] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    useEffect(() => {
        if (products.length > 0) {
            const getProductById = products.find((item) => item.id === parseInt(id))
            setProductId(getProductById)
            setMainImage(getProductById?.image);
        }
    }, [id, products])

    function handleCart(e) {
        e.preventDefault()

        if (productId.stock === 0) {
            showNotification("Stock produk habis!", "error")
            return
        }

        if (quantiyProduct > productId.stock) {
            showNotification(`Jumlah pembelian melebihi stock, stock :${productId.stock}`, "error")
            return
        }
        const dataProduct = {
            ...productId,
            quantity: quantiyProduct,
            size: selectedSize,
            temperature: selectedTemp,
            stock: productId.stock - quantiyProduct
        }

        setProductId((dataOld) => ({
            ...dataOld,
            stock: dataOld.stock - quantiyProduct
        }))

        setDataCartItems((dataOld) => [...dataOld, dataProduct]);
        setCart((dataOld) => dataOld + 1);
        showNotification("Product masuk ke cart", "success")
        console.log(dataProduct)

        setQuantiyProduct(0);
        setSelectedSize("");
        setSelectedTemp("");
    }

    function handleSubmit(e) {
        e.preventDefault();


        const totalQuantity = dataCartItems.reduce((sum, item) => sum + item.quantity, quantiyProduct);

        if (totalQuantity > productId.stock + totalQuantity) {
            showNotification(`Jumlah pembelian melebihi stok tersedia!`, "error");
            return;
        }

        if (totalQuantity === 0) {
            showNotification("Masukkan jumlah produk terlebih dahulu!", "error");
            return;
        }

        const dataProduct = {
            ...productId,
            quantity: quantiyProduct,
            size: selectedSize,
            temperature: selectedTemp,
        };

        setProductId((dataOld) => ({
            ...dataOld,
            stock: dataOld.stock - quantiyProduct,
        }));

        if (dataCartItems.length === 0) {
            dispatch(addCart(dataProduct));
        } else {
            for (const item of dataCartItems) {
                dispatch(addCart(item));
            }
        }


        console.log(dataProduct)
        navigate("/checkout");

        setDataCartItems([]);
        setCart(0);
        setQuantiyProduct(0);
        setSelectedSize("");
        setSelectedTemp("");
    }



    if (!productId) {
        return <p className="text-center mt-10 text-gray-500">Loading product...</p>;
    }

    const thumbnails = [productId.image1, productId.image2, productId.image3].filter(Boolean);

    const handleImageClick = (clickedImage) => {
        const prevMain = mainImage;
        setMainImage(clickedImage);
        const index = thumbnails.indexOf(clickedImage);
        if (index !== -1) thumbnails[index] = prevMain;
    };

    return (
        <>
            <div className="pt-25 p-5">
                <form className="lg:grid grid-cols-2 lg:px-10 xl:px-40 gap-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col  max-w-xl gap-2">
                        <img
                            src={mainImage}
                            alt={productId.name}
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-all duration-300"
                        />

                        <div className="grid grid-cols-3 gap-3">
                            {thumbnails.map((thumb, index) => (
                                <img
                                    key={index}
                                    src={thumb}
                                    alt={`${productId.name}-${index}`}
                                    onClick={() => handleImageClick(thumb)}
                                    className="w-full h-32 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
                                />
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        {productId.isFlashSale && (
                            <div className="py-2 px-2 bg-red-500  text-white rounded-full w-23 flex justify-center">
                                <p className="text-xs font-bold">FLASH SALE!</p>
                            </div>

                        )}
                        <h1 className="text-2xl font-semibold">
                            {productId.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            {productId.diskonPrice > 0 ? (
                                <>
                                    <p className="text-[#FF8906] font-semibold">IDR {productId.diskonPrice}</p>
                                    <p className="text-red-500 text-sm line-through">IDR {productId.price}</p>
                                </>
                            ) : (
                                <p className="text-[#FF8906] font-semibold">IDR {productId.price}</p>
                            )}
                        </div>
                        <div className="flex gap-1 items-center text-[#FF8906]">
                            {[...Array(Math.floor(productId.rating))].map((_, i) => (
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

                            {[...Array(5 - Math.floor(productId.rating))].map((_, i) => (
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

                            <span className="ml-2 text-black">{productId.rating}</span>
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
                        <p className="text-[#4F5665] text-sm">{productId.description}</p>
                        <div className="flex items-center gap-5">
                            <Button style={"border bg-white flex justify-center p-1 border-[#FF8906]"} type="button" onClick={() =>
                                quantiyProduct > 0 && setQuantiyProduct(quantiyProduct - 1)
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19 12.998H5v-2h14z" stroke-width="1" stroke="#000" />
                                </svg>
                            </Button>
                            <p>{quantiyProduct}</p>
                            <Button style={" bg-[#FF8906] flex justify-center p-1 "} type="button" onClick={() => setQuantiyProduct(quantiyProduct + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" stroke-width="1" stroke="#000" />
                                </svg>
                            </Button>
                        </div>
                        <p className="font-bold text-sm">Choose Size</p>
                        <div className="flex items-center justify-between md:justify-start gap-5 ">
                            {["Regular", "Medium", "Large"].map((size) => (
                                <Button
                                    key={size}
                                    type="button"
                                    onClick={() => setSelectedSize(size)}
                                    style={`border bg-white lg:w-full flex justify-center border-gray-300 text-sm p-3  ${selectedSize === size ? "border-orange-400" : "hover:shadow-md"
                                        }`}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                        <p className="font-bold text-sm">Choose Size</p>
                        <div className="flex items-center md:justify-start gap-5">
                            {["Ice", "Hot"].map((temp) => (
                                <Button
                                    key={temp}
                                    type="button"
                                    onClick={() => setSelectedTemp(temp)}
                                    style={`border bg-white lg:w-full flex justify-center border-gray-300 text-sm p-3 ${selectedTemp === temp ? "border-orange-400" : "hover:shadow-md"
                                        }`}
                                >
                                    {temp}
                                </Button>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row  gap-3 md:gap-5">
                            <Button style="w-full" type="submit">Buy</Button>
                            <Button style={"border bg-white flex justify-center border-[#FF8906] w-full"} onClick={handleCart}>
                                <div className="flex items-center text-sm text-[#FF8906] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#FF8906" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                                    </svg>
                                    Add To Cart {cart}
                                </div>
                            </Button>
                        </div>
                    </div>
                </form>

                <h2 className="text-xl text-center font-semibold mt-10 mb-5 lg:text-4xl lg:text-start lg:px-10 xl:px-40 lg:mt-15">Recommendation <span className="text-[#8E6447]">For You</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:px-10 xl:px-40">
                    {products.map((item) => (
                        <Link to={`/detail-product/${item.id}`}>
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

            </div >
        </>
    )
}