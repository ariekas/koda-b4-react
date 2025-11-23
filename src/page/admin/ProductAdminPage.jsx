import React, { useEffect, useState } from 'react';
import { Search, Plus, Filter, Edit2, Trash2 } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function ProductAdminPage() {
    const { setShowSideBarProduct } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = useSelector((s) => s.authReducers.token);

    async function fetchProducts(page = 1) {
        try {
            setLoading(true);
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/admin/products?page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res.data.Data)
            setProducts(res.data.Data.data);
            setPagination({
                page: res.data.Data.page,
                limit: res.data.Data.limit,
                total: res.data.Data.total,
                totalPages: res.data.Data.totalPages,
            });

        } catch (err) {
            console.log("Error fetch products:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Product List</h1>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setShowSideBarProduct(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
                    >
                        <Plus size={20} />
                        Add Product
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
            {loading && (
                <div className="flex justify-center items-center w-full py-10 ">
                    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {!loading && (
                <>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Image</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Desc</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>


                            <tbody className="divide-y divide-gray-200">
                                {products?.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                        </td>

                                        <td className="px-6 py-4">
                                            {product.images?.length > 0 ? (
                                                <img
                                                    src={product.images[0].image}
                                                    className="w-14 h-14 rounded-lg object-cover"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                                    No Img
                                                </div>
                                            )}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">Rp {product.price}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">{product.description}</td>

                                        <td className="px-6 py-4 text-sm text-gray-900">{product.stock}</td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
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

                        {/* PAGINATION */}
                        {pagination && (
                            <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
                                <div className="text-sm text-gray-600">
                                    Page {pagination.page} of {pagination.totalPages}
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                        className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                                    >
                                        Prev
                                    </button>

                                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
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

                                    <button
                                        onClick={() =>
                                            currentPage < pagination.totalPages &&
                                            setCurrentPage(currentPage + 1)
                                        }
                                        className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}


        </>
    );
}