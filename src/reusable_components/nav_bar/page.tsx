"use client"

import * as React from "react"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Headroom from "react-headroom"

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
    title: "Courses",
    href: "/courses",
    description: "View all the courses available at Ibest Institute",
  },
  {
    title: "Consultancy",
    href: "/consultancy",
    description: "View all the consultancy services available at Ibest Institute",
  },
]

const NavigationBar = () => {
  return (
    <Headroom>
      {/* Sticky Navigation */}
      <div className="fixed top-0 left-0 w-full h-24 bg-white backdrop-blur-md z-50 shadow-md">
        <div className="flex flex-row h-full w-full">

          {/* Left side logo */}
          <div className="h-full w-1/6 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-400 rounded-full">
              <Avatar className="w-20 h-20 border-current">
                <AvatarImage src="https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-1/327248969_3545587495677789_7126060281644009145_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=y6S4kvC5zfIQ7kNvgHzE-2B&_nc_ht=scontent.fpbh1-1.fna&_nc_gid=AWAcEURGlTurvQwTak5fKf6&oh=00_AYDzHNpv-wOB_P23qCPDvC9PKRM0F9hi4p1D7E610boDGQ&oe=670C1672" alt="@shadcn" />
              </Avatar>
            </div>
          </div>

          {/* Center title */}
          <div className="h-full w-2/6 flex items-center justify-center">
            <h1>iBEST Institute and Consultancy</h1>
          </div>

          {/* Right side navigation */}
          <div className="h-full w-3/6 flex items-center justify-center space-x-4">
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
      </div>

      {/* Add padding to the main content to prevent overlap */}
      <div className="pt-24">
        {/* Your main page content goes here */}
      </div>
    </Headroom>
  );
}

export default NavigationBar;

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
  );
})

ListItem.displayName = "ListItem"
