import 'react';
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import PropTypes from 'prop-types'

function Education(props) {
    const { innerRef } = props;
    const isVisible1 = ViewPortObserver(innerRef);

  return (
    <section ref={innerRef} id="education" className={`px-8 text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-[#5B456E] tracking-widest font-medium title-font mb-1">LEARNING PROCESS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Education</h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 md:w-2/3">
            <div className="relative mt-5 text-left">
                <div className="flex items-center relative">
                    <div className="border-dotted border-r-[4px] border-[#5B456E] absolute h-full left-3 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -left-[2px] bg-[#5B456E] rounded-full text-center z-20">
                        <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                        <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>
                        </svg>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Bachelor of Informatic Engineering</div>
                        <div className="italic md:mb-4"><span className="bg-[#5B456E] text-white rounded p-1 text-sm shadow-sm shadow-black">2011-2016</span> Islamic State University of Sultan Syarif Kasim Riau</div>
                        <div className="mb-10">
                            <span className="bg-[#5B456E] text-white rounded p-1 text-sm shadow-sm shadow-black font-medium">Research Assistant</span> | Department of Informatic Engineering | 2015-2016
                                <ul className="ml-6 list-disc">
                                    <li className="mb-2 mt-2">Supported Vice Dean Dr.Okfalisa in research on the data classfication for Email spam detection, developing skills in data preprocessing, data processing, algorithm implementation and analysis, data training and writing IEEE standard journal.</li>
                                    <li>Completed and published a paper/International Journal in IEEE entitled <i>The application of Centroid linkage hierarchical method and Hill climbing method in comments clustering online discussion forum</i> and has been cited several times by researchers globally. 
                                        <a href="https://ieeexplore.ieee.org/document/8089247" className="flex items-center w-fit mt-4 break-all bg-[#5B456E] text-white rounded p-1 text-sm shadow-sm shadow-black">
                                            visit
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <div className="border-r-2 border-gray-800 absolute left-3 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -left-[2px] bg-[#3e9e9e] rounded-full text-center z-20">
                        <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                        <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                        </svg>

                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Online Course</div>
                        <div className="italic md:mb-4"><span className="bg-[#3e9e9e] text-white rounded p-1 text-sm shadow-sm shadow-black">Dicoding</span></div>
                        <div className="mb-10">Among the journeys and efforts to keep inline with current technology stacks, clean code paradigm, clean architecture, evolving AI.</div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#3e9e9e] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#3e9e9e] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Back-End Pemula dengan JavaScript</div>
                                <div className="italic md:mb-4">Feb 2025 - Feb 2028</div>
                                <div className="mb-10">
                                    <a href="https://www.dicoding.com/certificates/NVP75Q65RXR0" 
                                       className="bg-[#3e9e9e] hover:bg-[#5B456E] text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 block text-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#d15a5a] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#d15a5a] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Dasar AI</div>
                                <div className="italic md:mb-4">Des 2024 - Des 2027</div>
                                <div className="mb-10">
                                    <a href="https://www.dicoding.com/certificates/JLX14QMJJX72" 
                                       className="bg-[#3e9e9e] hover:bg-[#5B456E] text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 block text-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#e2d488] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#e2d488] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Dasar Pemrograman JavaScript</div>
                                <div className="italic md:mb-4">Okt 2024 - Okt 2027</div>
                                <div className="mb-10">
                                    <a href="https://www.dicoding.com/certificates/QLZ9V78OMX5D" 
                                       className="bg-[#3e9e9e] hover:bg-[#5B456E] text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 block text-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#3e9e9e] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#3e9e9e] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Memulai Pemrograman dengan Python</div>
                                <div className="italic md:mb-4">Apr 2025 - Apr 2028</div>
                                <div className="mb-10">
                                    <a href="https://www.dicoding.com/certificates/MEPJQD1KWX3V" 
                                       className="bg-[#3e9e9e] hover:bg-[#5B456E] text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 block text-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#d15a5a] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#d15a5a] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg className="w-4 h-4 z-100 absolute" style={{positionArea: "center"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Belajar Dasar Cloud dan Gen AI di AWS</div>
                                <div className="italic md:mb-4">May 2025 - May 2028</div>
                                <div className="mb-10">
                                    <a href="https://www.dicoding.com/certificates/NVP752GOVXR0" 
                                       className="bg-[#3e9e9e] hover:bg-[#5B456E] text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 block text-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
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

Education.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

export default Education;
