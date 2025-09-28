"use client"

import HomeComp from "@/components/Home/HomeComp";
import AboutComp from "@/components/About/AboutComp";
import ProjectsComp from "@/components/Projects/ProjectsComp";
import ServiceComp from "@/components/Service/ServiceComp";
import ContactComp from "@/components/Contact/ContactComp";
export default function Home() {
  

  return (
   <>
   <video className="top-0 hidden lg:block  bottom-0 left-0 right-0 w-[100%] h-[100%] object-cover   fixed z-[-15] brightness-30" src="/MainVid.webm" muted autoPlay loop></video>
   
   <div className=" w-full  overflow-hidden h-full  flex-col flex lg:flex-row  items-center ">
    <div className=" container w-[95%] md:w-[100%]  z-30 pt-20 pl-[10px] pr-[10px] lg:pl-[460px] lg:pr-[200px] text-white">
        <HomeComp/>
        <AboutComp/>
        <ProjectsComp/>
        <ServiceComp/>
        <ContactComp/>
     </div>

   </div>
   
   </>
  );
}