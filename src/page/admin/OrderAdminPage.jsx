import React, { useState } from 'react';
import { Search, Plus, Filter, Edit2, Trash2, FileText } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function OrderAdminPage() {
    const { setShowSideBarOrder } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const orders = [
        {
            id: 1,
            noorder: "#12354-09893",
            date: '26 January 2023',
            order: ["Hazelnut Latte R 1x", "Caramel Machiato L 1x"],
            status: 'Done',
            total: 40000,
        },
        {
            id: 2,
            noorder: "#12354-09893",
            date: '26 January 2023',
            order: ["Hazelnut Latte R 1x", "Caramel Machiato L 1x"],
            status: 'Done',
            total: 40000,
        },
        {
            id: 3,
            noorder: "#12354-09893",
            date: '26 January 2023',
            order: ["Hazelnut Latte R 1x", "Caramel Machiato L 1x"],
            status: 'Done',
            total: 40000,
        },
        {
            id: 4,
            noorder: "#12354-09893",
            date: '26 January 2023',
            order: ["Hazelnut Latte R 1x", "Caramel Machiato L 1x"],
            status: 'Done',
            total: 40000,
        },
        {
            id: 5,
            noorder: "#12354-09893",
            date: '26 January 2023',
            order: ["Hazelnut Latte R 1x", "Caramel Machiato L 1x"],
            status: 'Done',
            total: 40000,
        }
    ];

    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Order List</h1>
                <div className="flex justify-between items-center">
                    <button onClick={() => setShowSideBarOrder(true)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
                        <Plus size={20} />
                        Add Order
                    </button>

                    <div className="flex items-center gap-4">
                        <div className=" inline-block text-sm items-center">
                            <p className="block text-sm text-gray-600 mb-2">Status</p>
                            <button
                                className=" w-60 pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-between"
                            >
                                <span>All</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transform rotate-180 ">
                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" stroke-width="1" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Search Product</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Product Name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-80 pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div className="mt-7">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
                                <Filter size={20} />
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">No. Order</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {order.noorder}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">{order.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{order.order.map((items, index) => {return(<>
                                    <ul key={index} className='list-disc'>
                                        <li>{items}</li>
                                    </ul>
                                </>)})}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                                    {order.status}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">Rp {order.total.toLocaleString("id-ID")}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                    <button className="p-2 text-amber-950 hover:bg-amber-950/10 rounded-full transition-colors">
                                            <FileText size={18} />
                                        </button>
                                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                        Show 5 product of 100 product
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            Prev
                        </button>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-2 text-sm rounded transition-colors ${currentPage === page
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}