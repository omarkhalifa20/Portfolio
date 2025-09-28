import React from 'react'
import { motion } from "framer-motion";;
export default function ServiceComp() {
  return (
    <>
    <section id="service" className="pb-20">
         <motion.h3 
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true, amount: 0.2 }}
         className="text-center StoryScript text-[35px] mb-10  ">Services</motion.h3>
         <motion.div
         initial={{ opacity: 0, x: -120 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true, amount: 0.2 }}
          className="grid gap-x-3 gap-y-5 grid-cols-12">
         <div  className="bg-[#111111] py-7 md:px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-12  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">Responsive WebSites</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">Create UI</p>
            </div>

            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">Modern Designs</p>
            </div>

            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">High Performance</p>
            </div>

            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">SEO Friendly</p>
            </div>

            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">Landing Page</p>
            </div>
            
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px]   ">Portfolio Website</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">Business Website</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">SPA</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">Animations</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">Admin Panel</p>
            </div>
            <div  className="bg-[#111111] py-7 px-[5px]  my-swhover duration-500   text-center rounded-3xl col-span-12  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">E-commerce Frontend</p>
            </div>

         </motion.div>
         </section>
    </>
  )
}
