import 'react'
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import PropTypes from 'prop-types'

function About(props) {
  const {innerRef} = props;
  const isVisible1 = ViewPortObserver(innerRef);
  console.log(isVisible1);
  return (
    <section ref={innerRef} id="about" className={`px-8 text-gray-700 body-font h-screen mt-[50px] transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
    <div className="relative container mx-auto flex px-5 py-5 md:flex-row flex-col items-center z-10">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#3e3e3e]">About <span className="text-[#5B456E] underline">Me</span>
        </h1>
        <p className="mb-8 leading-relaxed text-[#3e3e3e]">
        I have a passion for building and developing knowledge into work that benefits others. I love creating efficient and
        user-friendly solutions to complex problems. I have years of experiences providing technology support in the field of technical assistance and development of web-based and Android education administration systems.
        </p>
        <div className="pt-2 pb-11 mb-3 flex flex-wrap">
          <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded cursor-pointer hover:bg-[#E2D488] hover:text-gray-700 text-white bg-[#3e9e9e] dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-300" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            AmbientComputingEnthusiast
          </span>
          <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded cursor-pointer hover:bg-[#E2D488] hover:text-gray-700 text-white bg-[#3e9e9e] dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-300" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            BringBackSocialInteraction
          </span>
          <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded cursor-pointer hover:bg-[#E2D488] hover:text-gray-700 text-white bg-[#3e9e9e] dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-300" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            DeepWork
          </span>
          <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded cursor-pointer hover:bg-[#E2D488] hover:text-gray-700 text-white bg-[#3e9e9e] dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-300" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            GadgetIsForProductivityNotForFun
          </span>
        </div>
        <div className="flex justify-center">
          <a href="https://drive.google.com/file/d/1LdQ1VXEDGxGplBsnXaI2Dh3hgAwsHpSs/view?usp=sharing" target="_blank" className="inline-flex items-center bg-[#E2D488] border-0 py-1 px-3 focus:outline-none hover:bg-[#3e9e9e] hover:text-white rounded text-base text-gray-700 mt-4 md:mt-0">My Resume
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="mailto:iskandar.jn23@gmail.com" className="ml-4 inline-flex items-center bg-[#E2D488] border-0 py-1 px-3 focus:outline-none hover:bg-[#3e9e9e] hover:text-white rounded text-base text-gray-700 mt-4 md:mt-0">Contact
          <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/>
          </svg>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="./images/Gemini_Generated_Image_r6ekf5r6ekf5r6ek-removebg-preview.png" />
      </div>
    </div>
    {/*svg className="absolute w-full bottom-[-7rem]" id="wave" style={{transform: 'translate(-32px, 0px)', transition: '0.3s'}} viewBox="0 0 1440 310" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path style={{opacity:1}} fill="#fff" d="M0,248L20,237.7C40,227,80,207,120,191.2C160,176,200,165,240,139.5C280,114,320,72,360,67.2C400,62,440,93,480,108.5C520,124,560,124,600,103.3C640,83,680,41,720,36.2C760,31,800,62,840,62C880,62,920,31,960,25.8C1000,21,1040,41,1080,77.5C1120,114,1160,165,1200,165.3C1240,165,1280,114,1320,108.5C1360,103,1400,145,1440,180.8C1480,217,1520,248,1560,253.2C1600,258,1640,238,1680,201.5C1720,165,1760,114,1800,98.2C1840,83,1880,103,1920,93C1960,83,2000,41,2040,67.2C2080,93,2120,186,2160,196.3C2200,207,2240,134,2280,129.2C2320,124,2360,186,2400,196.3C2440,207,2480,165,2520,149.8C2560,134,2600,145,2640,155C2680,165,2720,176,2760,186C2800,196,2840,207,2860,211.8L2880,217L2880,310L2860,310C2840,310,2800,310,2760,310C2720,310,2680,310,2640,310C2600,310,2560,310,2520,310C2480,310,2440,310,2400,310C2360,310,2320,310,2280,310C2240,310,2200,310,2160,310C2120,310,2080,310,2040,310C2000,310,1960,310,1920,310C1880,310,1840,310,1800,310C1760,310,1720,310,1680,310C1640,310,1600,310,1560,310C1520,310,1480,310,1440,310C1400,310,1360,310,1320,310C1280,310,1240,310,1200,310C1160,310,1120,310,1080,310C1040,310,1000,310,960,310C920,310,880,310,840,310C800,310,760,310,720,310C680,310,640,310,600,310C560,310,520,310,480,310C440,310,400,310,360,310C320,310,280,310,240,310C200,310,160,310,120,310C80,310,40,310,20,310L0,310Z" />
    </svg*/}

  </section>
  )
}

About.propTypes = {
  innerRef: PropTypes.object.isRequired
}

export default About