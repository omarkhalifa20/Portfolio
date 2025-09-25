"use client"
import React, { useEffect, useState } from 'react'
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
  import { motion } from "framer-motion";
import { Box, FileJson, House, Smartphone, User } from 'lucide-react'

export default function NavbarMain() {
  const [activeSection, setActiveSection] = useState("home");

  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } 
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
    className='container mx-auto flex justify-center fixed translate-x-[-50%] top-5 left-[50%] items-center z-[999]   lg:translate-x-[0] lg:left-[94.2%] h-fit bg-[#ffffff1a] backdrop-blur-[24px] w-fit p-2 lg:fixed lg:right-6 lg:top-[50%] rounded-4xl lg:translate-y-[-50%] lg:bottom-0 '>
    <NavigationMenu className=' mx-auto'>
     <NavigationMenuList className='flex  lg:flex-col gap-7 md:gap-12 lg:gap-15 text-white'>
     <NavigationMenuItem className={activeSection === "home" ? "text-white cursor-pointer bg-[#ffffff3b] p-3 rounded-full" : "cursor-pointer hover:text-white duration-500 hover:bg-[#ffffff3b] p-3 rounded-full "} onClick={() => handleScroll("home")}>
     <House />
    </NavigationMenuItem>
    <NavigationMenuItem className={activeSection === "about" ? "text-white cursor-pointer bg-[#ffffff3b] p-3 rounded-full" : "cursor-pointer hover:text-white duration-500 hover:bg-[#ffffff3b] p-3 rounded-full "} onClick={() => handleScroll("about")}>
    <User />
    </NavigationMenuItem>
    <NavigationMenuItem className={activeSection === "projects" ? "text-white cursor-pointer bg-[#ffffff3b] p-3 rounded-full" : "cursor-pointer hover:text-white duration-500 hover:bg-[#ffffff3b] p-3 rounded-full "} onClick={() => handleScroll("projects")}> 
    <FileJson />
    </NavigationMenuItem>
    <NavigationMenuItem className={activeSection === "service" ? "text-white cursor-pointer bg-[#ffffff3b] p-3 rounded-full" : "cursor-pointer hover:text-white duration-500 hover:bg-[#ffffff3b] p-3 rounded-full "} onClick={() => handleScroll("service")} >
    <Box />
    </NavigationMenuItem>
    <NavigationMenuItem className={activeSection === "contact" ? "text-white cursor-pointer bg-[#ffffff3b] p-3 rounded-full" : "cursor-pointer hover:text-white duration-500 hover:bg-[#ffffff3b] p-3 rounded-full "} onClick={() => handleScroll("contact")} >
    <Smartphone />
    </NavigationMenuItem>
    
    
    </NavigationMenuList>
   </NavigationMenu>
    </motion.div>
     
    </>
  )
}
