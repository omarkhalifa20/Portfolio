"use client"
import Image from "next/image";
import { ReactTyped, Typed } from "react-typed";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Circle, ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  return (
   <>
   <video className="top-0 hidden lg:block  bottom-0 left-0 right-0 w-[100%] h-[100%] object-cover   fixed z-[-15] brightness-30" src="/MainVid.webm" muted autoPlay loop></video>
   <img className="top-0 lg:hidden block  bottom-0 left-0 right-0 w-[100%] h-[100%] object-cover   fixed z-[-15] brightness-30" src="/Background.jpg" alt="Background" />
   <div className=" w-full  overflow-hidden h-full flex-col flex lg:flex-row  items-center ">
    <div className=" container w-[90%] md:w-[100%]  z-30 pt-20 pl-[20px] pr-[20px] lg:pl-[460px] lg:pr-[200px] text-white">
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
         className="flex flex-col  text-center md:flex-row  justify-center gap-3 md:gap-7">
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Html</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Css</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">JavaScript</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">TypeScript</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">React.Js</p>
          <p className="bg-[#25252580] hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1 px-8 rounded-2xl">Next.Js</p>
        </motion.div>
        {/* home sec */}
      </section>
      

        {/* About sec */}
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
            <div ref={ref} className="bg-[#111111] p-5  my-swhover duration-500   text-center rounded-3xl col-span-4 md:col-span-3  lg:col-span-3 backdrop-blur-[36px]">
              <p className=" text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]   ">Html & Css</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={95} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">JavaScript</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">TypeScript</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={80} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">React</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={85} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  ">Next.Js</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={89} duration={3} />}%
            </div>

            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Tailwind CSS</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Bootstrap</p>
              {inView && <CountUp className=" text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#cac8c8]  text-center">Git/GitHub</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={80} duration={3} />}%
            </div>
            <div className="bg-[#111111] py-5 px-2 md:p-5 lg:p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className=" lg:text-[18px] md:text-[16px] text-[#cac8c8]  text-center">Framer Motion</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="text-[18px] text-[#cac8c8]  text-center">Postman</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={85} duration={3} />}%
            </div>
            <div className="bg-[#111111] py-5 px-1 md:p-5 lg:p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
              <p className="lg:text-[18px] md:text-[16px] text-[#cac8c8]  text-center">TanStack Query</p>
              {inView && <CountUp className="text-[40px] md:text-[60px] lg:text-[60px] font-medium  " end={90} duration={3} />}%
            </div>
            <div className="bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center  col-span-4 md:col-span-3  lg:col-span-3   backdrop-blur-[36px]">
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
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 p-1  rounded-2xl">React Router</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">React Hooks</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Context API</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">SSR</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">SSG</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Middleware</p>
          <p className="bg-[#25252580] text-center  col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 lg:p-1 py-[5.8px] px-1 text-[14px] lg:text-[16px]  rounded-2xl">Responsive Design</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Flexbox</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Grid</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Media Queries</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">CSS Animations</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500     lg:p-1 py-[5.8px] px-1 text-[14px] lg:text-[16px] rounded-2xl">React Hook Form</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Zod</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Axios</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">Fetch</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500   lg:p-1 py-[5.8px] px-1 text-[14px] lg:text-[16px] rounded-2xl">Dynamic Routing</p>
          <p className="bg-[#25252580] text-center col-span-4 md:col-span-2  lg:col-span-2 hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500  p-1 rounded-2xl">SEO (Next.js)</p>
        </motion.div>
        </div>
        
          {/* Skills sec */}
          </section>
          
          {/* Projects sec */}
         <section id="projects" className="pb-20">
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-8  bg-[#111111] p-5 my-swhover duration-500  rounded-3xl text-center   backdrop-blur-[36px] justify-center items-center  mb-15">
          
            <h3 className="text-center StoryScript text-[40px] md:text-[60px] lg:text-[60px]  ">Some Projects</h3>
           
          </motion.div>


          <div className="flex flex-col gap-18">
            <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className=" relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/Omarike.webp" alt="Omarike" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">React (Next.js) Project</p>
             <Link href='https://omar-wheat.vercel.app/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">Omarike E - Commerce</Link>
             
             <p className="bg-[#25252580] text-center hidden lg:block w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://omar-wheat.vercel.app/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 " /></Link>
            
            </div>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/OmarBook.webp" alt="OmarBook" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">React Project</p>
             <Link href='https://omarbook.vercel.app/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">OmarBook Social App</Link>
             
             <p className="bg-[#25252580] hidden lg:block text-center w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://omarbook.vercel.app/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 "  /></Link>
            
            </div>
          </motion.div>


          <motion.div 
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" relative project-parent overflow-hidden ">
            <img className="rounded-3xl" src="/GreenInJoy.webp" alt="GreenInJoy" />
            <div   className="bg-[#00000080] bottom-1 project-child justify-between items-center flex px-3 py-1 md:py-3 md:px-8  lg:py-5 lg:px-10 rounded-xl md:rounded-4xl lg:rounded-4xl left-[50%] translate-x-[-50%] w-[95%] backdrop-blur-[16px] absolute duration-800 lg:bottom-[-180]">
            <div>
              <p className="font-normal text-[#BBBBBB] text-[8px] md:text-[18px] lg:text-[18px] ">Native JS</p>
             <Link href='https://www.greeninjoy.com/' className="StoryScript hover:text-blue-500 duration-300 text-[16px] md:text-[30px] lg:text-[40px]">Green In Joy Export Company </Link>
             
             <p className="bg-[#25252580] hidden lg:block text-center w-fit  hover:shadow-[inset_0px_0px_12px_rgba(142,142,142,0.53)] duration-500 py-1  px-5 rounded-2xl">Sep 2025</p>
            </div>
             
             
             <Link href='https://www.greeninjoy.com/' className="StoryScript p-2 md:p-5 lg:p-5 rounded-sm md:rounded-2xl lg:rounded-2xl border hover:shadow-[inset_0px_0px_25px_#0076b187] hover:border-blue-500  hover:text-blue-500 border-[#888888]   duration-300 text-[40px]"><ExternalLink className="w-3 h-3 md:w-8 md:h-8 lg:w-15 lg:h-15 " /></Link>
            
            </div>
          </motion.div>
          </div>
          
          
          
         </section>
        {/* Projects sec */}

        {/* Service sec */}
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
         <div  className="bg-[#111111] py-7 md:px-[10px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
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
            <div  className="bg-[#111111] py-7 px-[5px]  my-swhover duration-500   text-center rounded-3xl col-span-6  lg:col-span-4 backdrop-blur-[36px]">
              <p className="text-[18px] md:text-[30px] text-[#cac8c8]   ">E-commerce Frontend</p>
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

         </motion.div>
         </section>


        {/* Service sec */}

        {/* Contact sec */}
        <section id="contact" className="pb-25">
        <motion.h3 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center StoryScript text-[35px] mb-10  ">Contact</motion.h3>
        <div className="grid gap-5 grid-cols-12">
         <motion.div  
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true, amount: 0.2 }}
         className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
         <IoLogoWhatsapp className="text-green-600" size={70} />
              <p className="text-[30px] md:text-[40px] StoryScript text-green-600   ">Whats App</p>
              <Link className="border border-green-600 w-[90%] text-green-600  text-[22px] rounded-xl my-swhover-wa py-2 " href='/'>Click Here</Link>

            </motion.div> 

            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
             className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <BiLogoGmail className="" size={70} />
              <p className="text-[40px] StoryScript    ">Gmail</p>
              <Link className="border  w-[90%]   text-[22px] rounded-xl my-swhover py-2 " href='/'>Click Here</Link>

            </motion.div>

            <motion.div  
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <GrDocumentText className="text-yellow-500" size={70} />
              <p className="text-[40px] StoryScript text-yellow-500   ">Cv</p>
              <Link className="border border-yellow-500 w-[90%] text-yellow-500  text-[22px] rounded-xl my-swhover-Cv py-2 " href='/'>Download</Link>

            </motion.div>

            <motion.div  
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] py-7 px-[10px] flex gap-y-5 flex-col justify-center items-center   my-sw  duration-500   text-center rounded-3xl  col-span-6 backdrop-blur-[36px]">
            <Linkedin  className="text-blue-500" size={70} />
              <p className="text-[40px] StoryScript text-blue-500   ">Linkdin</p>
              <Link className="border border-blue-500 w-[90%] text-blue-500  text-[22px] rounded-xl my-swhover-lik py-2 " href='/'>Click Here</Link>

            </motion.div>

        </div>
        

          
        </section>

 


        {/* Contact sec */}
     </div>
 
     
     
       
     

   </div>
   
   </>
  );
}
