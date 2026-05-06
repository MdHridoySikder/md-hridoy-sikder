import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import EducationExperience from '../sections/EducationExperience'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
