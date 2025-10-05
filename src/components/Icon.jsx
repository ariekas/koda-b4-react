export function Icon({children,style}){
    return(
        <>
        <button className={style}>
        {children}
        </button>
        </>
    )
}