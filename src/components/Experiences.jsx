import 'react';
import { ViewPortObserver } from '../hooks/ViewPortObserver';
import PropTypes from 'prop-types'

function Experiences(props) {
    const {innerRef} = props;
    const isVisible1 = ViewPortObserver(innerRef);

  return (
    <section ref={innerRef} id="experiences" className={`px-8 text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-[#5B456E] tracking-widest font-medium title-font mb-1">APPLIED SKILLS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Experiences</h1>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 z-100 absolute" style={{positionArea: "center"}} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Full-Stack Developer</div>
                        <div className="italic md:mb-4"><span className="bg-[#5B456E] text-white rounded p-1 text-sm shadow-sm shadow-black">2017-2024</span> Private School - Pondok Pesantren Darul Hijrah Karimun</div>
                        <div className="mb-10">
                            Developed several web and android applications to serve all education processes and its support programs.
                            <ul className="list-disc ml-6">
                                <li>Teacher administration [Web-Base Apps]</li>
                                <li>Student assesment</li>
                                <li>Officer administration [Document-Finance-Institution Data]</li>
                                <li>Smart Canteen [Cashless transaction-RFID Card]</li>
                                <li>Digital Library</li>
                                <li>Custom students phone call [Android Apps-RFID Card]</li>
                            </ul>
                            <br />
                                <strong>Development stacks:</strong><br/>
                                <ul className="list-disc ml-7">
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>J-Query + Ajax</li>
                                    <li>Mysql</li>
                                    <li>Bootstrap</li>
                                    <li>Android-studio Java</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <div className="flex w-8 h-8 absolute top-1 mt-0 -left-[2px] bg-[#3e9e9e] rounded-full text-center z-20">
                        <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 z-100 absolute" style={{positionArea: "center"}} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Freelance</div>
                        <div className="italic md:mb-4"><span className="bg-[#3e9e9e] text-white rounded p-1 text-sm shadow-sm shadow-black">anytime</span>  anywhere</div>
                        <div className="mb-10">Utilizing leisure time to gain oppurtunity by practicing knowledge into valuable work.</div>
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
                                <div className="font-bold">Karimun Berazam Foundation website</div>
                                <div className="italic md:mb-4"><span className="bg-[#3e9e9e] text-white rounded p-1 text-sm shadow-sm shadow-black">2017</span> Yayasan Karimun Berazam</div>
                                <div className="mb-10">
                                Karimun Berazam Foundation website is a profile website that is dynamically created to update the foundation&apos;s activities in the form of work agendas, photo galleries, articles and discussions.
                                    <br />
                                <strong>Development stacks:</strong><br/>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Bootstrap</li>
                                </ul>
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
                                <div className="font-bold">Village Information Website</div>
                                <div className="italic md:mb-4"><span className="bg-[#d15a5a] text-white rounded p-1 text-sm shadow-sm shadow-black">2020</span> Desa Pangke Barat Karimun</div>
                                <div className="mb-10">Development of a village information system to display village potential in the agricultural, industrial and tourism sectors. Electronic village administration file download page. Coordinate mapping of village potential.
                                    <br />
                                <strong>Development stacks:</strong><br/>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Bootstrap</li>
                                </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#e2d488] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#e2d488] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 z-100 absolute" style={{positionArea: "center"}} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">(Backend)Digital Mosque Information and Prayer Schedule System</div>
                                <div className="italic md:mb-4"><span className="bg-[#e2d488] text-dark rounded p-1 text-sm shadow-sm shadow-black">2025</span> Tamadun</div>
                                <div className="mb-10">Development of an innovative information system in presenting mosque information digitally with more flexible access control. Provides mosque cash update features, mosque agenda and activity information, lunar calendar and Islamic holiday notifications, more real time prayer schedules, more attractive and interactive UI / UX.
                                <br />
                                <strong>Development stacks:</strong><br/>
                                <ul>
                                    <li>Express + Typescript</li>
                                    <li>Mysql + Sequalize</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-dotted border-r-[4px] border-[#3e9e9e] absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 absolute top-1 mt-0 -ml-[10px] bg-[#3e9e9e] rounded-full text-center z-20">
                                <span className="w-5 h-5 absolute block bg-white rounded-full shadow-md shadow-black" style={{positionArea: "center"}}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 z-100 absolute" style={{positionArea: "center"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Hydrophonic Smart Farm with ESP8266</div>
                                <div className="italic md:mb-4"><span className="bg-[#3e9e9e] text-white rounded p-1 text-sm shadow-sm shadow-black">2023</span> Tamadun</div>
                                <div className="mb-10">
                                    Hydrophonic Smart Farm refer to Hydrophonic Farm that utilises the concept of IoT to make particular farming tools able to communicate simultanously using internet conectivity. It also uses multiple sensors to provide necessary information to automate most of the Hydrophonic farming activities that were formerly handled manually by the human power. 
                                <br />
                                <strong>Development stacks:</strong><br/>
                                <ul>
                                    <li>NodeMCU ESP8266</li>
                                    <li>C++ Arduino</li>
                                    <li>Raindrop Sensor</li>
                                    <li>PHP</li>
                                    <li>Javascript</li>
                                    <li>Mysql</li>
                                </ul>
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

Experiences.propTypes = {
  innerRef: PropTypes.object,
};

export default Experiences;
