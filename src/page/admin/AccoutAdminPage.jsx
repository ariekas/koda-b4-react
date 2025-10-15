import React, { useState } from 'react';
import { Search, Plus, Filter, Edit2, Trash2, FileText } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export function AccountAdminPage() {
    const { setShowSideBarAccount } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const accounts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=100&h=100&fit=crop',
            fullname: 'Eleanor Pena',
            phone: '(205) 555-0100',
            address: '3517 W. Gray St. Utica, Pennsylvania 57867',
            email: 'cikaracak@gmail.com',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=100&h=100&fit=crop',
            fullname: 'Ronald Richards',
            phone: '(205) 555-0100',
            address: '3517 W. Gray St. Utica, Pennsylvania 57867',
            email: 'cikaracak@gmail.com',
        },
    ];
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Product List</h1>
                <div className="flex justify-between items-center">
                    <button onClick={() => setShowSideBarAccount(true)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
                        <Plus size={20} />
                        Add Accout
                    </button>

                    <div className="flex items-center gap-4">
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
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Image</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Fullname</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Address</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {accounts.map((items) => (
                            <tr key={items.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={items.image}
                                        alt={items.name}
                                        className="w-14 h-14 rounded-lg object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">{items.fullname}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{items.phone}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{items.address}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{items.email}</td>
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
    )
}