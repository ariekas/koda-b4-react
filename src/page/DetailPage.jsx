import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { CardMenu } from "../components/CardMenu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNotification } from "../context/NotificationContext";

export function DetailPage() {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1); 
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const token = useSelector((s) => s.authReducers.token);
  const { id } = useParams();
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => {
    fetchProduct();
    fetchProducts();
    setPage(1);
  }, [id]);

  async function fetchProduct() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/product/${id}`);
      const json = await res.json();
      if (json.Success) {
        setProduct(json.Data);
        if (json.Data.images?.length) setMainImage(json.Data.images[0].image);
      } else {
        showNotification(json.Message || "Gagal mengambil produk", "error");
      }
    } catch (err) {
      console.error(err);
      showNotification("Terjadi kesalahan saat mengambil produk", "error");
    }
  }

  async function fetchProducts() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
      const json = await res.json();
      if (json.Success) setProducts(json.Data?.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading product...</p>;

  const productImages = product.images?.map((i) => i.image) || [];

  const handleImageClick = (img) => setMainImage(img);

  function validateBeforeCart() {
    if (!token) {
      showNotification("Silakan login terlebih dahulu", "error");
      return false;
    }
    if (!quantity || quantity < 1) {
      showNotification("Masukkan jumlah produk terlebih dahulu!", "error");
      return false;
    }
    if (quantity > product.stock) {
      showNotification(`Jumlah pembelian melebihi stok! sisa: ${product.stock}`, "error");
      return false;
    }
    return true;
  }

  async function addToCart() {
    if (!validateBeforeCart()) return { success: false };

    const payload = {
      productId: Number(product.id),
      sizeId: Number(selectedSize) || 0,
      variantId: Number(selectedVariant) || 0,
      quantity: Number(quantity),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      console.log("ADD CART RESULT:", json);

      if (!json.Success) {
        showNotification(json.Message || "Gagal menambahkan ke cart", "error");
        return { success: false };
      }

      setCartCount((c) => c + 1);
      setQuantity(0)
      setSelectedSize(0)
      setSelectedVariant(0)
      showNotification("Produk berhasil ditambahkan ke cart", "success");
      return { success: true };
    } catch (err) {
      console.error(err);
      showNotification("Terjadi kesalahan server", "error");
      return { success: false };
    }
  }

  async function handleAddToCart(e) {
    e.preventDefault?.(); 
    await addToCart();
  }

  async function handleBuy(e) {
    e.preventDefault();
    if (cartCount == 0){
        showNotification("Cart Kosong", "error");
    }else{
        navigate("/checkout")
    }
  }

  const onChangeSize = (e) => setSelectedSize(Number(e.target.value));
  const onChangeVariant = (e) => setSelectedVariant(Number(e.target.value));

  return (
    <div className="pt-25 p-5">
      <form className="lg:grid grid-cols-2 lg:px-10 xl:px-40 gap-10" onSubmit={handleBuy}>
        <div className="flex flex-col max-w-xl gap-2">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-all duration-300"
          />

          <div className="grid grid-cols-3 gap-3">
            {productImages.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`${product.name}-${i}`}
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

          <h1 className="text-2xl font-semibold">{product.name}</h1>

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
              <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#FF8906"
                  d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                />
              </svg>
            ))}
            <span className="ml-2 text-black">{product.rating}</span>
          </div>

          <p className="text-[#4F5665] text-sm">{product.description}</p>

          <div className="flex items-center gap-5">
            <Button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </Button>
            <p>{quantity}</p>
            <Button type="button" onClick={() => setQuantity((q) => q + 1)}>
              +
            </Button>
          </div>

          {product.sizes?.length > 0 && (
            <div>
              <p className="font-bold text-sm mb-2">Choose Size</p>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map((s) => (
                  <label
                    key={s.id}
                    className={`flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-lg text-sm ${
                      selectedSize === s.id ? "border-orange-400 bg-orange-50" : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={s.id}
                      checked={selectedSize === s.id}
                      onChange={onChangeSize}
                      className="accent-orange-500"
                    />
                    <span>{s.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {product.variants?.length > 0 && (
            <div>
              <p className="font-bold text-sm mb-2">Choose Variant</p>
              <div className="flex flex-wrap gap-4">
                {product.variants.map((v) => (
                  <label
                    key={v.id}
                    className={`flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-lg text-sm ${
                      selectedVariant === v.id ? "border-orange-400 bg-orange-50" : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="variant"
                      value={v.id}
                      checked={selectedVariant === v.id}
                      onChange={onChangeVariant}
                      className="accent-orange-500"
                    />
                    <span>{v.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <Button style="w-full" type="submit">
              Buy
            </Button>

            <Button
              style="border bg-white flex justify-center border-[#FF8906] w-full"
              type="button"
              onClick={handleAddToCart}
            >
              <div className="flex items-center text-sm text-[#FF8906] gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#FF8906"
                    d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
                  />
                </svg>
                Add To Cart {cartCount > 0 && `(${cartCount})`}
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
                    <span className="ml-2 text-black">{item.rating || 5}</span>
                  </div>
                </CardMenu>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex flex-wrap gap-3 items-center justify-center my-10">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8906] text-white hover:opacity-80 transition"
                }`}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    page === p ? "bg-[#FF8906] text-white" : "bg-[#E8E8E8] text-black"
                  } hover:bg-[#FF8906] hover:text-white transition`}
                >
                  {p}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8906] text-white hover:opacity-80 transition"
                }`}
              >
                ›
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}