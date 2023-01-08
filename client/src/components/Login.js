import React from 'react'

export default function Navbar() {
    return (
        <div className="container font-poppins justify-center items-center flex flex-col mx-auto w-full mt-32">
            <div className="mb-4 w-full text-center">
                <h2 className="font-bold font-poppins text-darkGreen text-3xl ">Login</h2>
            </div>
            <div className="flex-col items-center justify-center w-1/3">
                <div className="mb-5 flex justify-center">
                    <input className="appearance-none bg-paleGreen w-full border-b border-darkGreen text-gray-700 py-1 px-2 focus:bg-lightGreen focus:outline-none"
                        placeholder="username"
                        type="text"></input>
                </div>
                <div className="mb-10 flex justify-center">
                    <input className="appearance-none bg-paleGreen w-full border-b border-darkGreen text-gray-700 py-1 px-2 focus:bg-lightGreen focus:outline-none"
                        placeholder="password"
                        type="password"></input>
                </div>
                <div className="mb-5 flex justify-center">
                    <button className="bg-transparent hover:text-white border border-darkGreen hover:bg-teal-900 text-darkGreen rounded-full py-2 px-4 transition duration-300" >Sign In</button>
                </div>
                <div className="mb-5 flex justify-center">
                    <a className="text-orange text-sm underline" href='#'>No account? Register here</a>
                </div>
            </div>
        </div>
    )
}