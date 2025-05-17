import React, { useEffect, useState } from "react";
import Link from "next/link";

// Import images for icons
import Home from "../../images/navbar/home.png";
import Home2 from "../../images/navbar/home2.png";
import Courses from "../../images/navbar/courses.png";
import Courses2 from "../../images/navbar/courses2.png";
import Consultancy from "../../images/navbar/consultancy.png";
import Consultancy2 from "../../images/navbar/consultancy2.png";
import Aboutus from "../../images/navbar/aboutus.png";
import Aboutus2 from "../../images/navbar/aboutus2.png";
import Contactus from "../../images/navbar/contactus.png";
import Contactus2 from "../../images/navbar/contactus2.png";
import { usePathname } from "next/navigation";

const SmallNavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    const controlNavBar = () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavBar);
        return () => {
            window.removeEventListener("scroll", controlNavBar);
        };
    }, [lastScrollY]);

    const isActive = (path: string) => pathname === path;

    return (
        <div
            className={`fixed bottom-0 w-full h-24 bg-gray-300 bg-opacity-50 backdrop-blur shadow-2xl transition-transform duration-300 z-50 sm:hidden flex justify-around items-center ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <div className="flex justify-around items-center w-full h-full">
                {/* HOME */}
                <Link href="/" passHref>
                    <div className="group">
                        <img
                            src={isActive("/") ? Home2.src : Home.src}
                            alt="Home"
                            className="w-10 h-10"
                        />
                    </div>
                </Link>

                {/* COURSES */}
                <Link href="/courses" passHref>
                    <div className="group">
                        <img
                            src={isActive("/courses") ? Courses2.src : Courses.src}
                            alt="Courses"
                            className="w-10 h-10"
                        />
                    </div>
                </Link>

                {/* CONSULTANCY */}
                <Link href="/consultancy" passHref>
                    <div className="group">
                        <img
                            src={isActive("/consultancy") ? Consultancy2.src : Consultancy.src}
                            alt="Consultancy"
                            className="w-10 h-10"
                        />
                    </div>
                </Link>

                {/* ABOUT US */}
                <Link href="/aboutUs" passHref>
                    <div className="group">
                        <img
                            src={isActive("/aboutUs") ? Aboutus2.src : Aboutus.src}
                            alt="About Us"
                            className="w-10 h-10"
                        />
                    </div>
                </Link>

                {/* CONTACT US */}
                <Link href="/contactus" passHref>
                    <div className="group">
                        <img
                            src={isActive("/contactus") ? Contactus2.src : Contactus.src}
                            alt="Contact Us"
                            className="w-10 h-10"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SmallNavBar;
