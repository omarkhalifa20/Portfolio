import React from 'react'
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutComp() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2,    
      });
  return (
    <>
    <section id="about" className="pb-4 mt-20">
          <motion.h3
           initial={{ opacity: 0, y: 70 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           className="text-center StoryScript text-[35px] mb-9">About Me</motion.h3>
          <motion.p
           initial={{ opacity: 0, x: 120 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.2 }} 
          className="text-[18px] text-center lg:text-start  text-[#BBBBBB] font-normal ">Im Omar Khalifa, a Front-End Developer from Beheira, Egypt. Im passionate about creating modern, responsive, and user-friendly web applications. I enjoy writing clean code, exploring new technologies, and continuously improving my skills to deliver impactful digital experiences.
         <br />
         <br />
           Outside of programming, Im deeply passionate about exploring new and emerging technologies, keeping up with industry trends, and experimenting with innovative ideas. I actively contribute to open-source projects, which helps me sharpen my skills while giving back to the community that has greatly influenced my growth. I also enjoy sharing knowledge with fellow developers, whether through discussions, collaborations, or community contributions. Im always excited to take on new challenges, push my boundaries, and work on projects that create meaningful impact.</motion.p>
         
       

        {/* About sec */}
        {/* Skills sec */}
        <div className="mt-20">
         <motion.h3 
         initial={{ opacity: 0, x: 120 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true, amount: 0.2 }}
         className="text-center StoryScript text-[35px] mb-15  ">Skills</motion.h3>
          
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.2 }}
          className="lg:px-15 gap-x-3 gap-y-8  grid grid-cols-12  ">
            <div ref={ref} className="bg-[#111111] p-3 md:p-5  my-swhover duration-500   text-center rounded-3xl col-span-4 md:col-span-3   backdrop-blur-[36px]">
              <p className=" text-[15px] md:text-[18px] lg:text-[18px] text-[#cac8c8]   ">Html & Css</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={95} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3     backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">JavaScript</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">TypeScript</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={80} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3     backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">React</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={85} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">Next.Js</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={89} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3     backdrop-blur-[36px]">
              <p className="text-[14px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Tailwind CSS</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3     backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Bootstrap</p>
              {inView && <CountUp className=" text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Git/GitHub</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={80} duration={3} />}%
            </div>
            <div className="bg-[#111111] py-5 px-1 md:p-5 lg:p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3     backdrop-blur-[36px]">
              <p className=" lg:text-[18px] md:text-[16px] text-[14px] text-[#cac8c8]  text-center">Framer Motion</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="text-[18px] text-[#cac8c8]  text-center">Postman</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={85} duration={3} />}%
            </div>
            <div className="bg-[#111111] py-5 px-1 md:p-5 lg:p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#cac8c8]  text-center">TanStack Query</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-3 md:p-5  my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3    backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">NPM</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>

          </motion.div>
        </div>

        <div className="pt-15 pb-25">
        <motion.h3
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
         className="text-center StoryScript text-[30px] mb-15  ">Technologies I Work With</motion.h3>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-12  gap-y-4 items-center    gap-x-2">
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 p-1  rounded-2xl">React Router</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">React Hooks</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Context API</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">SSR</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">SSG</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Middleware</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Flexbox</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Grid</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Media Queries</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Zod</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Axios</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Fetch</p>
          <p className="bg-[#25252580] text-center  col-span-6 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 lg:p-1 py-[5.8px] px-1 text-[16px]  rounded-2xl">Responsive Design</p>
          <p className="bg-[#25252580] text-center col-span-6 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">CSS Animations</p>
          <p className="bg-[#25252580] text-center col-span-6 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">CSS Animations</p>
          <p className="bg-[#25252580] text-center col-span-6 md:col-span-2   hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500     lg:p-1 py-[5.8px] px-1  text-[16px] rounded-2xl">React Hook Form</p>
        </motion.div>
        </div>
        
          {/* Skills sec */}
          </section>
    </>
  )
}
