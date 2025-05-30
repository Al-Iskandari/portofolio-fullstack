import 'react'
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import PropTypes from 'prop-types'

function About(props) {
  const {innerRef} = props;
  const isVisible1 = ViewPortObserver(innerRef);
  console.log(isVisible1);
  return (
    <section ref={innerRef} id="about" className={`px-8 text-gray-700 body-font mt-[50px] transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#3e3e3e]">About <span className="text-[#5B456E] underline">Me</span></h1>
        <p className="mb-8 leading-relaxed text-[#3e3e3e]">
          I have a passion for building and developing knowledge into work that benefits others. I love creating efficient and
          user-friendly solutions to complex problems. I have years of experiences providing technology support in the field of technical assistance and development of web-based and Android education administration systems.
        </p>
        <div className="pt-2 pb-11 mb-3 flex flex-wrap justify-center">
          <span className="interest-tag flex flex-wrap pl-4 pr-2 py-2 m-1 justify-center items-center text-sm font-medium rounded cursor-pointer bg-[#3e9e9e] text-white hover:bg-[#5B456E] transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            Ambient Computing Enthusiast
          </span>
          <span className="interest-tag flex flex-wrap pl-4 pr-2 py-2 m-1 justify-center items-center text-sm font-medium rounded cursor-pointer bg-[#3e9e9e] text-white hover:bg-[#5B456E] transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            Bring Back Social Interaction
          </span>
          <span className="interest-tag flex flex-wrap pl-4 pr-2 py-2 m-1 justify-center items-center text-sm font-medium rounded cursor-pointer bg-[#3e9e9e] text-white hover:bg-[#5B456E] transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            Deep Work
          </span>
          <span className="interest-tag flex flex-wrap pl-4 pr-2 py-2 m-1 justify-center items-center text-sm font-medium rounded cursor-pointer bg-[#3e9e9e] text-white hover:bg-[#5B456E] transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            Gadget is for Productivity, Not for Fun
          </span>
        </div>
        <div className="flex justify-center">
          <a href="https://drive.google.com/file/d/1LdQ1VXEDGxGplBsnXaI2Dh3hgAwsHpSs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#E2D488] border-0 py-1 px-3 focus:outline-none hover:bg-[#3e9e9e] hover:text-white rounded text-base text-gray-700 mt-4 md:mt-0">
            My Resume
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="mailto:iskandar.jn23@gmail.com" className="ml-4 inline-flex items-center bg-[#E2D488] border-0 py-1 px-3 focus:outline-none hover:bg-[#3e9e9e] hover:text-white rounded text-base text-gray-700 mt-4 md:mt-0">
            Reach Me
            <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2">
        <img className="object-cover object-center rounded" alt="hero" src="./images/softwareEngineer.svg" />
      </div>
    </div>
  </section>
  )
}

About.propTypes = {
  innerRef: PropTypes.object.isRequired
}

export default About