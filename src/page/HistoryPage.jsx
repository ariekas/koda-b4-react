import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { useCheckout } from "../context/CheckoutContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export function HistoryPage() {
  const { history } = useCheckout();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(history.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = history.slice(startIndex, startIndex + itemsPerPage);

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  if (history.length === 0) {
    return <p className="text-xl text-center mt-20">Belum ada transaksi.</p>;
  }

  return (
    <div className="pt-30 p-5 lg:px-10 xl:px-40">
      <div className="flex items-center justify-between lg:justify-start gap-5">
        <p className="text-2xl font-semibold">History Order</p>
        <div className="px-2 bg-[#E8E8E8] rounded-md">
          <p>{history.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:mt-5 md:gap-5">
        <div className="flex flex-col col-span-2">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center md:mt-0 my-10 gap-5 lg:gap-0">
            <div className="flex items-center gap-3 bg-gray-100 px-5 py-2 rounded-md text-gray-800 md:order-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none">
                  <path stroke="#000" strokeWidth="1" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" />
                  <path stroke="#000" strokeLinecap="round" strokeWidth="1" d="M7 4V2.5M17 4V2.5M2.5 9h19" />
                  <path fill="#000" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                </g>
              </svg>
              <span className="text-sm font-medium">January 2023</span>
            </div>

            <div className="flex gap-2 items-center bg-[#E8E8E899] p-2 rounded-md">
              <Button style={"bg-white text-xs px-4 py-2"}>On Progress</Button>
              <Button style={"bg-white text-xs px-4 py-2"}>Sending Goods</Button>
              <Button style={"bg-white text-xs px-4 py-2"}>Finish Order</Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {currentItems.length > 0 ? (
              currentItems.map((items) => (
                <div className="bg-gray-100 rounded-md p-4 w-full mb-4" key={items.id}>
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex flex-col gap-3 w-full">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Order ID */}
                        <div className="flex flex-col gap-2">
                          <span className="text-gray-400 text-sm">No. Order</span>
                          <p className="font-semibold text-gray-900 text-sm">#{items.id}</p>
                        </div>

                        {/* Date */}
                        <div className="flex flex-col gap-2">
                          <span className="text-gray-400 text-sm">Date</span>
                          <p className="font-semibold text-gray-900 text-sm">
                            {new Date(items.date).toLocaleDateString('id-ID')}
                          </p>
                        </div>

                        {/* Total */}
                        <div className="flex flex-col gap-2">
                          <span className="text-gray-400 text-sm">Total</span>
                          <p className="font-bold text-gray-900 text-sm">
                            Rp {items.total.toLocaleString("id-ID")}
                          </p>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col gap-2">
                          <span className="text-gray-400 text-sm">Status</span>
                          <span className="bg-orange-100 text-[#FF8906] px-3 py-1 text-xs font-semibold rounded-full inline-block w-fit">
                            On Progress
                          </span>
                        </div>
                      </div>

                      <div className="col-span-2 lg:col-span-1 flex items-end">
                        <Link
                          to={`/detail-order/${items.id}`}
                          className="text-[#FF8906] text-sm font-semibold underline underline-offset-2"
                        >
                          View Order Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 mt-5">Tidak ada data di halaman ini.</p>
            )}
          </div>

          <div className="flex gap-3 items-center justify-center my-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#000" d="M20 12H7.75L13 6.75l-.66-.75l-6.5 6.5l6.5 6.5l.66-.75L7.75 13H20z" />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
        ${currentPage === i + 1 ? "bg-[#FF8906] text-white" : "bg-[#E8E8E8] text-black"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#000" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-sm lg:col-span-1 h-fit">
          <img src="/icon.png" alt="" className="w-1/6" />
          <p className="text-lg font-bold text-[#4F5665]">Send Us Message</p>
          <p className="text-sm text-gray-600">
            If you're unable to find an answer or your product quickly, please describe your problem
            and tell us. We will give you a solution.
          </p>
          <Button style={"bg-[#FF8906] items-center w-full text-sm"}>
            Apply Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
