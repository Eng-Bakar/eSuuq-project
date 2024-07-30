import { useState } from "react"
function Header (){
    const [isOpen,setIsOpen] = useState(false)
    const openBtn = () => {
        setIsOpen(true)
    }
    const closeBtn = () => {
        setIsOpen(false)
    }
    return <div>
        <div className="bg-orange-500 sm:flex sm:justify-between px-[30px] pb-[5px] w-full sm:h-[60px]">
            <h1 style={{display:isOpen == false ? "" : ""}} className="text-white hover:text-black font-bold text-[35px] mt-[0px] "> eSuuq</h1>
            <ul style={{display:isOpen == true ? "none" : ""}} className="sm:flex text-[25px]  sm:text-[20px] text-white mt-[15px] sm:ml-[50px] gap-[20px] font-semibold">
                <li className="hover:text-black "> Home </li>
                <li className="hover:text-black"> Products </li>
                <li className="hover:text-black"> Blog </li>
                <li className="hover:text-black"> About </li>
                <li className="hover:text-black"> Contact </li>
            </ul>
            <i style={{display:isOpen == true ? "none" : ""}} onClick={openBtn} class="fa-solid top-1 absolute right-7 sm:hidden fa-x text-white hover:text-black mt-[15px] text-[30px]"></i>
            <i style={{display:isOpen == true ? "block" : ""}} onClick={closeBtn} class="fa-solid sm:hidden hidden top-1 absolute right-7 fa-bars-staggered text-white hover:text-black mt-[15px] text-[30px]"></i>
            <div className="mt-[13px] sm:flex  justify-between">
                <div className=" sm:ml-[-220px] sm:mt-[13px] mr-[100px] sm:top-0 top-4 sm:flex absolute">
                    <input className="sm:w-[160px] text-[20px] w-[200px] mr-[-20px] sm:mr-[-30px]  px-[8px] outline-none  rounded h-[35px]" type="text" placeholder="Search item" />
                    <i class="fa-solid  fa-magnifying-glass bg-white w-[30px] rounded h-[35px] text-center text-[20px] pt-[8px] mr-[40px]"></i>
                </div>
                <i class="fa-solid fa-cart-shopping mr-[6px] sm:mr-[-40px] absolute top-4  text-[30px]  right-24 mt-[2px] hover:text-white sm:text-[25px]"></i>
            </div>
        </div>
    </div>
}
export default Header 