import  { useEffect, useState } from 'react'
import '../assets/HeaderStyle.css';

function Header() {
  const [classOpen, toggleClassOpen] = useState('');
  const [activeMenu, setActiveMenu] = useState('about');
  const [classNav, toggleClassNav] = useState('hidden');
  const urlParams = window.location.href;

  function navToggle() {
      classOpen ? toggleClassOpen('') : toggleClassOpen('open');
      classNav.includes('hidden') ? toggleClassNav('flex') : toggleClassNav('hidden');
  }

  useEffect (()=>{
      console.log(urlParams);
    if (urlParams.includes("about")) {
      setActiveMenu('about');
    } else if (urlParams.includes("skills")) {
      setActiveMenu('skills');
    } else if (urlParams.includes("projects")) {
      setActiveMenu('projects');
    } else if (urlParams.includes("education")) {
      setActiveMenu('education');
    } else if (urlParams.includes("experiences")) {
      setActiveMenu('experiences');
    }
  },[urlParams]);


    console.log(activeMenu);

  return (
    <header className="w-full flex flex-col fixed bg-white pin-t pin-r pin-l fixed top-0 left-0 right-0 mb-[60px] z-30">
      <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-blue-500">
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-0" href="/" target="_blank">
            <img className="w-10 h-10 text-white" width="100px" height="100px" src="./images/favicon.png" />
            <span className="ml-3 text-xl">Joni Iskandar</span>
          </a>
          <button id="menuBtn" className={`${classOpen} hamburger block sm:hidden focus:outline-none`} type="button" onClick={navToggle}>
            <span className="hamburger__top-bun" /><span className="hamburger__bottom-bun" />
          </button>
        </div>
        <div id="menu" className={`${classNav} w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0`}>
          <a className={`text-dark hover:text-indigo-500 text-sm w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${activeMenu.includes('about') ? 'border-indigo-500 border-b-4':''}`} href="#about">About Me</a>
          <a className={`text-dark hover:text-indigo-500 text-sm w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${activeMenu.includes('projects') ? 'border-indigo-500 border-b-4':''}`} href="#projects">Projects</a>
          <a className={`text-dark hover:text-indigo-500 text-sm w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${activeMenu.includes('skills') ? 'border-indigo-500 border-b-4':''}`} href="#skills">Skills</a>
          <a className={`text-dark hover:text-indigo-500 text-sm w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${activeMenu.includes('education') ? 'border-indigo-500 border-b-4':''}`} href="#education">Education</a>
          <a className={`text-dark hover:text-indigo-500 text-sm w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${activeMenu.includes('experiences') ? 'border-indigo-500 border-b-4':''}`} href="#experiences">Experiences</a>
          <div className="flex flex-row">  
            <a href="https://github.com/Al-Iskandari" className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="github"/>
            </a>
            <a href="https://codepen.io/al-iskandari" className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/?size=64&id=38382&format=png&color=FFFFFF" alt="codepen"/>
            </a>
            <a href="https://linkedin.com/in/am-joni-iskandar" className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 p-1">
              <img width="64" height="64" src="https://img.icons8.com/?size=64&id=8808&format=png&color=FFFFFF" alt="linkedin"/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header