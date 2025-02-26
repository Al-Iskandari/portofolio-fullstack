import {useRef, useState} from 'react'
import '../assets/Animation.css';
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import UsePrevious from '../hooks/UsePrevious';

function Projects() {
  const [itemCount, setItemCount] = useState(3);
  const ref2 = useRef();
  const isVisible2 = ViewPortObserver(ref2);
  const prevItemCount = UsePrevious(itemCount);

  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1',link:'', screenshot: ''},
    { id: 2, title: 'Project 2', description: 'Description of Project 2',link:'', screenshot: '' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3',link:'', screenshot: '' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4',link:'', screenshot: ''},
    { id: 5, title: 'Project 5', description: 'Description of Project 5',link:'', screenshot: '' },
    { id: 6, title: 'Project 6', description: 'Description of Project 6',link:'', screenshot: '' },
    { id: 7, title: 'Project 7', description: 'Description of Project 7',link:'', screenshot: '' },
    { id: 8, title: 'Project 8', description: 'Description of Project 8',link:'', screenshot: '' },
    { id: 9, title: 'Project 9', description: 'Description of Project 9',link:'', screenshot: '' },
  ];
  const totalCount = projects.length;

  function showItems (){
      if(itemCount < totalCount){
        setItemCount(itemCount + 3);
      } else {
        setItemCount(totalCount-3);
      }
  }

  console.log(prevItemCount);

  return (
    <section ref={ref2} id="projects" className={`text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">SHOWCASE</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">My Projects List</h1>
        </div>
        <div className={`flex flex-wrap -m-4 `}>
          {projects.slice(0,itemCount).map((project, index) => (
          <div key={index} className={`${itemCount} p-4 md:w-1/3 ${(index > (itemCount-4))?"show-more":""}`}>
            <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
              <div className="lg:max-w-lg lg:w-full">
                <img className="object-cover object-center rounded" alt="hero" src="./images/Gemini_Generated_Image_r6ekf5r6ekf5r6ek-removebg-preview.png" />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="github"/>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">{project.title}</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">{project.description}</p>
                <a href="" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          )) }
        </div>
        <div className="flex justify-center mt-6">
            <button className="items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0" onClick={showItems}>{(itemCount < totalCount)?"Show More":"Show Less"}</button>
        </div>
      </div>
    </section>

  )
}

export default Projects