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
    
            <div className="w-full h-52 lg:h-80 overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
    
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
            <div className="flex flex-col rounded-md bg-white lg:p-3 h-56 lg:h-80 gap-3">
                <h1 className="font-bold">{name}</h1>
                <p className="text-sm font-light text-justify">{description}</p>
                {children}
    
                <div className="min-h-[40px] flex flex-col justify-center">
                    {diskonPrice > 0 ? (
                        <>
                            <p className="text-[#FF8906] font-semibold">
                                IDR {diskonPrice.toLocaleString("id-ID")}
                            </p>
                            <p className="text-red-500 text-sm line-through">
                                IDR {price.toLocaleString("id-ID")}
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-[#FF8906] font-semibold">
                                IDR {price.toLocaleString("id-ID")}
                            </p>
                            <p className="text-sm opacity-0">placeholder</p>
                        </>
                    )}
                </div>
    
                <div className="grid grid-cols-3 gap-2">
                    <Button style="w-full col-span-3">Buy</Button>
                    {/* <Button style="border bg-white flex justify-center border-[#FF8906] w-full col-span-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#FF8906"
                                d="M16 18a2 2 0 0 1 2 2a2 2..."
                            />
                        </svg>
                    </Button> */}
                </div>
            </div>
        </div>
    </div>    
    );
}
