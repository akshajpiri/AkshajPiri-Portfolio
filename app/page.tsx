import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-8 px-6 text-center text-sm text-zinc-700 border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Akshaj Piri · Bangalore, India</p>
      </footer>
    </>
  )
}
