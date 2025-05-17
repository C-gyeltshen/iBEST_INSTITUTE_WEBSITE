"use client"

import pic1 from '../images/1.jpeg'
import pic2 from '../images/2.jpg'
import pic3 from '../images/3.jpeg'
import pic4 from '../images/4.webp'
import pic5 from '../images/5.jpg'
import pic6 from '../images/6.jpg'
import pic7 from '../images/7.jpeg'
import pic8 from '../images/8.jpg'
import pic9 from '../images/9.webp'
import pic10 from '../images/10.webp'
import pic11 from '../images/11.webp'
import pic12 from '../images/12.png'
import pic13 from '../images/13.jpg'
import pic14 from '../images/14.jpg'
import pic15 from '../images/15.jpg'
import Image from 'next/image'; 
import Footer from "@/reusable_components/footer/page"
import TestNavbar from "../../reusable_components/Navbar/page"
import SmallNavBar from "@/reusable_components/small_navbar/page"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function TestConsultancy (){
    return (
        <div className="landingpage">
            <div className="hidden sm:block pt-6">
                <TestNavbar />
            </div>
            <div className="w-screen h-screen flex flex-col">
                <div className="w-screen h-2/5 sm:h-3/5 mdx:h-3/5 lg:h-3/5 bg-red-50  bg-[url('./images/this.png')] bg-cover bg-center flex items-center justify-center ">
                    <h1 className="text-white font-extrabold text-3xl md:text-6xl lg:text-4xl mdx:text-6xl">Consultancy</h1>
                </div>
                <div className="w-screen h-3/5 lg:h-2/5 text-center">
                    <h1 className="text-2xl md:text-4xl md:p-10 font-bold pt-7 md:pt-16 lg:p-5 lg:pt-5 lg:text-3xl mdx:pt-20 sm:pt-16">Welcome to iBEST Consultancy Services</h1>
                    <p className="p-5 text-lg md:text-3xl md:pr-10 md:pl-10 md:pb-10 lg:text-2xl lg:pl-32 lg:pr-32 lg:pb-3 mdx:text-4xl">Empowering Bhutan's future since 2014, we've guided over <strong>500 clients</strong> toward success. Our mission is to drive national growth by helping individuals and businesses reach their full potential.</p>
                    <p className="text-lg font-semibold md:text-3xl md:pt-5 lg:text-2xl lg:pt-0 mdx:text-4xl">"Together, let's build a brighter Bhutan."</p>
                    <h1 className="text-2xl pt-10 sm:pt-16 font-bold md:text-4xl md:pt-16 lg:text-3xl lg:pt-14 mdx:text-5xl mdx:pt-32">Why iBEST</h1>
                </div>
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="h-screen w-11/12 md:w-10/12 lg:w-3/5 flex flex-col items-center justify-center">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-xs sm:text-sm lg:text-lg">With the increasing economic activities in the country, and most youth joining the workforce, the need to guide and assist young entrepreneurs and small business establishment is becoming a necessity!</h1>
                        <h1 className="text-xs sm:text-sm lg:text-lg">Through iBEST Consultancy Services, with the team of energetic and enthusiastic experts, we provide our clients with real-time market studies and analysis through which project's feasibility are done. We advise and recommend our clients on the projects they want to execute and the pertinent business processes they have to integrate to make their projects successful.</h1>
                        <h1 className="text-xs sm:text-sm lg:text-lg">Beyond business project proposal writing with strong financial background, we do help and write project proposals for grant applications which are mainly required by the Civil Society Organizations.</h1>
                    </div>
                    <h1 className="text-sm font-semibold pt-7 md:text-2xl pb-3 mdx:text-4xl sm:text-2xl">OUR COMPETENCIES</h1>
                    <div className="w-full h-1/2 md:h-3/5 bg-red-50 grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5">
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic1} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-Black text-center">Feasibility Studies</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic2} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-Black text-center">Grant & Business Project Proposal Writing</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic3} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Business Planning & Evaluaion</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic4} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Financial Analysis & Bookkeeping</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic5} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Income Tax Preparation & Filing (PIT, BIT, CIT)</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic6} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Website, Mobile App & Software Development</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic10} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Animation (2D and 3D) & Visual Effects (VFX)</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic8} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Grant Business Project & Proposal Writing</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic9} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Sound Recording & Music Composition</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic7} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Cinematography & Visual Editing</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic11} 
                                alt=""                                     
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Brand Management & Digital Marketing</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic12} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Entrepreneurship Development</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic13} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Content, Screenplay, Script Writing</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic14} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Editing & Proofreading</p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-lg bg-cover bg-center relative group">
                            <Image 
                                src={pic15} 
                                alt="" 
                                className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-black text-center">Market Studies & Strategic Marketing Plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="h-screen w-11/12 md:w-10/12 lg:w-3/5 flex items-center justify-center flex-col space-y-5">
                    <h1 className="text-sm font-semibold pt-28 md:pt-44 lg:pt-10 md:text-2xl pb-3 mdx:text-4xl mdx:pt-10 sm:pt-0 sm:text-2xl">OUR EXPERIENCES</h1>
                    <h1 className="text-xs md:text-lg mdx:text-2xl sm:text-sm lg:text-lg">Since the humble inception of our company, iBESTers as a team have delivered numerous successful project proposals to set up businesses of various categories. Our clients go as far as Trashigang in the far eastern region to Bumthang, Trongsa, and Zhemgang in the center to Sarpang and Samtse in the south to the western dzongkhags.</h1>
                    <div className="w-full h-2/5">
                        <div className="w-full h-full rounded flex flex-row space-x-2">
                            <div className="w-1/2 h-full rounded">
                                <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-full items-center justify-center p-6 bg-[url('./images/c1.jpg')] bg-cover">
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle />
                                    <ResizablePanel defaultSize={50}>
                                        <div className="h-full items-center justify-center p-6 flex flex-col">
                                            <p className='text-white text-sm mdx:text-2xl lg:text-xl'>We have assisted our satisfied clients through the simple process of availing trade license and environmental clearances.</p>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </div>
                            <div className="w-1/2 h-full">
                                <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-full items-center justify-center p-6 bg-[url('./images/cc2.webp')] bg-cover">
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle />
                                    <ResizablePanel defaultSize={50}>
                                        <div className="h-full items-center justify-center p-6 flex flex-col">
                                            <p className='text-white text-sm mdx:text-2xl lg:text-xl'>We mentor clients from setup to operation, and they continue to seek our expertise.</p>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xs md:text-lg mdx:text-2xl sm:text-sm lg:text-lg">We've successfully established FDI projects and helped agencies secure funding from relevant organizations. Our services include feasibility studies, OMP development, and creating business plans for government entities. Additionally, we provide design, translation, and editing support for our clients' publications.</h1>
                </div>
            </div>
            <Footer/>
            <SmallNavBar/>
        </div>
    )
}