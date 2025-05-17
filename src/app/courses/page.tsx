"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "../../images/logo/images.webp"
import Footer from "@/reusable_components/footer/page"
import TestNavbar from "../../reusable_components/Navbar/page"
import SmallNavBar from "../../reusable_components/small_navbar/page";

export default function TestPage(){
    return (
        <div className="landingpage flex flex-col">
            <div className="hidden sm:block pt-6">
                <TestNavbar />
            </div>
            <div className="w-screen h-screen flex mdx:items-center mdx:justify-center lg:items-center lg:justify-center flex-col">
                <div className="w-screen h-2/5 sm:h-3/5 md:h-1/2 lg:h-1/2 bg-[url('./images/courses1.webp')] bg-cover bg-center flex items-center justify-center">
                    <h1 className="text-white font-extrabold text-4xl md:text-5xl mdx:text-6xl">Courses</h1>
                </div>
                <div className="w-screen h-3/5 lg:h-1/2 text-center space-y-5 md:space-y-10 lg:w-screen max-w-4xl ">
                    <h1 className=" text-lg sm:pt-10 md:text-4xl font-bold text-black pt-5 md:pt-14 lg:text-3xl lg:pt-12 mdx:text-5xl mdx:pt-24">Welcome to iBEST INSTITUTE</h1>
                    <p className=" text-base md:text-2xl text-black m-12 lg:text-xl mdx:text-3xl">One of Bhutan's elite, QMS-certified training hubs, recognized by the Ministry of Labour and Human Resources. Our expert-led courses aren’t just about knowledge, they’re about real-world impact. We break the boundaries of traditional learning, taking you beyond the classroom for hands-on, next-level skills.</p>
                    <p className="text-base sm:p-10 font-semibold md:text-2xl text-black m-5 md:m-16 lg:text-xl mdx:text-3xl">
                        Ready to stay ahead of the game? Join our dynamic programs designed to meet today's fast-evolving workforce demands!
                    </p>
                </div>
            </div>
            <div className="w-screen h-screen flex item-center justify-center">
                <div className="h-screen w-5/6 flex flex-col space-y-3 md:space-y-7 items-center justify-center">
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32 lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Life Skills Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Leadership Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 lg:w-1/2 mdx:h-32  bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Management Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Accounting and Financial Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Entrepreneurship Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Multimedia Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Film Studies Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">Technical and Engineering Courses</a>
                    </div>
                    <div className="w-full h-14 sm:h-20 md:h-24 mdx:h-32  lg:w-1/2 bg-lightBlue rounded relative flex items-center justify-center drop-shadow-md hover:drop-shadow-xl">
                        <a href="" className="md:text-2xl">IT Courses</a>
                    </div>
                </div>  
            </div>
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/leaders.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className=" w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-1 md:space-y-3 lg:space-y-5 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl mdx:text-5xl text-indigo-700 pl-2 lg:text-3xl">Life Skills Courses</h1>
                            <p className="font-medium text-xs sm:text-lg md:text-xl mdx:text-4xl lg:text-lg pl-2 text-gray-700">What You'll Learn:</p>
                            <ul className="list-none space-y-3 text-xs sm:text-base sm:space-y-0 md:text-lg mdx:text-3xl mdx:space-y-0 md:space-y-1 lg:space-y-4 lg:text-lg ">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Integrity:</strong> Uphold honesty and human values.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Boldness:</strong> Foster innovation and leadership.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Empathy:</strong> Build connections through understanding.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Social Responsibility:</strong> Contribute to community growth.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Trust:</strong> Prioritize transparency and accountability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/leaders.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-2 sm:space-y-1 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl mdx:text-5xl text-indigo-700 pl-2 lg:text-3xl">Leadership Courses</h1>
                            <p className="font-medium text-sm sm:text-lg md:text-xl mdx:text-4xl lg:text-lg pl-2 text-gray-700">What You'll Learn:</p>
                            <ul className="list-none space-y-1 text-xs sm:text-base sm:space-y-0 md:text-base md:space-y-3 mdx:text-3xl mdx:space-y-1 lg:space-y-4 lg:text-lg ">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Leadership Empowerment</strong>: Essential tools for leadership.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Soft Skills Development</strong>: Enhance professional growth.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Personality Benchmarks</strong>: Set standards for any career.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Leadership Foundation</strong>: Build a strong leadership base.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Personal Growth</strong>: Promote overall development.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/man.webp')] bg-cover bg-bottom rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-1 mdx:space-y-0 sm:space-y-0 md:space-y-3 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl text-indigo-700 mdx:text-4xl pl-2 lg:text-3xl">Management Courses</h1>
                            <p className="font-medium text-xs md:text-xl sm:text-lg lg:text-lg pl-2 text-gray-700 mdx:text-3xl">What You'll Learn:</p>
                            <ul className="list-none space-y-1 sm:text-base sm:space-y-0 mdx:text-3xl mdx:space-y-0 text-xs md:text-lg md:space-y-1 lg:space-y-4 lg:text-lg ">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Management Package:</strong> Essential for decision-making roles.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Communication Skills:</strong> Master effective communication.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Planning & Organizing:</strong> Key strategies for efficiency.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Leadership:</strong> Develop vital leadership skills.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Management Functions:</strong> Core management processes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/fin.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-ful md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-2 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-base md:text-4xl text-indigo-700 mdx:text-4xl pl-2 lg:text-3xl">Accounting and Financial Courses</h1>
                            <p className="font-medium text-xs sm:text-base md:text-xl mdx:text-3xl lg:text-base pl-2 text-gray-700">What You'll Learn:</p>
                            <ul className="list-none space-y-1 sm:text-base mdx:text-2xl mdx:space-y-2 sm:space-y-0 text-xs md:text-base md:space-y-2 lg:space-y-4 lg:text-lg">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Financial Management: </strong>Build confidence in management</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Accounting Insights:</strong> Practical and theoretical concepts.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Active Learning:</strong> Engage for deeper understanding.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Financial Analysis:</strong> Address complex challenges.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Market Skills:</strong> Apply knowledge in real-world scenarios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/man.webp')] bg-cover bg-bottom rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-1 md:space-y-3 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-3xl text-indigo-700 mdx:text-5xl pl-2 lg:text-3xl">Entrepreneurship Courses</h1>
                            <p className="font-medium text-xs sm:text-lg md:text-xl lg:text-lg pl-2 text-gray-700 mdx:text-4xl">What You'll Learn:</p>
                            <ul className="list-none space-y-1 sm:text-base sm:space-y-0 text-xs md:text-lg mdx:text-2xl mdx:space-y-2 lg:text-lg lg:space-y-4">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Entrepreneurial Concepts:</strong> Learn principles and skills.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Diverse Courses:</strong> Explore business real applications.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Empowered Decisions:</strong> Analyze marketing effectively.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Critical Thinking:</strong> Make informed decisions.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Business Planning:</strong> Formulate a robust business plan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/fin.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-2 sm:space-y-0 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl text-indigo-700 pl-2 lg:text-3xl mdx:text-5xl">Multimedia Courses</h1>
                            <p className="font-medium text-sm sm:text-lg md:text-xl lg:text-lg pl-2 mdx:text-3xl text-gray-700">What You'll Learn:</p>
                            <ul className="list-none sm:text-base text-xs md:text-base md:space-y-1 mdx:text-3xl mdx:space-y-0 lg:text-lg lg:space-y-3">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Expert Learning:</strong> Learn from industry professionals.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Wide Course Range:</strong> Explore diverse multimedia solutions.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Hands-On Practice:</strong> Gain practical skills with equipment.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Creative Development:</strong> Create extraordinary content.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Trusted Leader:</strong> Experience a top multimedia company.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/man.webp')] bg-cover bg-bottom rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-1 md:space-y-3 lg:space-y-3 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl text-indigo-700 pl-2 mdx:text-4xl lg:text-3xl">Film Studies Courses</h1>
                            <p className="font-medium text-xs sm:text-lg md:text-xl lg:text-lg pl-2 text-gray-700 mdx:text-3xl">What You'll Learn:</p>
                            <ul className="list-none space-y-2 sm:text-base sm:space-y-0 text-xs md:text-lg md:space-y-1 lg:space-y-4 mdx:text-3xl lg:text-lg">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Fundamentals:</strong> Basics of film and video production.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Theoretical & Practical:</strong> Theory meets hands-on learning.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Key Aspects:</strong> Essential filmmaking elements.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Practical Experience:</strong> Hands-on skill development.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Cinematic Journey:</strong> Explore film and cinema production.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/fin.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-2 lg:space-y-2 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-2xl text-indigo-700 pl-2 lg:text-3xl mdx:text-4xl ">Technical and Engineering Courses</h1>
                            <p className="font-medium text-sm sm:text-lg md:text-xl lg:text-base pl-2 text-gray-700 mdx:text-4xl">What You'll Learn:</p>
                            <ul className="list-none text-xs space-y-3 sm:text-sm sm:space-y-0 md:text-lg md:space-y-1 lg:space-y-3 mdx:text-3xl mdx:space-y-0 lg:text-lg">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Relevant Courses:</strong> Key areas in engineering field.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Operational Skills:</strong> Basic maintenance techniques.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Theoretical Knowledge:</strong> Concepts of tools and mechanics.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Combined Learning:</strong> Theory and practical approaches.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Essential Skills:</strong> Skills for a tech-driven world.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col">
                <div className="w-screen h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center relative">
                <div className="w-11/12 h-5/6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center drop-shadow-lg hover:drop-shadow-2xl border border-slate-300 hover:border-indigo-300 transition-all duration-300 ease-in-out">
                    <div className="w-2/6 hidden h-full lg:h-2/5 lg:w-full md:flex flex-col space-y-3 items-center justify-center pb-10">
                        <div className="w-11/12 h-2/6 lg:h-3/5 bg-[url('./images/it.webp')] bg-center bg-cover rounded-xl transition-transform transform hover:scale-105 duration-300"></div>
                            <div className="w-11/12 h-1/2 lg:h-1/5 flex flex-col lg:flex-row lg:space-x-4 items-center justify-center space-y-4 lg:justify-start">
                                <div className="w-10 h-20 bg-red-200 md:w-24 md:h-24 lg:w-16 lg:h-16 rounded-full border-2 border-indigo-600 shadow-md overflow-hidden">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src={logo.src} alt="iBEST logo" />
                                        <AvatarFallback>iBEST</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">iBest Institute</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/6 lg:w-11/12 h-full bg-gray-100 rounded-lg  md:p-4 lg:p-6 space-y-1 md:space-y-3 lg:space-y-2 lg:h-3/5">
                            <h1 className="font-extrabold text-sm sm:text-lg md:text-4xl text-indigo-700 pl-2 lg:text-3xl mdx:text-5xl">ICT Courses</h1>
                            <p className="font-medium text-xs sm:text-lg md:text-xl lg:text-lg pl-2 text-gray-700 mdx:text-4xl">What You'll Learn:</p>
                            <ul className="list-none text-xs sm:text-base md:text-lg md:space-y-1 lg:space-y-3 mdx:text-3xl lg:text-lg">
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>IT Education:</strong> Systems, hardware, and operating systems.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Basic Skills:</strong> Proficient in Word, PowerPoint, and Excel.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Advanced Topics:</strong>Digital analytics and programming.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Digital Skills:</strong> Essential for today's tech landscape.</li>
                                <li className="flex items-start"><span className="text-indigo-600 mr-2">✔️</span><strong>Blended Learning:</strong> Integrates online and traditional methods.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full h-32"></div>
            </div>
            <Footer />
            <SmallNavBar />
        </div>
    )
}