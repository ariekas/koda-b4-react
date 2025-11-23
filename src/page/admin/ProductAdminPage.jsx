import React, { useEffect, useState } from 'react';
import { Search, Plus, Filter, Edit2, Trash2, X } from 'lucide-react';
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
    const [deleteLoading, setDeleteLoading] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        price: '',
        description: '',
        stock: '',
        categoryProductId: '',
        discountsId: '',
        isFlashSale: false,
        isFavoriteProduct: false
    });

    const [categories, setCategories] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [loadingOptions, setLoadingOptions] = useState(false);

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

    async function fetchCategories() {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/admin/categorys`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCategories(res.data.Data.data || []);
        } catch (err) {
            console.log("Error fetch categories:", err);
        }
    }

    async function fetchDiscounts() {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/admin/discounts`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setDiscounts(res.data.Data || []);
        } catch (err) {
            console.log("Error fetch discounts:", err);
        }
    }

    async function handleOpenEditModal(product) {
        setSelectedProduct(product);
        setEditForm({
            name: product.name || '',
            price: product.price || '',
            description: product.description || '',
            stock: product.stock || '',
            categoryProductId: product.category_products_id || '',
            discountsId: product.discounts_id || '',
            isFlashSale: product.is_flashsale || false,
            isFavoriteProduct: product.is_favorite_product || false
        });
        setShowEditModal(true);

        setLoadingOptions(true);
        await Promise.all([fetchCategories(), fetchDiscounts()]);
        setLoadingOptions(false);
    }

    function handleCloseEditModal() {
        setShowEditModal(false);
        setSelectedProduct(null);
        setEditForm({
            name: '',
            price: '',
            description: '',
            stock: '',
            categoryProductId: '',
            discountsId: '',
            isFlashSale: false,
            isFavoriteProduct: false
        });
    }

    function handleEditFormChange(e) {
        const { name, value, type, checked } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    async function handleSubmitEdit(e) {
        e.preventDefault();

        if (!selectedProduct) return;

        try {
            setEditLoading(true);

            const updateData = {
                name: editForm.name.trim(),
                price: parseFloat(editForm.price),
                description: editForm.description.trim(),
                stock: parseInt(editForm.stock),
                is_flashsale: editForm.isFlashSale,
                is_favorite_product: editForm.isFavoriteProduct
            };

            if (editForm.categoryProductId) {
                updateData.category_products_id = parseInt(editForm.categoryProductId);
            }

            if (editForm.discountsId) {
                updateData.discounts_id = parseInt(editForm.discountsId);
            } else {
                updateData.discounts_id = null;
            }

            console.log("Update Data:", updateData);

            const res = await axios.patch(
                `${import.meta.env.VITE_BASE_URL}/admin/products/${selectedProduct.id}`,
                updateData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            );

            if (res.data.Success) {
                alert('Product updated successfully!');
                handleCloseEditModal();
                await fetchProducts(currentPage);
            }
        } catch (err) {
            console.error("Error updating product:", err);
            alert(err.response?.data?.Message || 'Failed to update product. Please try again.');
        } finally {
            setEditLoading(false);
        }
    }

    async function handleDeleteProduct(productId, productName) {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${productName}"? This action cannot be undone.`
        );

        if (!confirmDelete) return;
        try {
            setDeleteLoading(productId);
            const res = await axios.delete(
                `${import.meta.env.VITE_BASE_URL}/admin/products/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("PRODUCT", res)

            if (res.data.Success) {
                alert('Product deleted successfully!');
                await fetchProducts(currentPage);
            }
        } catch (err) {
            console.error("Error deleting product:", err);
            alert(err.response?.data?.Message || 'Failed to delete product. Please try again.');
        } finally {
            setDeleteLoading(null);
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
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                        </td>

                                        <td className="px-6 py-4">
                                            {Array.isArray(product.images) && product.images.length > 0 ? (
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
                                                <button
                                                    onClick={() => handleOpenEditModal(product)}
                                                    className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(product.id, product.name)}
                                                    disabled={deleteLoading === product.id}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {deleteLoading === product.id ? (
                                                        <div className="w-[18px] h-[18px] border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                                    ) : (
                                                        <Trash2 size={18} />
                                                    )}
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

            {/* EDIT MODAL */}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Edit Product</h2>
                            <button
                                onClick={handleCloseEditModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitEdit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleEditFormChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Price (Rp)
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={editForm.price}
                                        onChange={handleEditFormChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Enter price"
                                        min="0"
                                        step="0.01"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        value={editForm.stock}
                                        onChange={handleEditFormChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Enter stock"
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={editForm.description}
                                    onChange={handleEditFormChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Enter product description"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    {loadingOptions ? (
                                        <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                                            <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    ) : (
                                        <select
                                            name="categoryProductId"
                                            value={editForm.categoryProductId}
                                            onChange={handleEditFormChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Discount (Optional)
                                    </label>
                                    {loadingOptions ? (
                                        <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                                            <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    ) : (
                                        <select
                                            name="discountsId"
                                            value={editForm.discountsId}
                                            onChange={handleEditFormChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        >
                                            <option value="">No Discount</option>
                                            {discounts.map((discount) => (
                                                <option key={discount.id} value={discount.id}>
                                                    {discount.name} ({discount.diskon}%)
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isFlashSale"
                                        checked={editForm.isFlashSale}
                                        onChange={handleEditFormChange}
                                        className="w-4 h-4 text-orange-500 rounded focus:ring-2 focus:ring-orange-500"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Flash Sale</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isFavoriteProduct"
                                        checked={editForm.isFavoriteProduct}
                                        onChange={handleEditFormChange}
                                        className="w-4 h-4 text-orange-500 rounded focus:ring-2 focus:ring-orange-500"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Favorite Product</span>
                                </label>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseEditModal}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    disabled={editLoading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={editLoading}
                                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {editLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Updating...
                                        </>
                                    ) : (
                                        'Update Product'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}