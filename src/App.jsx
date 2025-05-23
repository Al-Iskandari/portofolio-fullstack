import { useMemo, createRef, useState, useCallback } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import { ViewPortObserver } from './hooks/ViewPortObserver'
import { debounce } from 'lodash'; // or use a custom debounce function

function App() {
  const [activeMenu, setActiveMenu] = useState("about");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menus = ["about","projects","skills","education","experiences"];
  const refsById = useMemo(() => {
    const refs = {}
    menus.forEach((menu) => {
      refs[menu] = createRef(null)
    })
    return refs
  }, [menus]);

  // Use useCallback to memoize the debounced setActiveMenu function
  const debouncedSetActiveMenu = useCallback(
    debounce((menu) => {
      setActiveMenu(menu);
    }, 100), // Adjust the delay as needed (e.g., 100ms)
    []
  );

  menus.map((menu)=>{
    const ref = refsById[menu];
    if (ref && ref.current && ViewPortObserver(ref)){
      //(activeMenu != menu) && debouncedSetActiveMenu(menu);
      setActiveMenu(menu);
    }
  });


  return (
    <div className="min-h-screen bg-white">
      <Header activeMenu={activeMenu}/>
      <main className="w-full">
        <About innerRef={refsById['about']}/>
        <Projects innerRef={refsById['projects']}/>
        <Skills innerRef={refsById['skills']}/>
        <Education innerRef={refsById['education']}/>
        <Experiences innerRef={refsById['experiences']}/>
      </main>
      <Footer />
    </div>
  )
}

export default App