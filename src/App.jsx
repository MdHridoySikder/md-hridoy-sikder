import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    // Update theme attribute on root element
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    
    // Update body class for custom CSS targeting if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Spotlight effect mouse tracker (optional enhancement)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy()
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App
