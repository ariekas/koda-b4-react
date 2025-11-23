import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useSelector } from "react-redux";

export function HistoryPage() {
  const token = useSelector((s) => s.authReducers.token);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  // const [month, setMonth] = useState("");
  const [status, setStatus] = useState("");

  const fetchHistory = async () => {
    setLoading(true);
    try {
      // const query = new URLSearchParams({ page, limit, month, status });
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/historys`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      console.log("HISTORY", data.Data.data)

      if (data.Success) {
        setHistoryData(data.Data.data || []);
        setTotalPages(data.Data.total);
      } else {
        setHistoryData([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error fetching history:", err);
      setHistoryData([]);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) fetchHistory();
  }, [token]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (historyData.length === 0) {
    return <p className="text-xl text-center mt-20">Belum ada transaksi.</p>;
  }

  return (
    <div className="pt-10 p-5 lg:px-10 xl:px-40">
      <div className="flex items-center justify-between lg:justify-start gap-5 mb-5 lg:mt-20">
        <p className="text-2xl font-semibold">History Order</p>
        <div className="px-2 bg-[#E8E8E8] rounded-md">
          <p>{historyData.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
        <div className="flex flex-col col-span-2">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center my-5 gap-5 lg:gap-0">
            <div className="flex items-center gap-3 bg-gray-100 px-5 py-2 rounded-md text-gray-800 md:order-2">
              {/* <span className="text-sm font-medium">{month ? `Month: ${month}` : "All Months"}</span> */}
            </div>

            <div className="flex gap-2 items-center bg-[#E8E8E899] p-2 rounded-md">
              <Button style={`bg-white text-xs px-4 py-2 ${status === "1" ? "bg-[#2E6B0F] text-white" : ""}`} onClick={() => setStatus("1")}>On Progress</Button>
              <Button style={`bg-white text-xs px-4 py-2 ${status === "2" ? "bg-[#2E6B0F] text-white" : ""}`} onClick={() => setStatus("2")}>Sending Goods</Button>
              <Button style={`bg-white text-xs px-4 py-2 ${status === "3" ? "bg-[#2E6B0F] text-white" : ""}`} onClick={() => setStatus("3")}>Finish Order</Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {historyData.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-md p-4 w-full mb-4">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-400 text-sm">No. Order</span>
                        <p className="font-semibold text-gray-900 text-sm">#{item.id}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-400 text-sm">Date</span>
                        <p className="font-semibold text-gray-900 text-sm">{new Date(item.date).toLocaleDateString('id-ID')}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-400 text-sm">Total</span>
                        <p className="font-bold text-gray-900 text-sm">Rp {item.total.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-400 text-sm">Status</span>
                        <span className="bg-orange-100 text-[#2E6B0F] px-3 py-1 text-xs font-semibold rounded-full inline-block w-fit">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex items-end">
                      <Link
                        to={`/detail-order/${item.id}`}
                        className="text-[#2E6B0F] text-sm font-semibold underline underline-offset-2"
                      >
                        View Order Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-center justify-center my-10">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                  ${page === i + 1 ? "bg-[#2E6B0F] text-white" : "bg-[#E8E8E8] text-black"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="w-10 h-10 flex items-center justify-center bg-[#E8E8E8] rounded-full disabled:opacity-50"
            >
              Next
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
          <Button style={"bg-[#2E6B0F] items-center w-full text-sm"}>
            Apply Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
