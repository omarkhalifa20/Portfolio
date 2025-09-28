import React from 'react'
import { ReactTyped, Typed } from "react-typed";

import { motion } from "framer-motion";

export default function HomeComp() {
  return (
    <>
    <section id="home" className="flex flex-col gap-20 md:gap-25 lg:gap-25">
        {/* home sec */}
      <motion.p 
       
       initial={{ opacity: 0, y: 0 }}
       animate={{ opacity: 1, y: 50 } }
       transition={{ duration: 1 }}
      
      
      className="text-[20px] " >Omar Khalifa <ReactTyped
      className="text-[#BBBBBB] "
        strings={["Frontend Developer", "React Expert", "Next.js Builder"]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
       </motion.p>
        
        <motion.h3
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 } }
        transition={{ duration: 1 }}
        
        className="text-white text-center lg:text-start text-[35px]  StoryScript md:text-[43px] lg:text-[48px]">
        Transforming complex ideas into stunning, interactive, and lightning-fast web experiences.
        </motion.h3>
        <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 } }
        transition={{ duration: 1 }}
        className="text-[18px]  text-center text-[#cac8c8]">My passion is building fast, responsive, and user-friendly frontends that feel effortless.</motion.p>
        <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 } }
        transition={{ duration: 1 }}
         className="flex flex-col  text-center md:flex-row lg:flex-col xl:flex-row  justify-center gap-3 md:gap-7">
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Html</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Css</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">JavaScript</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">TypeScript</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">React.Js</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Next.Js</p>
        </motion.div>
        {/* home sec */}
      </section>
    </>
  )
}
