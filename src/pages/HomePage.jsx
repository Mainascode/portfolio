import profilePhoto from '../assets/Profile.jpeg'
import { Github, Mail, Pin } from '../components/Icons'

export default function HomePage() {
  return <>
    <div className="avail-row"><span className="avail"><span className="dot"/>Open to remote work, globally</span></div>
    <div className="hero"><div className="hero-body"><div className="meta-row"><span className="meta-chip"><Pin/>Nairobi, Kenya</span></div><div className="cta-row"><a className="btn btn-primary" href="mailto:mainaemmanuel855@gmail.com"><Mail/>Email me</a><a className="btn btn-ghost" href="https://github.com/Mainascode"><Github/>GitHub</a></div></div></div>
    <section><div className="sec-head"><h2>Welcome</h2><span className="kicker">Home</span></div><div className="about-card"><p>Full-Stack Developer building fast, functional, and user-friendly digital solutions from Kenya.</p></div></section>
  </>
}
