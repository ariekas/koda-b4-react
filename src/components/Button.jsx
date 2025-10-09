/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - Konten yang akan ditampilkan di dalam tombol.
 * @param {string} [props.style] - ClassName tambahan untuk menyesuaikan styling tombol (opsional).
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Tipe tombol, default adalah 'button'.
 * @param {function} [props.onClick] - Fungsi callback yang dipanggil saat tombol diklik (opsional).
 * @returns {JSX.Element}
 */

export function Button({children, style, type, onClick}){
    return (
        <>
            <button type={type} className={`  bg-[#FF8906] text-black py-1.5 rounded-md cursor-pointer ${style}`} onClick={onClick}>
                {children}
            </button>
        </>
    )
}