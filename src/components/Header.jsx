import  { useState } from 'react'
import '../assets/HeaderStyle.css';
import PropTypes from 'prop-types'

function Header(props) {
  const {activeMenu} = props;
  const [classOpen, toggleClassOpen] = useState('');
  const [classNav, toggleClassNav] = useState('hidden');

  function navToggle() {
      classOpen ? toggleClassOpen('') : toggleClassOpen('open');
      classNav.includes('hidden') ? toggleClassNav('flex') : toggleClassNav('hidden');
  }



  return (
    <header className="w-full flex flex-col fixed bg-white pin-t pin-r pin-l fixed top-0 left-0 right-0 mb-[60px] z-30">
      <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-2 bg-[#5B456E] shadow border-t-4 border-[#d15a5a] backdrop-blur-sm">
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-0" href="/">
            <img className="w-10 h-10 text-white invert hue-rotate-[25deg]" width="100px" height="100px" src="./images/favicon.png" />
            <span className="ml-3 text-xl text-white">Joni <span className="text-[#e2d488]">Iskandar</span></span>
          </a>
          <button id="menuBtn" className={`${classOpen} hamburger block sm:hidden focus:outline-none`} type="button" onClick={navToggle}>
            <span className="hamburger__top-bun" /><span className="hamburger__bottom-bun" />
          </button>
        </div>
        <div id="menu" className={`${classNav} w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0`}>
          <a className={`text-white hover:text-[#E2D488] text-sm w-full no-underline sm:w-auto mx-2 py-2 sm:py-1 sm:pt-0 px-2 sm:px-1 rounded-e-md ${activeMenu.includes('about') ? 'border-[#E2D488] sm:border-2 sm:sm:border-l-0 border-l-4':''}`} href="#about">About Me</a>
          <a className={`text-white hover:text-[#E2D488] text-sm w-full no-underline sm:w-auto mx-2 py-2 sm:py-1 sm:pt-0 px-2 sm:px-1 rounded-e-md ${activeMenu.includes('projects') ? 'border-[#E2D488] sm:border-2 sm:sm:border-l-0 border-l-4':''}`} href="#projects">Projects</a>
          <a className={`text-white hover:text-[#E2D488] text-sm w-full no-underline sm:w-auto mx-2 py-2 sm:py-1 sm:pt-0 px-2 sm:px-1 rounded-e-md ${activeMenu.includes('skills') ? 'border-[#E2D488] sm:border-2 sm:sm:border-l-0 border-l-4':''}`} href="#skills">Skills</a>
          <a className={`text-white hover:text-[#E2D488] text-sm w-full no-underline sm:w-auto mx-2 py-2 sm:py-1 sm:pt-0 px-2 sm:px-1 rounded-e-md ${activeMenu.includes('education') ? 'border-[#E2D488] sm:border-2 sm:sm:border-l-0 border-l-4':''}`} href="#education">Education</a>
          <a className={`text-white hover:text-[#E2D488] text-sm w-full no-underline sm:w-auto mx-2 py-2 sm:py-1 sm:pt-0 px-2 sm:px-1 rounded-e-md ${activeMenu.includes('experiences') ? 'border-[#E2D488] sm:border-2 sm:sm:border-l-0 border-l-4':''}`} href="#experiences">Experiences</a>
          <div className="flex flex-row mt-4 sm:mt-0 sm:mr-2">  
            <a href="https://github.com/Al-Iskandari" className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-[#E2D488] hover:bg-[#3e9e9e] text-gray-800 hover:text-white flex-shrink-0 p-1">
              <img className="hover:invert hover:contrast-200" width="50" height="50" src="https://img.icons8.com/glyph-neue/64/3E3E3E/github.png" alt="github"/>
            </a>
            <a href="https://codepen.io/al-iskandari" className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-[#E2D488] hover:bg-[#3e9e9e] text-gray-800 hover:text-white flex-shrink-0 p-1">
              <img className="hover:invert hover:contrast-200" width="50" height="50" src="https://img.icons8.com/?size=64&id=38382&format=png&color=3E3E3E" alt="codepen"/>
            </a>
            <a href="https://linkedin.com/in/am-joni-iskandar" className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-[#E2D488] hover:bg-[#3e9e9e] text-gray-800 hover:text-white flex-shrink-0 p-1">
              <img className="hover:invert hover:contrast-200" width="50" height="50" src="https://img.icons8.com/?size=64&id=8808&format=png&color=3E3E3E" alt="linkedin"/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  activeMenu: PropTypes.string,
}

export default Header