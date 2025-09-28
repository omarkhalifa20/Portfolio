import React from 'react'
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
export default function ProjectsComp() {
  return (
    <>
     <section id="projects" className="pb-20">
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-8  bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center   backdrop-blur-[36px] justify-center items-center  mb-15">
          
            <h3 className="text-center StoryScript text-[40px] md:text-[60px] lg:text-[60px]  ">Some Projects</h3>
           
          </motion.div>

            {/* mob-sec */}
               <div className=" lg:hidden flex flex-col gap-10 justify-center ">
          
          <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card2  mx-auto lg:hidden">
            <div className="btn1" />
            <div className="btn2" />
             <div className="btn3" />
             <div className="btn4" />
               <div className="card-int shadow-[inset_0px_0px_15px_rgba(142,142,142,0.53)]">
              <a className=" absolute  bg-[#00000080] left-[50%] py-2 StoryScript translate-x-[-50%] border text-[18px] text-center w-[85%] backdrop-blur-[16px] bottom-5 rounded-xl " href="https://omar-wheat.vercel.app/" >Vist My Site</a>
            </div>
              <div className="top ">
             <div className="camera">
              <div className="int" />
            </div>
             <div className="speaker" />
             </div>
              </motion.div>
              
              <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card2 mx-auto lg:hidden">
            <div className="btn1" />
            <div className="btn2" />
             <div className="btn3" />
             <div className="btn4" />
               <div className="card-int2 shadow-[inset_0px_0px_15px_rgba(142,142,142,0.53)]">
              <a className=" absolute bg-[#00000080] left-[50%] py-2 StoryScript translate-x-[-50%] border  text-[18px] text-center w-[85%] backdrop-blur-[16px] bottom-5 rounded-xl " href="https://omarbook.vercel.app/" >Vist My Site</a>
            </div>
              <div className="top">
             <div className="camera">
              <div className="int" />
            </div>
             <div className="speaker" />
             </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card2 mx-auto lg:hidden">
            <div className="btn1" />
            <div className="btn2" />
             <div className="btn3" />
             <div className="btn4" />
               <div className="card-int3 shadow-[inset_0px_0px_15px_rgba(142,142,142,0.53)]">
              <a className=" absolute bg-[#00000080] left-[50%] py-2 StoryScript translate-x-[-50%] border text-[18px] text-center w-[85%] backdrop-blur-[16px] bottom-5 rounded-xl " href="https://www.greeninjoy.com/" >Vist My Site</a>
            </div>
              <div className="top">
             <div className="camera">
              <div className="int" />
            </div>
             <div className="speaker" />
             </div>
              </motion.div>
 
           </div>
 
 
           {/* mob-sec */}

          <div 


          // pc-sec
          className=" hidden lg:flex flex-col gap-18">
            
            <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="  relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/Omarike.webp" alt="Omarike" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">React (Next.js) Project</p>
             <Link href='https://omar-wheat.vercel.app/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">Omarike E - Commerce</Link>
             
             <p className="bg-[#25252580] text-center  w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://omar-wheat.vercel.app/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 " /></Link>
            
            </div>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="  relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/OmarBook.webp" alt="OmarBook" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">React Project</p>
             <Link href='https://omarbook.vercel.app/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">OmarBook Social App</Link>
             
             <p className="bg-[#25252580]  text-center w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://omarbook.vercel.app/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 "  /></Link>
            
            </div>
          </motion.div>


          <motion.div 
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="  relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/GreenInJoy.webp" alt="GreenInJoy" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">Native JS</p>
             <Link href='https://www.greeninjoy.com/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">Green In Joy Export Company </Link>
             
             <p className="bg-[#25252580]  text-center w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://www.greeninjoy.com/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 " /></Link>
            
            </div>
          </motion.div>
          </div>
          {/* pc-sec */}

         
          
          
         </section>
    </>
  )
}
