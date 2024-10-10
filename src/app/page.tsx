"use client"

import * as React from "react"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import pictur from "./images/building.jpg"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Courses ",
    href: "/courses",
    description:
      "View all the courses available at Ibest Institute",
  },
  {
    title: "Counseltancy",
    href: "/cunseltancy",
    description:
      "View all the counseltancy services available at Ibest Institute",
  },
]
export default function Home() {
  return (
    
    <div className="bg-white">
      <div className="w-screen h-screen bg-white flow-root">
        <div className="w-screen h-24 bg-slate-400 flex flex-row">
          <div className="h-full w-1/6 bg-white flex items-center justify-center">
            <div className="w-20 h-20 	bg-red-400 rounded-full">
              <Avatar className="w-20 h-20 border-current	">
                <AvatarImage src="https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-1/327248969_3545587495677789_7126060281644009145_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=y6S4kvC5zfIQ7kNvgHzE-2B&_nc_ht=scontent.fpbh1-1.fna&_nc_gid=AWAcEURGlTurvQwTak5fKf6&oh=00_AYDzHNpv-wOB_P23qCPDvC9PKRM0F9hi4p1D7E610boDGQ&oe=670C1672" alt="@shadcn" />
                <AvatarFallback>iBEST</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="h-full w-2/6 bg-white flex items-center justify-center">
            <h1>iBest Institute and Consultancy</h1>
          </div>
          <div className="h-full w-3/6 bg-white align-middle flex items-center justify-center space-x-4 float-right">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/aboutUs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[400px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contactUs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="w-full h-2/4 bg-white bg-[url('./images/building.jpg')] backdrop-saturate-125 bg-cover">
          <div className="w-full h-3/6 flex">
            <Avatar className="w-36 h-236 border-current	m-auto">
              <AvatarImage src="https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-1/327248969_3545587495677789_7126060281644009145_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=y6S4kvC5zfIQ7kNvgHzE-2B&_nc_ht=scontent.fpbh1-1.fna&_nc_gid=AWAcEURGlTurvQwTak5fKf6&oh=00_AYDzHNpv-wOB_P23qCPDvC9PKRM0F9hi4p1D7E610boDGQ&oe=670C1672" alt="@shadcn" />
              <AvatarFallback>iBEST</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full h-3/6 m-auto">
              <h1 className="text-center text-4xl	 font-extrabold	text-white animate-slideLeft stoke-black">“To become an acclaimed institution </h1>
              <h1 className="text-center text-3xl font-semibold text-white animate-slideRight	">and one-stop learning center in</h1> 
              <h1 className="text-center text-3xl	font-semibold text-white animate-slideLeft"> Bhutan and beyond”</h1>  
          </div>
        </div>
        <div className="w-full h-2/4">
          <div className="w-full h-1/6 flex items-center justify-center">
            <h1 className="text-2xl font-semibold">Certified Training Institute Registered with </h1>
          </div>
          <div className="w-full h-5/6 flex items-center justify-center space-x-10">
            <Avatar className="w-48 h-48 border-current animate-slideLeft">
              <AvatarImage src="https://www.bmhc.gov.bt/wp-content/uploads/2023/07/tvet.png" alt="@shadcn" />
              <AvatarFallback>iBEST</AvatarFallback>
            </Avatar>
            <Avatar className="w-48 h-44 border-current	mb-36">
              <AvatarImage src="https://www.bmf.bt/wp-content/uploads/2018/10/rgob-logo.png" alt="@shadcn" />
              <AvatarFallback>iBEST</AvatarFallback>
            </Avatar>
            <Avatar className="w-48 h-44 border-current animate-slideRight	">
              <AvatarImage src="https://vacancybt.b-cdn.net/wp-content/uploads/2019/02/www.health.gov_.bt_.png" alt="@shadcn" />
              <AvatarFallback>iBEST</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-white flex  flex-col items-center justify-center">
        <div className="w-full h-1/6 flex items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blueDark ">MISSIONS</h1>
        </div>
        <div className="w-full h-1/6  flex justify-center">
          <div className="w-2/5 h-1/2 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Empower individual, community, and organization.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-1/2 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Create enterprises and nurture entrepreneurs . </h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-1/2 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Contribute towards employment generation.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-1/2 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Develop and improve the rural economy.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 bg-blue-100 flex justify-center">
          <div className="w-2/5 h-1/2 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Foster knowledge creation and development.</h1>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen ">
        <div className="w-full h-1/6 flex items-center justify-center">
          <h1 className="text-3xl text-blueDark font-semibold">Our Expertise</h1>    
        </div>
        <div className="h-full w-full flex flex-row">
          <div className="h-full w-1/5 "></div>
          <div className="h-full w-3/5 ">
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded">

              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
            </div>
            <div className="w-full h-10 "></div>
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
            </div>
            <div className="w-full h-10"></div>
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
              <div className="w-3/12 h-full bg-lightBlue rounded"></div>
            </div>
          </div>
          <div className="h-full w-1/5"></div>
        </div>
      </div>
    </div>
    
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"