import SideBar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"


export const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar/>
      <div className="wrapper">
        <motion.span
         initial={{
          opacity:0,
          scale:0.5
         }}
         animate={{
          opacity:1,
          scale:1
         }}

         transition={{duration:0.5}}
         >
          Deepesh Kumar Rai
          </motion.span>
        <div className="social">
        <a href=""><img src="/linkedin.png" height='50' width='50'></img></a>
        <a href=""><img src="/github.png" height='50' width='50'></img></a>
        <a href=""><img src="/twitter.png" height='50' width='50'></img></a>
        </div>
        
      </div>
    </div>
  )
}
