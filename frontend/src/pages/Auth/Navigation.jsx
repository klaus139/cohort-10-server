import {useState} from 'react'
import './navigation.css'
import {Link} from "react-router-dom"
import { House, ShoppingCart, ShoppingBag, Heart } from 'lucide-react';



const Navigation = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [userInfo, setUserInfo] = useState(true)
    const [dropdownOpen, setDropDownOpen] = useState(false);

    const toggleDropdown = ()=> {
        setDropDownOpen(!dropdownOpen)
    }

  

  return (
    <div style={{zIndex:9999}} className={`${showSidebar ? "hidden" : "flex"} xl:flex lg:flex md:hidden flex-col justify-between p-4 text-white bg-[#000] w-[4%] hover:w-[15%] h-[100vh] fixed`} id='navigation-container'>
        <div className='flex flex-col justify-center space-y-4'>
            {
                dropdownOpen && (<p className='text-7xl '>open</p>)
            }
            <div
            className='flex items-center  transition-transform transform hover:translate-x-2'
            >
                <House className='mr-2 cursor-pointer mt-[3rem]'/>
                <span className='hidden cursor-pointer nav-item-name mt-[3rem]'>HOME</span>{" "}
            </div>

            <div
            className='flex items-center  transition-transform transform hover:translate-x-2'
            >
                <ShoppingCart className='mr-2 cursor-pointer mt-[3rem]'/>
                <span className='hidden cursor-pointer nav-item-name mt-[3rem]'>SHOP</span>{" "}
            </div>

            <div
            className='flex items-center  transition-transform transform hover:translate-x-2'
            >
                <ShoppingBag className='mr-2 cursor-pointer mt-[3rem]'/>
                <span className='hidden cursor-pointer nav-item-name mt-[3rem]'>CART</span>{" "}
            </div>

            <div className='flex relative'>
                <div className='flex justify-center items-center transition-transform transform hover:translate-x-2'>
                    <Heart className='mr-2 cursor-pointer mt-[3rem]'/>
                    <span className='hidden nav-item-name cursor-pointer mt-[3rem]'>Favorites</span> {" "}

                </div>

            </div>

        </div>

        <div className='relative'>
            <button onClick={toggleDropdown} className='flex items-center text-gray-700 focus:outline-none'>
                {
                    userInfo ? (
                        <span className='text-white'>Klaus</span>
                    ):(
                        <></>
                    )
                }
                {userInfo && (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 ${
                      dropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                )}


            </button>

        </div>



    </div>
  )
}

export default Navigation