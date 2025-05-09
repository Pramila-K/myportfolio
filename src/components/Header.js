import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);
    const navLinkClass = `
  bg-[#2b2d77] hover:animate-pulse hover:bg-[#3a3d99] text-white py-2 px-4 rounded transition-all
`;
     return <header className="flex justify-between px-5 py-2 bg-primary ">
        <a className="font-bold text-black" href="#">Pramila</a>
        <nav className="hidden md:block">
            <ul className="flex text-white" >
                <li><a href="/"className={navLinkClass}>Home</a></li>
                <li><a href="/#about"className={navLinkClass}>About</a></li>
                <li><a href="/#projects"className={navLinkClass}>Projects</a></li>
                <li><a href="/#resume"className={navLinkClass}>Resume</a></li>
                <li><a href="/#contact"className={navLinkClass}>Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}