import  { useState } from 'react'
import '../assets/HeaderStyle.css';

function Header() {
  const [classOpen, toggleClassOpen] = useState('');
  const [classNav, toggleClassNav] = useState('hidden');

  function navToggle() {
      classOpen ? toggleClassOpen('') : toggleClassOpen('open');
      classNav.includes('hidden') ? toggleClassNav('flex') : toggleClassNav('hidden');
  }

  return (
    <header className="w-full flex flex-col fixed bg-white pin-t pin-r pin-l fixed top-0 left-0 right-0 mb-[60px] z-30">
      <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-blue-500">
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-0" href="https://klklkl.com" target="_blank">
            <img className="w-10 h-10 text-white" width="100px" height="100px" src="./images/favicon.png" />
            <span className="ml-3 text-xl">Joni Iskandar</span>
          </a>
          <button id="menuBtn" className={`${classOpen} hamburger block sm:hidden focus:outline-none`} type="button" onClick={navToggle}>
            <span className="hamburger__top-bun" /><span className="hamburger__bottom-bun" />
          </button>
        </div>
        <div id="menu" className={`${classNav} w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0`}>
          <a className="text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#about">About Me</a>
          <a className="text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#projects">Projects</a>
          <a className="text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#skills">Skills</a>
          <a className="text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#education">Education</a>
          <a className="text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#experiences">Experiences</a>
          <div className="flex flex-row">  
            <button className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="github"/>
            </button>
            <button className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/?size=64&id=38382&format=png&color=FFFFFF" alt="codepen"/>
            </button>
            <button className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/?size=64&id=8808&format=png&color=FFFFFF" alt="linkedin"/>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header