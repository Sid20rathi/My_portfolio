import React from 'react'
import { ABOUT } from '../constants'
import{motion} from "framer-motion"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

const About = () => {
  useGSAP(()=>{
    gsap.to("#data",{
      opacity:1,
      delay:2,
      duration:2,
      ease:"bounce.inOut",
      yoyo:true

    })
  },[])
  return (
    <div className ="container mx-auto" id="about">
        <motion.h2
        initial={{opacity:0 , y: -20}}
        whileInView={{opacity:1 , y: 0}}
        transition={{duration:0.5}}
        viewport={{once: true}} 
        className='mt-20 text-center text-4xl font-extrabold underline opacity-0 '>
            About

        </motion.h2>
        <motion.h3
        initial={{opacity:0 , y: -100}}
        whileInView={{opacity:1 , x: 0}}
        transition={{duration:1}}
        viewport={{once: true}} 
        className=' text-6xl uppercase lg:text-[8rem] mt-40 opacity-0'>
            I create <span className='text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0' id="data">{" "}dynamic, responsive websites{" "}</span>  that blend creativity with efficiency.

        </motion.h3>
        <motion.p 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1 , x: 0}}
        transition={{duration:1}}
        viewport={{once: true}}
        className="mr-24 pl-4 text-lg leading-loose pb-20">
            {ABOUT.text2}

        </motion.p>
    </div>
  )
}

export default About