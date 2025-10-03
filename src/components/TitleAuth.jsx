export function TitleAuth({title,desc}){
    return(
        <>
        <div className="flex flex-col gap-5">
            <img src="/public/images/logo.png" alt="" className="w-45"/>
            <h1 className="text-primary">{title}</h1>
            <p className="text-[#4F5665] text-sm ">{desc}</p>
        </div>
        </>
    )
}