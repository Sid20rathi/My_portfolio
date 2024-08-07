import React from 'react'
import profilePic from "../assets/siddhant.jpg"
import { PROFILE } from '../constants'
import {motion} from "framer-motion"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

const HeroSection = () => {
  useGSAP(()=>{
    gsap.to("#name",{
      opacity:1,
      y:-10,
      delay:1,
      duration:1.5,
      ease:"power1.inOut"
    
    })
    gsap.to("#new",{
      opacity:1,
      y:-10,
      delay:2,
      duration:1.5,
      ease:"power1.inOut"
    
    })
    
  },[])
  return (
    <>
    <div className="relative flex min-h-screen items-end justify-center" id="her0">
        <motion.img src ={profilePic} alt={Profiler.name} className='absolute inset-0 z1-10 h-full w-full object-cover '
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}/>
        <motion.div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}></motion.div>
        <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1}} className ="z-20 mx-4 max-w-3xl pb-20 " >
            <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl opacity-0'id="name">
                {PROFILE.name}
            </h1>
            <p className='pt-2 font-semibold opacity-0' id="new">{PROFILE.info}</p>
        </motion.div>
    </div> 
    </>
   
  )
}

export default HeroSection