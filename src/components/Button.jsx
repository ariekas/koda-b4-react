export function Button({children, style}){
    return (
        <>
            <button className={`  bg-[#FF8906] text-black py-1.5 rounded-md ${style}`}>
                {children}
            </button>
        </>
    )
}