import { Button } from "./Button";

/**
 * @param {Object} props.
 * @param {React.ReactNode} [props.children] - Berisi code yang akan diterapkan di dalam component
 * @param {string} props.name - Nama menu produk.
 * @param {string} props.description - Deskripsi menu produk.
 * @param {number|string} props.price - Harga produk yang sedang berlaku.
 * @param {number|string} props.diskonPrice - Harga diskon produk.
 * @param {string} props.image -  path gambar produk.
 * @param {boolean} [props.isFlashSale=false] - Menentukan apakah menu sedang dalam flash sale.
 * @returns 
 */
export function CardMenu({
    children,
    name,
    description,
    price,
    diskonPrice,
    image,
    isFlashSale,
}) {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative">
                <img src={image} alt={name} className="w-full rounded-md" />
                {isFlashSale && (
                    <div className="py-1 px-2 bg-red-500 text-white rounded-full absolute top-0 m-3">
                        <p className="text-xs">FLASH SALE!</p>
                    </div>
                )}
            </div>

            <div
                className="
                    w-full  
                    lg:p-4
                    lg:-translate-y-20
                    transition-transform duration-300
                "
            >
                <div className="flex flex-col gap-3 rounded-md bg-white lg:p-3 h-full">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-sm font-light text-justify">{description}</p>
                    {children}

                    <div className="min-h-[40px] flex flex-col justify-center">
                        {diskonPrice > 0 ? (
                            <>
                                <p className="text-[#FF8906] font-semibold">
                                    IDR {diskonPrice}
                                </p>
                                <p className="text-red-500 text-sm line-through">
                                    IDR {price}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-[#FF8906] font-semibold">
                                    IDR {price}
                                </p>
                                <p className="text-sm opacity-0">placeholder</p>
                            </>
                        )}
                    </div>

                    <Button style="w-full">Buy</Button>
                    {/* <Button style={"border bg-white flex justify-center border-[#FF8906] w-full"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#FF8906"
                                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
                            />
                        </svg>
                    </Button> */}
                </div>
            </div>
        </div>
    );
}
