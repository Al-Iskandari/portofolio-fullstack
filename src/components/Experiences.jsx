import {useRef} from 'react';
import { ViewPortObserver } from '../hooks/ViewPortObserver';

function Experiences() {
    const ref1 = useRef();
    const isVisible1 = ViewPortObserver(ref1);

  return (
    <section id="experiences" className={`text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">APPLIED SKILLS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Experiences</h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 md:w-2/3">
            <div className="relative mt-5 text-left">
                <div className="flex items-center relative">
                    <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 bg-amber-500 rounded-full text-center z-20">
                        <i className="fas fa-check-circle text-white"></i>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Full-Stack Developer</div>
                        <div className="italic md:mb-4">2017-2024 | Private School - Pondok Pesantren Darul Hijrah Karimun</div>
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
                                <strong>Development stack:</strong><br/>
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
                    <div className="border-r-2 border-gray-800 absolute left-1 top-2 z-10">
                        <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>
                    <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-yellow-500 z-20 text-center">
                        <i className="fas fa-check-circle text-white"></i>
                    </div>
                    <div className="ml-10">
                        <div className="font-bold">Freelance</div>
                        <div className="italic md:mb-4">anytime | anywhere</div>
                        <div className="mb-10">Utilizing leisure time to gain oppurtunity by practicing knowledge into valuable work.</div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-yellow-400 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Karimun Berazam Foundation website</div>
                                <div className="italic md:mb-4">2017 | Yayasan Karimun Berazam</div>
                                <div className="mb-10">
                                Karimun Berazam Foundation website is a profile website that is dynamically created to update the foundation&apos;s activities in the form of work agendas, photo galleries, articles and discussions.
                                    <br />
                                <strong>Development stack:</strong><br/>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Bootstrap</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-yellow-300 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Village Information Website</div>
                                <div className="italic md:mb-4">2020 | Desa Pangke Barat Karimun</div>
                                <div className="mb-10">Development of a village information system to display village potential in the agricultural, industrial and tourism sectors. Electronic village administration file download page. Coordinate mapping of village potential.
                                    <br />
                                <strong>Development stack:</strong><br/>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Bootstrap</li>
                                </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-yellow-200 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Digital Mosque Information and Prayer Schedule System</div>
                                <div className="italic md:mb-4">2025 | Tamadun</div>
                                <div className="mb-10">Development of an innovative information system in presenting mosque information digitally with more flexible access control. Provides mosque cash update features, mosque agenda and activity information, lunar calendar and Islamic holiday notifications, more real time prayer schedules, more attractive and interactive UI / UX.
                                <br />
                                <strong>Development stack:</strong><br/>
                                <ul>
                                    <li>React + Vite</li>
                                    <li>Bootstrap</li>
                                    <li>Express + Typescript</li>
                                    <li>Mysql + Sequalize</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
                            <div className="border-r-2 border-gray-800 absolute h-full left-1 top-2 z-10">
                                <i className="fas fa-circle -top-1 -ml-2 absolute" />
                            </div>
                            <div className="w-6 h-6 absolute top-1 mt-0 -ml-[7px] border-4 border-gray-800 rounded-full bg-yellow-100 z-20  text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div className="ml-10">
                                <div className="font-bold">Hydrophonic Smart Farm with ESP8266</div>
                                <div className="italic md:mb-4">2023 | Tamadun</div>
                                <div className="mb-10">
                                    Hydrophonic Smart Farm refer to Hydrophonic Farm that utilize IoT conception to make particular electronic devices can communicate simultanously using internect conectivity. It also use some sensors to deliver necessary information to automate most of Hydrophonic farming activities that formerly handled manually by the human power. 
                                <br />
                                <strong>Development stack:</strong><br/>
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

export default Experiences;
