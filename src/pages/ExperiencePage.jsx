import { Heading } from '../components/Icons'
const roles = [
  ['Full-Stack Developer — E-Learning Platform', '· Remote', 'Created a course & book marketplace with secure checkout, focused on frontend state management and backend structuring.'],
  ['Full-Stack Developer — Tiketi-Tamasha', '· Remote', 'Built the event ticketing platform end-to-end, including booking flow, payments, authentication, and backend logic.'],
  ['Delivery App', 'Project experience', 'Built and shipped a delivery app.'],
]
export default function ExperiencePage() { return <section><Heading title="Experience" kicker="Timeline"/><div className="timeline">{roles.map(([role, meta, desc]) => <article className="t-item" key={role}><div className="t-role">{role}</div><div className="t-meta">{meta}</div><div className="t-desc">{desc}</div>{role === 'Delivery App' && <a className="live-link experience-link" href="https://delivery-one-smoky.vercel.app/" target="_blank" rel="noreferrer">Open app <span aria-hidden="true">↗</span></a>}</article>)}</div></section> }
