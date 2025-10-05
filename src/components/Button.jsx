export function Button({children, style}){
    return (
        <>
            <button className={`${style} w-full bg-[#FF8906] text-black py-1.5 rounded-md`}>
                {children}
            </button>
        </>
    )
}