"use client"
import React from 'react';
import NavBar from '../../reusable_components/Navbar/page'; 
import Footer from "../../reusable_components/footer/page"
import Team from "../../reusable_components/team/page"
import Purpose from "../../reusable_components/purpose&value/page"
import SmallNavBar from "../../reusable_components/small_navbar/page";

function MyComponent() {
    return (
        <div>
            <div id='vission' className="w-screen h-screen">
            <div className="hidden sm:block pt-6">
                <NavBar />
            </div>
                <div className="w-screen h-3/5  bg-[url('./images/aboutus.webp')] bg-cover bg-bottom flex items-center justify-center text-white">
                    <h1 className='text-4xl font-bold lg:text-5xl'>About Us</h1>
                </div>
                <div id='values' className="w-full h-2/5 bg-bb flex flex-row items-center justify-center">
                    <div className="w-1/2 h-full bg-[url('./images/about.webp')] hidden sm:hidden md:hidden mdx:hidden lg:block bg-cover bg-bottom"></div>
                    <div className="w-1/2 h-full bg-bb flex items-center justify-center">
                        <div className=''>
                            <h1 className='font-bold md:text-2xl lg:pt-2 mt-12 text-lg pt-10 pb-5'>Our Vision</h1>
                            <h1 className='text-xl animate-slideRight'>“To become an acclaimed institution</h1>
                            <h1 className='text-xl'>and one-stop learning center in Bhutan</h1>
                            <h1 className='text-xl animate-slideRight'>and beyond”</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Objectives' className="w-screen   flex flex-col items-center justify-center space-y-24 ">
                <div className='md:w-screen md:h-10'></div>
                <Purpose  />
            </div>

            {/* OBJECTIVE */}
            <div className=" md:px-10 px-4 py-12 font-[sans-serif] mb-12">
            <h1 className='font-bold md:text-2xl lg:pt-2 text-center mt-12 text-lg mb-6'>OUR OBJECTIVES</h1>
            <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/cardImg.webp" alt="Blog Post 1" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Clear Pathways Between Training Programs</h3>
                    <p className="text-gray-500 ">Emphasize collaboration among courses to ensure trainees and employers understand program objectives and outcomes.</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/hotel-img.webp" alt="Blog Post 2" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Single Point of Contact</h3>
                    <p className="text-gray-500 ">Highlight the  institute's role in providing a transparent interface between practice, policy, education, and research</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Meet Workforce Development Needs</h3>
                    <p className="text-gray-500 ">Showcase the institute's efforts to provide rapid-response workforce training for corporate corporate and government agencies.</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Promote Innovative Research and Training</h3>
                    <p className="text-gray-500 ">Describe the interdisciplinary and collaborative research opportunities offered by the institute.</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Leadership in Industry</h3>
                    <p className="text-gray-500 ">Focus on the institute's role in providing leadership through advocacy, seminars, and training, particularly in tourism and hospitality.</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Professional Development and Consultancy</h3>
                    <p className="text-gray-500 ">Highlight the innovative professional development and consultancy services available.</p>
                    </div>
                </div>
                <div className="bg-white rounded overflow-hidden border">
                    <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Encourage Economic Development</h3>
                    <p className="text-gray-500 ">Describe initiatives aimed at developing rural entrepreneurs and supporting agricultural exports.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>

            
                <Team />
                <div className='mb-12'></div>

                <Footer />
                <SmallNavBar />
        </div>
    );
}

export default MyComponent;
