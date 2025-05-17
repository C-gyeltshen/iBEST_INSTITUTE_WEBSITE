import * as React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Insta from "../../images/footer/instagram.png";
import Insta1 from "../../images/footer/instagram1.png";
import Facebook from "../../images/footer/facebook.png";
import Facebook1 from "../../images/footer/facebook1.png";
import Twitter from "../../images/footer/twitter.png";
import Twitter1 from "../../images/footer/twitter1.png";
import Linkedin from "../../images/footer/linkedin.png";
import Linkedin1 from "../../images/footer/linkedin1.png";
import Logo from "../../images/Website Pictures/logo.jpg"
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-sky-950 from-gray-900 via-gray-700 to-gray-900  py-14 px-16 font-sans tracking-wide relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h2 className="text-white text-lg font-semibold mb-2 hover:text-gray-400">
            <a href="/">HOME</a>
            </h2>
            <ul className="space-y-2">
                <li>
            <a href="#mission" className="text-white hover:text-gray-400  text-sm transition-all hover:text-gray-400">Mission</a>
            </li>
            <li>
              <a href="#experties" className="text-white hover:text-gray-400  text-sm transition-all">Competencies</a>
            </li>
            <li>
              <a href="#testimonials" className="text-white hover:text-gray-400  text-sm transition-all">Testimonials</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2 hover:text-gray-400">
          <a href="/courses">SERVICES</a>
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/courses" className="text-white hover:text-gray-400  text-sm transition-all">Courses</a>
            </li>
            <li>
              <a href="/consultancy" className="text-white hover:text-gray-400  text-sm transition-all">Consultancy</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2 hover:text-gray-400">
          <a href="/aboutUs">ABOUT US</a>
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#vision" className="text-white hover:text-gray-400 text-sm transition-all">Vision</a>
            </li>
            <li>
              <a href="#values" className="text-white hover:text-gray-400  text-sm transition-all">Purpose & Values</a>
            </li>
            <li>
              <a href="#Objectives" className="text-white hover:text-gray-400  text-sm transition-all">Objectives</a>
            </li>
            <li>
              <a href="#Team" className="text-white hover:text-gray-400  text-sm transition-all">Team</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Other iBEST Websites</h2>
          <ul className="space-y-2 hover:text-gray-400">
            <li>
              <a href="https://www.ibestbhutan.com/" className="text-white hover:text-gray-400  text-sm transition-all">iBEST Bhutan</a>
            </li>
            <li>
              <a href="https://ibesttechnologies.bt/" className="text-white hover:text-gray-400  text-sm transition-all">iBEST Techologies</a>
            </li>
            <li>
              <a href="https://www.ibeststudios.com/" className="text-white hover:text-gray-400  text-sm transition-all">iBEST Studios</a>
            </li>
          </ul>
        </div>

    </div>

    <div className="flex items-center mt-4">
        <Link href="/">
            <Avatar className="w-16 h-16">
            <AvatarImage src={Logo.src} alt="@shadcn" />  
            </Avatar>
        </Link>
        <h1 className="text-white ml-4">iBEST Institute and Consultancy</h1>
    </div>

      <hr className="my-8 border-gray-600" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        <div className="flex space-x-5">
          {/* Instagram */}
          <a href="https://www.instagram.com/ibest_institute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Insta1.src} alt="Instagram" className="w-8 h-8 group-hover:hidden" />
                        <img src={Insta.src} alt="Instagram Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/ibestinstitute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Facebook1.src} alt="Facebook" className="w-8 h-8 group-hover:hidden" />
                        <img src={Facebook.src} alt="Facebook Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Twitter */}
                    <a href="https://x.com/ibestbhutan" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Twitter1.src} alt="Twitter" className="w-8 h-8 group-hover:hidden" />
                        <img src={Twitter.src} alt="Twitter Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ibestbhutan/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Linkedin1.src} alt="LinkedIn" className="w-8 h-8 group-hover:hidden" />
                        <img src={Linkedin.src} alt="LinkedIn Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
        </div>

        <p className='text-white text-sm'>Copyright © iBEST Institute & Consultancy 2024
        </p>
      </div>
    </footer>
    );
};

export default Footer;

