import React from 'react'

export default function Navbar() {
    return (
        <nav className="relative container p-6 mx-auto">
            <div className="flex items-center justify-between">
                <div className="pt-2 text-center">
                    <a href="#" className="font-poppins font-bold text-darkGreen text-xl " >Drone Drop <br /> Delivery</a>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="transition duration-150 font-poppins font-normal hover:text-darkGreen" >Login</a>
                    <a href="#" className="transition duration-150 font-poppins font-normal hover:text-darkGreen">About</a>
                </div>
                <a href="" className="p-3 px-6 pt-2 font-poppins text-white bg-darkGreen rounded-full baseline transition duration-300 hover:bg-teal-900">Get Started</a>
            </div>
        </nav>
    )
}