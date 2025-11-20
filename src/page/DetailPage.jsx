import { useState, useEffect } from "react";
import { Button } from "../components/Button"
import { CardMenu } from "../components/CardMenu"
import { Icon } from "../components/Icon"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/reducers/checkout";
import { useNotification } from "../context/NotificationContext"

export function DetailPage() {
    // State untuk produk detail
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [quantiyProduct, setQuantiyProduct] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedVariant, setSelectedVariant] = useState("");
    const [cart, setCart] = useState(0);
    const [dataCartItems, setDataCartItems] = useState([]);
    
    // State untuk produk rekomendasi
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    // State get id, manipulasi redux, navigate, show notif
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showNotification } = useNotification();

    // Hitung pagination products 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    async function getProductDetail() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const result = await response.json();
            console.log("DETAIL PRODUCT:", result);

            if (result.Success) {
                setProduct(result.Data);

                // Mengambil image pertama
                if (result.Data.images && result.Data.images.length > 0) {
                    setMainImage(result.Data.images[0].image);
                }
            } else {
                showNotification(result.Message || "Gagal mengambil produk", "error");
            }
        } catch (error) {
            console.log("Fetch error:", error);
            showNotification("Terjadi kesalahan saat mengambil produk", "error");
        }
    }

    async function getDataProduct() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = await response.json();
            console.log(result)
            if (result.Success) {
                setProducts(result.Data?.data || []);
            } else {
                console.log("Gagal mengambil produk");
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    }

    useEffect(() => {
        getProductDetail();
        getDataProduct();
        setCurrentPage(1);

    }, [id]);

    if (!product) {
        return <p className="text-center mt-10 text-gray-500">Loading product...</p>;
    }

    // Ambil semua image
    const productImages = product.images ? product.images.map(img => img.image) : [];

    const handleImageClick = (clickedImage) => {
        setMainImage(clickedImage);
    };

    function handleCart(e) {
        e.preventDefault();

        if (product.stock === 0) {
            showNotification("Stock produk habis!", "error");
            return;
        }

        if (quantiyProduct === 0) {
            showNotification("Masukkan jumlah produk terlebih dahulu!", "error");
            return;
        }

        if (quantiyProduct > product.stock) {
            showNotification(`Jumlah pembelian melebihi stock, stock: ${product.stock}`, "error");
            return;
        }

        const dataProduct = {
            ...product,
            quantity: quantiyProduct,
            size: selectedSize,
            variant: selectedVariant,
            stock: product.stock - quantiyProduct
        };

        setProduct((prev) => ({ ...prev, stock: prev.stock - quantiyProduct }));
        setDataCartItems((prev) => [...prev, dataProduct]);
        setCart((prev) => prev + 1);
        showNotification("Product masuk ke cart", "success");

        setQuantiyProduct(0);
        setSelectedSize("");
        setSelectedVariant("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        const totalQuantity = dataCartItems.reduce((sum, item) => sum + item.quantity, quantiyProduct);

        if (totalQuantity > product.stock) {
            showNotification(`Jumlah pembelian melebihi stok tersedia! stock: ${product.stock}`, "error");
            return;
        }

        if (totalQuantity === 0) {
            showNotification("Masukkan jumlah produk terlebih dahulu!", "error");
            return;
        }

        const dataProduct = {
            ...product,
            quantity: quantiyProduct,
            size: selectedSize,
            variant: selectedVariant
        };

        setProduct((prev) => ({ ...prev, stock: prev.stock - quantiyProduct }));

        if (dataCartItems.length === 0) {
            dispatch(addCart(dataProduct));
        } else {
            dataCartItems.forEach((item) => dispatch(addCart(item)));
        }

        navigate("/checkout");

        setDataCartItems([]);
        setCart(0);
        setQuantiyProduct(0);
        setSelectedSize("");
        setSelectedVariant("");
    }

    return (
        <>
            <div className="pt-25 p-5">
                <form className="lg:grid grid-cols-2 lg:px-10 xl:px-40 gap-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col max-w-xl gap-2">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-all duration-300"
                        />

                        <div className="grid grid-cols-3 gap-3">
                            {productImages.map((thumb, index) => (
                                <img
                                    key={index}
                                    src={thumb}
                                    alt={`${product.name}-${index}`}
                                    onClick={() => handleImageClick(thumb)}
                                    className="w-full h-32 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        {product.isFlashSale && (
                            <div className="py-2 px-2 bg-red-500 text-white rounded-full w-23 flex justify-center">
                                <p className="text-xs font-bold">FLASH SALE!</p>
                            </div>
                        )}

                        <h1 className="text-2xl font-semibold">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-2">
                            {product.diskonPrice > 0 ? (
                                <>
                                    <p className="text-[#FF8906] font-semibold">IDR {product.diskonPrice}</p>
                                    <p className="text-red-500 text-sm line-through">IDR {product.price}</p>
                                </>
                            ) : (
                                <p className="text-[#FF8906] font-semibold">IDR {product.price}</p>
                            )}
                        </div>

                        <div className="flex gap-1 items-center text-[#FF8906]">
                            {Array.from({ length: 5 }).map((_, i) => (
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
                            <span className="ml-2 text-black">{product.rating}</span>
                        </div>

                        <div className="flex gap-5 text-[#4F5665] text-sm">
                            <p>200+ review</p>
                            <div>|</div>
                            <div className="flex items-center gap-3">
                                <p>Recommendation</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="#FF8906" d="M8.347.631A.75.75 0 0 1 9.123.26l.238.04a3.25 3.25 0 0 1 2.591 4.098L11.494 6h.665a3.25 3.25 0 0 1 3.118 4.167l-1.135 3.859A2.75 2.75 0 0 1 11.503 16H6.586a3.75 3.75 0 0 1-2.184-.702A1.75 1.75 0 0 1 3 16H1.75A1.75 1.75 0 0 1 0 14.25v-6.5C0 6.784.784 6 1.75 6h3.417a.25.25 0 0 0 .217-.127ZM4.75 13.649l.396.33c.404.337.914.521 1.44.521h4.917a1.25 1.25 0 0 0 1.2-.897l1.135-3.859A1.75 1.75 0 0 0 12.159 7.5H10.5a.75.75 0 0 1-.721-.956l.731-2.558a1.75 1.75 0 0 0-1.127-2.14L6.69 6.611a1.75 1.75 0 0 1-1.523.889H4.75ZM3.25 7.5h-1.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H3a.25.25 0 0 0 .25-.25Z" strokeWidth="1" stroke="#FF8906" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-[#4F5665] text-sm">{product.description}</p>

                        <div className="flex items-center gap-5">
                            <Button type="button" onClick={() => quantiyProduct > 0 && setQuantiyProduct(quantiyProduct - 1)}>
                                -
                            </Button>
                            <p>{quantiyProduct}</p>
                            <Button type="button" onClick={() => setQuantiyProduct(quantiyProduct + 1)}>
                                +
                            </Button>
                        </div>

                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <p className="font-bold text-sm mb-2">Choose Size</p>
                                <div className="flex items-center flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <Button
                                            key={size.id}
                                            type="button"
                                            onClick={() => setSelectedSize(size.name)}
                                            style={`border bg-white px-4 py-2 border-gray-300 text-sm ${selectedSize === size.name ? "border-orange-400 bg-orange-50" : "hover:shadow-md"}`}
                                        >
                                            {size.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.variants && product.variants.length > 0 && (
                            <div>
                                <p className="font-bold text-sm mb-2">Choose Variant</p>
                                <div className="flex items-center flex-wrap gap-3">
                                    {product.variants.map((variant) => (
                                        <Button
                                            key={variant.id}
                                            type="button"
                                            onClick={() => setSelectedVariant(variant.name)}
                                            style={`border bg-white px-4 py-2 border-gray-300 text-sm ${selectedVariant === variant.name ? "border-orange-400 bg-orange-50" : "hover:shadow-md"}`}
                                        >
                                            {variant.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                            <Button style="w-full" type="submit">Buy</Button>
                            <Button style="border bg-white flex justify-center border-[#FF8906] w-full" type="button" onClick={handleCart}>
                                <div className="flex items-center text-sm text-[#FF8906] gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#FF8906" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                                    </svg>
                                    Add To Cart {cart > 0 && `(${cart})`}
                                </div>
                            </Button>
                        </div>
                    </div>
                </form>

                <h2 className="text-xl text-center font-semibold mt-10 mb-5 lg:text-4xl lg:text-start lg:px-10 xl:px-40 lg:mt-15">
                    Recommendation <span className="text-[#8E6447]">For You</span>
                </h2>
                
                {products.length === 0 ? (
                    <p className="text-center text-gray-500">Loading menu...</p>
                ) : (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:px-10 xl:px-40">
                            {currentProducts.map((item) => (
                                <Link
                                    key={item.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(`/detail-product/${item.id}`);
                                    }}
                                >
                                    <CardMenu
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={item.images[0]?.image || "/placeholder.png"}
                                        isFlashSale={item.is_flashsale}
                                        rating={item.rating || 5}
                                    >
                                        <div className="flex gap-1 items-center text-[#FF8906]">
                                            <span className="ml-2 text-black">
                                                {item.rating || 5}
                                            </span>
                                        </div>
                                    </CardMenu>
                                </Link>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex flex-wrap gap-3 items-center justify-center my-10">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full 
                                        ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8906] text-white hover:opacity-80 transition"}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20 12H7.75L13 17.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L7.75 11H20z" />
                                    </svg>
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full 
                                            ${currentPage === page ? "bg-[#FF8906] text-white" : "bg-[#E8E8E8] text-black"} 
                                            hover:bg-[#FF8906] hover:text-white transition`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full 
                                        ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8906] text-white hover:opacity-80 transition"}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}