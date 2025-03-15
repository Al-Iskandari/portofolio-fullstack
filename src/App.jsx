import { useMemo, createRef, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import { ViewPortObserver } from './hooks/ViewPortObserver'

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


  menus.map((menu)=>{
    if(ViewPortObserver(refsById[menu])){
      (activeMenu != menu) && setActiveMenu(menu);
    }
  });


  return (
    <div className="min-h-screen bg-white">
      <Header activeMenu={activeMenu}/>
      <main className="container mx-auto px-4 py-8">
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