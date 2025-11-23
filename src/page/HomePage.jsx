import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { CardMenu } from "../components/CardMenu"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useNotification } from "../context/NotificationContext"
export function HomePage() {
    const [products, setProducts] = useState([]);
    const [showChat, setShowChat] = useState(false)
    const { showNotification } = useNotification()
    const userLogin = useSelector((state) => state.authReducers.userLogin)
    const navigate = useNavigate()
    async function getDataProduct() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/favorite?limit=4`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );


            const result = await response.json();

            if (result.Success) {
                const productList = result.Data?.data || [];
                setProducts(productList);
            } else {
                console.log("Gagal mengambil produk");
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    }

    useEffect(() => {
        getDataProduct();
    }, []);

    const handleShowChat = () => { setShowChat(!showChat) }

    const testimonials = [
        {
            id: 1,
            name: "Viezh Robert",
            role: "Manager Coffee Shop",
            review: "Wow... I am very happy to spend my whole day here. The Wi-Fi is great, and the coffee & meals are amazing. Very recommended!",
            rating: 5,
            image: "/review.png",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Barista Specialist",
            review: "The atmosphere is cozy and the coffee quality is top-tier. Definitely one of my favorite places.",
            rating: 4,
            image: "/review.png",
        },
        {
            id: 3,
            name: "Michael Andrew",
            role: "Content Creator",
            review: "Perfect spot for working and relaxing. Love the vibes and music playlist!",
            rating: 5,
            image: "/review.png",
        },
        {
            id: 4,
            name: "Emily Wilson",
            role: "Freelance Designer",
            review: "Great coffee, friendly staff, and the perfect ambiance for creative work. Highly recommended!",
            rating: 5,
            image: "/review.png",
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 2) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => prev === 0 ? testimonials.length - 2 : prev - 2);
    };

    const currentReview = testimonials[current];
    const nextReview = testimonials[(current + 1) % testimonials.length];
    return (
        <>
            <div className="flex flex-col relative mb-15">
                <div className="lg:grid lg:grid-cols-2">
                    <img src="https://i.pinimg.com/1200x/ef/23/88/ef2388cecc6d07b72897944b448f2956.jpg" alt="" className="w-full lg:order-2 " />
                    <div className="p-5 bg-gradient-to-t from-[#330601] from-55% to-[#292929] text-white px-5 py-10 gap-6 md:gap-8 flex flex-col lg:px-10 xl:px-40 lg:order-1 lg:justify-center">
                        <h1 className="text-2xl xl:text-5xl font-semibold lg:text-3xl">
                            Start Your Day with Coffee and Good Meals
                        </h1>
                        <p className="text-sm xl:w-lg">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                        <div className="flex justify-between gap-20 relative">
                                <Button style={"md:px-10 px-3 cursor-pointer "} onClick={() => navigate("/product")}>Get Started</Button>

                            <button
                                onClick={handleShowChat}
                                className="fixed bottom-5 right-5 z-50"
                            >
                                <Icon style={"p-2 bg-[#2E6B0F] rounded-full"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="#ffff">
                                            <path d="m4 19l-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936l.474-.881l-.317-.17l-.352.07l.195.98zm-3.082-3.147l.93.37l.163-.414l-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.9 8.9 0 0 0 12.471 20zm-8.276 1.98l4.706-.936l-.39-1.961l-4.706.936l.39 1.962zm2.326-5.506A5.6 5.6 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738l1.624-4.083l-1.858-.739z" />
                                            <circle cx="9" cy="12" r="1" />
                                            <circle cx="12.5" cy="12" r="1" />
                                            <circle cx="16" cy="12" r="1" />
                                        </g>
                                    </svg>
                                </Icon>
                            </button>

                            {showChat && (
                                <div className="fixed bottom-20 right-5 bg-white border-t-8 border-[#2E6B0F] rounded-xl p-4 md:w-xs h-auto flex flex-col justify-between shadow-lg z-40">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
                                            <img src="/chat1.png" alt="" />
                                            <div className="flex flex-col gap-1">
                                                <h1 className="text-sm text-[#0B132A] font-semibold">Maria Angela</h1>
                                                <p className="text-xs text-[#2E6B0F]">Admin Support</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col text-black text-sm gap-5 overflow-y-auto h-[18rem]">
                                            <div className="flex items-center gap-2">
                                                <img src="/chat1.png" alt="" className="w-[12%]" />
                                                <p className="text-xs bg-gray-100 p-2 rounded-lg text-[#4F5665]">
                                                    Halo, Ada yang bisa kami bantu?
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end gap-2">
                                                <p className="text-xs bg-gray-100 p-2 rounded-lg text-[#4F5665]">
                                                    Halo, Ada yang bisa kami bantu?
                                                </p>
                                                <img src="/chat1.png" alt="" className="w-[12%]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-3">
                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-lg text-black p-2 text-xs w-full"
                                            placeholder="Entering Message"
                                        />
                                        <div className="p-2 bg-[#2E6B0F] rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                                <path
                                                    fill="#fff"
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
                                <h1 className="text-2xl text-[#2E6B0F] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                            <div className="w-0.5 opacity-50 bg-white">
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl text-[#2E6B0F] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                            <div className="w-0.5 opacity-50 bg-white">
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl text-[#2E6B0F] font-light lg:text-3xl">90+</h1>
                                <p className="text-xs lg:text-lg">Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-0 lg:grid lg:grid-cols-2">
                    <img src="https://i.pinimg.com/736x/9d/b5/0f/9db50f4a69ce9a327751010392048aa6.jpg" alt="" className="w-full lg:order-2" />
                    <div className="flex  flex-col gap-4 p-5 lg:order-1 lg:px-10 xl:px-40 lg:justify-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-2 bg-[#2E6B0F] h-14">
                            </div>
                            <h1 className="text-2xl lg:text-4xl xl:text-6xl">We Provide <span className="text-[#2E6B0F]">Good Coffee</span> and <span className="text-[#2E6B0F]">Healthy Meals</span></h1>
                        </div>
                        <p className="text-sm text-[#4F5665] xl:text-lg">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <div className="flex gap-2 items-center">
                            <img src="/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">High quality beans</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Healthy meals, you can request the ingredients</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Free member card with a minimum purchase of IDR 200.000.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/checklist.png" alt="" />
                            <p className="text-sm text-[#4F5665] xl:text-lg">Chat with our staff to get better experience for ordering</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-5 gap-4 lg:gap-10 lg:mt-10">
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-xl font-semibold lg:text-4xl">Here Is People <span className="text-[#2E6B0F]">Favorite</span></h1>
                        <div className="bg-[#2E6B0F] w-15 h-1"></div>
                    </div>
                    <p className="text-sm font-normal lg:text-lg lg:text-center">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>

                    <div className="lg:px-10 xl:px-40">
                        {products.length === 0 ? (
                            <p>Loading menu...</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                                {products.slice(0, 4).map((item) => (
                                    <Link
                                        key={item.id}
                                        onClick={(e) => {
                                            e.preventDefault();

                                            if (!userLogin) {
                                                showNotification(
                                                    "Silakan login terlebih dahulu untuk melihat detail produk!",
                                                    "warning"
                                                );
                                                return;
                                            }

                                            navigate(`/detail-product/${item.id}`);
                                        }}
                                    >
                                        <CardMenu
                                            name={item.name}
                                            description={item.description}
                                            price={item.price}
                                            image={item.images?.[0]?.image || "/placeholder.png"}
                                            isFlashSale={item.is_flashsale}
                                        >
                                            <div className="flex items-center gap-2">
                                                <p>5</p>
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                <svg key={i} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#2E6B0F"
                                                        d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                                                    />
                                                </svg>
                                            ))}
                                            </div>
                                            
                                        </CardMenu>
                                    </Link>
                                ))}

                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col p-5 gap-4 lg:px-10 xl:px-40">
                    <div className="flex flex-col gap-3 text-center items-center">
                        <h1 className="text-xl font-semibold lg:text-4xl"><span className="text-[#2E6B0F]">Visit Our People </span>in The Spot on The Map Below</h1>
                        <div className="bg-[#2E6B0F] w-15 h-1"></div>
                    </div>
                    <p className="text-sm text-[#4F5665] lg:text-lg lg:text-center">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <img src="https://i.pinimg.com/1200x/f8/c9/d3/f8c9d33eebb98ea1838c656541652a54.jpg" alt="" className="rounded-full"/>
                </div>

                <div className="p-5 bg-gradient-to-t from-[#330601] from-55% to-[#292929] text-white px-5 py-10 gap-6 flex flex-col lg:px-10 xl:px-40 mt-5">
            <h1 className="text-2xl font-bold mb-6 text-center">TESTIMONIALS</h1>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
                <div className="flex flex-col items-center bg-[#2E6B0F] p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <img 
                        src={currentReview.image} 
                        alt={currentReview.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[#2E6B0F]" 
                    />
                    <div className="text-center">
                        <div className="flex gap-4 items-center justify-center mb-2">
                            <div className="w-2 bg-[#2E6B0F] h-10"></div>
                            <h2 className="text-xl font-semibold">{currentReview.name}</h2>
                        </div>
                        <p className="text-gray-300 mb-2">{currentReview.role}</p>
                        <p className="mb-4 italic">"{currentReview.review}"</p>
                        <div className="flex gap-1 items-center justify-center text-[#2E6B0F]">
                            {[...Array(currentReview.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                </svg>
                            ))}
                            <span className="ml-2 text-white">{currentReview.rating}.0</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-[#2E6B0F] p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <img 
                        src={nextReview.image} 
                        alt={nextReview.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[#2E6B0F]" 
                    />
                    <div className="text-center">
                        <div className="flex gap-4 items-center justify-center mb-2">
                            <div className="w-2 bg-[#2E6B0F] h-10"></div>
                            <h2 className="text-xl font-semibold">{nextReview.name}</h2>
                        </div>
                        <p className="text-gray-300 mb-2">{nextReview.role}</p>
                        <p className="mb-4 italic">"{nextReview.review}"</p>
                        <div className="flex gap-1 items-center justify-center text-[#2E6B0F]">
                            {[...Array(nextReview.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                </svg>
                            ))}
                            <span className="ml-2 text-white">{nextReview.rating}.0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                        <div 
                            key={index} 
                            className={`p-1 rounded-full ${index === current || index === current + 1 ? 'bg-[#2E6B0F]' : 'bg-white'}`}
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={prev}
                        className="p-2.5 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z" />
                        </svg>
                    </button>
                    <button 
                        onClick={next}
                        className="p-2.5 bg-[#2E6B0F] rounded-full hover:bg-[#3a7a12] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
            </div>

        </>
    )
}