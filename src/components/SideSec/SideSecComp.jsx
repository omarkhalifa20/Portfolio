"use client"
import { Circle, Code, Github, Linkedin, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from 'react-icons/io5'

export default function SideSecComp() {
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
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
    className='container z-[999] w-[95%] md:w-[85%] mt-30 lg:mt-0 bg-[#111111] mx-auto static px-5 py-11 my-sw  rounded-3xl lg:fixed lg:w-fit lg:h-fit backdrop-blur-[36px]  lg:left-8 lg:top-[50%] lg:translate-y-[-50%] lg:bottom-0 '>
     <div className='flex items-center mb-8 gap-5 '>
     <Code className='text-white w-[30px] ' />
     <div className='border w-[80%] lg:w-fit gap-3 flex justify-center lg:justify-normal items-center py-2 px-5 rounded-3xl border-[#ffffff26]'>
     <Circle className='w-[14px] fill-green-600 text-green-600' />
      <p className='text-[18px]  text-[#BBBBBB]'>Available For <span className='text-white'>Projects</span></p>
     </div>
     </div>
     <div className='flex flex-col  items-center justify-center'>

     <div className=' relative w-[80%] mb-10 h-[350px] md:h-[550px] lg:h-[210px]  rounded-2xl'>
     <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src="/PfPic.webp" fill alt='img' className='object-cover rounded-2xl' />
     <h1 className='text-white text-center absolute w-[100%] text-[44px] md:text-[44px] lg:text-[44px] left-[50%] translate-x-[-50%] rotate-[-4deg] bottom-[-35] font-medium StoryScript'>Omar Khalifa</h1>
     </div>
    <div className='mb-5'>
      <p className='text-[20px] text-[#BBBBBB] font-medium'>omaromarb414@gmail.com</p>
     <p className='text-[#515151] text-[17px] text-center font-medium'>Alexandria,Egypt</p>
    </div>
    <div className='flex gap-5 mb-12 items-center justify-center'>
      <div className='text-white hover:bg-white flex items-center justify-center hover:text-black duration-400  icon-sw backdrop-blur-[6px] bg-[#ffffff1a] rounded-full p-[10px]'>
      <Link href='https://www.linkedin.com/in/omar-khalifa-a79162222/'><Linkedin className='' /></Link> 
      </div>
      <div className='text-white icon-sw flex items-center justify-center hover:bg-white hover:text-black duration-400 backdrop-blur-[6px] bg-[#ffffff1a] rounded-full p-[10px] '>
      <Link href='https://api.whatsapp.com/send?phone=201204302212'><IoLogoWhatsapp  size={26} /></Link>
      </div>
      <div className='text-white icon-sw flex items-center justify-center hover:bg-white hover:text-black duration-400 backdrop-blur-[6px] bg-[#ffffff1a] rounded-full p-[10px]'>
      <Link href='https://github.com/omarkhalifa20'><Github /></Link>
      </div>
    </div>
    
    <button className='text-center w-[100%] py-3 shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] hover:shadow-[inset_0px_0px_25px_rgba(142,142,142,0.53)] cursor-pointer    rounded-3xl border text-[18px] border-[#ffffff43] text-white' onClick={() => handleScroll("about")}>Get Started</button>
     

     </div>
    </motion.div>
    
    </>
  )
}
