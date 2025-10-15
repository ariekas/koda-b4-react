import { Icon } from "./Icon"

export function Footer() {
    return (
        <>
            <div className="flex flex-col p-5 lg:px-10 xl:px-40 gap-4 bg-[#F8F8F8] lg:flex-row lg:justify-between lg:gap-0 lg:items-start">
                <div className="flex flex-col gap-2">
                    <img src="/logo.png" alt="" className="w-[55%] md:w-[30%] lg:w-[50%]" />
                    <p className="text-[#4F5665] text-sm lg:w-sm">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                </div>
                <div className="flex flex-col gap-5">
                        <h1 className="text-lg font-semibold">Product</h1>
                        <p className="text-sm text-[#4F5665]" >Our Product</p>
                        <p className="text-sm text-[#4F5665]">Pricing</p>
                        <p className="text-sm text-[#4F5665]">Locations</p>
                        <p className="text-sm text-[#4F5665]">Countries</p>
                        <p className="text-sm text-[#4F5665]">Blog</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-lg font-semibold">Product</h1>
                        <p className="text-sm text-[#4F5665]">Our Product</p>
                        <p className="text-sm text-[#4F5665]">Pricing</p>
                        <p className="text-sm text-[#4F5665]">Locations</p>
                        <p className="text-sm text-[#4F5665]">Countries</p>
                        <p className="text-sm text-[#4F5665]">Blog</p>
                    </div>
                <div className="flex gap-4 flex-col">
                    <h1 className="font-semibold text-lg">Social Media</h1>
                    <div className="flex gap-5">
                        <Icon style={"p-2 bg-[#FF8906] rounded-full"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#000" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                            </svg>
                        </Icon>
                        <Icon style={"p-2 bg-[#FF8906] rounded-full"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#000" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12" />
                            </svg>
                        </Icon>
                        <Icon style={"p-2 bg-[#FF8906] rounded-full"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#000" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                            </svg>
                        </Icon>
                    </div>
                </div>
            </div>
            <h1 className="text-md text-[#AFB5C0] bg-[#F8F8F8] text-center mb-10">©2020CoffeeStore</h1>
        </>
    )
}