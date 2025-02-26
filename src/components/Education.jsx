import {useRef} from 'react';
import { ViewPortObserver } from '../hooks/ViewPortObserver';

function Education() {
    const ref1 = useRef();
    const isVisible1 = ViewPortObserver(ref1);

  return (
    <section id="education" className={`text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">LEARNING PROCESS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Education</h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 md:w-2/3">
            <div className="relative mt-5 text-left">
                <div className="flex items-center relative">
                    <div className="border-r-2 border-gray-800 absolute h-full left-3 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="w-6 h-6 absolute top-1 mt-0 ml-[1px] border-4 border-gray-800 bg-blue-500 rounded-full text-center z-20">
                        <i className="fas fa-check-circle text-white"></i>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Bachelor of Informatic Enginering</div>
                        <div className="italic md:mb-4">2011-2016 | Islamic State University of Sultan Syarif Kasim Riau</div>
                        <div className="mb-10">Among the journeys and efforts to keep inline with current technology stacks, clean code paradigm, clean architecture, evolving AI.</div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <div className="border-r-2 border-gray-800 absolute left-3 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="w-6 h-6 absolute top-1 mt-0 ml-[1px] border-4 border-gray-800 rounded-full bg-sky-500 z-20 text-center">
                        <i className="fas fa-check-circle text-white"></i>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Online Course</div>
                        <div className="italic md:mb-4">Dicoding</div>
                        <div className="mb-10">Among the journeys and efforts to keep inline with current technology stacks, clean code paradigm, clean architecture, evolving AI.</div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-sky-400 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Back-End Pemula dengan JavaScript</div>
                                <div className="italic md:mb-4">Feb 2025 - Feb 2028</div>
                                <div className="mb-10 break-all">https://www.dicoding.com/certificates/NVP75Q65RXR0</div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-sky-300 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Dasar AI</div>
                                <div className="italic md:mb-4">Des 2024 - Des 2027</div>
                                <div className="mb-10 break-all">https://www.dicoding.com/certificates/JLX14QMJJX72</div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-sky-200 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Dasar Pemrograman JavaScript</div>
                                <div className="italic md:mb-4">Okt 2024 - Okt 2027</div>
                                <div className="mb-10 break-all">https://www.dicoding.com/certificates/QLZ9V78OMX5D</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Education;
