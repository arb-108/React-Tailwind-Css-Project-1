import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FlyerCard from './Components/FlyerCard'
import ScrollerBrands from './Components/ScrollerBrands'
import AdditionalCard from './Components/AdditionalCard'
import PicCard from './Components/PicCard'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import NewsCard from './Components/NewsCard'
import Section5 from './Components/Section5'
import ProjectsSection from './Components/ProjectsSection'
import Footer from './Components/Footer'
import ExperienceCard from './Components/ExperienceCard'
import BigExperience from './Components/BigExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <HeroSection/>
      {/* <FlyerCard/> */}
      <BigExperience/>
      <ExperienceCard/>
      
      <Section1/>
      <Section3/>
      <ScrollerBrands/>
      <Section2/>
      <Section4/>
      <Section5/>
      <ProjectsSection/>
      <Footer/>
      </>
  )
}

export default App
