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
  { name: "Networking", img: "https://cdn-icons-png.flaticon.com/64/3482/3482167.png" }, // Network protocols
  { name: "WiFi", img: "https://static.cdnlogo.com/logos/w/69/wi-fi.svg" }, // Wireless communication
  { name: "Sensor", img: "https://static.cdnlogo.com/logos/s/48/sensortower.svg" }, // Wireless communication
  { name: "MQTT", img: "https://cdn-icons-png.flaticon.com/64/1149/1149021.png" }, // Messaging protocol
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
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
        <section ref={innerRef} id="skills" className={`text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="container px-5 sm:py-24 py-8 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MY ARMOR</h2>
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
    <section ref={innerRef} id="skills" className={`text-gray-700 body-font border-t border-gray-200 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MY ARMOR</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Skills</h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row sm:justify-center xl:justify-between sm:gap-24 gap-4 content-center">
          <div className="circle-container mb-[60px] md:mb-[5px]" style={{width:"250px",height:"250px",marginLeft:"60px"}}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">IOT</h1>
                {iot.map((skill, index) => {
                    const angle = ((index+2) / iot.length) * (2 * Math.PI);
                    const x = 125 + 145 * Math.cos(angle);
                    const y = 125 + 140 * Math.sin(angle);
                    const isLeft = x < 150;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "right" : "left"}`}
                            style={{ left: `${x}px`, top: `${y}px` }}
                        >
                            <span>{skill.name}</span>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    );
                })}
            </div>
            <div className="circle-container mb-[60px] md:mb-[5px]">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Web Development</h1>
                {skillLists.map((skill, index) => {
                    const angle = ((index+1) / skillLists.length) * (2 * Math.PI);
                    const x = 200 + 230 * Math.cos(angle);
                    const y = 200 + 200 * Math.sin(angle);
                    const isLeft = x < 200;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "right" : "left"}`}
                            style={{ left: `${x}px`, top: `${y}px` }}
                        >
                            <span>{skill.name}</span>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    );
                })}
            </div>
            <div className="circle-container" style={{width:"200px",height:"200px",marginRight:"60px"}}>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Mobile</h1>
                {mobile.map((skill, index) => {
                    const angle = ((index+1) / mobile.length) * (2 * Math.PI);
                    const x = 100 + 130 * Math.cos(angle);
                    const y = 100 + 100 * Math.sin(angle);
                    const isLeft = x < 100;
                    return (
                        <div
                            key={index}
                            className={`skill ${isLeft ? "right" : "left"}`}
                            style={{ left: `${x}px`, top: `${y}px` }}
                        >
                            <span>{skill.name}</span>
                            <img src={skill.img} alt={skill.name} />
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