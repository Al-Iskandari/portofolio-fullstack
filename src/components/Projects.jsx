import {useState} from 'react'
import '../assets/Animation.css';
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import UsePrevious from '../hooks/UsePrevious';
import PropTypes from 'prop-types'

function Projects(props) {
  const [itemCount, setItemCount] = useState(3);
  const {innerRef} = props;
  const isVisible2 = ViewPortObserver(innerRef);
  const prevItemCount = UsePrevious(itemCount);

  const projects = [
    { id: 1, title: 'Blog Admin Backend-express-typescript', description: 'This project represents a RESTful API built with Node.js, TypeScript and Sequelize, an ORM for interacting with databases. The framework suggests organized development, with features such as authentication, file uploads, data validation, and database migrations.',link:'https://github.com/Al-Iskandari/blog-admin-backend-express-typescript', screenshot: 'express-typescript_1.png', sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png'},
    { id: 2, title: 'Blog Admin React + Vite', description: 'Blog Admin is a web-based admin panel built using React. It includes various UI components, themes, and structured page layouts for easy customization.',link:'https://github.com/Al-Iskandari/blog-admin-frontend-react-vite', screenshot: 'Gemini_Generated_Image_r6ekf5r6ekf5r6ek-removebg-preview.png',sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png' },
    { id: 3, title: 'Warkah Semat(Sticky Notes) Pyside6 Python', description: 'Warkah Semat is another term of Sticky Notes in Malay. It is a desktop application built with Python and the PySide6 library. It allows users to create, manage, and organize notes with features such as prioritization, timers, notifications, and cloud synchronization with Google Sheets that is prepared for next development on Web Platform. The application utilizes a SQLite database for local storage and provides a system tray icon for easy access.',link:'https://github.com/Al-Iskandari/warkah-semat', screenshot: 'warkah-semat.png',sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png' },
    { id: 4, title: 'IOT smart-farm', description: 'Using an ESP8266 to control some electronic tools used in hydroponic system farms. Hardware ESP8266 Raindrop Sensor: Automating water pump based on raindrop density Ultrasonic HC-SR04 SENSOR: Detecting water level RGB Led Servo MG995R: Navigating the water circulation pipe.',link:'https://github.com/Al-Iskandari/smart-farm', screenshot: 'smart-farm.png',sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png' },
    { id: 5, title: 'Florist Online Shop', description: 'This project is a web application for a florist online store, built with React, Vite, Tailwind CSS and using Google Sheets and WhatsApp for features such as product management and customer communication.The project structure suggests a complete and well-organized web application for an online flower shop',link:'https://github.com/Al-Iskandari/fitshu_florist', screenshot: 'flower-shop.png',sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png' },
    { id: 6, title: 'Personal Portofolio', description: 'This project is a modern personal portfolio, built with React, using Vite as the build tool and styled with Tailwind CSS. The structure suggests a responsive design with animations and a focus on presenting skills, experiences and projects.',link:'https://github.com/Al-Iskandari/portofolio-fullstack', screenshot: 'portofolio.png',sourceLogo:'https://img.icons8.com/glyph-neue/64/FFFFFF/github.png' },
    { id: 7, title: 'Circle timer with CSS Animation', description: 'Simple circle timer using css animation keyframe to run circle element based on specified duration and roll all circle element along roll specified time.',link:'https://codepen.io/al-iskandari/pen/jENNXgq', screenshot: 'circle_timer_css_animation.png',sourceLogo:'https://img.icons8.com/?size=64&id=38382&format=png&color=FFFFFF' },
  ];
  const totalCount = projects.length;

  function showItems (){
      if(itemCount < totalCount){
        setItemCount(itemCount + 3);
      } else {
        setItemCount(3);
      }
  }

  console.log(prevItemCount);

  return (
    <section ref={innerRef} id="projects" className={`px-8 text-gray-700 body-font transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-[#5B456E] tracking-widest font-medium title-font mb-1">SHOWCASE</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">My Projects List</h1>
        </div>
        <div className={`flex flex-wrap -m-4 `}>
          {projects.slice(0,itemCount).map((project, index) => (
          <div key={index} className={`${itemCount} p-4 md:w-1/2 lg:w-1/3 ${(index > (itemCount-4))?"show-more":""}`}>
            <div className="flex relative rounded-lg h-full bg-[#5B456E] p-8 flex-col overflow-clip">
              <span className="shadow-xl -left-16 -top-16 absolute w-32 h-32 bg-[#3e9e9e] rounded-full z-10"></span>
              <div className="relative lg:max-w-lg lg:w-full xl:h-[20rem] xl:flex">
                <img className="xs:w-[13rem] x:h-[13rem] md:w-60 md:h-60 xl:w-80 xl:h-80 bg-[#5B456E] rounded-lg object-cover object-center grayscale hover:grayscale-0" alt="hero" src={`./images/${project.screenshot}`} />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#e2d488] text-[#e2d488] flex-shrink-0">
                  <img className="w-6 h-6 invert" width="64" height="64" src={project.sourceLogo} alt="source image"/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">{project.title}</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed relative text-base text-white z-10">{project.description}</p>
                <a href={project.link} className="mt-3 text-white inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <span className="shadow-xl rotate-180 absolute -right-20 -bottom-20 w-44 h-44 bg-[#d15a5a] rounded-full "></span>
            </div>
          </div>
          )) }
        </div>
        <div className="flex justify-center mt-6">
            <button className="items-center bg-[#5B456E] border-0 py-1 px-3 focus:outline-none hover:bg-[#3e9e9e] rounded text-base text-white mt-4 md:mt-0" onClick={showItems}>{(itemCount < totalCount)?"Show More":"Show Less"}</button>
        </div>
      </div>
    </section>

  )
}

Projects.propTypes = {
  innerRef: PropTypes.shape({current: PropTypes.any}),
}

export default Projects