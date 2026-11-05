import { Heading, Mail, Pin } from '../components/Icons'
const roles = ['Junior Web Developer', 'Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Software Dev Intern', 'App Developer']
export default function ContactPage() {
  return <>
    <section><Heading title="Open to roles" kicker="Hire me"/><div className="open-card"><div className="lead">▣ Looking for</div><div className="role-tags">{roles.map(role => <span className="role-tag" key={role}>{role}</span>)}</div><div className="loc-row"><Pin/>Remote · Kenya · Global internships, freelance &amp; startup collaborations</div></div></section>
    <section><Heading title="Get in touch" kicker="Contact"/><div className="contact-card"><p>Let's build something together.</p><a className="btn btn-primary" href="mailto:mainaemmanuel855@gmail.com"><Mail/>mainaemmanuel855@gmail.com</a><a className="contact-github" href="https://github.com/Mainascode">github.com/Mainascode</a></div></section>
  </>
}
