"use client";
import React, { useState, useEffect } from 'react';   
import TestNavbar from "../../reusable_components/Navbar/page" 
import dynamic from 'next/dynamic';
import SmallNavBar from "../../reusable_components/small_navbar/page";
import Insta from "../../images/footer/instagram.webp";
import Insta2 from "../../images/footer/instagram2.webp";
import Facebook from "../../images/footer/facebook.webp";
import Facebook2 from "../../images/footer/facebook2.webp";
import Twitter from "../../images/footer/twitter.webp";
import Twitter2 from "../../images/footer/twitter2.webp";
import Linkedin from "../../images/footer/linkedin.webp";
import Linkedin2 from "../../images/footer/linkedin2.webp";
import Location from "../../images/footer/location.webp";
import call from "../../images/footer/call.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../../reusable_components/footer/page"

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

function MyComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [capVal, setCapVal] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
            // Ensure components that depend on the browser are mounted
            setIsMounted(true);
        }, []);
        
        useEffect(() => {
            // Check if all fields are filled
            setIsFormValid(!!name && !!email && !!phone && !!message && !!capVal);
        }, [name, email, phone, message, capVal]);
        
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            if (!capVal) {
                alert("Please complete the reCAPTCHA");
                return;
            }
            // Send the message here
            console.log({ name, email, phone, message });
        };

    return (
        <div className="">
            <div className="hidden sm:block pt-6">
                <TestNavbar />
            </div>
            <div className="flex flex-col items-center mt-4">
                <h1 className="text-gray-800 text-3xl font-extrabold">Contact Us</h1>
            </div>
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>


            <div className="mt-8">
                    <h1 className="text-gray-800 text-base font-bold">Address</h1>
                </div>
                <div className=''>
                    <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <img src={call.src} alt="location" className="w-6 h-6 " />

                            </div>
                            <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                <small className="block">Phone number</small>
                                <strong>ibestbhutan@gmail.com</strong>
                            </a>
                    </li>
                    <li className="flex items-center mt-4">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <img src={Location.src} alt="location" className="w-6 h-6" />
                            </div>
                            <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                <small className="block">Location</small>
                                <strong>Changzamtog, Zamdo Lam, Thimphu-Babesa, Expressway Thimphu</strong>
                            </a>
                    </li>

                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong>ibestbhutan@gmail.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                </div>
                <div className=" flex space-x-4 mt-2">
                    {/* Instagram */}
                    <a href="https://www.instagram.com/ibest_institute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Insta2.src} alt="Instagram" className="w-8 h-8 group-hover:hidden" />
                        <img src={Insta.src} alt="Instagram Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/ibestinstitute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Facebook2.src} alt="Facebook" className="w-8 h-8 group-hover:hidden" />
                        <img src={Facebook.src} alt="Facebook Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Twitter */}
                    <a href="https://x.com/ibestbhutan" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Twitter2.src} alt="Twitter" className="w-8 h-8 group-hover:hidden" />
                        <img src={Twitter.src} alt="Twitter Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ibestbhutan/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Linkedin2.src} alt="LinkedIn" className="w-8 h-8 group-hover:hidden" />
                        <img src={Linkedin.src} alt="LinkedIn Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div> 
                    </a> 
                </div>


            </div>
            
            <form onSubmit={handleSubmit}  className="space-y-4 mt-8">
            <div className="text-gray-800 text-base font-bold">Message Us </div>
            
                        <Input
                            type="text "
                            placeholder="Name"
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="w-full resize-none p-2 border rounded-md px-4 text-gray-800 bg-gray-100  text-sm focus:outline-none focus:border-black"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {isMounted && (
                            <ReCAPTCHA
                                sitekey="6Lf23WEqAAAAAFcJbC3unv-Q7TW7ASXozeZfHme9"
                                onChange={(token: any) => setCapVal(token || '')}
                            />
                        )}
                        {!isFormValid && (
                            <p className="text-red-500 mb-4">Please fill in all fields to enable reCAPTCHA</p>
                        )}
                        <Button
                            variant="outline"
                            className="w-24 bg-cyan-900 hover:bg-cyan-600 hover:text-white text-white"
                            disabled={!isFormValid}
                        >
                            SEND
                        </Button>
                    </form>

                    </div>
                    <div className="grid items-start gap-16 p-4 md:p-8 lg:p-16 mx-auto">
                    {/* Map iframe */}
                    {isMounted && (
                        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                            <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ibest,%20thimphu+(ibest)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            frameBorder="0"
                            allowFullScreen
                            ></iframe>
                        </div>
                    )}
                    </div>

                    <SmallNavBar />
                    <Footer />

        </div>
        

    );
}

export default MyComponent;

