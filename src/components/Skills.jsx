import { useEffect, useState } from "react";
import { ViewPortObserver } from "../hooks/ViewPortObserver";
import "../assets/SkillCircle.css";
import PropTypes from 'prop-types'

const skillLists = [
    { name: "HTML5", img: "https://cdn-icons-png.flaticon.com/64/888/888859.png" },
    { name: "CSS3", img: "https://cdn-icons-png.flaticon.com/64/888/888847.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/64/5968/5968292.png" },
    { name: "React.js", img: "https://cdn-icons-png.flaticon.com/64/1126/1126012.png" },
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/64/919/919825.png" },
    { name: "Git", img: "https://cdn-icons-png.flaticon.com/64/919/919847.png" },
    { name: "Docker", img: "https://cdn-icons-png.flaticon.com/64/919/919853.png" },
    { name: "PHP", img: "https://cdn-icons-png.flaticon.com/64/919/919830.png" },
    { name: "Laravel", img: "https://static.cdnlogo.com/logos/l/23/laravel.svg" },
    { name: "Python", img: "https://cdn-icons-png.flaticon.com/64/5968/5968350.png" },
    { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/64/919/919836.png" }
];

const iot = [
  { name: "Embedded C/C++", img: "https://cdn-icons-png.flaticon.com/64/919/919841.png" }, // Microcontroller programming
  { name: "Microcontrollers", img: "https://static.cdnlogo.com/logos/a/17/arduino.svg" }, // Arduino, ESP32
  { name: "Networking", img: "./images/network-topology.png" }, // Network protocols
  { name: "WiFi", img: "https://static.cdnlogo.com/logos/w/69/wi-fi.svg" }, // Wireless communication
  { name: "Sensor", img: "https://static.cdnlogo.com/logos/s/48/sensortower.svg" }, // Wireless communication
  { name: "MQTT", img: "https://mqtt.org/favicon-32x32.png" }, // Messaging protocol
  { name: "Linux", img: "https://static.cdnlogo.com/logos/l/11/linux.svg" }, // Operating system
];

const mobile = [
  { name: "Flutter", img: "https://static.cdnlogo.com/logos/f/97/flutter.svg" }, // Android, iOS
  { name: "Kotlin", img: "https://static.cdnlogo.com/logos/k/76/kotlin.svg" }, // Android, iOS
  { name: "Java", img: "https://static.cdnlogo.com/logos/j/2/java.svg" }, // Android, iOS
  { name: "Android Studio", img: "https://static.cdnlogo.com/logos/a/36/android-studio.svg" }, // iOS
];

const Skills = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const {innerRef} = props;
    const isVisible1 = ViewPortObserver(innerRef);
    const borderColor = ["#3e9e9e","#d15a5a","#e2d488"];
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
        <section ref={innerRef} id="skills" className={`px-8 text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="container px-5 sm:py-24 py-8 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-[#5B456E] tracking-widest font-medium title-font mb-1">MY ARMOR</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Skills</h1>
              </div>
              <div className="flex flex-wrap flex-col md:flex-row md:justify-between gap-4 content-center">
                <div ref={innerRef} className="list-container">
                    <button className="inline-flex items-center bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0">
                        Web Development
                    </button>
                    {skillLists.map((skill, index) => (
                        <div key={index} className="list-item">
                            <img src={skill.img} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                    <button className="inline-flex items-center bg-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0">
                        Iot
                    </button>
                    {iot.map((skill, index) => (
                        <div key={index} className="list-item">
                            <img src={skill.img} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                    <button className="inline-flex items-center bg-emerald-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0">
                        Mobile Dev
                    </button>
                    {mobile.map((skill, index) => (
                        <div key={index} className="list-item">
                            <img src={skill.img} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
              </div>
           </div>
        </section>
        );
    }
  return (
    <section ref={innerRef} id="skills" className={`px-8 text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <svg className="absolute" id="wave" style={{transform: 'rotate(180deg)translate(-0px, 5px)', transition: '0.3s'}} viewBox="0 0 1440 310" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path style={{opacity:1}} fill="#fff" d="M0,248L20,237.7C40,227,80,207,120,191.2C160,176,200,165,240,139.5C280,114,320,72,360,67.2C400,62,440,93,480,108.5C520,124,560,124,600,103.3C640,83,680,41,720,36.2C760,31,800,62,840,62C880,62,920,31,960,25.8C1000,21,1040,41,1080,77.5C1120,114,1160,165,1200,165.3C1240,165,1280,114,1320,108.5C1360,103,1400,145,1440,180.8C1480,217,1520,248,1560,253.2C1600,258,1640,238,1680,201.5C1720,165,1760,114,1800,98.2C1840,83,1880,103,1920,93C1960,83,2000,41,2040,67.2C2080,93,2120,186,2160,196.3C2200,207,2240,134,2280,129.2C2320,124,2360,186,2400,196.3C2440,207,2480,165,2520,149.8C2560,134,2600,145,2640,155C2680,165,2720,176,2760,186C2800,196,2840,207,2860,211.8L2880,217L2880,310L2860,310C2840,310,2800,310,2760,310C2720,310,2680,310,2640,310C2600,310,2560,310,2520,310C2480,310,2440,310,2400,310C2360,310,2320,310,2280,310C2240,310,2200,310,2160,310C2120,310,2080,310,2040,310C2000,310,1960,310,1920,310C1880,310,1840,310,1800,310C1760,310,1720,310,1680,310C1640,310,1600,310,1560,310C1520,310,1480,310,1440,310C1400,310,1360,310,1320,310C1280,310,1240,310,1200,310C1160,310,1120,310,1080,310C1040,310,1000,310,960,310C920,310,880,310,840,310C800,310,760,310,720,310C680,310,640,310,600,310C560,310,520,310,480,310C440,310,400,310,360,310C320,310,280,310,240,310C200,310,160,310,120,310C80,310,40,310,20,310L0,310Z" />
      </svg>

      <div className="container px-5 py-24 mx-auto relative z-10">
        <div className="flex flex-col text-center w-full mb-28">
          <h2 className="text-xs text-[#5B456E] tracking-widest font-medium title-font mb-1">MY ARMOR</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Skills</h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row sm:justify-center xl:justify-center sm:gap-[8rem] gap-4 content-center">
          <div className="circle-container mb-[60px] md:mb-[5px]" style={{width:"250px",height:"250px",marginLeft:"60px"}}>
          <span className="circle-container-cap"></span>
          <h1 className="sm:text-3xl text-2xl font-medium title-font z-10 text-gray-700">IOT</h1>
                {iot.map((skill, index) => {
                    const angle = ((index+2) / iot.length) * (1.5 * Math.PI);
                    const x = 98 + 165 * Math.cos(angle);
                    const y = 103 + 180 * Math.sin(angle);
                    const isLeft = x < 150;
                    const xouter = 15 - 40 * Math.cos(angle);
                    const youter = 15 - 40 * Math.sin(angle);
                    const isOuterLeft= xouter < 100;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "right" : "left"}`}
                            style={{ left: `${x}px`, top: `${y}px`,borderColor:`${borderColor[index%borderColor.length]}`}}
                            title={skill.name}
                            
                        >
                            <span></span>
                            <span className={`circleOuter ${isOuterLeft ? "right" : "left"}`} style={{left: `${xouter}px`, top: `${youter}px`,borderColor:`#212424`, background:`${borderColor[index%borderColor.length]}`}}></span>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    );
                })}
            </div>
            <div className="circle-container mb-[60px] md:mb-[5px]">
            <span className="circle-container-cap"></span>
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font p-2 text-gray-700 z-10">Web Development</h1>
                {skillLists.map((skill, index) => {
                    const angle = ((index+1) / skillLists.length) * (2 * Math.PI);
                    const x = 130 + 210 * Math.cos(angle);
                    const y = 130 + 210 * Math.sin(angle);
                    const xouter = 15 - 50 * Math.cos(angle);
                    const youter = 15 - 50 * Math.sin(angle);
                    const isLeft = x < 135;
                    const isOuterLeft= xouter < 135;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "right" : "left"}`}
                            style={{ left: `${x}px`, top: `${y}px`,borderColor:`${borderColor[index%borderColor.length]}`}}
                            title={skill.name}
                            
                        >
                            <span></span>
                            <span className={`circleOuter ${isOuterLeft ? "right" : "left"}`} style={{left: `${xouter}px`, top: `${youter}px`,borderColor:`#212424`, background:`${borderColor[index%borderColor.length]}`}}></span>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    );
                })}
            </div>
            <div className="circle-container" style={{width:"200px",height:"200px",marginRight:"60px",transform:"rotate(190deg)"}}>
              <span className="circle-container-cap" style={{transform:"rotate(169deg)"}}></span>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-700 z-10 rotate-[169deg]">Mobile</h1>
                {mobile.map((skill, index) => {
                    const angle = ((index+1) / mobile.length) * (1 * Math.PI);
                    const x = 90 + 160 * Math.cos(angle);
                    const y = 100 + 130 * Math.sin(angle);
                    const isLeft = x < 100;
                    const xouter = 15 - 40 * Math.cos(angle);
                    const youter = 15 - 40 * Math.sin(angle);
                    const isOuterLeft= xouter < 100;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "left" : "right"}`}
                            style={{ left: `${x}px`, top: `${y}px`,borderColor:`${borderColor[index%borderColor.length]}`}}
                            title={skill.name}
                            
                        >
                            <span style={{transform:"rotate(169deg)"}}></span>
                            <span className={`circleOuter ${isOuterLeft ? "right" : "left"}`} style={{left: `${xouter}px`, top: `${youter}px`,borderColor:`#212424`, background:`${borderColor[index%borderColor.length]}`}}></span>
                            <img src={skill.img} alt={skill.name} style={{transform:"rotate(169deg)"}}/>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  )
}

Skills.propTypes = {
  innerRef: PropTypes.shape({current: PropTypes.any}),
}


export default Skills