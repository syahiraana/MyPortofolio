// src/app/page.js
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import OrganisationalExperience from '@/components/OrganisationalExperience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <OrganisationalExperience />
      <Contact />
    </main>
  )
}
