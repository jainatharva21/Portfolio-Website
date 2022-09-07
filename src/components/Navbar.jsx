import styles from "../style"
import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu, logo } from '../assets'



const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return(
        <nav className = "w-full flex py-6 justify-between items-center">
            <img src = {logo} alt = "commandLine" className = "w-[50px] h-[50px] m-2"/>
                <span className = {`${styles.navbarHeading} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600`}>AJ</span>
            <ul className = "list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map ((nav, index) => (
                    <li key = {nav.id} className = {`font-poppins font-normal cursor-pointer text-[16px]
                     ${active === nav.title ? "text-white" : "text-dimWhite"} 
                     ${index === navLinks.length -1 ? "mr-4" : "mr-10"}`}
                     onClick = {() => setActive(nav.title)}>
                         <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className = "sm:hidden flex flex-1 justify-end items-center">
                <img src = {toggle ? close : menu} alt = "menu"
                 className = "w-[28px] h-[28px] object-contain mr-3"
                 onClick = {() => setToggle((prev) => !prev)}/>
                
                <div className = {`${toggle ? "flex" : "hidden"} p-6 bg-gradient-to-r from-blue-500 to-purple-500 absolute mx-4 my-2 top-20 right-10 min-w-[140px] rounded-xl sidebar`}>
                    <ul className = "list-none flex justify-end items-center flex-1 flex-col">
                        {navLinks.map ((nav,index) => (
                            <li key = {nav.id} className = {`font-poppins font-semibold text-[15px] cursor-pointer transition ease-linear
                            ${active === nav.title ? "text-indigo-800" : "text-white"}
                            ${index === navLinks.length -1 ? "mr-0" : "mb-4"}`}
                            onClick = {() => setActive(nav.title)}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}
export default Navbar
