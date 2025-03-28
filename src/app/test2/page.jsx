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

// import "./styles.css"
import Link from "next/link";

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

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const dialogRef = useRef(null)

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })
  
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

  return (
    <div>
      <div className="hidden lg:block relative">

        <div className={`relative ${darkMode ? "bg-[#21212c] text-white" : "bg-[#F5F5F5] text-black"}`}>

          {/* Navbar */}
          <div className="navbar text-sm px-10 py-3 z-20 border-b font-bold flex justify-center gap-5 fixed w-full backdrop-blur-md">
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

          <div className="flex flex-col justify-center pt-40">

            <div className="flex flex-col gap-10">

              <div>
                  {/* aside */}
                <div className="absolute flex my-10 z-10">
                  <div className="px-4 gap-8 flex flex-col  text-lg">
                    
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">link</a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          Open Google
        </a>
                    <Link href={""}><IoLogoGithub /></Link>
                    <Link href={""}><FaFacebook /></Link>
                    <Link href={""}><FaXTwitter /></Link>

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
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><FaFigma /></div>
                          <div className="border w-fit px-1 py-1 text-2xl rounded-md"><RiTailwindCssFill /></div>
                          
                        </div>

                    </div>
                    
                  </div>

                  
                </div>
              </div>

              
              

              
              

              {/* Contact Me */}
              {/* <div className="flex w-fit">
                <button 
                  className="border px-5 py-2 rounded-sm relative"
                  onClick={() => setIsOpen(!isOpen)}  
                >
                  Contact Me
                </button>

                {isOpen && (
                  <div className="absolute bottom-full right-0 mb-2 border px-5 py-2  bg-black/30 backdrop-blur-sm rounded-lg z-30" ref={dialogRef}>

                    <form action="">
                      <div className="flex gap-5">
                        <div>
                          <label>Name</label>
                          <input type="text" className="border border-white px-2 py-1 focus:outline-none"/>
                        </div>
                        <div>
                          <label>Email</label>
                          <input type="email" className="border border-white px-2 py-1 focus:outline-none"/>
                        </div>
                      </div>
                      
                      
                      <textarea name="" id="" className="mt-5 w-72 h-52 border border-white focus:outline-none resize-none px-2 py-1"></textarea>

                      <button className="px-5 py-2 bg-purple-600 mx-4 mb-3">
                        Send
                      </button>
                    </form>

                    <div className="">
                      <button onClick={() => setIsOpen(false)} className=" px-1.5 py-0 bg-red-500 text-white rounded-full text-sm absolute right-1 top-1">
                        x
                      </button>

                    </div>
                  </div>
                )}
              </div> */}

            </div>


          </div>

          {/* Main Hero Content End */}
          

          {/* Porfolio Dialogue */}

          <div className="relative z-30">

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


                      <div className="p-5 flex flex-wrap gap-5 overflow-auto my-5 mx-5 border border-dashed">
                        <div className="w-72">

                          <div className={` w-full h-48 flex flex-col justify-center items-center rounded-lg relative hover:cursor-pointer ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"}`}>
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

          </div>

            {/* Portfolio Dialogue End */}



          {/* Services */}

          <div className="flex flex-col  my-20 py-20" id="services">
            
            <div className="my-10 flex flex-col items-center">
              <div>
                <p className={`font-semibold ${roboto.className}`}>What I Offer</p>
              </div>
              <div>
                <h2 className={`text-5xl ${ralewayFont.className}`}>My Services</h2>
              </div>
            </div>

            <div className="flex justify-center gap-5">
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

          <div className="flex flex-col my-20 py-20" id="portfolio">

            <div className="my-10 flex flex-col items-center">
              <div>
                <p className={`font-semibold ${roboto.className}`}>My Work</p>
              </div>
              <div>
                <h2 className={`text-5xl ${ralewayFont.className}`}>My Portfolio</h2>
              </div>
            </div>

            <div className="flex justify-center gap-5">

              <div className=" w-72 h-48 flex flex-col justify-center items-center rounded-lg relative hover:cursor-pointer">
                <motion.div
                  className="absolute inset-0 border border-dashed rounded-lg"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.button
                  className={`relative   p-4 w-full h-full rounded-lg border hover:cursor-pointer ${darkMode ? "bg-[#191922] text-white" : "bg-white  text-black"} `}
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: -5, y: -5 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ x: -5, y: -5}}
                  onClick={() => setIsProjectOpen(!isProjectOpen)}
                >

                  <p className={`text-2xl ${ralewayFont.className}`} >Frontend Projects</p>

                </motion.button>
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

          <a href="https://www.amazon.com">Amazon</a>
        </div>

        

      </div>






    </div>
  )
}

  