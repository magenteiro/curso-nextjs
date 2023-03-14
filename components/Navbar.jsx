// Componente importado de https://www.floatui.com/components/navbars/
import Categories from "./navbar/Categories";
import ProfileDropDown from "./navbar/ProfileDropdown";
import ButtonNav from "./navbar/ButtonNav";
import Image from "next/image";


export default function Navbar() {
  
    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
                <div className="flex-none lg:flex-initial">
                    <a href="/">
                        <Image src='https://magento2.magenteiro.com/static/frontend/Magento/luma/en_US/images/logo.svg' alt='Luma store' width={120} height={50} priority />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div
                        className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none `}>
                        <Categories/>
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Encontre um produto"
                            />
                        </form>
                        <ProfileDropDown
                            className="hidden lg:block"
                        />
                        <ButtonNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}