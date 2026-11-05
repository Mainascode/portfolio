import { useEffect, useState } from 'react'
import { Github, Mail } from './components/Icons'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import WorkPage from './pages/WorkPage'
import './App.css'

const pages = [
  { id: 'home', label: 'Home', symbol: '⌂', Component: HomePage },
  { id: 'about', label: 'About', symbol: '◌', Component: AboutPage },
  { id: 'work', label: 'Work', symbol: '▱', Component: WorkPage },
  { id: 'skills', label: 'Skills', symbol: '⚒', Component: SkillsPage },
  { id: 'experience', label: 'Experience', symbol: '◷', Component: ExperiencePage },
  { id: 'contact', label: 'Contact', symbol: '✉', Component: ContactPage },
]
const getPage = () => pages.find(page => page.id === window.location.hash.slice(1))?.id ?? 'home'

function App() {
  const [activePage, setActivePage] = useState(getPage)
  useEffect(() => {
    const syncPage = () => setActivePage(getPage())
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])
  const CurrentPage = pages.find(page => page.id === activePage)?.Component ?? HomePage

  return <main className="screen">
    <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">EM</span><span><span className="brand-name">Emmanuel Nyanjui</span><p><span className="brand-sub">Full-Stack Developer</span></p></span></a><div className="top-actions"><a className="icon-btn" href="mailto:mainaemmanuel855@gmail.com" aria-label="Email Emmanuel"><Mail/></a><a className="icon-btn" href="https://github.com/Mainascode" aria-label="GitHub profile"><Github/></a></div></header>
    <div className="page-content" key={activePage}><CurrentPage/></div>
    <footer className="foot"><b>Let's build something together.</b><br/>mainaemmanuel855@gmail.com · github.com/Mainascode</footer>
    <nav className="tab-bar" aria-label="Portfolio pages">{pages.map(page => <a className={`tab${activePage === page.id ? ' active' : ''}`} href={`#${page.id}`} key={page.id} aria-current={activePage === page.id ? 'page' : undefined}><span className="tab-pill">{page.symbol}</span>{page.label}</a>)}</nav>
  </main>
}
export default App
