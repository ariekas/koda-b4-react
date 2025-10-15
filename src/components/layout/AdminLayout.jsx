import { Outlet, useLocation } from "react-router-dom"
import { X, Image, User, MapPin, Phone, CreditCard, Truck, Package, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';


export function AdminLayout() {
    const [showSideBarProduct, setShowSideBarProduct] = useState(false)
    const [showSideBarOrder, setShowSideBarOrder] = useState(false)
    const [showSideBarAccount, setShowSideBarAccount] = useState(false)
    const location = useLocation()

    const isProductPage = location.pathname === "/admin/product"
    const isOrderPage = location.pathname === "/admin/order"
    const isAccoutPage = location.pathname === "/admin/accout"


    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-1 relative">
                    <div className="pl-10 border-r border-gray-300">
                        <SideBarLeft />
                    </div>
                    <main className="flex-1 relative bg-white p-10 transition-colors duration-300">
                        <div
                            className="relative z-0 transition-colors duration-300"
                        >
                            <Outlet context={{ setShowSideBarProduct, setShowSideBarOrder, setShowSideBarAccount }} />
                        </div>
                        {showSideBarProduct && (
                            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none rounded-lg" />
                        )}
                        {showSideBarOrder && (
                            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none rounded-lg" />
                        )}
                        {showSideBarAccount && (
                            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none rounded-lg" />
                        )}
                    </main>
                    {isProductPage && showSideBarProduct && (
                        <div className="border-l border-gray-300 z-20 absolute right-0 w-auto bg-white">
                            <SideBarProduct setShowSideBarProduct={setShowSideBarProduct} />
                        </div>
                    )}
                    {isOrderPage && showSideBarOrder && (
                        <div className="border-l border-gray-300 z-20 absolute right-0 w-auto bg-white">
                            <SideBarOrder setShowSideBarOrder={setShowSideBarOrder} />
                        </div>
                    )}
                    {isAccoutPage && showSideBarAccount && (
                        <div className="border-l border-gray-300 z-20 absolute right-0 w-auto bg-white">
                            <SideBarAccount setShowSideBarAccount={setShowSideBarAccount} />
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export function Navbar() {
    return (
        <>
            <div className="w-full px-10 py-3 flex justify-between border border-gray-300">
                <div>
                    <img src="/logo.png" alt="" />
                </div>
                <div className="flex gap-5 items-center">
                    <button className="hidden lg:flex bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z" />
                        </svg>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
                    </svg>
                    <img src="/profle.png" alt="" className="w-10 h-10" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transform rotate-180" >
                        <path fill="none" stroke="#3b3a3a" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" stroke-width="1" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export function SideBarLeft() {
    return (
        <>
            <div className="px-2 py-4 w-xs flex flex-col  justify-between h-screen">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#3b3a3a" d="M3.5 3.5h7v7h-7zm1 1v5zm9-1h7v7h-7zm1 1v5zm-11 9h7v7h-7zm1 1v5zm12-1h1v3h3v1h-3v3h-1v-3h-3v-1h3zm-2-9v5h5v-5zm-10 0v5h5v-5zm0 10v5h5v-5z" />
                        </svg>
                        <p>Dashboard</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                            <g fill="none" stroke="#242323" stroke-linejoin="round" stroke-width="2">
                                <path d="M44 14L24 4L4 14v20l20 10l20-10z" />
                                <path stroke-linecap="round" d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19" />
                            </g>
                        </svg>
                        <p>Product</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <g fill="none" stroke="#242323" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                <path d="M6.45 9.23h11.1a1.85 1.85 0 0 1 1.85 1.85v6.472a3.7 3.7 0 0 1-3.7 3.698H8.3a3.7 3.7 0 0 1-3.7-3.698V11.08a1.85 1.85 0 0 1 1.85-1.85" />
                                <path d="M16.625 11.553V7.381a4.62 4.62 0 0 0-2.852-4.278a4.627 4.627 0 0 0-6.398 4.278v4.172" />
                            </g>
                        </svg>
                        <p>Order</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <g fill="none" stroke="#242323" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0" />
                            </g>
                        </svg>
                        <p>User</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#FF8906] p-2 rounded-lg hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9" stroke-width="1" />
                        </svg>
                        <p>Keluar</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export function SideBarProduct({ setShowSideBarProduct }) {
    const [selectedSize, setSelectedSize] = useState('');
    const sizes = ['R', 'L', 'XL', '250 gr', '500gr'];
    return (
        <>
            <div className="h-screen flex flex-col bg-white rounded-lg shadow-sm w-lg">
                <div className="flex items-center justify-between p-4 ">
                    <h1 className="text-lg font-semibold text-gray-900">Add Product</h1>
                    <button className="text-red-500 hover:text-red-600" onClick={() => setShowSideBarProduct(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Photo Product
                        </label>
                        <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                            <Image className="w-6 h-6 text-gray-400" />
                        </div>
                        <button className="mt-3 px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors">
                            Upload
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Product name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Product Name"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Price
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Product Price"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder="Enter Product Description"
                            rows="5"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Product Size
                        </label>
                        <div className="grid grid-cols-5 gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2.5 text-sm font-medium rounded-lg border transition-colors ${selectedSize === size
                                        ? 'bg-orange-500 text-white border-orange-500'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Stock
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter Product Stock"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                        Save Product
                    </button>
                </div>
            </div>
        </>
    )
}

export function SideBarOrder({ setShowSideBarOrder }) {
    const [status, setStatus] = React.useState('On progress');

    return (
        <div className="h-screen flex flex-col bg-white rounded-lg shadow-sm w-lg">
            <div className=" px-6 pt-5 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">Order #12354-09893</h1>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors" onClick={() => setShowSideBarOrder(false)}>
                    <X size={24} />
                </button>
            </div>

            <div className="px-6 pt-3">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Information</h2>

                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <User size={18} />
                            <span className="text-sm">Full Name</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Ghaluh Wizard Anggoro</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <MapPin size={18} />
                            <span className="text-sm">Address</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Griya bandung indah</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Phone size={18} />
                            <span className="text-sm">Phone</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">082116304338</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <CreditCard size={18} />
                            <span className="text-sm">Payment Method</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Cash</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Truck size={18} />
                            <span className="text-sm">Shipping</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Dine In</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Package size={18} />
                            <span className="text-sm">Status</span>
                        </div>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                            <option>On progress</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Total Transaksi</span>
                    <span className="text-lg font-bold text-orange-500">Idr 40.000</span>
                </div>
            </div>

            <div className="px-6 py-6 ">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Order</h2>

                <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=100&h=100&fit=crop"
                            alt="Hazelnut Latte"
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">Hazelnut Latte</h3>
                            <p className="text-xs text-gray-500 mb-2">2pcs | Regular | Ice | Dine In</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm line-through text-gray-400">IDR40.000</span>
                                <span className="text-sm font-bold text-orange-500">IDR 20.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=100&h=100&fit=crop"
                            alt="Caramel Machiato"
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">Caramel Machiato</h3>
                            <p className="text-xs text-gray-500 mb-2">2pcs | Regular | Ice | Dine In</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm line-through text-gray-400">IDR40.000</span>
                                <span className="text-sm font-bold text-orange-500">IDR 20.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 py-6">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                    Update
                </button>
            </div>
        </div>
    )
}

export function SideBarAccount({ setShowSideBarAccount }) {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('normal');
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-white rounded-lg shadow-sm w-lg p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">User List</h1>
                <button className="text-red-500 hover:bg-red-50 rounded-full p-2 transition" onClick={() => setShowSideBarAccount(false)}>
                    <X size={24} />
                </button>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image User
                </label>
                <div className="flex items-start gap-3 flex-col ">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-200">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <Image className="text-gray-400" size={32} />
                        )}
                    </div>
                    <label className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg cursor-pointer transition font-medium">
                        Upload
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
            </div>

            {/* Full Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                </label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="tel"
                        placeholder="Enter Your Number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                        Set New Password
                    </button>
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>

            {/* Address */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                </label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Enter Your Address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Type of User */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of User
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setUserType('normal')}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition ${userType === 'normal'
                            ? 'border-orange-500 bg-orange-50 text-orange-600'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                            }`}
                    >
                        Normal User
                    </button>
                    <button
                        onClick={() => setUserType('admin')}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition ${userType === 'admin'
                            ? 'border-orange-500 bg-orange-50 text-orange-600'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                            }`}
                    >
                        Admin
                    </button>
                </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg">
                Add User
            </button>
        </div>
    );
}

