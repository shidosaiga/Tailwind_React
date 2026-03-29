import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans ">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <LoginForm /> */}
    </div>
  )
}
