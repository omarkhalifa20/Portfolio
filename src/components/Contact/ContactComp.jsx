import React from 'react'
import { motion } from "framer-motion";
import {  Linkedin } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
export default function ContactComp() {
  return (
    <>
    <section id="contact" className="pb-25">
        <motion.h3 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center StoryScript text-[35px] mb-10  ">Contact</motion.h3>
        <div className="grid gap-2 md:gap-5 grid-cols-12">
         <motion.div  
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true, amount: 0.2 }}
         className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
         <IoLogoWhatsapp className="text-green-600" size={70} />
              <p className="text-[30px] md:text-[40px] StoryScript text-green-600   ">Whats App</p>
              <a className="border border-green-600 w-[90%] text-green-600  text-[22px] rounded-xl my-swhover-wa py-2 " href='https://api.whatsapp.com/send?phone=201204302212'>Click Here</a>

            </motion.div> 

            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
             className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <BiLogoGmail className="" size={70} />
              <p className="text-[40px] StoryScript    ">Gmail</p>
              <a className="border  w-[90%]   text-[22px] rounded-xl my-swhover py-2 " href='https://mail.google.com/mail/?view=cm&fs=1&to=omaromarb414@gmail.com'>Click Here</a>

            </motion.div>

            <motion.div  
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <GrDocumentText className="text-yellow-500" size={70} />
              <p className="text-[40px] StoryScript text-yellow-500   ">Cv</p>
              <a className="border border-yellow-500 w-[90%] text-yellow-500  text-[22px] rounded-xl my-swhover-Cv py-2 " href='https://drive.google.com/file/d/1LePtS3nL1Y4pIG__5_1-krGOImK6dSYU/view?usp=sharing'>View</a>

            </motion.div>

            <motion.div  
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <Linkedin  className="text-blue-500" size={70} />
              <p className="text-[40px] StoryScript text-blue-500   ">Linkdin</p>
              <a className="border border-blue-500 w-[90%] text-blue-500  text-[22px] rounded-xl my-swhover-lik py-2 " href='https://www.linkedin.com/in/omar-khalifa-a79162222/'>Click Here</a>

            </motion.div>

        </div>
        

          
        </section>
    </>
  )
}
