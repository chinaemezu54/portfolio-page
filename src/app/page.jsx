"use client"
import Image from "next/image";

import { VscVscode } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaGitAlt, FaImage } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { FiMenu } from "react-icons/fi";
import { IoExit, IoExitOutline, IoMoonSharp, IoSunny  } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { TbCancel, TbWorld } from "react-icons/tb";

import { FiSend } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

import { Big_Shoulders_Display, Raleway, Roboto } from "next/font/google";
import { Big_Shoulders_Text } from "next/font/google";
import { Inter, Lato, Fira_Code } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";

import "./styles.css"
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css"

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: "500",
})
const ralewayFont2 = Raleway({
  subsets: ["latin"],
  weight: "600",
})
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
})
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
})

const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: "500",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
})


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const dialogRef = useRef(null)

  // const [darkMode, setDarkMode] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("theme") === "dark";
  //   }
  //   return false;
  // })
  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem("theme") === "dark"
  // })
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme == "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target) && !event.target.closest("a")) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  
  
    const [currentIndex, setCurrentIndex] = useState(1); // Center project index
  
    const updateIndex = (direction) => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex < 0) return projects.length - 1; // Wrap around to last project
        if (newIndex >= projects.length) return 0; // Wrap around to first project
        return newIndex;
      });
    };

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // useEffect(() => {
    //   if (isProjectOpen) {
    //     document.body.style.overflow = "hidden"
    //   } else {
    //     document.body.style.overflow = ""
    //   }

    //   return () => {
    //     document.body.style.overflow = ""
    //   }
    // }, [isProjectOpen])

    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      })
    }, [])

  return (

    <div >

      
      {/* Mobile Section */}

      <div className={`${darkMode ? "bg-[#1A1A1A] text-white" : "bg-[#F5F5F5] text-black"} lg:hidden`}>
        
        <div className="NAVBAR flex justify-end gap-10 py-4 pr-4 relative items-center">
          <div>
            <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ scale: 0.9 }} // Shrink effect on click
            initial={{ rotate: 0 }}
            animate={{ rotate: darkMode ? 180 : 0, transition: { duration: 0.4 } }} // Smooth rotation
            className=""
            >
              {darkMode ? (
                <IoSunny className="transition-all duration-300" />
              ) : (
                <IoMoonSharp className="transition-all duration-300" />
              )}
              

            </motion.button>
          </div>
          <div className="flex justify-end gap-5 relative">
            <button className="text-xl" onClick={() => setMenu(!menu)}>
              <FiMenu />
            </button>

            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full mt-2"
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    {/* Animated Menu Items (with Exit Animation) */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="relative w-40 px-4 py-1 rounded-md flex justify-center items-center text-white font-semibold border border-white/20 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 backdrop-blur-lg shadow-lg"
                    >
                      Projects
                    </motion.div>

                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="relative w-40 px-4 py-1 rounded-md flex justify-center items-center text-white font-semibold border border-white/20 bg-gradient-to-r from-white/0 to-white/20 backdrop-blur-lg shadow-lg"
                    >
                      Contact Me
                    </motion.div>
                  </div>

                  {/* Dashed Line Animation */}
                  <div className="LINE flex justify-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="border border-dashed my-3 w-16 origin-center"
                    ></motion.div>
                  </div>

                  {/* Animated Social Icons (Exit moves left) */}
                  <div className="flex justify-center gap-5 text-xl">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <FaFacebook />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <FaLinkedin />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      <IoLogoGithub />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>


        <div className="HERO mt-44 mr-5 ml-5">
          <div className="text-right relative z-20">
            <div className="relative z-20">
              <div className="">
                <h2 className={`font-bold text-lg ${ralewayFont.className}`}>EZEOBI PROSPER CHINAEMEZU</h2>
              </div>
              <div className="">
              <h2 className={`web font-bold text-7xl ${bigShoulders.className}`}>WEB DEVELOPER</h2>
              </div>
            </div>

            <div className="bg-blue-500 w-32 h-32 absolute top-5 right-32 rounded-full  z-10 blur-[7rem]">
          
            </div>
          </div>

          <div className="border border-dashed"></div>

          <div className="TOOLS flex flex-col gap-5">

            <div>
              <h2 className="py-1 mt-1 font-bold">LANGAUGES</h2>

              <div className="flex gap-2">
                <div className="border w-fit px-2 py-1">HTML</div>
                <div className="border w-fit px-2 py-1">CSS</div>
                <div className="border w-fit px-2 py-1">JavaScript</div>
              </div>
            </div>

            <div className="gap-2">
              <h2 className="py-1 font-bold">TOOLS I USE</h2>

              <div className="flex gap-2">
                
                {/* <div className="border w-fit px-2 py-2 rounded-sm">
                  <Image src="/images/vscode.png" width={30} height={30} alt="vscode"/>
                </div>
                <div className="border w-fit px-2 py-2">
                  <Image src="/images/mongodb.png" width={15} height={30} alt="mongodb"/>
                </div>
                <div className="border w-fit px-1 py-1 ">
                  <Image src="/images/nextjs.png" width={30} height={30} alt="nextjs"/>
                </div>
                <div className="border w-fit px-1 py-1 text-3xl">
                  <Image src="/images/github.png" width={30} height={30} alt="github"/>
                </div>
                <div className="border w-fit px-2 py-2 rounded-md">
                  <Image src="/images/git.png" width={30} height={30} alt="git"/>
                </div>
                <div className="border w-fit px-2 py-2 flex justify-center items-center rounded-md">
                  <Image src="/images/tailwind.png" width={30} height={30} alt="tailwind"/>
                </div>
                <div className="border w-fit px-1 py-1 text-3xl">
                  <Image src="/images/figma.png" width={30} height={30} alt="figma"/>
                </div> */}
                



                <div className="border  w-fit px-1 py-1 text-3xl"><SiMongodb /></div>
                <div className="border  w-fit px-1 py-1 text-3xl"><RiTailwindCssFill /></div>
                <div className="border  w-fit px-1 py-1 text-3xl"><IoLogoGithub /></div>
                <div className="border  w-fit px-1 py-1 text-3xl"><FaGitAlt /></div>
                <div className="border  w-fit px-1 py-1 text-3xl"><FaFigma /></div>

              </div>
                  
            </div>

        </div>
          
        </div>


        <div className="PROJECTS mt-72 px-6 relative z-20">
          <p className="font-bold text-2xl ">PROJECTS</p>

          <div className=" mt-5 pt-5 px-3 pb-4 rounded-lg  backdrop-blur-md relative">
          
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="w-36 h-24 border rounded-md bg-gray-200/20 backdrop-blur-md"></div>
              <div className="w-36 h-24 border rounded-md bg-gray-200/20 backdrop-blur-md"></div>
              <div className="w-36 h-24 border rounded-md bg-gray-200/20 backdrop-blur-md"></div>
              <div className="w-36 h-24 border rounded-md bg-gray-200/20 backdrop-blur-md"></div>
            </div>

            

            <div className="LINE flex justify-center py-4">
                <div
                  className="border w-12"
                ></div>
              </div>

            
            <div className="flex justify-center ">
              <button
                className="px-8 py-1 text-white font-semibold bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 rounded-md shadow-lg hover:scale-105 transition"
                onClick={() => setIsOpen(true)}
              >
                View More
              </button>
            </div>
          </div>

          {/* Popup Dialog */}
          <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Blur Effect */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-lg text-white z-50"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <p className="text-xl font-bold">More Projects</p>

                <div className="relative flex flex-col items-center mt-20">
                      <p className="text-2xl font-bold text-white text-center mb-5">Projects</p>
                
                      {/* Projects Container */}
                      <div className="relative w-[650px] h-[250px] flex justify-center items-center overflow-hidden">
                        {projects.map((project, index) => {
                          let position = index - currentIndex;
                
                          // Handle wrap-around scrolling
                          if (position < -1) position += projects.length;
                          if (position > 1) position -= projects.length;
                
                          return (
                            <motion.div
                              key={project.id}
                              animate={{
                                opacity: position === 0 ? 1 : 0.6,
                                scale: position === 0 ? 1.2 : 1,
                                zIndex: position === 0 ? 10 : 5,
                                x: position * 220, // Keeps center project in place
                              }}
                              transition={{ type: "spring", stiffness: 200, damping: 30 }}
                              className="absolute w-64 h-40 rounded-xl flex items-center justify-center text-white font-bold shadow-xl bg-gradient-to-r from-blue-500 to-purple-600"
                            >
                              {project.title}
                            </motion.div>
                          );
                        })}
                        
                      </div>
                      
                      <div className="border-b w-full px-4 pb-1 border-white/30 text-sm truncate flex justify-center">
                        Luxury Fashion Clothes
                      </div>
                
                      {/* Navigation Buttons */}
                      <div className="flex gap-5 mt-5">
                        <button
                          onClick={() => updateIndex(-1)}
                          className="bg-gray-800 px-4 py-2 rounded text-white"
                        >
                          <FaAngleLeft />
                        </button>
                        <button
                          onClick={() => updateIndex(1)}
                          className="bg-gray-800 px-4 py-2 rounded text-white"
                        >
                          <FaAngleRight />
                        </button>
                      </div>
                    </div>
                

                {/* Close Button */}
                <div className="flex justify-end mt-5">
                  <button
                    className="px-4 py-2 bg-red-500 rounded-md shadow-md hover:bg-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </>
          )}
          </AnimatePresence>

          
        </div>


        <div className="CONTACT mt-44 mx-5">
          <p className="font-bold">CONTACT ME</p>

          <form action="" className=" px-5 py-2">
            <div className="flex justify-center flex-col gap-5
            ">

              <div className="flex flex-col ">
                <label>Name</label>
                <input type="text" className="border  px-5 py-2 rounded-md" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input type="text" className="border  px-5 py-2 rounded-md"/>
              </div>

            </div>

              <textarea name="" id="" className="w-full h-40 border  resize-none mt-5 rounded-md px-5 py-3"></textarea>

              <div className="flex justify-center">
                <button className="w-fit relative px-8 mt-4 py-1 rounded-md flex justify-center items-center text-white font-semibold border border-white/20 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 backdrop-blur-lg shadow-lg">Send</button>
              </div>
          </form>
        </div>


        <div className="FOOTER mt-40 flex gap-5 justify-end pr-5 border-t py-2 text-sm">
          <p>Github</p>
          <p>LinkedIn</p>
        </div>

      </div>




      {/* Desktop Section */}

      <div className="hidden lg:block relative">

        <div className={`relative ${darkMode ? "bg-[#21212c] text-white" : "bg-[#F5F5F5] text-black"}`}>

          {/* Navbar */}
          <div className="navbar text-sm px-10 py-3 z-30 border-b font-bold flex justify-center gap-5 fixed w-full backdrop-blur-md">
            <div className="flex gap-5 justify-center">
              
              <button onClick={() => scrollToSection('services')} className={`${ralewayFont.className}`}>Services</button>
              <button onClick={() => scrollToSection('portfolio')} className={`${ralewayFont.className}`}>Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className={`${ralewayFont.className}`}>Contact Me</button>
              
              
            </div>

            <div className="LINE border" />

            <div>
              <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ scale: 0.9 }} // Shrink effect on click
              initial={{ rotate: 0 }}
              animate={{ rotate: darkMode ? 180 : 0, transition: { duration: 0.4 } }} // Smooth rotation
              className=""
              >
                {darkMode ? (
                  <IoSunny className="transition-all duration-300" />
                ) : (
                  <IoMoonSharp className="transition-all duration-300" />
                )}
                

              </motion.button>
          </div>
          </div>

          {/* Navbar End */}



          {/* Main Hero Content */}

          <div className="flex flex-col justify-center pt-40 relative">

            <div className="flex flex-col gap-10 relative">

              <div className="">



                  {/* aside */}

                <div className="absolute flex my-10 z-20">
                  <div className="px-4 gap-8 flex flex-col  text-lg">
                    
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                    

                  </div>

                </div>

                

                {/* Hero */}
                <div className="flex gap-5 py-5">

                  
                  <div className="NAMES flex-grow text-right  pr-4 relative">
                    
                    <div className="relative z-10">
                      <div className="">
                        <h1 className={ `font-bold text-3xl ${ralewayFont.className}`}>EZEOBI PROSPER CHINAEMEZU</h1>
                      </div>

                      <div>
                        <h2 className={`text-7xl ${bigShoulders.className}`}>FRONTEND</h2>
                      </div>

                      <div>
                        <h2 className={`text-9xl ${bigShoulders.className}`}>WEB DEVELOPER</h2>
                      </div>

                      <div className="my-projects flex z-10 justify-end">
                    
                        <button
                          className="relative flex border rounded-3xl font-semibold bg-gradient-to-r bg-blue-900 px-14 py-2 text-white items-center justify-center backdrop-blur-lg shadow-2xl hover:cursor-pointer"
                          onClick={() => setIsProjectOpen(!isProjectOpen)}
                        >
                          My Portfolio
                        </button>

                      </div>

                      {/* Porfolio Dialogue */}

                      {/* <div className="relative z-30">

                        <AnimatePresence>
                          {isProjectOpen && (
                            <motion.div 
                              initial={{ y: -20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                              className={`flex justify-center fixed inset-0 items-center backdrop-blur-2xl  ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"}`}
                            >
                              <div className=" w-full h-full py-6  flex justify-center items-center">
                                <div className="w-full h-full flex flex-col">

                                  <div className="flex justify-center">
                                    <h2 className="text-lg font-bold">PROJECT DISPLAY</h2>

                                  </div>


                                  <div className="p-5 flex flex-wrap gap-5 overflow-auto">
                                    <div className="w-72">

                                      <div className={` w-72 h-48 flex flex-col justify-center items-center rounded-lg relative hover:cursor-pointer ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}>
                                        <motion.div
                                          className={`absolute inset-0 border border-dashed rounded-lg  ${darkMode ? "bg-[#191922] text-white" : "bg-white text-black"}`}
                                          initial={{ opacity: 1 }}
                                          whileHover={{ opacity: 1 }}
                                          transition={{ duration: 0.3 }}
                                        />

                                        <motion.div
                                          className={`relative p-4 w-full h-full rounded-lg border ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}
                                          initial={{ x: 0, y: 0 }}
                                          whileHover={{ x: -5, y: -5 }}
                                          transition={{ duration: 0.3 }}
                                          whileTap={{ x: -5, y: -5}}
                                        >
                                          <p className=""><TbWorld /></p>

                                          <p className="text-lg">Web Development</p>

                                        </motion.div>
                                      </div>


                                      <div className="w-full text-black relative text-sm truncate">
                                        <p>Clothing Ecommerce Website with nextjs tailwind</p>
                                      </div>
                                    </div>

                                  </div>

                                </div>

                              </div>

                              <button className="absolute top-5 right-5 hover:cursor-pointer rounded-full" onClick={() => setIsProjectOpen(false)}>
                                <p className="text-3xl py-3 px-5">X</p>
                              </button>
                            </motion.div>
                          )}

                        </AnimatePresence>

                      </div> */}

                      {/* Portfolio Dialogue End */}

                    </div>

                    <div className="bg-blue-500 w-32 h-32 absolute top-20 right-20 rounded-full blur-[4rem]" />
                  </div>


                  <div className="lINE border-r h-56 border-dashed" /> 



                  <div className="TOOLS w-48 flex flex-col gap-5">

                    <div>
                      <p className={`font-semibold ${ralewayFont2.className}`} >Languages</p>

                      <div className="flex flex-wrap gap-1">
                        <div className={`border w-fit px-3 py-1 rounded-sm ${ralewayFont.className}`} >HTML</div>
                        <div className={`border w-fit px-3 py-1 rounded-sm ${ralewayFont.className}`} >CSS</div>
                        <div className={`border w-fit px-3 py-1 rounded-sm ${ralewayFont.className}`} >JavaScript</div>
                        {/* <div className="border w-fit px-3 py-1 rounded-sm">CSS</div>
                        <div className="border w-fit px-3 py-1 rounded-sm">JavaScript</div> */}
                      </div>
                    </div>
                    <div>
                      <p className={`font-semibold ${ralewayFont2.className}`} >Tools I Use</p>
                      
                        <div className="flex flex-wrap gap-2">
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><VscVscode /></div>
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><RiNextjsFill /></div>
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><SiMongodb /></div>
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><IoLogoGithub /></div>
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><FaGitAlt /></div>
                          {/* <div className="border w-fit px-1 py-1 text-2xl rounded-md"><FaFigma /></div> */}
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><RiTailwindCssFill /></div>
                          
                        </div>

                    </div>
                    
                  </div>

                  
                </div>
              </div>


            </div>


          </div>

          {/* Main Hero Content End */}
          

          {/* Porfolio Dialogue */}

          <div className="z-30  flex fixed">

            

            <AnimatePresence>
              {isProjectOpen && (
                <div className="fixed inset-0 backdrop-blur-xl">

                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className={`flex justify-center fixed inset-y-5 inset-x-5 items-center backdrop-blur-2xl border-2 rounded-lg  ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"}`}
                  >
                    <div className=" w-full h-full py-6  flex justify-center items-center">
                      <div className="w-full h-full flex flex-col px-10">

                        <div className="flex justify-center">
                          <h2 className={`text-2  xl font-bold ${inter.className}`}>PROJECT DISPLAY</h2>

                        </div>

                        <h2 className="text-2xl">Frontend Projects</h2>
                        <div className="p-5 flex flex-wrap gap-5 overflow-auto my-5 mx-5 border border-dashed rounded-lg">
                          
                          <div className="w-72">

                            <div className={` w-full h-48 flex flex-col justify-center items-center rounded-lg relative hover:cursor-pointer ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}>
                              <motion.div
                                className={`absolute inset-0 border border-dashed rounded-lg    ${darkMode ? "bg-[#191922] text-white" : "bg-white text-black"}`}
                                initial={{ opacity: 1 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />

                              <motion.div
                                className={`relative p-4 w-full h-full rounded-lg border ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}
                                initial={{ x: 0, y: 0 }}
                                whileHover={{ x: -5, y: -5 }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ x: -5, y: -5}}
                              >
                                <p className=""><TbWorld /></p>

                                <p className="text-lg">Web Development</p>

                              </motion.div>
                            </div>


                            <div className="w-full text-black relative text-sm truncate">
                              <p>Clothing Ecommerce Website with nextjs tailwind</p>
                            </div>
                          </div>

                        </div>

                        

                      </div>

                    </div>

                    <button className="absolute top-5 right-5 hover:cursor-pointer rounded-full" onClick={() => setIsProjectOpen(false)}>
                      <p className="text-3xl py-3 px-5">X</p>
                    </button>
                  </motion.div>
                </div>
              )}

            </AnimatePresence>

          </div>

            {/* Portfolio Dialogue End */}



          {/* Services */}

          <div className="flex flex-col  my-20 py-20" id="services">
            
            <div className="my-10 flex flex-col items-center">
              <div>
                <p 
                  data-aos="fade-up" 
                  data-aos-duration="500" 
                  data-aos-delay="200"  
                  className={`font-semibold ${roboto.className}`}>What I Offer</p>
              </div>
              <div>
                <h2 
                  data-aos="fade-up" 
                  data-aos-duration="1000" 
                  data-aos-delay="400"   
                  className={`text-5xl ${ralewayFont.className}`}>My Services</h2>
              </div>
            </div>

            <div data-aos="fade-left"
                data-aos-duration="200"  className="flex justify-center gap-5">
              <motion.div
                
                initial={{ x: 0, y: 0}}
                whileHover={{x: 0, y: -5}}
                transition={{ duration: 0.3 }}
               className={`border px-5 h-48 w-56 flex flex-col gap-5 justify-center items-start rounded-lg ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}>
                <div className="flex">
                  <p className="text-3xl text-blue-900"><TbWorld /></p>
                </div>

                <p className={`text-xl ${ralewayFont.className}`}>Web Development</p>
              </motion.div>
              
              <motion.div
                initial={{ x: 0, y: 0}}
                whileHover={{x: 0, y: -5}}
                transition={{ duration: 0.3 }}
               className={`border  px-5 py-5 w-56 h-48 flex flex-col gap-5 justify-center items-start rounded-lg ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}>
                <p className="text-3xl text-blue-900"><FaImage /></p>

                <p className={`text-xl ${ralewayFont.className}`}>Graphic Design</p>
              </motion.div>
            </div>

          </div>

          {/* Services End */}




          {/* My Portfolio */}

          <div className="flex flex-col my-20 py-20" id="portfolio" data-aos="fade" 
                  data-aos-duration="200" data-aos-delay="400">

            <div className="my-10 flex flex-col items-center">
              <div>
                <p className={`font-semibold ${roboto.className}`}>My Work</p>
              </div>
              <div>
                <h2 className={`text-5xl ${ralewayFont.className}`}>My Portfolio</h2>
              </div>
            </div>

            <div className="flex justify-center gap-5">

              <div 
                   className=" w-72 h-48 flex flex-col justify-center items-center rounded-lg relative hover:cursor-pointer">
                <motion.div
                  className="absolute inset-0 border bg-black rounded-lg"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <AnimatePresence>
                  <motion.button
                    className={`relative   p-4 w-full h-full rounded-lg border hover:cursor-pointer ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"} `}
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: -5, y: -5 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ x: -5, y: -5}}
                    
                    onClick={() => setIsProjectOpen(!isProjectOpen)}
                  >

                    <p className={`text-2xl ${ralewayFont.className}`} >Frontend Projects</p>

                  </motion.button>

                </AnimatePresence>
              </div>
              
            </div>

            <div className="flex justify-center my-5">
              <button className={`border-white text-white px-14 py-1 bg-gradient-to-r bg-blue-900 rounded-2xl hover:cursor-pointer ${ralewayFont.className}`} onClick={() => setIsProjectOpen(!isProjectOpen)}>View More</button>
            </div>

          </div>

          {/* My portfolio end */}





          {/* Contact Me */}

          <div className="flex justify-center my-20 py-20" id="contact">
            <div className="w-[50%] flex flex-col justify-center items-center px-5">

              <div>
                <p className={`text-5xl ${ralewayFont.className}`}>Contact Me</p>
              </div>

              <div className="w-full my-5">
                <form action="" className="flex flex-col gap-5 w-full">
                  
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                      <div className="flex flex-col w-[50%]">
                        <label htmlFor="" className={`font-semibold ${ralewayFont.className}`}>Name</label>
                        <input type="text" className="border px-5 py-2 w-full rounded-sm" />
                      </div>
                      <div className="flex flex-col w-[50%]">
                        <label htmlFor="" className={`font-semibold ${ralewayFont.className}`}>Email</label>
                        <input type="email" className="border px-5 py-2 rounded-sm" />
                      </div>
                    </div>

                    <div>
                      <textarea name="" id="" className="border w-full h-64 px-5 py-2 resize-none rounded-sm"></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center">
                  <button className={`border border-blue-900 hover:bg-blue-900 hover:text-white  w-fit px-14 py-1 rounded-2xl ${ralewayFont.className}}`} >Send</button>

                  </div>

                </form>
              </div>

            </div>
          </div>

          {/* Contact Me end */}


          {/* Footer */}

          <div className="border-t flex justify-center gap-5 py-2">
            <p className={`${ralewayFont.className}`}>GitHub</p>
            <p className={`${ralewayFont.className}`}>LinkedIn</p>
          </div>

        </div>

        

      </div>
      
    </div>

    
  );
}
