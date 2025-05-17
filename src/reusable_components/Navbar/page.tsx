"use client"

import React, { useEffect, useState, useRef } from "react";
import Logo from "../../images/Website Pictures/logo.jpg";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Headroom from "react-headroom";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Courses",
    href: "/courses",
    description: "View all the courses available at Ibest Institute",
  },
  {
    title: "Consultancy",
    href: "/consultancy",
    description: "View all the consultancy services available at Ibest Institute",
  },
];

const TestNavbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const textRef = useRef<HTMLDivElement>(null); // Reference for the "Get skilled today" text
  const pathname = usePathname(); // Get current path name

  useEffect(() => {
    const handleResize = () => {
      const navMenu = document.getElementById("collapseMenu");
      const logoContainer = document.getElementById("logoContainer");

      if (navMenu && logoContainer && textRef.current) {
        const navPosition = navMenu.getBoundingClientRect();
        const logoPosition = logoContainer.getBoundingClientRect();
        const textPosition = textRef.current.getBoundingClientRect();

        // Check if the text is out of view and the gap between logo and nav menu is within 2-4px
        if (textPosition.right < 0 && navPosition.left - logoPosition.right <= 4) {
          setShowLogo(false);
        } else {
          setShowLogo(true);
        }
      }
    };

    // Run on load and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to check if a link is active
  const isActive = (path: string) => pathname === path;

  // Check if any of the Courses or Consultancy pages are active
  const isServicesActive = isActive("/courses") || isActive("/consultancy");

  return (
    <div>
      <Headroom>
        <header className="flex border-b py-4 px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50 backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between w-full">
            {/* Logo container - hidden on small screens */}
            {showLogo && (
              <div
                id="logoContainer"
                className="h-full w-1/6 items-center justify-center hidden lg:flex"
              >
                <Link href="/">
                  <Avatar className="bg-red-400 rounded-full border-current w-20 h-20 md:w-16 md:h-16">
                    <AvatarImage src={Logo.src} alt="Ibest Logo" />
                  </Avatar>
                </Link>
              </div>
            )}

            {/* Text - hidden on small screens */}
            <div
              ref={textRef}
              className="h-full w-full lg:w-2/6  items-center lg:justify-start justify-center hidden lg:flex"
            >
              <h1 className="text-black text-left lg:text-lg">
                Get skilled today for a bright future!
              </h1>
            </div>

            {/* Navigation container - centered on small screens */}
            <div
              id="collapseMenu"
              className="h-full w-full flex justify-center lg:justify-start lg:w-3/6 space-x-4"
            >
              <NavigationMenu>
                <NavigationMenuList className="flex gap-x-2 justify-center">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className={cn(
                          "text-[15px] font-semibold px-3 py-2 rounded-md hover:text-black",
                          isActive("/") ? "text-blue-600" : "text-gray-500"
                        )}
                      >
                        HOME
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-[15px] font-semibold px-3 py-2 rounded-md text-gray-500 hover:text-black",
                        isServicesActive ? "text-blue-600" : ""
                      )}
                    >
                      SERVICES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[400px]">
                        {components.map((component) => (
                          <ListItem key={component.title} title={component.title} href={component.href}>
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/aboutUs"
                        className={cn(
                          "text-[15px] font-semibold px-3 py-2 rounded-md hover:text-black",
                          isActive("/aboutUs") ? "text-blue-600" : "text-gray-500"
                        )}
                      >
                        ABOUT
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contactus"
                        className={cn(
                          "text-[15px] font-semibold px-3 py-2 rounded-md hover:text-black",
                          isActive("/contactus") ? "text-blue-600" : "text-gray-500"
                        )}
                      >
                        CONTACT
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>
      </Headroom>
    </div>
  );
};

export default TestNavbar;

interface ListItemProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  [key: string]: any;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
