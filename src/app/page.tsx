"use client";
import React, { useState, useEffect } from 'react'; 
import Footer from "../reusable_components/footer/page";
import SmallNavBar from "../reusable_components/small_navbar/page";
import TestNavbar from "../reusable_components/Navbar/page" 
import Building from "../images/Website Pictures/building.jpg"
import Logo from "../images/Website Pictures/logo.png"
import TVET from "../images/logo/TVET.png"
import RGOB from "../images/logo/2.png"
import MOH from "../images/logo/3.png"
import Business from "../images/expertise/business.png"
import Finance from "../images/expertise/finance.png"
import Research from "../images/expertise/research.png"
import Animation from "../images/expertise/animation.png"
import Writing from "../images/expertise/writing.png"
import Marketing from "../images/expertise/marketing.png"
import Multimedia from "../images/expertise/multimedia.png"
import Training from "../images/expertise/training.png"
import Development from "../images/expertise/development.png"
import Testimonials from "../reusable_components/testimonials/page"
import SmallTestimonials from "../reusable_components/small_testimonials/page"
import Statistics from '@/reusable_components/statistics/page';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const products = [
  {
    id: 1,
    name: 'Product 1',
    href: '#',
    imageSrc: 'https://via.placeholder.com/150',
    imageAlt: 'Product 1',
    price: '$10.00',
    color: 'Red',
  },
  {
    id: 2,
    name: 'Product 2',
    href: '#',
    imageSrc: 'https://via.placeholder.com/150',
    imageAlt: 'Product 2',
    price: '$20.00',
    color: 'Blue',
  },
  // Add more products as needed
];

export default function Home() {
    return (
        <div className=''>
        <div className="hidden sm:block pt-6">
            <TestNavbar />
        </div>
        <div className="w-screen h-96 flex flex-col items-center justify-center md:h-[70vh] lg:h-[75vh] bg-[url('./images/building.jpg')] lg:bg-cover bg-cover">
        <div className="w-48 h-48 md:w-48 md:h-48 lg:w-56 lg:h-56"> {/* Increased logo size for all screen sizes */}
            <Avatar className="w-full h-full border-current m-auto">
                <AvatarImage src={Logo.src} alt="@shadcn" />
            </Avatar>
        </div>
            <h1 className="text-center font-extrabold text-xl md:text-4xl lg:text-4xl text-white animate-slideLeft stroke-black">“To become an acclaimed institution</h1>
            <h1 className="text-center font-extrabold text-lg md:text-3xl lg:text-3xl text-white animate-slideLeft stroke-black">and one-stop learning center in</h1>
            <h1 className="text-center font-extrabold text-lg md:text-3xl lg:text-3xl text-white animate-slideLeft stroke-black">Bhutan and beyond”</h1>
        </div>

        <div className="mt-4 transform">
            <div className="flex justify-center text-center text-lg ">
                <h1 className="font-bold md:text-2xl lg:pt-2 w-2/4 mt-2"> 
                <span className="text-black">Certified Training Institute </span>
                <span className="text-cyan-500">Registered with</span>
                </h1>
            </div>
            <div className="flex items-center justify-center space-x-2 lg:space-x-10 mt-2"> 
                <img src={TVET.src} alt="tvet" className="w-1/3 h-auto md:w-1/6 lg:w-1/6" />
                <img src={RGOB.src} alt="logo2" className="w-1/3 h-auto md:w-1/4 lg:w-1/6 transform translate-y-16" />
                <img src={MOH.src} alt="logo3" className="w-1/4 h-auto md:w-1/6 lg:w-1/6" />
            </div>
        </div>

        <div className="mt-24 ">
            <h1 className="font-bold md:text-2xl lg:pt-2 text-center mb-4 text-lg">Mission</h1>
            <div className="w-screen h-20  flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-cyan-400 rounded flex items-center justify-center">
                        <h1 className="w-3/4 font-medium text-center">Empower individual, community, and organization.</h1>
                    </div>
            </div>
            <div className="w-screen h-20 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-cyan-400 rounded flex items-center justify-center">
                        <h1 className="w-3/4 font-medium text-center">Create enterprises and nurture entrepreneurs .</h1>
                    </div>
            </div>
            <div className="w-screen h-20 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-cyan-400 rounded flex items-center justify-center">
                        <h1 className="w-3/4 font-medium text-center">Contribute towards employment generation.</h1>
                    </div>
                </div>
                <div className="w-screen h-20 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-cyan-400 rounded flex items-center justify-center">
                        <h1 className="w-3/4 font-medium text-center">Develop and improve the rural economy.</h1>
                    </div>
                </div>
                <div className="w-screen h-20  flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-cyan-400 rounded flex items-center justify-center">
                        <h1 className="w-3/4 font-medium text-center">Foster knowledge creation and development.</h1>
                    </div>
                </div>
        </div>

{/* expertise */}
    <h1 className="font-bold md:text-2xl lg:pt-2 text-center mt-12 text-lg">Our Expertise</h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center mt-6 max-w-screen-lg mx-auto ">
        {/* Business */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Business.src} alt="business" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Business</h4>
            </div>
        </div>

        {/* Finance */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Finance.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Finance</h4>
            </div>
        </div>

        {/* Research */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Research.src} alt="research" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Research</h4>
            </div>
        </div>

        {/* Animation */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Animation.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Animation</h4>
            </div>
        </div>

        {/* Writing */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Writing.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Writing</h4>
            </div>
        </div>

        {/* Marketing */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Marketing.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Marketing</h4>
            </div>
        </div>

        {/* Multimedia */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Multimedia.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Multimedia</h4>
            </div>
        </div>

        {/* Training */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Training.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Training</h4>
            </div>
        </div>

        {/* Development */}
        <div className="bg-white p-6 border rounded-lg w-36 h-36 mx-auto">
            <div className="flex items-center justify-center">
                <img src={Development.src} alt="finance" className="object-contain rounded-lg mt-[-10px]" />
            </div>
            <div className="text-center mt-2">
                <h4 className="text-base text-black">Development</h4>
            </div>
        </div>

    </div>

    <div
        className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-16">
        <div className="min-h-[256px]">
        <img src="https://readymadeui.com/Imagination.webp" className="w-full" />
        </div>

        <div className="p-6">
        <h3 className="text-gray-800 text-xl font-bold text-center">Did you know ?</h3>
        <p className="text-lg mb-2">iBEST INSTITUTE is a Registered Training Service Provider under</p>
        <ul className={"list-disc list-inside mb-2"}>
                        <li className="">Department of Occupational Standards</li>
                        <li className="">Ministry of Labor and Human Resources</li>
                        <li className="">Royal Government of Bhutan.</li>
        </ul>
        <div className="flex text-lg ">
                <h1 className="font-bold md:text-2xl lg:pt-2  mt-2"> 
                <span className="text-black mr-2">offers</span>
                <a href="/courses"><span className="text-cyan-500 hover:text-cyan-300 ">Tailor-Made Courses.</span></a>
                </h1>
            </div>
        
    </div>
    </div>

    {/* TESTIMONIALS */}
    <div>   <h1 className="font-bold md:text-2xl lg:pt-2 text-center mt-12 text-lg">Testimonials</h1></div>
    <div className="hidden sm:block pt-6">
    <Testimonials />
    </div>
    <div className="">
        <SmallTestimonials />
    </div>
    <Statistics />
    <div className="w-screen h-24"></div>
    
        <SmallNavBar />
        <Footer />
    </div>
    
    )
}


