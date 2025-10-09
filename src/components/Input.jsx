/**
 * @component
 * @param {Object} props
 * @param {string} props.label - Teks label.
 * @param {React.ReactNode} [props.leftIcon] - Ikon opsional yang ditampilkan di sisi kiri input.
 * @param {React.ReactNode} [props.rightIcon] - Ikon opsional yang ditampilkan di sisi kanan input.
 * @returns {JSX.Element}
 */
export function Input({ label, leftIcon, rightIcon, ...atr }) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <label htmlFor={atr.name} className="text-[#0B132A] text-sm font-semibold">{label}</label>
            <div className="relative w-full">
                {/* Icon kiri */}
                {leftIcon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {leftIcon}
                    </div>
                )}

                <input
                    {...atr}
                    id={atr.name}
                    className={`w-full py-2 border border-gray-300 rounded-lg text-xs text-[#4F5665]
                    ${leftIcon ? "pl-11" : "pl-3"} 
                    ${rightIcon ? "pr-10" : "pr-3"}`}
                />

                {/* Icon kanan */}
                {rightIcon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
        </div>
    )
}
