export function Button({children, style, type, onClick}){
    return (
        <>
            <button type={type} className={`  bg-[#FF8906] text-black py-1.5 rounded-md cursor-pointer ${style}`} onClick={onClick}>
                {children}
            </button>
        </>
    )
}