import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export function DashboardAdminPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState("16 - 23 January 2023");

    const dateRanges = [
        "16 - 23 January 2023",
        "24 - 31 January 2023",
        "1 - 8 February 2023",
        "9 - 16 February 2023",
    ];

    const handleSelect = (range) => {
        setSelectedRange(range);
        setIsOpen(false);
    };

    const products = [
        { no: 1, name: "Caramel Machiato", sold: "300 Cup", profit: "IDR 9.000.000" },
        { no: 2, name: "Hazelnut Latte", sold: "200 Cup", profit: "IDR 8.000.000" },
        { no: 3, name: "Kopi Susu", sold: "100 Cup", profit: "IDR 7.000.000" },
        { no: 4, name: "Espresso Supreme", sold: "90 Cup", profit: "IDR 6.000.000" },
        { no: 5, name: "Caramel Velvet Latte", sold: "80 Cup", profit: "IDR 5.000.000" },
        { no: 6, name: "Hazelnut Dream Brew", sold: "70 Cup", profit: "IDR 4.000.000" },
        { no: 7, name: "Vanilla Silk Mocha", sold: "60 Cup", profit: "IDR 3.000.000" },
        { no: 8, name: "Dark Roast Delight", sold: "50 Cup", profit: "IDR 2.000.000" },
        { no: 9, name: "Ethiopian Yirgacheffe Euphoria", sold: "40 Cup", profit: "IDR 1.000.000" },
        { no: 10, name: "Indonesian Sumatra Reserve", sold: "30 Cup", profit: "IDR 500.000" },
    ];

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-7">
                    <div className="bg-[#6FC276] p-5 text-white rounded-lg flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                                    <path fill="#FF8906" stroke-width="10" stroke="#FF8906" d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0" />
                                </svg>
                            </div>
                            <p className="text-lg">Order On Progress</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">200</p>
                            <div className="flex items-center gap-1">
                                <p className="text-sm">+11.01%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                    <path fill="#f2f1ef" d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8" stroke-width="25.5" stroke="#f2f1ef" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#6C69D4] p-5 text-white rounded-lg flex flex-col gap-3  w-full">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                                    <path fill="#FF8906" stroke-width="10" stroke="#FF8906" d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0" />
                                </svg>
                            </div>
                            <p className="text-lg">Order On Progress</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">200</p>
                            <div className="flex items-center gap-1">
                                <p className="text-sm">+11.01%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                    <path fill="#f2f1ef" d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8" stroke-width="25.5" stroke="#f2f1ef" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#C56FBC] p-5 text-white rounded-lg flex flex-col gap-3  w-full">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                                    <path fill="#FF8906" stroke-width="10" stroke="#FF8906" d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0" />
                                </svg>
                            </div>
                            <p className="text-lg">Order On Progress</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">200</p>
                            <div className="flex items-center gap-1">
                                <p className="text-sm">+11.01%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                    <path fill="#f2f1ef" d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8" stroke-width="25.5" stroke="#f2f1ef" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-200 p-7 rounded-md">
                    <div className="items-center flex justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">Total Penjualan</p>
                            <p>1000 cup ( 16 - 23 January 2023 )</p>

                        </div>
                        <div className="relative inline-block text-sm">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                                    <path fill="#000" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" stroke-width="25.5" stroke="#000" />
                                </svg>
                                <span>{selectedRange}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transform rotate-180">
                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" stroke-width="1" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    <ul className="py-1">
                                        {dateRanges.map((range, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelect(range)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {range}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <Chart />
                </div>
                <div className="border border-gray-200 p-7 rounded-md">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Produk Terlaris</p>
                        <div className="relative inline-block text-sm">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                                    <path fill="#000" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" stroke-width="25.5" stroke="#000" />
                                </svg>
                                <span>{selectedRange}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transform rotate-180">
                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5" stroke-width="1" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    <ul className="py-1">
                                        {dateRanges.map((range, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelect(range)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {range}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="py-3 px-6 font-medium">No</th>
                                    <th className="py-3 px-6 font-medium">Nama Produk</th>
                                    <th className="py-3 px-6 font-medium">Terjual</th>
                                    <th className="py-3 px-6 font-medium">Keuntungan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } text-gray-700 hover:bg-gray-100 transition`}
                                    >
                                        <td className="py-4 px-6 font-medium">{item.no}</td>
                                        <td className="py-4 px-6">{item.name}</td>
                                        <td className="py-4 px-6">{item.sold}</td>
                                        <td className="py-4 px-6 font-semibold text-green-600">
                                            {item.profit}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Chart() {

    const chartData = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei"],
        datasets: [
            {
                label: "Keuntungan",
                data: [300, 400, 200, 500, 600],
                borderColor: "#00A700",
                fill: true,
                tension: 0.3,
                pointBackgroundColor: "#00A700",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="w-full h-[30rem]">
            <Line data={chartData} options={options} />
        </div>
    );
}
